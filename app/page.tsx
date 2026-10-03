import { Suspense } from "react";
import Hero from "@/components/Hero/Hero";
import Preloader from "@/components/Layout/Preloader";

export default function Home() {
  return (
    <>
      <Preloader initials="A & D" minDisplayTime={1500} />
      <Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#FAF8F5" }} />}>
        <Hero />
      </Suspense>

      <main>
      </main>

    </>
  );
}