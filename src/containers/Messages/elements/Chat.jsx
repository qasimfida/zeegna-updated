import React from "react";
import ChatBubble from "./ChatBubble";
import cls from "classnames";

export const Chat = ({ messages }) => {
  return (
    <div className="mt-16">
      <div className="p-4 space-y-4 flex justify-center w-full">
        <div
          className={cls(
            "text-sm font-medium text-grey-400 rounded-full w-max min-w-[2rem] text-center bg-grey-2400 px-2.5 py-[1.5px]"
          )}
        >
          Wed Dec, 24
        </div>
      </div>
      <div className="p-4 space-y-4 flex flex-col">
        {messages?.map((msg, index) => (
          <ChatBubble key={index} message={msg} />
        ))}
      </div>
    </div>
  );
};
