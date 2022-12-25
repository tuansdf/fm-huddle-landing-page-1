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
        "font-bold",
        {
          "rounded-full": pill,
          rounded: !pill,
          "border border-pink bg-white text-pink hover:border-light-pink hover:text-light-pink":
            outline,
          "bg-pink text-white drop-shadow-lg hover:bg-light-pink": !outline,
          "py-2 px-8 text-sm": small,
          "px-12 py-4 text-sm": !small,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
