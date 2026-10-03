
import Hero from "@/components/Hero/Hero";
import Preloader from "@/components/Layout/Preloader";

export default function Home() {
  return (
    <>
      <Preloader initials="A & D" minDisplayTime={1500} />
      <Hero />

      <main>
      </main>

    </>
  );
}