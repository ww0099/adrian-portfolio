/**
 * JSON-LD 注入助手 —— 纯组件(无 "use client"),可在服务端页面直接渲染。
 * 用法: <JsonLd data={{ "@type": "Person", ... }} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // 结构化数据由可信本地数据构造,非用户输入
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
