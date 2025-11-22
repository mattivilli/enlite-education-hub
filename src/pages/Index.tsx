import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import WhoWeServe from "@/components/home/WhoWeServe";
import PrintDigital from "@/components/home/PrintDigital";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhoWeServe />
        <PrintDigital />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
