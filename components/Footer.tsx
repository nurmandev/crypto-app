import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#161616] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">USDTMPAY</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                We are the best platform to buy and sell crypto, offering
                secure, fast, and reliable trading. With real-time prices,
                instant UPI deposits and withdrawals, and bank-level security,
                we make crypto trading simple and accessible for everyone
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3CC27B] flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#272727] flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-[#3CC27B]" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#272727] flex items-center justify-center">
                  <Twitter className="w-4 h-4 text-[#3CC27B]" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Platform</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Buy Crypto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Sell Crypto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Wallet
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#3CC27B]" />
                  <span className="text-white/80">support@cryptotrade.in</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#3CC27B]" />
                  <span className="text-white/80">+91 80-0000-0000</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#3CC27B]" />
                  <span className="text-white/80">Bangalore, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#3CC27B]/30 pt-8">
            <div className="max-w-6xl mx-auto">
              <h5 className="text-lg font-bold text-[#9E9E9E] mb-4">
                Risk Disclaimer
              </h5>
              <p className="text-[#9E9E9E] text-sm leading-relaxed mb-6">
                Trading and holding cryptocurrencies involves significant risk.
                Prices of digital assets are highly volatile and may fluctuate
                rapidly. Our platform only provides users with the ability to
                deposit, sell, and withdraw crypto; we do not provide financial
                advice, investment recommendations, or guarantee of profits.
                Users are solely responsible for their trading decisions, and by
                using this platform, you agree that we are not liable for any
                losses, damages, or risks arising from your crypto transactions.
                Always do your own research before trading.
              </p>
              <p className="text-center text-white text-[13px]">
                © {new Date().getFullYear()} usdtmpay.online. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
