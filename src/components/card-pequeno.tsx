/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export function CardPequeno(props: {
  icone: string;
  title: string;
  text: string;
  alt: string;
}) {
  return (
    <div className="flex flex-col p-2 max-w-48 gap-1 animate-in hover:slide-in-from-left-2 hover:scale-110 rounded-md">
      <img src={props.icone} alt={props.alt} className="w-12 h-12 mx-auto" />
      <p className="text-2xl pt-1 text-center">{props.title}</p>
      <p className="text-center text-sm">{props.text}</p>
    </div>
  );
}
