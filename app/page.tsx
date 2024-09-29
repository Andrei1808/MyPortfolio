import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen  relative bg-cover bg-[url('/assets/Me.jpg')]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
      <div className="flex flex-col w-full items-center md:items-start  gap-3 z-[10] md:pl-40 px-2 md:px-0  pt-5 md:pt-20">
        <h1 className="text-[50px] text-white text-center md:text-left max-w-[500px]">
          Transforming ideas into{" "}
          <span className="text-red-500">Digital Reality</span>
        </h1>
        <p className="text-[16px] text-gray-100  mb-10 md:pb-2 max-w-[400px] text-justify">
          As a frontend developer, I transform ideas into digital reality by crafting interactive,
          dynamic interfaces that not only bring visions to life but also captivate users.
          Utilizing modern technologies and tools, I breathe life into every pixel on the screen,
          reflecting the unique essence of each project. By merging creativity with code,
          I ensure that concepts evolve into intuitive and aesthetically refined web experiences that leave a lasting impression.
          My goal is not just to visualize ideas,
          but to make the digital world accessible, engaging, and inspiring.
        </p>
        <div className="relative hidden md:block w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
          <Image
            src="/assets/rounded-text.png"
            alt="projects"
            width={160}
            height={160}
            className="slow-spin"
          />
        </div>
      </div>
    </main>
  );
}
