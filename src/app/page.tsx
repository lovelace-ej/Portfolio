import Image from "next/image";
import { MyNavBar } from "@/components/nav-bar";
import { CardGrande } from "@/components/card-grande";
import { CardPequeno } from "@/components/card-pequeno";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full max-w-screen">
      <div id="Header">
        <div className="w-full flex flex-col">
          <MyNavBar />
          <div className="w-full -z-10 -mt-10">
            <img
              src={"https://placehold.co/1920x500/purple/white?text=Foto+massa"}
              alt="imagem background"
            ></img>
          </div>
        </div>
      </div>
      <div id="sessão 1" className="w-full">
        <CardGrande />
        <div className="flex flex-row mt-4 justify-evenly">
          <CardPequeno
            title="Missão"
            text="Our membership management software provides full automation of membership renewals and payments"
            icone="https://placehold.co/32x32/orange/white"
          />
          <CardPequeno
            title="Missão"
            text="Our membership management software provides full automation of membership renewals and payments"
            icone="https://placehold.co/32x32/orange/white"
          />
          <CardPequeno
            title="Missão"
            text="Our membership management software provides full automation of membership renewals and payments"
            icone="https://placehold.co/32x32/orange/white"
          />
        </div>
      </div>
    </main>
  );
}
