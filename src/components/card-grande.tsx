import Image from "next/image";

export function CardGrande(props: {
  img: string;
  alt: string;
  title: string;
  text: string;
  direction: string;
  img_proportions: { width: number; height: number };
}) {
  switch (props.direction) {
    case "vertical":
      return (
        <div className="flex flex-col items-center p-2 gap-4">
          <p className="text-4xl">{props.title}</p>
          <Image
            src={props.img}
            width={props.img_proportions.width}
            height={props.img_proportions.height}
            alt={props.alt}
          ></Image>
          <p className="text-center mx-64">{props.text}</p>
        </div>
      );
    case "default":
      return (
        <div className="flex flex-col items-center p-2 gap-6 mt-4">
          <p className="text-4xl">{props.title}</p>
          <div className="grid grid-cols-2 grid-rows-1">
            <div className="flex justify-end mr-[5.6rem]">
              <Image
                src={props.img}
                width={props.img_proportions.width}
                height={props.img_proportions.height}
                alt={props.alt}
              ></Image>
            </div>
            <div className="flex items-center">
            <p className="text-start -ml-12 mr-[18rem] align-middle">{props.text}</p>

            </div>
            
          </div>
        </div>
      );
    case "title-text":
      return (
        <div className="flex flex-col items-center p-2 gap-6 mt-4">
          <div className="grid grid-cols-2 grid-rows-1">
            <div className="flex justify-end mr-[5.6rem]">
              <Image
                src={props.img}
                width={props.img_proportions.width}
                height={props.img_proportions.height}
                alt={props.alt}
              ></Image>
            </div>
            <div className="flex items-center">
              <p className="text-start -ml-12 mr-[18rem] align-middle gap-4 flex flex-col justify-start items-start">
                <p className="text-4xl">{props.title}</p>
                {props.text}
                <button className="rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md hover:scale-105 ease-in-out h-14 p-2 bg-purple-600">
                  <p className="mx-8 text-white">Saiba Mais</p>
                </button>
              </p>
            </div>
          </div>
        </div>
      );
  }
}
