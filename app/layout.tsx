import { ReactNode } from "react";
import Header from "./header";
import { bodyFont } from "/app/fonts";
import "/styles/globals.css";

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
