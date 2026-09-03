import type { DocumentHead } from "@qwik.dev/router";
import { component$, useSignal } from "@qwik.dev/core";

export default component$(() => {
  const state = useSignal(0);
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        <button onClick$={() => (state.value += 1)}>{state.value}</button>
        Happy coding.
      </div>
    </>
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
