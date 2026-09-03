import { qwikVite } from "@qwik.dev/core/optimizer";
import { qwikRouter } from "@qwik.dev/router/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [qwikRouter(), qwikVite()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=0",
    },
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=600",
    },
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: ["eslint-plugin-qwik"],
    rules: {
      // qwik プラグイン（eslint-plugin-qwik recommended 相当）
      // valid-lexical-scope は型情報が必要なため oxlint の JS プラグインでは動作せず無効化
      // （未直列化キャプチャの検出はビルド時の qwik optimizer / 型チェックで代替）
      "qwik/valid-lexical-scope": "off",

      "qwik/use-method-usage": "error",
      "qwik/no-react-props": "error",
      "qwik/loader-location": "warn",
      "qwik/prefer-classlist": "warn",
      "qwik/jsx-no-script-url": "warn",
      "qwik/jsx-key": "warn",
      "qwik/unused-server": "error",
      "qwik/jsx-img": "warn",
      "qwik/jsx-a": "warn",
      "qwik/no-use-visible-task": "warn",
      "qwik/serializer-signal-usage": "error",
      "qwik/scope-use-task": "error",
      // use-async-top も型情報が必要なため oxlint の JS プラグインでは動作せず無効化
      "qwik/use-async-top": "off",
      "qwik/no-async-prevent-default": "warn",
      "qwik/no-await-navigate-in-use-task": "warn",
      "no-explicit-any": "off",
    },
    categories: { correctness: "warn", suspicious: "warn" },
  },
  fmt: {},
});
