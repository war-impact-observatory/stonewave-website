// All site copy in one place so it's easy to edit.

export const COMPANY = {
  legalName: 'STONEWAVE TRADING - FZCO',
  address: 'IFZA Business Park, DDP, PO Box 342001, Dubai, United Arab Emirates',
  trn: '104352236400003',
  licence: '59699',
  authority: 'Dubai Integrated Economic Zones Authority (IFZA)',
  email: 'stonewave1403@gmail.com',
  phoneDisplay: '+971 50 141 8294',
  phoneHref: 'tel:+971501418294',
  whatsappHref:
    'https://wa.me/971501418294?text=' + encodeURIComponent('Hello Stonewave, I would like to enquire about '),
}

export const ABOUT = {
  paragraphs: [
    'Stonewave Trading FZCO is a Dubai-registered company that brings together three closely linked businesses: construction and infrastructure projects, heavy equipment rental and equipment trading.',
    'From our registered office in the IFZA free zone, we work across India and international markets — giving developers, contractors and businesses one accountable partner to plan and build, to equip their sites, and to buy or sell the machines that keep projects moving.',
    'Our partners each bring around 30 years of leadership at global companies including Accenture, Infosys, Wipro and Future Group, along with experience founding and running businesses of their own.',
  ],
  facts: [
    { k: 'Registered in', v: 'Dubai, UAE' },
    { k: 'Operating in', v: 'India & international' },
    { k: 'Business lines', v: '3' },
    { k: 'Trade licence', v: 'No. 59699' },
  ],
}

export const SERVICES = [
  {
    id: 'construction',
    title: 'Construction & Infrastructure',
    short: 'Real estate and infrastructure projects in India and abroad, delivered with our execution partners.',
    lead: 'We take on real estate and infrastructure projects in India and internationally — bringing together investment, planning and on-ground execution with experienced delivery partners.',
    offer: [
      'Residential, commercial and mixed-use developments',
      'Roads, bridges and civil infrastructure',
      'Industrial, logistics and warehousing facilities',
      'Site development, earthworks and utilities',
      'Project structuring, investment and management',
      'Quality, safety and timeline oversight',
    ],
    stepsTitle: 'How we deliver',
    steps: ['Feasibility', 'Structure & plan', 'Build with partners', 'Handover'],
    enquire: 'a construction or infrastructure project',
  },
  {
    id: 'rental',
    title: 'Equipment Rental',
    short: 'Forklifts, excavators, telehandlers, crushers and trucks on flexible short and long-term hire.',
    lead: 'Get the right machine on site without the cost of owning it. We supply heavy equipment on flexible hire for construction, infrastructure, quarrying and logistics work.',
    offer: [
      'Daily, weekly and monthly hire',
      'Long-term rentals for full project durations',
      'Machines with or without operators',
      'Delivery to and collection from site',
      'Maintenance and service support',
      'Fleet planning for multi-machine sites',
    ],
    stepsTitle: 'Fleet',
    steps: ['Excavators', 'Forklifts', 'Telehandlers', 'Crushers', 'Trucks'],
    enquire: 'equipment rental',
  },
  {
    id: 'trading',
    title: 'Equipment Trading',
    short: 'Buying and selling new and pre-owned construction equipment across the UAE, India and beyond.',
    lead: 'We buy and sell new and pre-owned construction equipment — sourcing machines to your specification and coordinating the paperwork and logistics to move them across borders.',
    offer: [
      'New and pre-owned machines',
      'Sourcing to specification and budget',
      'Inspection and condition reports',
      'Purchase and resale of used fleets',
      'Export, import and shipping coordination',
      'Trade through our Dubai-registered entity',
    ],
    stepsTitle: 'Markets',
    steps: ['UAE', 'India', 'International'],
    enquire: 'buying or selling equipment',
  },
]

export const EQUIPMENT = ['Excavators', 'Forklifts', 'Telehandlers', 'Crushers', 'Trucks']

export const REASONS = [
  { title: 'Registered in Dubai', body: 'A licensed UAE free zone company with a clear legal entity, TRN and registered office.' },
  { title: 'India + international', body: 'Projects and equipment supply across India, the UAE and wider markets.' },
  { title: 'Three lines, one partner', body: 'Build, equip and source from one team — fewer hand-offs on site.' },
  { title: '30+ years leadership', body: 'Partners with decades of leadership at global enterprises and as founders.' },
]

export const LEADERS = [
  {
    name: 'Kanwar Shaminder Singh Bhatia',
    role: 'Managing Partner',
    initials: 'KB',
    bio: 'Company Manager of Stonewave Trading FZCO, leading the company and its operations from Dubai.',
    tags: ['Dubai, UAE'],
  },
  {
    name: 'Dr. Ravi Anand Rao',
    role: 'Partner',
    initials: 'RR',
    bio: '30 years of experience — Vice President at Accenture, AVP at iGate and senior positions at Infosys. Serial entrepreneur: Smart Retail, Mygubbi.com and YantraLive.com.',
    tags: ['NITK Surathkal', 'IIM Bangalore'],
  },
  {
    name: 'Umesh Sangurmath',
    role: 'Partner',
    initials: 'US',
    bio: '30 years of experience — CIO at Future Group and senior positions at Wipro Technologies. Serial entrepreneur: Smart Retail, Mygubbi.com and YantraLive.com.',
    tags: ['NITK Surathkal'],
  },
]

export const NAV = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Businesses' },
  { href: '#equipment', label: 'Equipment' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]
