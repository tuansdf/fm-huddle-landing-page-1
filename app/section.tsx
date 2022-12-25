import clsx from "clsx";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  theme?: "light" | "dark" | "lightblue";
  isCentered?: boolean;
  className?: string;
}

export default function Section({
  children,
  theme = "light",
  isCentered = false,
  className,
}: IProps) {
  return (
    <section
      className={clsx({
        "bg-[#00252e] text-white": theme === "dark",
        "bg-white text-black": theme === "light",
        "bg-[#f6fbff] text-black": theme === "lightblue",
        "text-center": isCentered,
      })}
    >
      <div className={clsx("mx-auto max-w-xs", className)}>{children}</div>
    </section>
  );
}
