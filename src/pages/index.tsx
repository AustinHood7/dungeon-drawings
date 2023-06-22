import Head from "next/head";
import Navbar from "~/components/Navbar";
import ResCarousel from "~/components/ResCarousel";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <Head>
        <title>Dungeon Drawings</title>
        <meta name="A platform to bring your imagination to life" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-linear">
        <Navbar />
        <div className="md:flex items-center justify-center">
          <div className="flex justify-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-text ">
                Welcome to
              </h1>
              <h1 className="text-accent text-6xl font-bold tracking-tight sm:text-[5rem] mt-6">Dungeon</h1>
              <h1 className="text-accent text-6xl font-bold tracking-tight sm:text-[5rem]">Drawings</h1>
              <div className="mt-10 text-text text-2xl max-w-[70%]">
                Bring your imagination to life with the power of AI
              </div>
              <Link href='/selection' passHref>
                <button className="border-accent rounded-md py-4 px-8 bg-accent text-bg mt-6 text-xl opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="md:max-w-[25%]">
            <ResCarousel />
          </div>
        </div>
        <div className="text-xl text-text pb-6">Powered by DALL-E</div>
      </main>
    </>
  );
}
