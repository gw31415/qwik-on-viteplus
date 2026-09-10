import { component$ } from "@qwik.dev/core";
import { DocumentHeadTags, RouterOutlet, useLocation, useQwikRouter } from "@qwik.dev/router";
import { QstyleLinks } from "@qstyle/qwik/links";

import "./global.css";

export default component$(() => {
  useQwikRouter();
  const { url } = useLocation();

  /**
   * This is the root of a QwikRouter site. It contains the document's `<head>` and `<body>`. You can adjust them as you see fit.
   */

  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <DocumentHeadTags />

        {/* qstyle: 現在 route の CSS を link 配信 */}
        <QstyleLinks prefetch="hover" />

        <link rel="canonical" href={url.href} />
      </head>
      <body>
        <RouterOutlet />
      </body>
    </>
  );
});
