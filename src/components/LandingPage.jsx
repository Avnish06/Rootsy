
import { Header } from "./Header";
import  Hero from "./Home.jsx";
import { Footer } from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
