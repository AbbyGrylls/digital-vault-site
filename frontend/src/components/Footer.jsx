import React from 'react';
import { Link } from 'react-router-dom';
import { Vault, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-2 rounded-lg">
                <Vault className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-white">Digital Vault</div>
            </div>
            <p className="text-sm mb-4">
              Your trusted banking partner for secure and innovative financial solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/personal" className="hover:text-teal-400 transition-colors">Personal Banking</Link></li>
              <li><Link to="/business" className="hover:text-teal-400 transition-colors">Business Banking</Link></li>
              <li><Link to="/nri" className="hover:text-teal-400 transition-colors">NRI Services</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-teal-400 transition-colors">Careers</Link></li>
              <li><Link to="/investors" className="hover:text-teal-400 transition-colors">Investor Relations</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/accounts" className="hover:text-teal-400 transition-colors">Savings Account</Link></li>
              <li><Link to="/cards" className="hover:text-teal-400 transition-colors">Credit Cards</Link></li>
              <li><Link to="/loans" className="hover:text-teal-400 transition-colors">Loans</Link></li>
              <li><Link to="/insurance" className="hover:text-teal-400 transition-colors">Insurance</Link></li>
              <li><Link to="/investments" className="hover:text-teal-400 transition-colors">Investments</Link></li>
              <li><Link to="/digital" className="hover:text-teal-400 transition-colors">Digital Banking</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-teal-400" />
                <div>
                  <div>1800-XXX-XXXX</div>
                  <div className="text-xs text-gray-400">24/7 Customer Support</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-teal-400" />
                <div>support@digitalvault.com</div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-teal-400" />
                <div>123 Banking Street, Financial District, Mumbai 400001</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-gray-400">
              © 2025 Digital Vault Bank. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
              <Link to="/security" className="hover:text-teal-400 transition-colors">Security</Link>
              <Link to="/sitemap" className="hover:text-teal-400 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;