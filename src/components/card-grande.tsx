import Image from "next/image";

export function CardGrande() {
  return (
    <div className="flex flex-col items-center p-2 gap-4">
      <p className="text-4xl"> Sobre nós</p>
      <Image
        src={"sobre.svg"}
        width={700}
        height={50}
        alt="foto com todo mundo"
      ></Image>
      <p className="text-center mx-64">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque
        placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
        Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa
        pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
      </p>
    </div>
  );
}
