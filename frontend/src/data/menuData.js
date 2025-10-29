import { 
  Wallet, CreditCard, Home, Shield, TrendingUp, Send, 
  Building2, Briefcase, Globe, Users, FileText, Package
} from 'lucide-react';

export const personalMenu = [
  {
    title: 'Accounts',
    icon: Wallet,
    items: [
      { name: 'Savings Account', link: '/accounts/savings', icon: Wallet, description: 'High interest savings' },
      { name: 'Salary Account', link: '/accounts/salary', icon: Wallet, description: 'Exclusive benefits' },
      { name: 'Private Banking', link: '/accounts/private', icon: Shield, description: 'Premium services' },
      { name: '3-in-1 Account', link: '/accounts/3in1', icon: TrendingUp, description: 'Save + Trade + Invest' }
    ]
  },
  {
    title: 'Cards',
    icon: CreditCard,
    items: [
      { name: 'Credit Card', link: '/cards/credit', icon: CreditCard, description: 'Rewards & cashback' },
      { name: 'Debit Card', link: '/cards/debit', icon: CreditCard, description: 'Secure payments' },
      { name: 'Forex Card', link: '/cards/forex', icon: Globe, description: 'Travel abroad' }
    ]
  },
  {
    title: 'Loans',
    icon: Home,
    items: [
      { name: 'Home Loan', link: '/loans/home', icon: Home, description: 'Starting at 7.99%' },
      { name: 'Personal Loan', link: '/loans/personal', icon: Wallet, description: 'Quick approval' },
      { name: 'Car Loan', link: '/loans/car', icon: Package, description: 'Drive your dream' },
      { name: 'Gold Loan', link: '/loans/gold', icon: Shield, description: 'Instant liquidity' }
    ]
  },
  {
    title: 'Insurance',
    icon: Shield,
    items: [
      { name: 'Life Insurance', link: '/insurance/life', icon: Shield, description: 'Protect your family' },
      { name: 'Health Insurance', link: '/insurance/health', icon: Shield, description: 'Medical coverage' },
      { name: 'Vehicle Insurance', link: '/insurance/vehicle', icon: Package, description: 'Comprehensive plans' }
    ]
  },
  {
    title: 'Investments',
    icon: TrendingUp,
    items: [
      { name: 'Fixed Deposits', link: '/investments/fd', icon: TrendingUp, description: 'Guaranteed returns' },
      { name: 'Mutual Funds', link: '/investments/mf', icon: TrendingUp, description: 'Wealth creation' },
      { name: 'Demat Account', link: '/investments/demat', icon: FileText, description: 'Start trading' }
    ]
  },
  {
    title: 'Payments',
    icon: Send,
    items: [
      { name: 'Bill Payments', link: '/payments/bills', icon: Send, description: 'Pay all bills' },
      { name: 'Fund Transfer', link: '/payments/transfer', icon: Send, description: 'NEFT/RTGS/IMPS' },
      { name: 'FASTag', link: '/payments/fastag', icon: Package, description: 'Toll payments' }
    ]
  }
];

export const businessMenu = [
  {
    title: 'Banking',
    icon: Building2,
    items: [
      { name: 'Current Account', link: '/business/accounts/current', icon: Wallet, description: 'Business banking' },
      { name: 'Corporate Salary', link: '/business/accounts/salary', icon: Users, description: 'Payroll solutions' },
      { name: 'Retail Institution', link: '/business/accounts/retail', icon: Building2, description: 'Institutional banking' }
    ]
  },
  {
    title: 'Lending',
    icon: Briefcase,
    items: [
      { name: 'Business Loan', link: '/business/loans/business', icon: Briefcase, description: 'Growth capital' },
      { name: 'Working Capital', link: '/business/loans/working', icon: TrendingUp, description: 'Operational funds' },
      { name: 'Business Credit Card', link: '/business/cards/credit', icon: CreditCard, description: 'Expense management' },
      { name: 'Loan Against Property', link: '/business/loans/lap', icon: Home, description: 'Secured loans' }
    ]
  },
  {
    title: 'Payments',
    icon: Send,
    items: [
      { name: 'Payment Solutions', link: '/business/payments/solutions', icon: Send, description: 'Business payments' },
      { name: 'Fund Transfer', link: '/business/payments/transfer', icon: Send, description: 'Bulk payments' },
      { name: 'Taxes', link: '/business/payments/taxes', icon: FileText, description: 'Tax payments' }
    ]
  },
  {
    title: 'Trade',
    icon: Globe,
    items: [
      { name: 'Domestic Trade', link: '/business/trade/domestic', icon: Package, description: 'Local trade' },
      { name: 'International Exports', link: '/business/trade/exports', icon: Globe, description: 'Export services' },
      { name: 'International Imports', link: '/business/trade/imports', icon: Globe, description: 'Import financing' },
      { name: 'Bank Guarantee', link: '/business/trade/guarantee', icon: Shield, description: 'Financial guarantee' },
      { name: 'Letter of Credit', link: '/business/trade/lc', icon: FileText, description: 'Trade finance' }
    ]
  },
  {
    title: 'Corporate Solutions',
    icon: Building2,
    items: [
      { name: 'Cash Management', link: '/business/corporate/cash', icon: Wallet, description: 'Treasury services' },
      { name: 'Trade Finance', link: '/business/corporate/trade', icon: Globe, description: 'Supply chain' },
      { name: 'Corporate Accounts', link: '/business/corporate/accounts', icon: Building2, description: 'Large enterprises' }
    ]
  }
];

export const nriMenu = [
  {
    title: 'Accounts',
    icon: Wallet,
    items: [
      { name: 'NRE Savings Account', link: '/nri/accounts/nre', icon: Wallet, description: 'Repatriable account' },
      { name: 'NRO Savings Account', link: '/nri/accounts/nro', icon: Wallet, description: 'Non-repatriable' },
      { name: 'FCNR Account', link: '/nri/accounts/fcnr', icon: Globe, description: 'Foreign currency' },
      { name: 'NRI Current Account', link: '/nri/accounts/current', icon: Building2, description: 'Business banking' }
    ]
  },
  {
    title: 'Deposits',
    icon: TrendingUp,
    items: [
      { name: 'NRE Fixed Deposit', link: '/nri/deposits/nre', icon: TrendingUp, description: 'Tax-free returns' },
      { name: 'FCNR Deposits', link: '/nri/deposits/fcnr', icon: Globe, description: 'Foreign currency FD' },
      { name: 'NRO Fixed Deposit', link: '/nri/deposits/nro', icon: TrendingUp, description: 'Rupee deposits' }
    ]
  },
  {
    title: 'Investment & Insurance',
    icon: Shield,
    items: [
      { name: 'Demat Account', link: '/nri/investments/demat', icon: FileText, description: 'Stock trading' },
      { name: 'Mutual Funds', link: '/nri/investments/mf', icon: TrendingUp, description: 'SIP investments' },
      { name: 'Life Insurance', link: '/nri/insurance/life', icon: Shield, description: 'Coverage' }
    ]
  },
  {
    title: 'Money Transfer',
    icon: Send,
    items: [
      { name: 'Wire Transfer', link: '/nri/transfer/wire', icon: Send, description: 'International transfer' },
      { name: 'Click2Remit', link: '/nri/transfer/remit', icon: Send, description: 'Online remittance' }
    ]
  },
  {
    title: 'Cards',
    icon: CreditCard,
    items: [
      { name: 'NRI Credit Card', link: '/nri/cards/credit', icon: CreditCard, description: 'Global acceptance' },
      { name: 'NRI Debit Card', link: '/nri/cards/debit', icon: CreditCard, description: 'Worldwide access' }
    ]
  },
  {
    title: 'Loans',
    icon: Home,
    items: [
      { name: 'NRI Home Loan', link: '/nri/loans/home', icon: Home, description: 'Property in India' }
    ]
  }
];