import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans text-zinc-900">
      <Header />

      <main>
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
