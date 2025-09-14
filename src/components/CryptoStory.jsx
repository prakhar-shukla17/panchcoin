import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CryptoStory = () => {
  useGSAP(() => {
    const storyAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#story",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    storyAnimation
      .from(".story-content", {
        y: 100,
        opacity: 0,
        duration: 1,
      })
      .from(
        ".story-image",
        {
          scale: 1.2,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      );
  });

  return (
    <section
      id="story"
      className="min-h-screen w-screen bg-gradient-to-b from-slate-900 to-black py-32"
    >
      <div className="container mx-auto px-6">
        <div className="story-img-container">
          <div className="story-img-mask">
            <div className="story-img-content story-image">
              <div className="bg-gradient-to-br from-yellow-400/20 to-purple-600/20 rounded-lg p-8 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📈</div>
                  <div className="text-3xl font-bold mb-2">Market Analysis</div>
                  <div className="text-lg opacity-75">
                    Real-time crypto data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="story-content mt-16 text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/20 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
              The <span className="text-purple-400">PanchCoin</span> Revolution
            </h2>
            <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto">
              From the birth of digital currency to the elegant sophistication
              of PanchCoin today, we have transformed the way we think about
              money, value, and digital ownership. Join millions of users
              worldwide in the most elegant financial revolution of our time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoStory;
