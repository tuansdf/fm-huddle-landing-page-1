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
      <head>
        <title>Huddle Landing Page - Frontend Mentor - Tuan Nguyen</title>
      </head>
      <body
        className={`${bodyFont.className} mx-auto max-w-screen-mobile desktop:max-w-screen-desktop`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
