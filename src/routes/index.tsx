import type { DocumentHead } from "@qwik.dev/router";
import { component$ } from "@qwik.dev/core";

const sans =
  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, sans-serif';
const mono = 'ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, monospace';

export default component$(() => {
  return (
    <main
      css={{
        display: "flex",
        minHeight: "100svh",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: sans,
        background: "#f7f7f7",
        color: "#0d0d0d",
      }}
    >
      <div css={{ width: "100%", maxWidth: "560px", textAlign: "center" }}>
        <p
          css={{
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: "999px",
            border: "1px solid #e0e0e0",
            background: "#ffffff",
            fontFamily: mono,
            fontSize: "12px",
            lineHeight: "18px",
            color: "#737373",
          }}
        >
          Qwik + vite-plus + Cloudflare Workers
        </p>
        <h1
          css={{
            margin: "20px 0 0",
            fontSize: "30px",
            lineHeight: "36px",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          Qwik on vite-plus ⚡️
        </h1>
        <p
          css={{
            margin: "12px 0 0",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#737373",
          }}
        >
          最小構成のスターター。qstyle の css prop でスタイリングし、 Cloudflare Workers
          へそのままデプロイできます。
        </p>
        <div
          css={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            marginTop: "28px",
          }}
        >
          <a
            href="https://qwik.dev/"
            css={{
              padding: "10px 20px",
              borderRadius: "12px",
              background: "#0d0d0d",
              color: "#ffffff",
              fontSize: "15px",
              lineHeight: "22px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Get started
          </a>
          <a
            href="https://developers.cloudflare.com/workers/"
            css={{
              padding: "10px 20px",
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
              background: "#ffffff",
              color: "#0d0d0d",
              fontSize: "15px",
              lineHeight: "22px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Deploy to Workers
          </a>
        </div>
        <div
          css={{
            marginTop: "28px",
            padding: "16px",
            borderRadius: "16px",
            border: "1px solid #e0e0e0",
            background: "#ffffff",
            textAlign: "left",
          }}
        >
          <p
            css={{
              margin: "0",
              fontFamily: mono,
              fontSize: "13px",
              lineHeight: "20px",
              color: "#737373",
            }}
          >
            pnpm dev <span css={{ color: "#0d0d0d" }}># Workers 開発サーバー</span>
          </p>
          <p
            css={{
              margin: "8px 0 0",
              fontFamily: mono,
              fontSize: "13px",
              lineHeight: "20px",
              color: "#737373",
            }}
          >
            pnpm deploy <span css={{ color: "#0d0d0d" }}># ビルド + デプロイ</span>
          </p>
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
