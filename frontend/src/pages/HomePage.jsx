import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowRight, Wallet, CreditCard, Home, TrendingUp, Shield, Building2, Users, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: '₹6,000 Cashback with Super Savings Account',
      subtitle: 'Open your account today and enjoy exclusive rewards',
      cta: 'Open Account Now',
      link: '/accounts/savings',
      image: 'https://images.unsplash.com/photo-1695653422287-81cfeeb96ade'
    },
    {
      title: 'Get Your Dream Home',
      subtitle: 'Home Loans starting at 7.99% p.a. - Quick approval process',
      cta: 'Apply Now',
      link: '/loans/home',
      image: 'https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg'
    },
    {
      title: 'Credit Cards with Amazing Benefits',
      subtitle: 'Rewards, Cashback & EMI Deals on every purchase',
      cta: 'Explore Cards',
      link: '/cards/credit',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = [
    {
      title: 'Savings Account',
      subtitle: 'Step up with the right account',
      description: 'Enjoy offers on multiple brands',
      icon: Wallet,
      link: '/accounts/savings',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Credit Cards',
      subtitle: 'Exclusive offers await',
      description: 'Rewards | Cashback | EMI Deals',
      icon: CreditCard,
      link: '/cards/credit',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Personal Loans',
      subtitle: 'Power your aspirations',
      description: 'Get loan up to ₹35 lakh',
      icon: Home,
      link: '/loans/personal',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mutual Funds',
      subtitle: 'Systematic investments',
      description: 'Tailored to your goals',
      icon: TrendingUp,
      link: '/investments/mf',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Insurance',
      subtitle: 'Protect what matters',
      description: 'Life | Health | Vehicle',
      icon: Shield,
      link: '/insurance/life',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Business Banking',
      subtitle: 'Power your business',
      description: 'Simplified transactions',
      icon: Building2,
      link: '/business',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const rates = [
    { title: 'Fixed Deposit', rate: '6.60%', subtitle: 'Regular', link: '/investments/fd' },
    { title: 'Senior Citizen FD', rate: '7.10%', subtitle: 'Special Rate', link: '/investments/fd' },
    { title: 'Savings Account', rate: '2.50%*', subtitle: 'Interest Rate', link: '/accounts/savings' },
    { title: 'Home Loan', rate: '7.99%*', subtitle: 'Starting Rate', link: '/loans/home' },
    { title: 'Personal Loan', rate: '9.98%*', subtitle: 'Starting Rate', link: '/loans/personal' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* AccessOne Intro Banner */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 pt-40 pb-20 mb-20 mt-20 text-center animate-fadeIn">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Introducing <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">AccessOne</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Your ultimate AI-powered banking assistant — making your finances effortless, intelligent, and secure.
          </p>
          <div className="flex justify-center">
            <Link
              to="/ai-assistant"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold hover:shadow-2xl transition-all hover:scale-105"
            >
              Try AccessOne
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section with Carousel */}
      <section className="pt-18 pb-18 relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="relative w-full h-[500px]">

          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <div className="relative h-full bg-gradient-to-r from-teal-600 to-cyan-600">
                <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between gap-8">

                  {/* Left: Text Section (≈ 382px wide) */}
                  <div className="w-[38%] text-white">
                    <h1 className="text-4xl font-bold mb-3 leading-snug">
                      {slide.title}
                    </h1>
                    <p className="text-lg mb-6 text-teal-50">
                      {slide.subtitle}
                    </p>
                    <Link
                      to={slide.link}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-white text-teal-600 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105"
                    >
                      {slide.cta}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Right: Image Section (≈ 618px wide) */}
                  <div className="w-[62%] h-[380px] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          ))}

          {/* Carousel Controls */}
          {/* <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button> */}

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">


            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Explore our range of banking solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:bg-gray-100 transition-all hover:-translate-y-2"
              >

                <div className={`w-14 h-14 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-1 font-medium">{product.subtitle}</p>
                <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                <div className="flex items-center text-teal-600 font-semibold group-hover:gap-2 transition-all">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rates & Charges */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Rates & Charges</h2>
            <p className="text-xl text-gray-600">Transparent and competitive rates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {rates.map((rate, index) => (
              <Link
                key={index}
                to={rate.link}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 border border-teal-100"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {rate.rate}
                </div>
                <div className="text-gray-900 font-semibold mb-1">{rate.title}</div>
                <div className="text-gray-500 text-sm">{rate.subtitle}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Join millions of customers who trust AccessOne for their banking needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/accounts/savings"
              className="px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Open Account
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#contact"
              className="px-8 py-4 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 transition-all inline-flex items-center justify-center gap-2 border-2 border-white"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;