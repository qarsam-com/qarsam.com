import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
      </main>
    </>
  );
}
