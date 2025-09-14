import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CryptoLoadingScreen = ({ isLoading }) => {
  useGSAP(() => {
    if (isLoading) {
      // Logo entrance animation
      gsap.from(".crypto-loading-logo", {
        scale: 0,
        rotation: 360,
        duration: 1.5,
        ease: "back.out(1.7)",
      });

      // Text entrance animation
      gsap.from(".crypto-loading-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

      // Progress bar animation
      gsap.to(".crypto-progress-bar", {
        width: "100%",
        duration: 2.5,
        ease: "power2.out",
        delay: 0.8,
      });

      // Loading percentage counter
      gsap.to(".crypto-loading-percentage", {
        textContent: "100%",
        duration: 2.5,
        ease: "power2.out",
        delay: 0.8,
        snap: { textContent: 1 },
      });

      // Floating particles animation
      gsap.from(".loading-particle", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 1,
        ease: "back.out(1.7)",
      });

      gsap.to(".loading-particle", {
        y: -20,
        rotation: 180,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="loading-particle absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Crypto Logo Animation */}
        <div className="crypto-loading-logo mb-8">
          <div className="crypto-loader">
            <div className="crypto-loader__coin" />
            <div className="crypto-loader__coin" />
            <div className="crypto-loader__coin" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="crypto-loading-text">
          <h2 className="text-5xl font-bold text-yellow-400 mb-4 crypto-glow">
            PanchCoin
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Initializing elegant digital currency...
          </p>

          {/* Progress Bar */}
          <div className="w-80 h-3 bg-slate-700 rounded-full mx-auto overflow-hidden shadow-inner">
            <div className="crypto-progress-bar h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-full shadow-lg"></div>
          </div>

          {/* Loading Percentage */}
          <div className="crypto-loading-percentage text-yellow-400 text-lg mt-6 font-mono">
            0%
          </div>

          {/* Loading dots */}
          <div className="flex justify-center mt-4 space-x-1">
            <div className="loading-dot w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            <div
              className="loading-dot w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="loading-dot w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoLoadingScreen;
