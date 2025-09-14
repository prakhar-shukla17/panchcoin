import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CryptoContact = () => {
  useGSAP(() => {
    gsap.from(".contact-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section
      id="contact"
      className="min-h-screen w-screen bg-gradient-to-b from-black to-slate-900 py-32"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Get in <span className="text-purple-400">Touch</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
              Ready to start your PanchCoin journey? Connect with our team of
              experts for elegant digital currency solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="contact-card bg-gradient-to-br from-purple-400/10 to-purple-500/10 rounded-lg p-8 border border-purple-400/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
              Trading Support
            </h3>
            <p className="text-white mb-6 leading-relaxed">
              Get help with trading strategies, market analysis, and portfolio
              management.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white bg-black/20 rounded-lg p-3">
                <span className="text-purple-400 text-xl">📧</span>
                <span className="font-medium">trading@panchcoin.com</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-black/20 rounded-lg p-3">
                <span className="text-purple-400 text-xl">📱</span>
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div className="contact-card bg-gradient-to-br from-purple-500/10 to-blue-600/10 rounded-lg p-8 border border-purple-400/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
              Technical Support
            </h3>
            <p className="text-white mb-6 leading-relaxed">
              Need help with wallets, exchanges, or blockchain technology?
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white bg-black/20 rounded-lg p-3">
                <span className="text-purple-400 text-xl">💬</span>
                <span className="font-medium">support@panchcoin.com</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-black/20 rounded-lg p-3">
                <span className="text-purple-400 text-xl">🕒</span>
                <span className="font-medium">24/7 Live Chat</span>
              </div>
            </div>
          </div>

          <div className="contact-card bg-gradient-to-br from-green-500/10 to-teal-600/10 rounded-lg p-8 border border-green-400/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
              DeFi Consultation
            </h3>
            <p className="text-white mb-6 leading-relaxed">
              Expert guidance on DeFi protocols, yield farming, and liquidity
              provision.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white bg-black/20 rounded-lg p-3">
                <span className="text-green-400 text-xl">🌐</span>
                <span className="font-medium">defi@panchcoin.com</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-black/20 rounded-lg p-3">
                <span className="text-green-400 text-xl">📅</span>
                <span className="font-medium">Book Consultation</span>
              </div>
            </div>
          </div>

          <div className="contact-card bg-gradient-to-br from-pink-500/10 to-rose-600/10 rounded-lg p-8 border border-pink-400/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
              NFT Marketplace
            </h3>
            <p className="text-white mb-6 leading-relaxed">
              Create, buy, and sell NFTs with our comprehensive marketplace
              platform.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white bg-black/20 rounded-lg p-3">
                <span className="text-pink-400 text-xl">🎨</span>
                <span className="font-medium">nft@panchcoin.com</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-black/20 rounded-lg p-3">
                <span className="text-pink-400 text-xl">🛒</span>
                <span className="font-medium">Visit Marketplace</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoContact;
