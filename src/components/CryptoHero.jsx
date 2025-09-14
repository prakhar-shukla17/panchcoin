import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import CryptoLoadingScreen from "./CryptoLoadingScreen";

gsap.registerPlugin(ScrollTrigger);

const CryptoHero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    sethasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    if (!isLoading) {
      // Main content entrance animation
      gsap.from(".crypto-main-symbol", {
        scale: 0,
        rotation: 360,
        duration: 2,
        ease: "back.out(1.7)",
      });

      gsap.from(".hero-heading", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
      });

      gsap.from("p", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from("button", {
        scale: 0,
        duration: 1,
        delay: 1,
        ease: "back.out(1.7)",
      });
    }

    // Background animation
    gsap.from(".crypto-bg-element", {
      scale: 0,
      rotation: 180,
      duration: 2,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // Floating crypto symbols
    gsap.to(".floating-crypto", {
      y: -30,
      rotation: 360,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });
  }, [isLoading]);

  const getVideoSrc = (index) => `videos/crypto-hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="crypto-bg-element absolute w-4 h-4 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`crypto-${i}`}
            className="floating-crypto absolute text-2xl text-purple-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["₿", "Ξ", "₳", "◊", "◈", "◉", "◊", "◈"][i]}
          </div>
        ))}
      </div>

      {/* Loading Screen */}
      <CryptoLoadingScreen isLoading={isLoading} />

      {/* Main content without video dependency */}
      <div className="relative z-10 h-dvh w-screen flex items-center justify-center">
        {/* Central PanchCoin animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="crypto-main-symbol text-9xl text-purple-400">◊</div>
        </div>

        {/* Main content */}
        <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center px-5">
          <h1 className="special-font hero-heading text-6xl md:text-8xl text-white mb-6">
            Panch<b>C</b>oin
          </h1>
          <p className="text-xl md:text-2xl font-robert-regular text-white/90 mb-8 max-w-2xl">
            The Future of Digital Currency <br />
            Elegant, Secure, Revolutionary
          </p>
          <Button
            id="watch-trailer"
            title="Explore PanchCoin"
            leftIcon={<TiLocationArrow />}
            containerClass="!bg-purple-400 !text-black flex-center gap-1 text-lg px-8 py-4"
          />
        </div>

        {/* Corner text */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-30 text-purple-400 text-4xl md:text-6xl">
          Panch<b>C</b>oin
        </h1>
      </div>
    </div>
  );
};

export default CryptoHero;
