import { Button } from "@/components/ui/button";
import {
  Users,
  Globe,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-[60px] sm:pb-0">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-16 md:pt-20 md:pb-20 bg-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-[15px] text-gray-900 mb-4">
              <span>Home / </span>
              <span className="text-[#3CC27B]">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-['Russo_One'] text-[#161616] mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              We Bring Together Dynamic Mix Of Services & Crypto Wallet That Are
              Thoughtfully Designed To Make Your Crypto Exchange Easier.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Russo_One'] mb-6 bg-gradient-to-r from-[#161616] to-[#3CC27B] bg-clip-text text-transparent leading-tight">
              Welcome to the crypto exchanger USDT MPAY
            </h2>
            <p className="text-xl text-gray-900 leading-relaxed mb-12">
              Our instant exchange system ensures rapid execution and top-tier
              security, giving you a seamless and reliable experience every
              time. Whether you are a beginner or a pro, We make crypto simple,
              safe, and accessible. Your trusted platform for fast, secure, and
              hassle-free cryptocurrency transactions. We specialize in buying,
              selling, storing and transferring crypto across all currencies
              Without the Risk of peer-to-peer (P2P) trading.
            </p>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Users, value: "500K+", label: "Active Users" },
                { icon: Globe, value: "50+", label: "Countries Served" },
                { icon: TrendingUp, value: "$2B+", label: "Trading Volume" },
                { icon: Clock, value: "5+", label: "Years of Experience" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-9 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center mb-4 mx-auto">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-900">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-['Russo_One'] text-[#161616] mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-900 leading-relaxed">
                  To democratize access to cryptocurrency trading by providing a
                  secure, user-friendly platform that empowers both beginners
                  and experienced traders to participate in the digital economy.
                </p>
                <p className="text-lg text-gray-900 leading-relaxed mt-4">
                  We believe that everyone should have access to the
                  transformative power of cryptocurrencies, regardless of their
                  technical background or investment experience.
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fde402d04e4fc422aa77ac9baf104abf8%2F4a4b10f924484bf7a43c09a4a8b5d5e7?format=webp&width=800"
                  alt="Our Mission - Bitcoin Trading Chart"
                  className="rounded-2xl w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-[#3CC27B] to-[#00602D]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-['Russo_One'] text-white mb-12">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                {[
                  { icon: Shield, text: "Bank-level security" },
                  { icon: TrendingUp, text: "Real-time trading" },
                  { icon: Users, text: "24/7 customer support" },
                  { icon: Globe, text: "Global accessibility" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <item.icon className="w-5 h-5" />
                    <span className="text-[15px]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-['Russo_One'] text-[#161616] text-center mb-16">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Security First",
                  description:
                    "We prioritize the security of your assets with industry-leading encryption and multi-layer protection protocols.",
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  description:
                    "Constantly evolving our platform with cutting-edge technology to provide the best trading experience.",
                },
                {
                  icon: Users,
                  title: "Customer Centric",
                  description:
                    "We prioritize the security of your assets with industry-leading encryption and multi-layer protection protocols.",
                },
                {
                  icon: CheckCircle2,
                  title: "Excellence",
                  description:
                    "Committed to delivering exceptional service and maintaining the highest standards in the industry.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 flex flex-col gap-8"
                >
                  <div className="w-10 h-10 rounded-full bg-[#3CC27B] flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-900 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-[#161616] mb-6">
                Features
              </h2>
              <p className="text-lg text-gray-900 leading-relaxed mb-6">
                To democratize access to cryptocurrency trading by providing a
                secure, user-friendly platform that empowers both beginners and
                experienced traders to participate in the digital economy.
              </p>
              <p className="text-lg text-gray-900 leading-relaxed">
                We believe that everyone should have access to the
                transformative power of cryptocurrencies, regardless of their
                technical background or investment experience.
              </p>
            </div>

            {/* Right side - Features grid */}
            <div className="grid  gap-4">
              {[
                "Instant processing",
                "Without P2P risk",
                "Use local payment method",
                "Support 24x7",
                "Best exchange rates",
                "Fast withdrawals",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gradient-to-r from-[#3CC27B] to-[#1C5C3A] rounded-md p-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white text-lg font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3CC27B] to-[#00602D]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-['Russo_One'] text-white mb-6">
            Ready to Start Trading Crypto?
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Join thousands of traders buying and selling cryptocurrencies on
            India's most trusted platform
          </p>
          <Button className="bg-white hover:bg-gray-100 text-[#161616] px-14 h-[51px] text-[15px] font-medium rounded-md">
            Buy Crypto Now
          </Button>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </div>
  );
}
