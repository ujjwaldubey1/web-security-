import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <Approach />
      </main>
      <Footer />
    </div>
  );
}
