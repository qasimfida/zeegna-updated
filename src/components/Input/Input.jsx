import cls from "classnames";
import { EyeIcon, EyeCloseIcon, CheckIcon } from "@/svgs/icons";
import { Fragment, useRef, useState } from "react";

export const Input = ({
  className,
  placeholder = "Input",
  type = "text",
  hasIcon = false,
  label,
  icon = null,
  iconClass = "",
  showLabel = false,
  readOnly = false,
  clipboard = false,
  ...props
}) => {
  const ref = useRef(null);
  const [text, setText] = useState("");
  const [password, setPassword] = useState(false);
  const [focus, setFocus] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const handleClick = () => {
    if (type === "password") {
      setPassword(!password);
    }
    if (type == "date") {
      onFocus();
      ref.current.click();
    }

    if (clipboard) {
      navigator.clipboard.writeText("ZXADHJSD154");
      setCodeCopied(true);
    }
  };

  const onFocus = () => {
    if (!readOnly) {
      setFocus(true);
    }
  };

  const onBlur = () => {
    setFocus(false);
  };

  const renderIcon = () =>
    password ? (
      <EyeIcon
        className=""
        onClick={() => {
          setPassword(false);
          onBlur();
        }}
      />
    ) : (
      <EyeCloseIcon
        className=""
        onClick={() => {
          setPassword(true);
          onFocus();
        }}
      />
    );

  const inputCls = cls` w-full ring-1 ring-grey-200 appearance-none focus:outline-none focus:ring-grey-500 h-11 min-h-11 max-h-11 rounded-[1.875rem] font-medium text-sm text-left text-grey-400 placeholder:font-medium placeholder:text-sm placeholder:text-grey-400 px-5 ${
    hasIcon && type !== "date" && type !== "textarea" ? "pr-10" : ""
  } `;

  if (type === "textarea") {
    return (
      <div className="w-full relative flex items-center mt-4">
        <label
          onClick={onFocus}
          className={` ml-4 text-grey-400 font-medium transition-[top] ease-in z-10 bg-white px-1  absolute ${
            text || Boolean(focus) ? " text-xs -top-2  " : "text-sm top-3  "
          }`}
        >
          {label || placeholder}
        </label>
        <textarea
          ref={ref}
          readOnly={readOnly}
          className={`${inputCls} min-h-[8rem] py-2.5 !rounded-2xl ${className}`}
          value={text}
          onFocus={onFocus}
          onBlur={onBlur}
          type={password ? "text" : type}
          onChange={(e) => setText(e.target.value)}
          {...props}
        />
      </div>
    );
  }

  return (
    <div className="w-full relative flex items-center mt-4">
      <label
        onClick={onFocus}
        className={` text-grey-400 font-medium transition-[top] ease-in duration-300 z-10 bg-white  max-h-[1.5rem]  absolute ${
          text || Boolean(focus)
            ? " ml-4 text-xs -top-2 px-1 w-auto "
            : "text-sm  px-4  w-full max-w-[calc(100%-4rem)] ml-1"
        }`}
      >
        {label || placeholder}
      </label>

      <div
        className={cls`relative w-full items-center flex z-[2] ${className}`}
      >
        <input
          ref={ref}
          readOnly={readOnly}
          className={inputCls}
          value={text}
          onFocus={onFocus}
          onBlur={onBlur}
          type={password ? "text" : type}
          onChange={(e) => setText(e.target.value)}
          {...props}
        />
        {hasIcon ? (
          <span
            className={cls`absolute pr-5 right-0 z-[1] cursor-pointer ${iconClass} `}
            onClick={handleClick}
          >
            {type === "password" ? (
              renderIcon()
            ) : clipboard && codeCopied ? (
              <CheckIcon
                className="w-4 h-4 ml-1.5 text-primary"
                aria-hidden="true"
              />
            ) : (
              icon
            )}
          </span>
        ) : null}
      </div>
    </div>
  );
};
