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
        <div className="absolute -top-20 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-purple-600/20 rounded-full blur-xl floating-gentle"></div>
        <div className="absolute -top-10 right-20 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-yellow-400/20 rounded-full blur-lg floating-slow"></div>
        <div className="absolute top-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-600/30 to-pink-500/30 rounded-full blur-md glow-pulse"></div>

        <div className="relative bg-gradient-to-br from-black/80 via-slate-900/60 to-black/80 backdrop-blur-xl rounded-3xl p-16 border-2 border-gradient-to-r from-yellow-400/40 via-purple-600/40 to-blue-500/40 shadow-2xl max-w-6xl mx-auto overflow-hidden w-full">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 via-transparent to-purple-600/20"></div>
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full blur-2xl"></div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-400/60 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-yellow-400/60 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-yellow-400/60 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400/60 rounded-br-lg"></div>

          <div className="relative z-10 flex flex-col items-center justify-center w-full">
            <div className="text-center mb-12 w-full">
              <div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400/10 via-yellow-300/10 to-yellow-500/10 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-6">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <h2 className="font-general text-lg uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 font-bold tracking-widest text-center">
                  Welcome to PanchCoin
                </h2>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>

              {/* Decorative line above title */}
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400/60"></div>
                <div className="w-3 h-3 border-2 border-yellow-400/60 rounded-full rotate-45"></div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400/60"></div>
              </div>
            </div>

            {/* Main Title Section */}
            <div className="mb-16 w-full flex justify-center">
              <div className="w-full max-w-6xl">
                <AnimatedTitle
                  title="Disc<b>o</b>ver the world's <br /> m<b>o</b>st elegant digital currency"
                  containerClass="!text-white text-center drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Description Section */}
            <div className="about-subtext space-y-12 w-full flex flex-col items-center">
              {/* First Description with Animated Keywords */}
              <div className="text-center w-full">
                <div className="relative inline-block w-full">
                  <p className="text-white/95 text-2xl leading-relaxed font-medium max-w-6xl mx-auto text-center">
                    The Future of Digital Currency begins -{" "}
                    <span className="relative inline-block description-keyword">
                      <span className="text-yellow-400 font-bold px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 rounded-xl border border-yellow-400/30 shadow-lg backdrop-blur-sm">
                        elegant
                      </span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 rounded-xl blur-sm -z-10 animate-pulse"></div>
                    </span>
                    ,{" "}
                    <span className="relative inline-block description-keyword">
                      <span className="text-blue-400 font-bold px-4 py-2 bg-gradient-to-r from-blue-400/20 to-blue-300/20 rounded-xl border border-blue-400/30 shadow-lg backdrop-blur-sm">
                        secure
                      </span>
                      <div
                        className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-blue-300/20 rounded-xl blur-sm -z-10 animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                    </span>
                    ,{" "}
                    <span className="relative inline-block description-keyword">
                      <span className="text-purple-400 font-bold px-4 py-2 bg-gradient-to-r from-purple-400/20 to-purple-300/20 rounded-xl border border-purple-400/30 shadow-lg backdrop-blur-sm">
                        revolutionary
                      </span>
                      <div
                        className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-purple-300/20 rounded-xl blur-sm -z-10 animate-pulse"
                        style={{ animationDelay: "0.6s" }}
                      ></div>
                    </span>
                  </p>
                </div>
              </div>

              {/* Second Description with Enhanced Styling */}
              <div className="text-center w-full">
                <div className="relative max-w-5xl mx-auto w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent rounded-2xl blur-xl"></div>
                  <p className="description-text relative text-white/90 text-xl leading-relaxed font-medium px-8 py-6 bg-gradient-to-r from-black/20 via-slate-900/20 to-black/20 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl text-center">
                    <span className="text-yellow-400 font-semibold">
                      PanchCoin
                    </span>{" "}
                    unites every user in a sophisticated financial ecosystem
                    that transcends traditional boundaries
                  </p>
                </div>
              </div>

              {/* Additional Features List */}
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
                  <div
                    className="feature-card group relative p-8 bg-gradient-to-br from-yellow-400/10 to-yellow-300/5 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 text-center"
                    style={{ opacity: 1, transform: "translateY(0)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl mb-4 text-center">⚡</div>
                      <h3 className="text-yellow-400 font-bold text-xl mb-3 text-center">
                        Lightning Fast
                      </h3>
                      <p className="text-white/90 text-base text-center leading-relaxed">
                        Instant transactions with minimal fees
                      </p>
                    </div>
                  </div>

                  <div
                    className="feature-card group relative p-8 bg-gradient-to-br from-blue-400/10 to-blue-300/5 rounded-xl border border-blue-400/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 text-center"
                    style={{ opacity: 1, transform: "translateY(0)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl mb-4 text-center">🔒</div>
                      <h3 className="text-blue-400 font-bold text-xl mb-3 text-center">
                        Bank-Grade Security
                      </h3>
                      <p className="text-white/90 text-base text-center leading-relaxed">
                        Advanced encryption and protection
                      </p>
                    </div>
                  </div>

                  <div
                    className="feature-card group relative p-8 bg-gradient-to-br from-purple-400/10 to-purple-300/5 rounded-xl border border-purple-400/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 text-center"
                    style={{ opacity: 1, transform: "translateY(0)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl mb-4 text-center">🌍</div>
                      <h3 className="text-purple-400 font-bold text-xl mb-3 text-center">
                        Global Access
                      </h3>
                      <p className="text-white/90 text-base text-center leading-relaxed">
                        Available worldwide, 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative separator */}
            <div className="mt-12 w-full flex justify-center items-center gap-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-yellow-400/60"></div>
              <div className="flex gap-2 justify-center items-center">
                <div className="w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-yellow-400/20 rounded-full animate-pulse"
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

          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-purple-600/30 to-blue-500/30" />

          {/* PanchCoin section with enhanced visibility */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative text-center text-white bg-gradient-to-br from-black/60 via-slate-900/50 to-black/60 backdrop-blur-xl rounded-3xl p-16 border-2 border-gradient-to-r from-yellow-400/50 via-purple-600/30 to-blue-500/50 shadow-2xl max-w-2xl mx-auto overflow-hidden">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-purple-600/5 to-blue-500/10 rounded-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-purple-600/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50"></div>

              {/* Floating decorative elements around the coin */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-yellow-400/30 to-yellow-300/30 rounded-full blur-lg floating-gentle"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-600/30 to-purple-400/30 rounded-full blur-md floating-slow"></div>
              <div className="absolute -bottom-8 -left-6 w-14 h-14 bg-gradient-to-r from-blue-500/30 to-blue-300/30 rounded-full blur-lg glow-pulse"></div>
              <div className="absolute -bottom-6 -right-8 w-10 h-10 bg-gradient-to-r from-pink-500/30 to-pink-300/30 rounded-full blur-sm rotate-slow"></div>

              <div className="relative z-10">
                <div className="bitcoin-symbol text-9xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-2xl relative">
                  ◊{/* Glowing effect behind the symbol */}
                  <div className="absolute inset-0 text-9xl text-yellow-400/30 blur-xl -z-10">
                    ◊
                  </div>
                </div>
                <div className="bitcoin-info">
                  <div className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 tracking-wider">
                    PanchCoin
                  </div>
                  <div className="text-3xl opacity-95 mb-3 font-semibold">
                    $
                    <span className="price-value text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">
                      1,250.00
                    </span>
                  </div>
                  <div className="text-green-400 text-xl font-bold mb-4 flex items-center justify-center gap-2">
                    <span className="text-green-400">↗</span>
                    <span>+5.2% (24h)</span>
                  </div>
                  <div className="text-sm opacity-80 mb-6">
                    Market Cap:{" "}
                    <span className="text-yellow-400 font-semibold">
                      $12.5B
                    </span>
                  </div>

                  {/* Decorative elements */}
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-yellow-400/60"></div>
                    <div className="w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-yellow-400/60"></div>
                  </div>

                  <div className="text-xs opacity-60 uppercase tracking-widest">
                    The Future of Digital Currency
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
