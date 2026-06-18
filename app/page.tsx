import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoUsage from "./components/LogoUsage";
import ColorSection from "./components/ColorSection";
import DownloadPack from "./components/DownloadPack";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoUsage />
        <ColorSection />
        <DownloadPack />
        <Ecosystem />
      </main>
      <Footer />
    </>
  );
}
