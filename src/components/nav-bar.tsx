import Image from "next/image";
import Link from "next/link";

export function MyNavBar() {
  return (
    <div className="w-full flex flex-row justify-between z-20 text-white ">
      <Image
        src={"Frame 165.svg"}
        alt="logo da Lovelace"
        width={200}
        height={80}
      ></Image>
      <div className="p-2 flex gap-2 shadow-sm">
        <Link href="#">Home</Link>
        <Link href="#">Sobre Nós</Link>
        <Link href="#">Serviços</Link>
        <Link href="#">Contato</Link>
      </div>
    </div>
  );
}
