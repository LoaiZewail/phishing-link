import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-4 px-4 bg-white">
        <div className="flex flex-col items-center gap-6 text-center sm:text-left">
          <Image
            src="/main_logo_orange_svg.svg"
            alt="Next.js logo"
            width={200}
            height={200}
            priority
          />
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black mb-4">
            Give me your credit card information NOW
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Image
            src="/cat-gun.gif"
            alt="Next.js logo"
            width={300}
            height={300}
            priority
          />
        </div>
      </main>
    </div>
  );
}
