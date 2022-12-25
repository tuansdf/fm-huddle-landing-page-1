import Image from "next/image";
import Button from "./button";
import logo from "/public/logo.svg";

export default function Header() {
  return (
    <nav className="flex items-center justify-between p-8 lg:p-16">
      <Image alt="" src={logo} className="aspect-auto w-36 lg:w-44"></Image>
      <Button outline pill small>
        Try it free
      </Button>
    </nav>
  );
}
