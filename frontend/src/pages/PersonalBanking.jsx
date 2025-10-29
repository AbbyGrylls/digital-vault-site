import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wallet, CreditCard, Home, Shield, TrendingUp, Send, CheckCircle, Users, Award, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PersonalBanking = () => {
  const services = [
    {
      title: 'Savings & Current Accounts',
      description: 'Choose from a range of accounts designed to meet your needs with attractive interest rates and exclusive benefits.',
      icon: Wallet,
      features: ['Zero balance accounts', 'High interest rates', 'Free debit card', 'Mobile & Net banking'],
      link: '/accounts/savings',
      image: 'https://images.pexels.com/photos/6771120/pexels-photo-6771120.jpeg'
    },
    {
      title: 'Credit & Debit Cards',
      description: 'Experience the convenience of digital payments with our range of cards offering rewards, cashback, and exclusive privileges.',
      icon: CreditCard,
      features: ['Lifetime free cards', 'Reward points', 'International usage', 'EMI conversion'],
      link: '/cards/credit',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3'
    },
    {
      title: 'Personal & Home Loans',
      description: 'Fulfill your dreams with our competitive loan offerings. Quick approval, minimal documentation, and flexible repayment options.',
      icon: Home,
      features: ['Low interest rates', 'Quick disbursal', 'Flexible tenure', 'No hidden charges'],
      link: '/loans/personal',
      image: 'https://images.unsplash.com/photo-1695653422287-81cfeeb96ade'
    },
    {
      title: 'Insurance Solutions',
      description: 'Protect your loved ones and assets with comprehensive insurance coverage tailored to your needs.',
      icon: Shield,
      features: ['Life insurance', 'Health coverage', 'Vehicle insurance', 'Property protection'],
      link: '/insurance/life',
      image: 'https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg'
    },
    {
      title: 'Investment & Wealth',
      description: 'Grow your wealth with our investment solutions including fixed deposits, mutual funds, and demat accounts.',
      icon: TrendingUp,
      features: ['Fixed deposits', 'Mutual funds', 'Stock trading', 'Portfolio advisory'],
      link: '/investments/fd',
      image: 'https://images.pexels.com/photos/6771120/pexels-photo-6771120.jpeg'
    },
    {
      title: 'Payments & Transfers',
      description: 'Make seamless transactions with our digital payment solutions. Pay bills, transfer funds, and manage your finances effortlessly.',
      icon: Send,
      features: ['UPI payments', 'NEFT/RTGS/IMPS', 'Bill payments', 'Forex services'],
      link: '/payments/bills',
      image: 'https://images.unsplash.com/photo-1695653422287-81cfeeb96ade'
    }
  ];

  const benefits = [
    { icon: Users, title: '10M+', subtitle: 'Happy Customers' },
    { icon: Award, title: '50+', subtitle: 'Awards Won' },
    { icon: Clock, title: '24/7', subtitle: 'Customer Support' },
    { icon: CheckCircle, title: '99.9%', subtitle: 'Uptime' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Personal Banking Solutions for Every Need
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Experience banking that adapts to your lifestyle. From savings accounts to loans, investments to insurance - we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/accounts/savings"
                className="px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Open Account
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/loans/personal"
                className="px-8 py-4 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 transition-all inline-flex items-center justify-center gap-2 border-2 border-white"
              >
                Apply for Loan
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

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive banking solutions tailored for you</p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all`}
              >
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="lg:w-1/2 h-80 lg:h-96 w-full relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Banking Journey Today</h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Open your account in minutes and experience the future of banking
          </p>
          <Link
            to="/accounts/savings"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalBanking;