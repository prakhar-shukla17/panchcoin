import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const CryptoAbout = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  useGSAP(() => {
    // Description section animations
    gsap.from(".description-keyword", {
      scale: 0.8,
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".description-keyword",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".description-text", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".description-text",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.fromTo(
      ".feature-card",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feature-card",
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Bitcoin section animations
    gsap.from(".bitcoin-symbol", {
      scale: 0,
      rotation: 360,
      duration: 2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".bitcoin-symbol",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".bitcoin-info", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".bitcoin-info",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Floating animation for Bitcoin symbol
    gsap.to(".bitcoin-symbol", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Price counter animation
    gsap.from(".price-value", {
      textContent: 0,
      duration: 2,
      ease: "power2.out",
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: ".price-value",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div
      id="about"
      className="min-h-screen w-screen bg-gradient-to-b from-black to-slate-900"
    >
      <div className="relative mb-8 mt-36 flex flex-col items-center justify-center gap-5 w-full">
        {/* Floating decorative elements */}
        <div className="absolute -top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-full blur-xl floating-gentle"></div>
        <div className="absolute -top-10 right-20 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-yellow-400/20 rounded-full blur-lg floating-slow"></div>
        <div className="absolute top-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-600/30 to-pink-500/30 rounded-full blur-md"></div>

        <div className="relative bg-gradient-to-br from-black/80 via-slate-900/60 to-black/80 backdrop-blur-xl rounded-3xl p-16 border-2 border-gradient-to-r from-purple-400/40 via-purple-600/40 to-blue-500/40 shadow-2xl max-w-6xl mx-auto overflow-hidden w-full">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/20 via-transparent to-purple-600/20"></div>
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-gradient-to-t from-purple-400/20 to-transparent rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center w-full">
            <div className="text-center mb-16 w-full">
              {/* Enhanced Welcome Header */}
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-gradient-to-r from-purple-400/15 via-purple-300/15 to-purple-500/15 backdrop-blur-md rounded-2xl border border-purple-400/40 shadow-2xl">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg"></div>
                  <h2 className="font-general text-xl uppercase text-purple-400 font-bold tracking-widest text-center">
                    Welcome to PanchCoin
                  </h2>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-2 border-purple-400/30 rounded-full animate-spin"></div>
                <div
                  className="absolute -top-2 -right-2 w-4 h-4 border-2 border-purple-400/30 rounded-full animate-spin"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-xl border border-purple-400/20 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    $12.5B
                  </div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">
                    Market Cap
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-xl border border-purple-400/20 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    2M+
                  </div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">
                    Active Users
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-xl border border-purple-400/20 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">
                    Uptime
                  </div>
                </div>
              </div>
            </div>

            {/* Main Title Section */}
            <div className="mb-20 w-full flex justify-center">
              <div className="w-full max-w-6xl relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-purple-600/10 to-purple-400/5 rounded-3xl blur-2xl -z-10"></div>

                <div className="relative z-10">
                  <AnimatedTitle
                    title="Disc<b>o</b>ver the world's <br /> m<b>o</b>st elegant digital currency"
                    containerClass="!text-white text-center drop-shadow-2xl"
                  />

                  {/* Subtitle */}
                  <div className="mt-8 text-center">
                    <p className="text-xl md:text-2xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed">
                      Experience the future of finance with our revolutionary
                      blockchain technology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="about-subtext space-y-16 w-full flex flex-col items-center">
              {/* Enhanced First Description */}
              <div className="text-center w-full">
                <div className="relative max-w-6xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-transparent to-purple-600/5 rounded-2xl blur-xl"></div>
                  <div className="relative p-8 bg-gradient-to-r from-black/30 via-slate-900/20 to-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
                    <p className="text-white/95 text-2xl leading-relaxed font-medium text-center mb-6">
                      The Future of Digital Currency begins -{" "}
                      <span className="relative inline-block description-keyword">
                        <span className="text-purple-400 font-bold text-3xl">
                          elegant
                        </span>
                      </span>
                      ,{" "}
                      <span className="relative inline-block description-keyword">
                        <span className="text-purple-400 font-bold text-3xl">
                          secure
                        </span>
                      </span>
                      ,{" "}
                      <span className="relative inline-block description-keyword">
                        <span className="text-purple-400 font-bold text-3xl">
                          revolutionary
                        </span>
                      </span>
                    </p>

                    {/* Enhanced Feature Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      {/* Lightning Fast Card */}
                      <div className="group text-center p-6 bg-gradient-to-br from-purple-400/15 to-purple-600/10 rounded-2xl border border-purple-400/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                        <div className="relative mb-4">
                          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                            ⚡
                          </div>
                          <div className="absolute inset-0 text-5xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300">
                            ⚡
                          </div>
                        </div>
                        <div className="text-purple-400 font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          Lightning Fast
                        </div>
                        <div className="text-white/80 text-sm leading-relaxed">
                          Instant transactions with minimal fees
                        </div>
                        <div className="mt-3 text-xs text-purple-400/60 font-semibold uppercase tracking-wider">
                          &lt; 3 seconds
                        </div>
                      </div>

                      {/* Bank-Grade Security Card */}
                      <div className="group text-center p-6 bg-gradient-to-br from-purple-400/15 to-purple-600/10 rounded-2xl border border-purple-400/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                        <div className="relative mb-4">
                          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                            🔒
                          </div>
                          <div className="absolute inset-0 text-5xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300">
                            🔒
                          </div>
                        </div>
                        <div className="text-purple-400 font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          Bank-Grade Security
                        </div>
                        <div className="text-white/80 text-sm leading-relaxed">
                          Advanced encryption and protection
                        </div>
                        <div className="mt-3 text-xs text-purple-400/60 font-semibold uppercase tracking-wider">
                          256-bit SSL
                        </div>
                      </div>

                      {/* Global Access Card */}
                      <div className="group text-center p-6 bg-gradient-to-br from-purple-400/15 to-purple-600/10 rounded-2xl border border-purple-400/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                        <div className="relative mb-4">
                          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                            🌍
                          </div>
                          <div className="absolute inset-0 text-5xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300">
                            🌍
                          </div>
                        </div>
                        <div className="text-purple-400 font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          Global Access
                        </div>
                        <div className="text-white/80 text-sm leading-relaxed">
                          Available worldwide, 24/7
                        </div>
                        <div className="mt-3 text-xs text-purple-400/60 font-semibold uppercase tracking-wider">
                          24/7 Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Second Description */}
              <div className="text-center w-full">
                <div className="relative max-w-6xl mx-auto w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-transparent to-purple-600/5 rounded-2xl blur-xl"></div>
                  <div className="relative p-10 bg-gradient-to-r from-black/40 via-slate-900/30 to-black/40 backdrop-blur-md rounded-2xl border border-purple-400/20 shadow-2xl">
                    <div className="text-center mb-6">
                      <span className="text-purple-400 font-bold text-3xl">
                        PanchCoin
                      </span>
                    </div>
                    <p className="text-white/90 text-xl leading-relaxed font-medium text-center mb-8">
                      unites every user in a sophisticated financial ecosystem
                      that transcends traditional boundaries and redefines the
                      way we think about digital currency
                    </p>

                    {/* Call to action */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <div className="px-6 py-3 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-full border border-purple-400/30">
                        <span className="text-purple-400 font-semibold">
                          Join 2M+ Users
                        </span>
                      </div>
                      <div className="px-6 py-3 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-full border border-purple-400/30">
                        <span className="text-purple-400 font-semibold">
                          Start Trading Today
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Features List */}
            </div>

            {/* Decorative separator */}
            <div className="mt-12 w-full flex justify-center items-center gap-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-yellow-400/60"></div>
              <div className="flex gap-2 justify-center items-center">
                <div className="w-2 h-2 bg-purple-400/60 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-purple-400/40 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-yellow-400/60"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image relative">
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="crypto-particles">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="crypto-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-purple-600/30 to-blue-500/30" />

          {/* Enhanced PanchCoin Price Section */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative text-center text-white bg-gradient-to-br from-black/80 via-slate-900/70 to-black/80 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border-2 border-purple-400/50 shadow-2xl max-w-5xl mx-auto overflow-hidden transition-all duration-500 hover:scale-105 hover:border-purple-400/70 hover:shadow-purple-500/20 hover:shadow-3xl">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/15 via-purple-600/10 to-blue-500/15 rounded-3xl"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-400/25 via-purple-600/20 to-blue-500/25 rounded-3xl blur-3xl opacity-60"></div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/20 via-purple-600/20 to-blue-500/20 p-[2px]">
                <div className="w-full h-full bg-black/80 rounded-3xl"></div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-12 -left-12 w-20 h-20 bg-gradient-to-r from-purple-400/40 to-purple-300/40 rounded-full blur-xl floating-gentle"></div>
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-purple-600/40 to-purple-400/40 rounded-full blur-lg floating-slow"></div>
              <div className="absolute -bottom-12 -left-8 w-18 h-18 bg-gradient-to-r from-blue-500/40 to-purple-300/40 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-12 w-14 h-14 bg-gradient-to-r from-pink-500/40 to-pink-300/40 rounded-full blur-lg rotate-slow"></div>

              <div className="relative z-10">
                {/* Enhanced Coin Symbol */}
                <div className="relative mb-6 md:mb-8">
                  <div className="bitcoin-symbol text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-purple-400 mb-3 md:mb-4 relative group">
                    <div className="absolute inset-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-purple-400/20 blur-2xl -z-10 group-hover:opacity-40 transition-opacity duration-300">
                      ◊
                    </div>
                    ◊
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400 tracking-widest uppercase">
                    PanchCoin
                  </div>
                </div>

                {/* Enhanced Price Display */}
                <div className="space-y-4 md:space-y-6">
                  {/* Main Price */}
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl text-white/70">
                        $
                      </span>
                      <span className="price-value text-green-400">
                        1,250.00
                      </span>
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Price Change */}
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <div className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-green-400/20 rounded-full border border-green-400/30">
                      <span className="text-green-400 text-lg md:text-xl">
                        ↗
                      </span>
                      <span className="text-green-400 font-bold text-base md:text-lg">
                        +5.2%
                      </span>
                    </div>
                    <div className="text-white/60 text-xs md:text-sm">
                      (24h)
                    </div>
                  </div>

                  {/* Market Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-6 md:mt-8">
                    <div className="text-center p-3 md:p-4 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-lg md:rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-colors duration-300">
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
                        Market Cap
                      </div>
                      <div className="text-purple-400 font-bold text-sm md:text-lg">
                        $12.5B
                      </div>
                    </div>
                    <div className="text-center p-3 md:p-4 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-lg md:rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-colors duration-300">
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
                        Volume
                      </div>
                      <div className="text-purple-400 font-bold text-sm md:text-lg">
                        $2.1B
                      </div>
                    </div>
                    <div className="text-center p-3 md:p-4 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-lg md:rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-colors duration-300">
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
                        Supply
                      </div>
                      <div className="text-purple-400 font-bold text-sm md:text-lg">
                        10M
                      </div>
                    </div>
                    <div className="text-center p-3 md:p-4 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-lg md:rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-colors duration-300">
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
                        Rank
                      </div>
                      <div className="text-purple-400 font-bold text-sm md:text-lg">
                        #3
                      </div>
                    </div>
                  </div>

                  {/* Price Chart Mini */}
                  <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gradient-to-r from-black/40 to-slate-900/40 rounded-lg md:rounded-xl border border-white/10">
                    <div className="text-white/60 text-xs uppercase tracking-wider mb-2 md:mb-3 text-center">
                      24h Price Movement
                    </div>
                    <div className="flex items-end justify-center gap-0.5 md:gap-1 h-8 md:h-12">
                      {[
                        0.2, 0.4, 0.3, 0.6, 0.8, 0.7, 0.9, 1.0, 0.8, 0.6, 0.7,
                        0.9, 1.0, 1.1, 1.0, 0.9, 1.0, 1.1, 1.0, 0.8,
                      ].map((height, i) => (
                        <div
                          key={i}
                          className="w-0.5 md:w-1 bg-gradient-to-t from-green-400 to-green-300 rounded-full hover:opacity-80 transition-opacity duration-200"
                          style={{ height: `${height * 100}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-3 md:mt-4">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="text-green-400 text-xs md:text-sm font-semibold uppercase tracking-wider">
                      Live Trading
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoAbout;
