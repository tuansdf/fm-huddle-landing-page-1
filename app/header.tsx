import Image from "next/image";
import Button from "./button";
import logo from "/public/logo.svg";

export default function Header() {
  return (
    <nav className="flex items-center justify-between p-8">
      <Image alt="" src={logo} height={24}></Image>
      <Button>Try it free</Button>
    </nav>
  );
}
