import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main>
      <Header/>
      <section className="container">
        <Hero/>
      </section>
      <section className="container">
        <StatsSection />
      </section>
      <Footer/>
    </main>
  );
}
