"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SITE } from "@/lib/data";

const FIELD =
  "w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-text-dim focus:border-accent focus:outline-none transition-colors";

export function ContactForm() {
  const t = useTranslations("Form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError(t("errors.name"));
    if (!email.trim()) return setError(t("errors.emailEmpty"));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError(t("errors.emailInvalid"));
    if (!type) return setError(t("errors.projectType"));
    if (!message.trim()) return setError(t("errors.message"));

    setError("");
    const subject = encodeURIComponent(`[项目咨询] ${type} — ${name}`);
    const body = encodeURIComponent(
      `称呼：${name}\n邮箱：${email}\n项目类型：${type}\n\n需求：\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-8" aria-label="项目咨询表单">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow mb-2 block">{t("name")}</span>
          <input
            className={FIELD}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("placeholder.name")}
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="eyebrow mb-2 block">{t("email")}</span>
          <input
            className={FIELD}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("placeholder.email")}
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow mb-2 block">{t("projectType")}</span>
        <select
          className={FIELD}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">{t("selectType")}</option>
          <option value={t("projectTypes.website")}>{t("projectTypes.website")}</option>
          <option value={t("projectTypes.miniapp")}>{t("projectTypes.miniapp")}</option>
          <option value={t("projectTypes.agent")}>{t("projectTypes.agent")}</option>
          <option value={t("projectTypes.tools")}>{t("projectTypes.tools")}</option>
          <option value={t("projectTypes.unsure")}>{t("projectTypes.unsure")}</option>
        </select>
      </label>

      <label className="block">
        <span className="eyebrow mb-2 block">{t("message")}</span>
        <textarea
          className={`${FIELD} min-h-32 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("placeholder.message")}
        />
      </label>

      {error && (
        <p role="alert" className="text-sm text-accent">
          {error}
        </p>
      )}

      <div className="flex items-center gap-6">
        <button
          type="submit"
          className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-[#0f1210] transition-colors hover:bg-accent-secondary"
        >
          {t("submit")}
        </button>
        <p className="text-xs text-text-dim">{t("mailtoHint")}</p>
      </div>
    </form>
  );
}
