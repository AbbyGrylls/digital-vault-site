import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Briefcase, TrendingUp, Globe, Shield, Users, CheckCircle, BarChart3, Clock, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BusinessBanking = () => {
  const solutions = [
    {
      title: 'Current Accounts',
      description: 'Streamline your business operations with our feature-rich current accounts designed for businesses of all sizes.',
      icon: Building2,
      features: ['Free transactions', 'Multi-user access', 'Cash management', 'Business debit card'],
      link: '/business/accounts/current',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Business Loans',
      description: 'Fuel your business growth with flexible financing options. Get collateral-free loans from ₹3 lakh to ₹1 crore.',
      icon: Briefcase,
      features: ['Quick approval', 'Flexible repayment', 'Competitive rates', 'Minimal documentation'],
      link: '/business/loans/business',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Working Capital',
      description: 'Ensure smooth business operations with our working capital solutions tailored to your cash flow requirements.',
      icon: TrendingUp,
      features: ['Overdraft facility', 'Bill discounting', 'Invoice financing', 'Trade credit'],
      link: '/business/loans/working',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Trade Services',
      description: 'Expand your business globally with our comprehensive trade finance and international banking solutions.',
      icon: Globe,
      features: ['Letter of credit', 'Bank guarantee', 'Export financing', 'Import services'],
      link: '/business/trade/domestic',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Payment Solutions',
      description: 'Simplify your business payments with integrated solutions for collections, disbursements, and payroll.',
      icon: Shield,
      features: ['Bulk payments', 'Payment gateway', 'POS solutions', 'Tax payments'],
      link: '/business/payments/solutions',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Corporate Solutions',
      description: 'Dedicated banking services for large corporations with customized treasury and cash management solutions.',
      icon: Users,
      features: ['Treasury services', 'Corporate accounts', 'Risk management', 'Advisory services'],
      link: '/business/corporate/cash',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { icon: Building2, value: '50K+', label: 'Business Clients' },
    { icon: BarChart3, value: '₹500Cr+', label: 'Loans Disbursed' },
    { icon: Clock, value: '48hrs', label: 'Loan Approval' },
    { icon: Award, value: '#1', label: 'Business Bank' }
  ];

  const benefits = [
    'Dedicated relationship manager',
    'Priority customer service',
    'Customized financial solutions',
    'Digital banking platform',
    'Industry-specific expertise',
    'Competitive interest rates'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1594938350684-4c251b5030d1)' }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Business Banking Solutions That Scale
              </h1>
              <p className="text-xl text-teal-50 mb-8">
                Empower your business with comprehensive banking solutions designed for growth. From startups to enterprises, we've got the right tools for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/business/accounts/current"
                  className="px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Open Business Account
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/business/loans/business"
                  className="px-8 py-4 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 transition-all inline-flex items-center justify-center gap-2 border-2 border-white"
                >
                  Apply for Loan
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1738750908048-14200459c3c9"
                alt="Business Professional"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Banking Solutions</h2>
            <p className="text-xl text-gray-600">Comprehensive services to support your business at every stage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={solution.link}
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1594938350684-4c251b5030d1"
                alt="Business Banking"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose AccessOne for Business?</h2>
              <p className="text-gray-600 mb-8">
                We understand the unique needs of businesses and provide tailored solutions to help you succeed.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/business/accounts/current"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 mt-8"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Partner with AccessOne and unlock new opportunities for your business
          </p>
          <Link
            to="/business/loans/business"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105"
          >
            Apply for Business Loan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessBanking;