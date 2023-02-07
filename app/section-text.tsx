import { headFont } from "/app/fonts";

interface IProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionText({ title, subtitle, className }: IProps) {
  return (
    <div className={className}>
      <h1
        className={
          headFont.className +
          " mt-16 mb-4 text-xl font-bold capitalize desktop:mb-8 desktop:text-4xl"
        }
      >
        {title}
      </h1>
      <p>{subtitle}</p>
    </div>
  );
}
