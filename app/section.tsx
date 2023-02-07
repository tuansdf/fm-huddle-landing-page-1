import clsx from "clsx";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  theme?: "light" | "dark" | "lightblue";
  className?: string;
}

export default function Section({
  children,
  theme = "light",
  className,
}: IProps) {
  return (
    <section
      className={clsx({
        "bg-dark-cyan text-white": theme === "dark",
        "bg-white text-black": theme === "light",
        "bg-pale-blue text-black": theme === "lightblue",
      })}
    >
      <div
        className={clsx(
          "mx-auto max-w-sm p-8 desktop:max-w-screen-xl",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
