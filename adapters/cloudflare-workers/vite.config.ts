import { cloudflare } from "@cloudflare/vite-plugin";
import { cloudflarePagesAdapter } from "@qwik.dev/router/adapters/cloudflare-pages/vite";
import { extendConfig } from "@qwik.dev/router/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, ({ command }) => ({
  build: {
    ssr: true,
    rolldownOptions: {
      input: ["src/entry.cloudflare-pages.tsx"],
    },
  },
  // NOTE: sharedPlugins: true は SSG の誤警告回避のため。
  // builder モードでは設定が環境ごとに再評価され plugin 実体が分岐するが、
  // Qwik アダプタの buildApp 実行フラグはクロージャ保持のため実体間で見えない。
  // patches/ の修正と併せてこの問題を解消する。
  builder: {
    sharedPlugins: true,
  },
  plugins: [
    // NOTE: 出力は dist/ + server/ の2ディレクトリ構成のままにする。
    // ssr.outDir を dist/ 配下に寄せるとサーバーバンドルが公開アセットとして
    // アップロード・静的配信される（露出＋肥大化）ためやらない。
    cloudflarePagesAdapter(),
    // Cloudflare Vite plugin は dev (serve) 専用。build には混ぜない。
    // 本番 main は dist/_worker.js だが dev 時に存在保証はないため serve 時のみ上書きする。
    ...(command === "serve"
      ? [cloudflare({ config: { main: "./src/entry.cloudflare-pages.tsx" } })]
      : []),
  ],
}));
