/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { MyNavBar } from "@/components/nav-bar";
import { CardGrande } from "@/components/card-grande";
import { CardPequeno } from "@/components/card-pequeno";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full max-w-screen ">
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
      <div id="sessão 1" className="w-full mt-2">
        <CardGrande
          img="sobre.svg"
          alt="foto com toda a equipe"
          title="Sobre nós"
          direction="vertical"
          img_proportions={{ width: 700, height: 50 }}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio."
        />
        <div className="flex flex-row mt-4 justify-evenly">
          <CardPequeno
            title="Missão"
            text="Our membership management software provides full automation of membership renewals and payments"
            alt="missão"
            icone="https://placehold.co/32x32/orange/white"
          />
          <CardPequeno
            title="Missão"
            text="Our membership management software provides full automation of membership renewals and payments"
            alt="missão"
            icone="https://placehold.co/32x32/orange/white"
          />
          <CardPequeno
            title="Missão"
            text="Our membership management software provides full automation of membership renewals and payments"
            alt="missão"
            icone="https://placehold.co/32x32/orange/white"
          />
        </div>
      </div>
      <div id="sessão 2" className="w-full mt-2">
        <CardGrande
          img="servicos.svg"
          alt="foto com toda a equipe"
          title="Serviços"
          direction="default"
          img_proportions={{ width: 600, height: 150 }}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio."
        />
        <div className="w-full flex flex-col items-center mt-8">
          <p className="text-4xl">Áreas de atuação</p>
          <p>trabalhammos com:</p>
        </div>
        <div className="flex flex-row mt-4 justify-evenly">
          <CardPequeno
            title="Missão"
            text="Our membership management software provides full automation of membership renewals and payments"
            alt="missão"
            icone="https://placehold.co/32x32/orange/white"
          />
          <CardPequeno
            title="Missão"
            text="Our membership management software provides full automation of membership renewals and payments"
            alt="missão"
            icone="https://placehold.co/32x32/orange/white"
          />
          <CardPequeno
            title="Missão"
            text="Our membership management software provides full automation of membership renewals and payments"
            alt="missão"
            icone="https://placehold.co/32x32/orange/white"
          />
        </div>
        <div className="flex flex-row mt-4 justify-evenly">
          <CardPequeno
            title="Missão"
            text="Our membership management software provides full automation of membership renewals and payments"
            alt="missão"
            icone="https://placehold.co/32x32/orange/white"
          />
          <CardPequeno
            title="Missão"
            text="Our membership management software provides full automation of membership renewals and payments"
            alt="missão"
            icone="https://placehold.co/32x32/orange/white"
          />
        </div>
      </div>
      <div id="sessão 3" className="w-full mt-8">
        <CardGrande
          img="servicos.svg"
          alt="foto com toda a equipe"
          title="O que é uma Empresa Jr?"
          direction="title-text"
          img_proportions={{ width: 600, height: 150 }}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio."
        />
      </div>
      <div
        id="Sessão do Contato"
        className="flex gap-2 mb-8 flex-col items-center mt-8"
      >
        <h1 className="text-4xl">Contato</h1>
        <p className="text-zinc-600 text-sm">Siga nossas redes sociais</p>
        <div className="flex flex-row gap-2">
          <Link href={"https://github.com/lovelace-ej"} target="blank">
            <Image
              src={"bi_github.svg"}
              alt="ícone do github"
              height={32}
              width={32}
            />
          </Link>
          <Link href={"#"} target="blank">
            <Image
              src={"Vector.svg"}
              alt="ícone do linkedin"
              height={32}
              width={32}
            />
          </Link>
          <Link href={"#"} target="blank">
            <Image
              src={"mdi_instagram.svg"}
              alt="ícone do linkedin"
              height={32}
              width={32}
            />
          </Link>
        </div>
        <p className="text-zinc-600 text-sm">lovelace@gmail.com</p>
      </div>
      <div
        id="footer"
        className="bg-[#0C0835] w-full items-center p-8 gap-8 text-white flex flex-col"
      >
        <div className="flex flex-row gap-16">
          <div className="flex flex-col items-center mt-10">
            <Image
              src={"Frame 165.svg"}
              alt="logo da Lovelace"
              width={220}
              height={180}
            ></Image>
          </div>
          <div className="flex flex-col mt-9">
            <ul className="flex flex-col gap-2">
              <li className="mb-3">
                <Link href="#">
                  <strong className="text-3xl">Companhia</strong>
                </Link>
              </li>
              <li>
                <Link className="text-lg" href="#">Sobre nós</Link>
              </li>
              <li>
                <Link className="text-lg" href="#">Serviços</Link>
              </li>
              <li>
                <Link className="text-lg" href="#">Nossos Preços</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-9">
            <strong className="text-3xl">Entre em Contato</strong>
            <div className="gap-2 flex ">
              <input
                type="text"
                className="rounded-md mt-2 h-8 focus:outline-none focus:border-red-200 bg-slate-300"
              />
              <button className="text-white rounded-md mt-2 h-8">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
