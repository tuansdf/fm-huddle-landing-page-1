import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  pill?: boolean;
  small?: boolean;
}

export default function Button({
  children,
  className,
  outline,
  pill,
  small,
}: IProps) {
  return (
    <button
      className={clsx(
        "font-bold capitalize",
        {
          "rounded-full": pill,
          rounded: !pill,
          "border border-pink bg-white text-pink shadow shadow-light-pink drop-shadow hover:border-light-pink hover:text-light-pink":
            outline,
          "bg-pink text-white drop-shadow-lg hover:bg-light-pink": !outline,
          "py-1.5 px-6 text-sm desktop:py-2 desktop:px-8": small,
          "px-12 py-3 text-sm desktop:py-4 desktop:px-16": !small,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
