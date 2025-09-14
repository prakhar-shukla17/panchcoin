import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = (e) => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const CryptoCard = ({ title, description, icon, gradient, price, change }) => {
  return (
    <div className="feature-card relative size-full overflow-hidden rounded-lg">
      <div className={`absolute inset-0 ${gradient}`} />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex size-full flex-col justify-between p-6 text-white">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="crypto-icon text-4xl drop-shadow-lg">{icon}</div>
            <div className="text-right bg-black/30 backdrop-blur-sm rounded-lg p-3">
              <div className="price-display text-2xl font-bold text-white drop-shadow-lg">
                {price}
              </div>
              <div
                className={`text-sm font-semibold ${
                  change.startsWith("+") ? "text-green-300" : "text-red-300"
                }`}
              >
                {change}
              </div>
            </div>
          </div>
          <h1 className="bento-title special-font text-3xl mb-3 text-white drop-shadow-lg">
            {title}
          </h1>
          {description && (
            <p className="text-sm text-white/95 leading-relaxed bg-black/20 backdrop-blur-sm rounded-lg p-3">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const CryptoFeatures = () => {
  useGSAP(() => {
    // Staggered animation for feature cards
    gsap.from(".feature-card", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".feature-card",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Price counter animations
    gsap.from(".price-display", {
      scale: 0,
      rotation: 180,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".price-display",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Floating animation for crypto icons
    gsap.to(".crypto-icon", {
      y: -10,
      rotation: 5,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    });
  });

  return (
    <section className="bg-gradient-to-b from-slate-900 to-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
            <p className="font-circular-web text-xl text-purple-400 font-semibold mb-4">
              Into the PanchCoin Universe
            </p>
            <p className="max-w-2xl font-circular-web text-lg text-white leading-relaxed">
              Immerse yourself in a rich and ever-expanding digital economy
              where cutting-edge blockchain technology converges into an
              interconnected financial ecosystem. Experience the future of
              elegant digital currency.
            </p>
          </div>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <CryptoCard
            title={
              <>
                Panch<b>C</b>oin
              </>
            }
            description="The elegant digital currency that redefines the future of finance. Sophisticated, secure, and revolutionary for the modern era."
            icon="◊"
            gradient="bg-gradient-to-br from-yellow-400 to-orange-500"
            price="$1,250"
            change="+5.2%"
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <CryptoCard
              title={
                <>
                  Et<b>h</b>ereum
                </>
              }
              description="Smart contract platform powering the decentralized web and DeFi ecosystem"
              icon="Ξ"
              gradient="bg-gradient-to-br from-blue-500 to-purple-600"
              price="$2,680"
              change="+1.8%"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <CryptoCard
              title={
                <>
                  De<b>F</b>i
                </>
              }
              description="Decentralized Finance protocols revolutionizing traditional banking and lending"
              icon="🏦"
              gradient="bg-gradient-to-br from-green-500 to-teal-600"
              price="$12.4B"
              change="+5.2%"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <CryptoCard
              title={
                <>
                  NF<b>T</b>s
                </>
              }
              description="Non-fungible tokens creating new digital ownership and art markets"
              icon="🎨"
              gradient="bg-gradient-to-br from-pink-500 to-rose-600"
              price="$2.1B"
              change="+3.7%"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-gradient-to-br from-yellow-400 to-orange-500 p-6">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end text-black" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <CryptoCard
              title={
                <>
                  Web<b>3</b>
                </>
              }
              description="The next generation of the internet built on blockchain technology"
              icon="🌐"
              gradient="bg-gradient-to-br from-indigo-500 to-blue-600"
              price="$8.9B"
              change="+4.1%"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default CryptoFeatures;
