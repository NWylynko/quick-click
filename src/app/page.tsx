"use client";

import { PropsWithChildren, useState } from "react";
import { format, differenceInMilliseconds } from "date-fns";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="flex flex-col md:flex-row gap-16">
        <OnClickCounter />
        <OnMouseDownCounter />
        <OnMouseUpCounter />
      </div>
    </main>
  );
}

const OnClickCounter = () => {
  const [count, setCount] = useState(100);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span>'OnClick' event</span>
      <span className="text-sm text-zinc-400">Default behavior</span>
      <span className="p-2 border rounded-md">{count}</span>
      <ButtonDebugger>
        <button
          className="py-2 px-4 border rounded-md bg-black text-white"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </ButtonDebugger>
    </div>
  );
};

const OnMouseDownCounter = () => {
  const [count, setCount] = useState(100);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span>'OnMouseDown' event</span>
      <span className="text-sm text-zinc-400">Instant increment</span>
      <span className="p-2 border rounded-md">{count}</span>
      <ButtonDebugger>
        <button
          className="py-2 px-4 border rounded-md bg-black text-white"
          type="button"
          onMouseDown={() => setCount(count + 1)}
        >
          Increment
        </button>
      </ButtonDebugger>
    </div>
  );
};

const OnMouseUpCounter = () => {
  const [count, setCount] = useState(100);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span>'OnMouseUp' event</span>
      <span className="text-sm text-zinc-400">
        Essentially the same as 'OnClick'
      </span>
      <span className="p-2 border rounded-md">{count}</span>
      <ButtonDebugger>
        <button
          className="py-2 px-4 border rounded-md bg-black text-white"
          type="button"
          onMouseUp={() => setCount(count + 1)}
        >
          Increment
        </button>
      </ButtonDebugger>
    </div>
  );
};

const ButtonDebugger = (props: PropsWithChildren) => {
  const [mouseDownTime, setMouseDownTime] = useState<Date>();
  const [mouseUpTime, setMouseUpTime] = useState<Date>();

  return (
    <div
      onMouseDown={() => {
        setMouseUpTime(undefined);
        setMouseDownTime(new Date());
      }}
      onMouseUp={() => setMouseUpTime(new Date())}
      className="flex flex-col gap-2"
    >
      {props.children}
      <span className="text-xs">
        {mouseDownTime && mouseUpTime
          ? `Click Time: ${differenceInMilliseconds(mouseUpTime, mouseDownTime)}ms`
          : "."}
      </span>
    </div>
  );
};
