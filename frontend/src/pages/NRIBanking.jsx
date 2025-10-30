import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Wallet, TrendingUp, Send, CreditCard, Home, CheckCircle, Users, Shield, Clock, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NRIBanking = () => {
  const accounts = [
    {
      title: 'NRE Account',
      description: 'Non-Resident External Account for managing your foreign earnings in India with full repatriability.',
      icon: Globe,
      features: ['Tax-free interest', 'Fully repatriable', 'Joint account facility', 'Easy fund transfer'],
      link: '/nri/accounts/nre',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'NRO Account',
      description: 'Non-Resident Ordinary Account to manage your income earned in India with ease and convenience.',
      icon: Wallet,
      features: ['Manage Indian income', 'Local transactions', 'Multiple account holders', 'Online banking'],
      link: '/nri/accounts/nro',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'FCNR Account',
      description: 'Foreign Currency Non-Resident Account to park your foreign earnings in foreign currency.',
      icon: TrendingUp,
      features: ['Foreign currency deposit', 'No exchange risk', 'Attractive interest rates', 'Repatriable principal'],
      link: '/nri/accounts/fcnr',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const services = [
    {
      title: 'NRI Fixed Deposits',
      description: 'Earn attractive returns on your savings with our NRE, NRO, and FCNR fixed deposit schemes.',
      icon: TrendingUp,
      link: '/nri/deposits/nre'
    },
    {
      title: 'Money Transfer',
      description: 'Quick and secure money transfer to India through wire transfer, Click2Remit, and more.',
      icon: Send,
      link: '/nri/transfer/wire'
    },
    {
      title: 'NRI Credit Cards',
      description: 'Global acceptance with rewards, cashback, and exclusive privileges worldwide.',
      icon: CreditCard,
      link: '/nri/cards/credit'
    },
    {
      title: 'NRI Home Loans',
      description: 'Fulfill your dream of owning a home in India with competitive interest rates.',
      icon: Home,
      link: '/nri/loans/home'
    },
    {
      title: 'Investment Solutions',
      description: 'Invest in Indian markets through Demat accounts and mutual funds.',
      icon: TrendingUp,
      link: '/nri/investments/demat'
    },
    {
      title: 'Insurance Plans',
      description: 'Comprehensive life insurance coverage for you and your family.',
      icon: Shield,
      link: '/nri/insurance/life'
    }
  ];

  const benefits = [
    { icon: Users, title: '100K+', subtitle: 'NRI Customers' },
    { icon: Globe, title: '50+', subtitle: 'Countries Served' },
    { icon: Clock, title: '24/7', subtitle: 'Global Support' },
    { icon: Award, title: 'Trusted', subtitle: 'Banking Partner' }
  ];

  const features = [
    'Seamless account opening within 72 hours',
    'Dedicated NRI relationship manager',
    'Competitive interest rates on deposits',
    'Easy online banking & mobile app',
    'Quick remittance services',
    'Tax-efficient investment options'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1738750908048-14200459c3c9)' }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Globe className="w-5 h-5" />
              <span className="font-semibold">Banking for Indians Abroad</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              NRI Banking Solutions That Connect You to India
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Manage your finances in India with ease. Open accounts, invest, send money, and more - all from anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/nri/accounts/nre"
                className="px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Open NRI Account
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/nri/transfer/wire"
                className="px-8 py-4 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 transition-all inline-flex items-center justify-center gap-2 border-2 border-white"
              >
                Send Money to India
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{benefit.title}</div>
                <div className="text-gray-600">{benefit.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accounts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NRI Account Options</h2>
            <p className="text-xl text-gray-600">Choose the right account type for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accounts.map((account, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${account.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <account.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{account.title}</h3>
                <p className="text-gray-600 mb-6">{account.description}</p>
                <div className="space-y-2 mb-6">
                  {account.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={account.link}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  Open Account
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete NRI Banking Services</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your finances in India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-teal-600 font-semibold group-hover:gap-2 transition-all">
                  Explore
                  <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg"
                alt="NRI Banking"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why NRIs Choose AccessOne</h2>
              <p className="text-gray-600 mb-8">
                Banking made simple for Non-Resident Indians. Experience seamless account management, quick transfers, and personalized services.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/nri/accounts/nre"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 mt-8"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected to India</h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Open your NRI account today and experience hassle-free banking from anywhere in the world
          </p>
          <Link
            to="/nri/accounts/nre"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105"
          >
            Open NRI Account
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NRIBanking;