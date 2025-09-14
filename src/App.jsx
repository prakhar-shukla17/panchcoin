import CryptoHero from "./components/CryptoHero";
import CryptoAbout from "./components/CryptoAbout";
import CryptoNavbar from "./components/CryptoNavbar";
import CryptoFeatures from "./components/CryptoFeatures";
import CryptoStory from "./components/CryptoStory";
import CryptoContact from "./components/CryptoContact";
import CryptoFooter from "./components/CryptoFooter";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <CryptoNavbar />
      <CryptoHero />
      <CryptoAbout />
      <CryptoFeatures />
      <CryptoStory />
      <CryptoContact />
      <CryptoFooter />
    </main>
  );
};

export default App;
