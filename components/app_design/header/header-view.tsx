import React from "react";

export function HeaderView() {
  return (
    <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed pt-4 left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-zinc-800 pb-6 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-900 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Workflow&nbsp;
        <code className="font-mono font-bold">&gt; code challenge</code>
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div className="pointer-events-none flex place-items-center gap-2 p-8 pb-3 lg:pointer-events-auto lg:p-0 mr-4">
          By{" "}Darma
        </div>
      </div>
    </div>
  );
}
