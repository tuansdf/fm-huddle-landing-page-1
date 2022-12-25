import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className }: IProps) {
  return (
    <button
      className={clsx(
        "rounded-full border border-violet-300 px-6 py-1.5 text-sm sm:px-8 sm:py-2 sm:text-base",
        className
      )}
    >
      {children}
    </button>
  );
}
