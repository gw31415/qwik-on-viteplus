# Qwik on vite-plus ⚡️

Qwik（`@qwik.dev/core` / `@qwik.dev/router` 2.0.0-beta）をビルドツールとしての [vite-plus](https://github.com/voidzero-dev/vite-plus) 上で動かす、ミニマルなスターターリポジトリです。

vite-plus が dev / build / lint / fmt を兼ねるため、専用の ESLint・Prettier・Vite の設定ファイルは不要で、`vite.config.ts` 1つにすべての設定が集約されています。結果としてファイル数が非常に少なくシンプルな構成になっています。

## 特徴

- **Qwik 2.0.0-beta** + **QwikRouter** によるディレクトリベースルーティング
- **vite-plus** による統合ツールチェイン（dev / build / preview / lint / fmt / 型チェック）
- 設定ファイルは `vite.config.ts`（lint・fmt 設定含む）と `tsconfig.json` のみ
- Node 26 / pnpm 12

## プロジェクト構成

```
├── public/          # 静的アセット（favicon、manifest など）
├── server/          # プレビュー用サーバー
└── src/
    ├── root.tsx
    ├── entry.ssr.tsx
    ├── entry.preview.tsx
    ├── global.css
    └── routes/      # ディレクトリベースルーティング
```

## コマンド

```shell
pnpm install

pnpm dev            # 開発サーバー（SSR）
pnpm build          # 本番ビルド
pnpm preview        # 本番ビルドのローカルプレビュー

pnpm check          # lint（oxlint + eslint-plugin-qwik）
pnpm check.types    # TypeScript の型チェック
pnpm check.fmt      # フォーマットチェック
pnpm fmt            # フォーマット
```

## Limitations

- **Qwik / vite-plus ともにベータ版**です。破壊的な変更や挙動の変化があり得ます。特に `@qwik.dev/core` 2.0.0-beta と vite-plus 0.x の組み合わせは正式サポート構成ではないため、アップデート時に注意してください。

- **lint チェックの不具合 / 制限**：vite-plus の lint は oxlint ベースで、`eslint-plugin-qwik` は JS プラグイン（型情報なし）として実行されます。そのため**型情報を必要とする Qwik ルールは動作せず、意図的に無効化**しています（`vite.config.ts` 参照）:
  - `qwik/valid-lexical-scope` — 無効化。未直列化キャプチャの検出はできないため、ビルド時の qwik optimizer や `pnpm check.types` での代替検出に頼ることになります。
  - `qwik/use-async-top` — 同様に型情報が必要なため無効化。
  - これらの検出漏れを避けるため、**型チェック（`pnpm check.types`）を必ず併用**してください。

- `server/build/` 以下はプレビュー用のビルド成果物です。

## 参考

- [Qwik Docs](https://qwik.dev/)
- [Qwik GitHub](https://github.com/QwikDev/qwik)
- [Vite](https://vitejs.dev/)
