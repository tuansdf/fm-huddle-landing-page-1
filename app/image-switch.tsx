import Image from "next/image";

interface IProps {
  mobileSrc: string;
  desktopSrc: string;
}

export default function ImageSwitch({ mobileSrc, desktopSrc }: IProps) {
  return (
    <>
      <Image src={mobileSrc} alt="" className="w-full sm:hidden" />
      <Image src={desktopSrc} alt="" className="hidden w-full sm:block" />
    </>
  );
}
