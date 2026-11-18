/* =========================================================
   Shaily website concept — editable content
   Edit text here; pages update automatically.
   ========================================================= */
var R = (document.currentScript && document.currentScript.dataset.root) || '';
var IMG = function (n) { return R + 'assets/img/' + n; };
var DEV = function (n) { return R + 'assets/dev/' + n + '.webp'; };
var SHAILY_STATIC = 'https://static.shaily.com/images/';

var SITE = {
  regOffice: 'Survey No. 364/366, At & Po Rania, Taluka Savli, Vadodara 391780, Gujarat, India',
  corrOffice: '8, J P Nagar, Old Padra Road, Vadodara 390007, Gujarat, India',
  plants: ['Rania, Vadodara (three plants)', 'GIDC Halol, Panchmahal', 'Chandrapura, Halol–Savli Road (two plants)'],
  phonesGroup: ['+91 75748 05122', '+91 75748 05181'],
  pharma: { email: 'sales.pharma@shaily.com', india: '+91 6357 880 788', europe: '+44 (0)20 4615 1615', na: '+1 855 391 9989' },
  sales: 'sales@shaily.com',
  investors: { email: 'investors@shaily.com', bse: '501423', nse: 'SHAILY', link: 'https://shaily.com/investors/' }
};

/* ---------- Businesses (Our businesses + mega menu + quick-view pop-ups) ---------- */
var BUSINESSES = [
  { id: 'healthcare', name: 'Healthcare', url: 'healthcare/', color: 'teal', img: 'pens_lineup.webp',
    tagline: 'Self-injection platforms and drug-delivery devices for global pharma.',
    summary: 'Our fastest-growing business. Proprietary pen injectors, auto-injectors, an on-body injector, an eye applicator and primary pharmaceutical packaging — designed in the UK, made at scale in India.',
    facts: [['13', 'device platforms'], ['~35 mn', 'pens a year, installed capacity'], ['ISO 13485', 'MDSAP · ISO 15378']],
    points: ['Platforms behind the first generic semaglutide approvals in Canada', 'GLP-1, insulin, growth hormone, teriparatide and more', 'Clean-room moulding and automated assembly'] },
  { id: 'consumer', name: 'Consumer', url: 'consumer/', color: 'orange', img: 'cups_trays.webp',
    tagline: 'Products for homes and families, made for the world’s best-loved brands.',
    summary: 'Our founding business. Home furnishings, kitchen and storage, FMCG and personal-care packaging, and carbon-steel furniture — from design and tooling to finished, decorated products.',
    facts: [['10–25 yrs', 'customer relationships'], ['31+', 'countries served'], ['100%', 'renewable power']],
    points: ['Home furnishings, kitchenware, dining and storage', 'Personal-care and FMCG packaging', 'Decoration: pad printing, hot stamping, PVD, vacuum metallising'] },
  { id: 'key', name: 'Key Segments', url: 'key-segments/', color: 'green', img: 'auto_parts_black.webp',
    tagline: 'Industrial, consumer-electronics and semiconductor components at micron precision.',
    summary: 'Three growth engines on one precision platform: industrial components for automotive, appliances, lighting and power tools; precision internals for consumer electronics; and conductive trays for semiconductor assembly and test.',
    facts: [['+41%', 'industrial growth last year'], ['5 µm', 'tolerances'], ['IATF 16949', 'automotive quality']],
    points: ['Automotive, appliance, LED-lighting and power-tool parts', 'Precision internal components for consumer electronics', 'Conductive chip trays for semiconductor assembly and test'] }
];

/* ---------- Group numbers ---------- */
var NUMBERS = [
  ['1987', 'Our story began', 'plain'], ['31', 'Countries served', '+'], ['3,200', 'People', '+'],
  ['6', 'Manufacturing plants'], ['35', 'Million pens a year capacity', ' mn'], ['100', 'Renewable power', '%']
];

/* ---------- Did you know ---------- */
var FACTS = [
  'Some Shaily components weigh as little as 0.03 grams — and are moulded to tolerances of five microns.',
  'Shaily has been named best exporter of engineering plastic components by PLEXCONCIL for 21 consecutive years.',
  'Every unit of Shaily’s operating power now comes from renewable sources, including a 1.3 MW rooftop solar plant.',
  'ShailyPen Neo™ has zero dial extension and delivers its maximum dose in about four seconds.',
  'Shaily Mira™ can deliver up to 20 ml under the skin, programmable from one minute to two hours.',
  'Shaily is a licensed processor of Torlon, one of the toughest high-performance polymers.',
  'Shaily products reach customers in more than 31 countries from one base near Vadodara.'
];

/* ---------- News ---------- */
var NEWS = [
  { tag: 'Healthcare', date: 'FY 2025-26', title: 'Shaily-made semaglutide pens launch in Canada',
    text: 'A customer launched semaglutide pens manufactured by Shaily in Canada — one of the first markets to open after patent expiry. ShailyPen Neo™ and Harmony® 2 also launched commercially across India and other global markets.', img: 'pens_four.webp' },
  { tag: 'Healthcare', date: 'FY 2025-26', title: '₹423 crore, four-year pen-injector supply agreement',
    text: 'Shaily secured a four-year agreement with a large domestic pharmaceutical company for the supply of pen injectors.', img: 'pen_dose_window.webp' },
  { tag: 'Key Segments', date: 'FY 2025-26', title: 'Into the semiconductor supply chain',
    text: 'Shaily signed a supply agreement with a Korean technology partner to manufacture conductive chip trays for semiconductor assembly and test, as the partner’s intended sole manufacturing partner in India.', img: 'semi_tray.webp' },
  { tag: 'Key Segments', date: 'Q4 FY 2025-26', title: 'First consumer-electronics supplies begin',
    text: 'After multi-quarter qualification, Shaily began commercial supply of precision internal components to its first consumer-electronics customer.', img: 'pcb.webp' },
  { tag: 'Healthcare', date: 'FY 2025-26', title: 'New eye-applicator platform commissioned',
    text: 'A new eye-applicator platform was commissioned for a customer, with commercialisation targeted for FY 2026-27. A customer also received EMA approval for a teriparatide product using a Shaily device.', img: 'device_trio.webp' },
  { tag: 'People', date: 'March 2026', title: 'Joe Kam joins as COO – Healthcare',
    text: 'Chi Hung (Joe) Kam, a two-decade veteran of SHL Medical and Flextronics who has managed nine manufacturing sites, joined as Chief Operating Officer – Healthcare.', img: 'cleanroom_line.webp' }
];

/* ---------- Leadership ---------- */
var BOARD = [
  { id: 'mahendra-sanghvi', name: 'Mahendra (Mike) Sanghvi', role: 'Executive Chairman',
    bio: 'Promoter and Executive Chairman, involved in Shaily’s operations since its inception in 1987. A chemical engineer from Wayne State University, USA, and a plastics technologist with an MBA diploma from the University of Toronto. He has served on the boards of PLEXCONCIL and PlastIndia, and is an executive member of the Organisation of Plastics Processors of India.' },
  { id: 'amit-sanghvi', name: 'Amit Sanghvi', role: 'Managing Director',
    bio: 'Managing Director since May 2015. An electrical engineer from the University of Ottawa with an M.Sc. in Supply Chain and Manufacturing from Penn State, he worked with Arete Inc., PAS Romania, Pepsi Bottling Group and Coca-Cola Bottling before joining Shaily as GM – Projects. He also serves on the boards of Shaily Innovations in London and Dubai.' },
  { id: 'laxman-sanghvi', name: 'Laxman Sanghvi', role: 'Executive Director',
    bio: 'A chartered accountant and law graduate who has overseen projects, procurement, stores, budget control and administration. He was instrumental in establishing the carbon-steel facility and in developing the plastics plant at Halol, and is a past President of the Panchmahals Industries Association.' },
  { id: 'tilottama-sanghvi', name: 'Tilottama Sanghvi', role: 'Whole-Time Director',
    bio: 'A science graduate involved in Shaily’s operations since inception. She has managed the export-oriented and Rania plants, oversees administration and stores across facilities, and contributes to project budgeting, planning and execution.' },
  { id: 'ranjit-singh', name: 'Ranjit Singh', role: 'Independent Director',
    bio: 'Over 36 years in industrial management. A mechanical engineer from BITS Pilani and an IIM Ahmedabad MBA, he has been Managing Director of Kalpataru Power Transmission and Global COO of Polyplex Corporation, and sits on the Board of Governors of IIM Jammu.' },
  { id: 'shailesh-ayyangar', name: 'Dr. Shailesh Ayyangar', role: 'Independent Director',
    bio: 'Over 36 years of healthcare leadership. An alumnus of IIM Ahmedabad and INSEAD, he led the Organisation of Pharmaceutical Producers of India as President for four years and held leadership roles at GlaxoSmithKline in India and the UK.' },
  { id: 'samaresh-parida', name: 'Samaresh Parida', role: 'Independent Director',
    bio: 'A chartered accountant and IIM Ahmedabad MBA with 36+ years across strategy, finance, operations and M&A in India, the USA, Latin America and Russia — including Vodafone, PepsiCo (CFO, New York) and Toyota.' },
  { id: 'sangeeta-singh', name: 'Sangeeta Singh', role: 'Independent Director',
    bio: 'A seasoned HR leader with 36+ years across human resources, employer branding, communications and operations, and a postgraduate in Strategic HR Management from Harvard Business School. She was India Head of KPMG’s Network of Women.' }
];
var OFFICIALS = [
  ['Sanjay Shah', 'Chief Strategy Officer'], ['Paresh Jain', 'Chief Financial Officer'],
  ['Chi Hung (Joe) Kam', 'Chief Operating Officer – Healthcare'], ['Harish Punwani', 'Company Secretary & Compliance Officer']
];

/* ---------- Certifications ---------- */
var CERTS = ['ISO 9001', 'IATF 16949', 'ISO 13485', 'ISO 15378', 'MDSAP', 'ISO 14001', 'ISO 50001', 'SA 8000', 'RBA', 'SCAN', 'AEO', 'ISCC Plus'];

/* ---------- Stories (group carousel, one per business) ---------- */
var STORIES = [
  { business: 'Healthcare', bg: 'teal', img: 'pens_four.webp', title: 'The device has become as critical as the drug',
    text: 'As therapies move from hospital to home, Shaily’s pen injectors and auto-injectors are helping generic and innovator partners bring GLP-1 and other injectables to patients — including the first generic semaglutide launches.', link: 'healthcare/' },
  { business: 'Consumer', bg: 'orange', img: 'bio_tableware.webp', title: 'Everyday products, made more responsibly',
    text: 'For brands in home furnishing, FMCG and personal care, Shaily designs, tools, moulds and decorates at scale — and is moving towards bio-based and recycled polymers without giving up a micron of quality.', link: 'consumer/' },
  { business: 'Key Segments', bg: 'green', img: 'semi_tray.webp', title: 'From pharma-grade precision to semiconductors',
    text: 'The discipline built in regulated healthcare now powers new frontiers: precision internals for consumer electronics, and conductive trays for semiconductor assembly and test.', link: 'key-segments/' }
];

/* ---------- Group capability explorer ---------- */
var CAP_GROUP = [
  { label: 'Facilities', eyebrow: 'India · UK · UAE', title: 'One integrated base, a global reach',
    desc: 'Six plants near Vadodara bring moulding, automation, tooling and metal capabilities together, with innovation in the UK and a growing presence in the UAE.',
    facts: ['Six plants at Rania and Halol, Gujarat', 'Shaily Innovations — R&D hub in the UK', 'Products shipped to 31+ countries', 'Connected to key suppliers and ports'],
    items: [{ src: 'fac_india.webp', cap: 'India manufacturing facility' }, { src: 'hall_wide.webp', cap: 'Moulding hall' }, { src: 'fac_ukstudio.webp', cap: 'Shaily R&D Studio, UK' }] },
  { label: 'Moulding', eyebrow: 'Precision moulding', title: 'Small parts, very large numbers',
    desc: 'High-precision injection moulding in advanced engineering polymers, with servo-driven and all-electric presses and clean-room moulding for healthcare.',
    facts: ['Parts as light as 0.03 g', 'Tolerances down to 5 microns', 'PA, PBT, POM, PC, LCP, PPS, PES, PEEK, Torlon', 'Clean-room moulding for medical devices'],
    items: [{ src: 'tech_moulding_jsw300.webp', cap: 'Automated material feed to every press' }, { src: 'tech_moulding_robots.webp', cap: 'Robot-tended moulding lines' }, { src: 'mould_2.webp', cap: 'Healthcare moulding hall' }, { src: 'micro_moulding.webp', cap: 'Micro-precision moulding' }] },
  { label: 'Tool room', eyebrow: 'Tooling', title: 'Moulds made in-house',
    desc: 'Our own tool rooms design and build high-precision moulds, with recent investment in machining and EDM so tooling keeps pace with programmes.',
    facts: ['5-axis machining centres', 'Spark erosion (EDM) and graphite milling', 'Mould trials and optimisation', 'Faster iterations, one roof'],
    items: [{ src: 'tech_toolroom_haas_vf5.webp', cap: 'Tool room' }, { src: 'tech_toolroom_haas_cnc.webp', cap: 'CNC machining of mould parts' }, { src: 'edm_machine.webp', cap: 'Spark erosion' }, { src: 'toolroom_worker.webp', cap: 'Mould maintenance' }, { src: 'cnc_laser.webp', cap: 'Precision machining' }] },
  { label: 'Assembly & finishing', eyebrow: 'Value-added operations', title: 'From part to finished product',
    desc: 'Automated assembly and a full range of secondary operations turn moulded parts into finished, decorated products.',
    facts: ['Automated and clean-room assembly', 'Pad printing, hot stamping, screen printing', 'Painting, laser marking, ultrasonic welding', 'PVD coating and vacuum metallising'],
    items: [{ src: 'cleanroom_line.webp', cap: 'Automated assembly line' }, { src: 'pad_printing.webp', cap: 'Multi-colour pad printing' }, { src: 'assembly.webp', cap: 'Clean-room assembly' }] },
  { label: 'Quality & digital', eyebrow: 'Quality 4.0', title: 'From inspection to prediction',
    desc: 'CT scanning, optical and tactile metrology and mechanical testing, connected through IoT-enabled manufacturing and predictive quality systems.',
    facts: ['ZEISS METROTOM CT scanning', 'VMMs and CMMs from ZEISS, Micro-Vu and Keyence', 'IoT-enabled, traceable manufacturing', 'Moving from detect-and-correct to predict-and-prevent'],
    items: [{ src: 'tech_ct_scan_pen.webp', cap: 'A pen injector on the CT stage' }, { src: 'metrology_engineer.webp', cap: 'Metrology' }, { src: 'qc_vmm.webp', cap: 'Video measuring machine lab' }, { src: 'tech_force_testing.webp', cap: 'Mechanical testing' }] }
];

/* ---------- Healthcare capability explorer ---------- */
var CAP_HC = [
  { label: 'Clean rooms', eyebrow: 'Class 8 clean rooms', title: 'Moulded and assembled in clean rooms',
    desc: 'Injection moulding and automated assembly lines for medical devices run in Class 8 clean rooms, with lines for 25 million units and more coming online.',
    facts: ['Injection moulding in Class 8 clean rooms', 'Automated assembly lines in Class 8 clean rooms', '~35 million pens a year installed capacity', 'Lines scaling towards 40–60 million pens'],
    items: [{ src: 'cleanroom_assembly.webp', cap: 'Clean-room assembly' }, { src: 'cleanroom_line.webp', cap: 'Automated pen assembly line' }, { src: 'gloved_hands.webp', cap: 'Clean-room operations' }, { src: 'mould_1.webp', cap: 'Clean-room moulding' }] },
  { label: 'Quality lab', eyebrow: 'Quality & testing', title: 'Measured, scanned and tested in-house',
    desc: 'CT scanning, optical and tactile metrology and mechanical testing verify every critical dimension and device function.',
    facts: ['ZEISS METROTOM CT scanning', 'VMMs and CMMs from ZEISS, Micro-Vu and Keyence', 'Force and tensile testing of device functions', 'ISO 13485 QMS, audited by TÜV SÜD'],
    items: [{ src: SHAILY_STATIC + 'yVboBOFqRHCofZ3HUc51-800w-zeiss-ct-external-3-4-jpg', fb: 'qc_ct.webp', cap: 'ZEISS METROTOM CT scanner', abs: true }, { src: 'tech_ct_scan_pen.webp', cap: 'A pen injector on the CT stage' }, { src: 'testing_lab.webp', cap: 'Mecmesin force testing' }, { src: 'qc_vmm.webp', cap: 'Video measuring machine lab' }, { src: 'lab_microscope.webp', cap: 'Inspection' }] },
  { label: 'Design & tooling', eyebrow: 'Design to tooling', title: 'Concept, CAD and moulds under one roof',
    desc: 'Shaily Innovations in the UK takes devices from concept, patent landscaping and industrial design to tolerance analysis, prototyping and DFM — with moulds built in our own tool rooms.',
    facts: ['Concept creation and patent landscaping', 'Industrial design and tolerance analysis', 'Prototyping, DFM and DFA', 'In-house mould development'],
    items: [{ src: 'tech_design_workstation.webp', cap: 'Device engineering on CAD' }, { src: 'cad_engineer.webp', cap: 'Engineering workstation' }, { src: 'tech_toolroom_makino_edm.webp', cap: 'Precision machining' }, { src: 'fac_ukstudio.webp', cap: 'Shaily R&D Studio, UK' }] }
];

/* ---------- Healthcare platforms ---------- */
var PLATFORMS = [
 { id: 'neo', name: 'ShailyPen Neo™', status: 'mr', type: 'pen', kind: 'Spring-driven pen injector', len: 169,
   tag: 'Spring-driven pen for GLP-1 and other injectables, variable and fixed-dose.',
   desc: 'The injection force is stored mechanically and released on activation, delivering a consistent dose regardless of patient strength or dexterity. Variable and fixed-dose variants; 3 ml cartridges with a 1.5 ml fill option.',
   imgs: ['neo_a', 'neo_b'], key: [['0 mm', 'Extension'], ['~4 s', 'Max-dose delivery'], ['5–7 N', 'Force']],
   spec: { 'Length': '169.0 mm', 'Width': '17.8 mm', 'Dose setting': 'Dial – no extension', 'Dose actuation': 'Press button', 'Dose size': '0.75 ml max dose', 'Resolution': '0.01 ml', 'Primary pack': '3 ml cartridge (1.5 ml fill available)', 'Force': '5–7 N', 'Delivery time': '~4 s at max dose', 'Key features': 'No extension, spring driven, low consistent force', 'Compliance': 'ISO 11608, EU MDR, US FDA' } },
 { id: 'harmony', name: 'ShailyPen Harmony® 2', status: 'mr', type: 'pen', kind: 'Variable-dose pen injector', len: 162.5,
   tag: 'Variable-dose GLP-1 pen with low dial extension, 1.5 ml and 3 ml cartridges.',
   desc: 'Designed around GLP-1 dosing, with a dial-out mechanism that stays compact even at high doses — improving handling and discretion for long-term therapy.',
   imgs: ['harmony_a', 'harmony_b'], key: [['10.1 mm', 'Extension'], ['1.5 / 3 ml', 'Cartridge'], ['<15 N', 'Force']],
   spec: { 'Length': '162.5 mm', 'Width': '19.7 mm', 'Dose setting': 'Dial out', 'Dose actuation': 'Press in', 'Dose size': '0.75 / 0.6 ml (3 ml); 0.375 / 0.1875 ml (1.5 ml)', 'Primary pack': '3 ml or 1.5 ml cartridge', 'Extension': '10.1 mm', 'Force': '<15 N (3 ml); <13 N (1.5 ml)', 'Compliance': 'ISO 11608, EU MDR, US FDA' } },
 { id: 'axiommax', name: 'ShailyPen Axiom Max™', status: 'mr', type: 'pen', kind: 'Fixed-dose pen injector', len: 158,
   tag: 'Fixed-dose GLP-1 pen, zero-prime, with remaining-dose counter.',
   desc: 'Built to belong in a home, not a hospital: factory-primed, with a simple attach, pull and push. Launched commercially as part of the GLP-1 portfolio.',
   imgs: ['axiommax_a', 'axiommax_b'], key: [['Zero', 'Priming'], ['0.75 ml', 'Dose'], ['Counter', 'Doses left']],
   spec: { 'Length': '158 mm', 'Width': '18.3 mm', 'Dose setting': 'Pull out', 'Dose actuation': 'Push in', 'Dose size': '0.75 ml (customisable)', 'Primary pack': '3 ml or 1.5 ml cartridge', 'Extension': '21 mm', 'Force': '6–12 N', 'Key features': 'Zero prime, large dose volume, simple user steps', 'Compliance': 'ISO 11608, EU MDR, US FDA' } },
 { id: 'axiom', name: 'ShailyPen Axiom®', status: 'mr', type: 'pen', kind: 'Fixed-dose pen injector', len: 162,
   tag: 'Pen platform qualified across growth hormone, FSH, PTH and GLP-1 therapies.',
   desc: 'Factory-primed, removing the two most common user errors — priming and dose-setting — for therapies taken at home over months or years.',
   imgs: ['axiom'], key: [['Zero', 'Priming'], ['0.08 ml', 'Dose'], ['5–7 N', 'Force']],
   spec: { 'Length': '162.0 mm', 'Width': '24.5 mm', 'Dose setting': 'Pull out', 'Dose actuation': 'Push in', 'Dose size': '0.08 ml', 'Primary pack': '3 ml cartridge', 'Extension': '18.5 mm', 'Force': '5–7 N', 'Compliance': 'ISO 11608, EU MDR, US FDA' } },
 { id: 'protean', name: 'ShailyPen Protean®', status: 'mr', type: 'pen', kind: 'Variable-dose pen injector', len: 158.5,
   tag: 'Customisable variable-dose insulin pen, disposable or reusable, up to 60 units.',
   desc: 'Covers therapies in the 1 to 60 unit range in disposable and reusable formats.',
   variants: ['P3 · 3 dose', 'P5 · 5 dose', 'P60 · Disposable', 'PS1 · Single dose', 'PR60 · Reusable'],
   imgs: ['protean_a', 'protean_b', 'protean_c'], key: [['1–60', 'Units'], ['5', 'Variants'], ['5–8 N', 'Force']],
   spec: { 'Length': '158.5 mm', 'Width': '16 mm', 'Dose setting': 'Dial out', 'Dose size': '0.01 to 0.6 ml', 'Primary pack': '3 ml or 1.5 ml cartridge', 'Extension': '4.4–33 mm', 'Force': '5–8 N', 'Compliance': 'ISO 11608, EU MDR, US FDA' } },
 { id: 'toby', name: 'Shaily AI Toby™', status: 'mr', type: 'auto', kind: 'Two-step auto-injector', len: 137,
   tag: 'Two-step disposable auto-injector: cap off, push on skin.',
   desc: 'A minimal interaction for self-administration at scale, with needle lockout on withdrawal for sharps safety.',
   imgs: ['toby_a'], key: [['2', 'User steps'], ['1–7 s', 'Delivery'], ['1 ml', 'PFS']],
   spec: { 'Length': '137 mm', 'Width': '19 mm', 'Dose actuation': 'Press on skin', 'Dose size': 'Up to 1 ml', 'Primary pack': '1 ml PFS', 'Force': '10–15 N', 'Delivery time': '1–7 s (configurable)', 'Compliance': 'ISO 11040, ISO 11608, EU MDR, US FDA' } },
 { id: 'tristan', name: 'Shaily AI Tristan™', status: 'mr', type: 'auto', kind: 'Three-step auto-injector', len: 150,
   tag: 'Three-step auto-injector up to 1.0 ml, with lock and unlock.',
   desc: 'Lock and unlock guards against accidental firing; activation drives automatic needle insertion, delivery and retraction.',
   imgs: ['tristan'], key: [['~2 s', 'Delivery'], ['1.0 ml', 'PFS'], ['Auto', 'Retraction']],
   spec: { 'Length': '150 mm', 'Width': '20.9 mm', 'Dose setting': 'Remove cap, twist to unlock', 'Dose actuation': 'Press button', 'Primary pack': '1.0 ml PFS', 'Force': '~15 N', 'Delivery time': '~2 s', 'Compliance': 'ISO 11040, ISO 11608, EU MDR, US FDA' } },
 { id: 'toby225', name: 'Shaily AI Toby™ 2.25 ml', status: 'pl', type: 'auto', kind: 'Two-step auto-injector', len: 137,
   tag: 'The Toby interaction for larger doses up to 2.25 ml.',
   desc: 'Extends Toby to a 2.25 ml pre-filled syringe for higher-volume subcutaneous therapies.',
   imgs: ['toby_b'], key: [['2.25 ml', 'PFS'], ['1–7 s', 'Delivery'], ['2', 'User steps']],
   spec: { 'Width': '21.6 mm', 'Dose size': 'Up to 2.25 ml', 'Primary pack': '2.25 ml PFS', 'Force': '10–15 N', 'Compliance': 'ISO 11040, ISO 11608, EU MDR, US FDA' } },
 { id: 'tobyr', name: 'Shaily AI Toby™ Reusable', status: 'pl', type: 'auto', kind: 'Reusable auto-injector', len: 179.8,
   tag: 'Reusable auto-injector that cuts material, energy, shipping and cold-chain demands.',
   desc: 'The pre-filled syringe sits in a single-use Syringe Pod that attaches to a retained driver.',
   imgs: ['tobyr_a', 'tobyr_b'], key: [['Reusable', 'Driver'], ['1 ml', 'PFS'], ['1–7 s', 'Delivery']],
   spec: { 'Length': '179.8 mm (assembly)', 'Width': '24.3 mm', 'Primary pack': '1 ml PFS', 'Resettable': 'Yes', 'Compliance': 'ISO 11040, ISO 11608, EU MDR, US FDA' } },
 { id: 'tobyeu', name: 'Shaily AI Toby™ Emergency Use', status: 'pl', type: 'auto', kind: 'Emergency auto-injector', len: 160,
   tag: 'High-reliability auto-injector for epinephrine and other rescue drugs.',
   desc: 'Engineered for the reliability and ease of use rescue drugs demand under pressure.',
   imgs: ['tobyeu'], key: [['5 nines', 'Reliability target'], ['1 / 2.25 ml', 'PFS'], ['Auto', 'Insertion']],
   spec: { 'Length': '160 mm', 'Width': '28 mm', 'Primary pack': '1.0 ml long or 2.25 ml PFS', 'Needle': '1" 22 G / 1" 23 G', 'Compliance': 'ISO 11608, ISO 11040, EU MDR, US FDA' } },
 { id: 'maxim', name: 'ShailyPen Maxim™', status: 'pl', type: 'pen', kind: '80-unit variable-dose pen', len: 160,
   tag: '80-unit variable-dose pen, disposable or reusable.',
   desc: 'An 80-unit range with compact extension, so high-dose insulin users needn’t split an injection.',
   imgs: ['maxim_a', 'maxim_b'], key: [['80', 'Units'], ['22 mm', 'Extension'], ['0.8 ml', 'Dose']],
   spec: { 'Length': '160.0 mm', 'Width': '18.5 mm', 'Dose size': '0.8 ml', 'Primary pack': '3 ml cartridge', 'Force': '8–12 N', 'Compliance': 'ISO 11608, EU MDR, US FDA' } },
 { id: 'mira', name: 'Shaily Mira™', status: 'pl', type: 'obi', kind: 'Wearable on-body injector', len: 132, wide: true,
   tag: 'On-body injector for large-volume therapies up to 20 ml.',
   desc: 'Lets large-volume biologics be self-administered at home, with delivery programmable to the therapy.',
   imgs: ['mira'], key: [['20 ml', 'Max volume'], ['1 min–2 h', 'Delivery'], ['Play/pause', 'Control']],
   spec: { 'Size': '132 × 62 mm', 'Dose actuation': 'Electronic button', 'Dose size': 'Up to 20 ml', 'Delivery time': '1 minute to 2 hours', 'Compliance': 'ISO 11608, EU MDR, US FDA' } },
 { id: 'lan', name: 'ShailySafe LAN™', status: 'pl', type: 'safe', kind: 'Integrated safety syringe', len: 209,
   tag: 'Safety syringe for high-viscosity injectables such as lanreotide.',
   desc: 'For high-value, high-viscosity drugs given by healthcare professionals, with automatic needle retraction.',
   imgs: ['lan'], key: [['18 G', 'Needle'], ['20 s', 'Delivery'], ['Auto', 'Retraction']],
   spec: { 'Length': '209 mm', 'Dose size': 'Up to 0.5 ml', 'Needle': '18 G, 20 mm', 'Force': '20 N max', 'Compliance': 'ISO 11608, ISO 11040, ISO 23908, ISO 7886' } }
];

/* ---------- Innovation concepts (healthcare) ---------- */
var STAGES = ['Concept', 'Feasibility', 'Development', 'Pipeline', 'Market-ready'];
var CONCEPTS = [
  { id: 'closed-loop', title: 'Closed-loop wearable', theme: 'smart', stage: 1, device: 'Wearable sensing + delivery', therapy: 'Chronic conditions needing continuous management',
    need: 'A device that senses as well as delivers, so therapy responds to the patient in real time.',
    teaser: 'Continuous sensing and controlled delivery in a single wearable platform — across materials, miniaturisation, electronics and software.', img: 'device_trio.webp' },
  { id: 'eye-applicator', title: 'Eye-applicator platform', theme: 'niche', stage: 2, device: 'Ophthalmic applicator', therapy: 'Ophthalmic therapies',
    need: 'Precise, comfortable self-application of eye therapies.',
    teaser: 'Commissioned for a customer, with commercialisation targeted for the coming year.', img: 'lab_microscope.webp' },
  { id: 'mira', title: 'Shaily Mira™ on-body injector', theme: 'volume', stage: 3, device: 'Wearable on-body injector', therapy: 'Large-volume biologics',
    need: 'Moving infusions of up to 20 ml from clinic to home.', teaser: 'Programmable delivery from one minute to two hours, with play/pause control.', dev: 'mira' },
  { id: 'tobyr', title: 'Toby™ Reusable', theme: 'sustain', stage: 3, device: 'Reusable auto-injector', therapy: 'Weekly self-injected therapies',
    need: 'Less material, energy, shipping and cold-chain load per dose.', teaser: 'A single-use Syringe Pod on a retained driver.', dev: 'tobyr_a' },
  { id: 'tobyeu', title: 'Toby™ Emergency Use', theme: 'emergency', stage: 3, device: 'Emergency auto-injector', therapy: 'Epinephrine, tranexamic acid and other rescue drugs',
    need: 'Absolute reliability when every second counts.', teaser: 'Designed for five-nines reliability across every essential output.', dev: 'tobyeu' },
  { id: 'green-device', title: 'Low-material, recyclable devices', theme: 'sustain', stage: 0, device: 'Pen and auto-injector architectures', therapy: 'All self-injection platforms',
    need: 'Lower the footprint of every device without losing a micron of tolerance.', teaser: 'Less material intensity, design for recyclability, bio-based and recycled polymers.', img: 'bio_tableware.webp' }
];
var THEMES = { smart: 'Smart devices', niche: 'Niche therapies', volume: 'Large-volume', sustain: 'Sustainability', emergency: 'Emergency use' };

/* ---------- Careers (sample roles) ---------- */
var ROLES = [
  { id: 'bd', business: 'healthcare', title: 'Business Development Manager — Drug Delivery Platforms', fn: 'Business Development', loc: ['India', 'UK', 'North America'], type: 'Full-time', exp: '8+ years',
    sum: 'Bring Shaily’s self-injection platforms to pharmaceutical partners — from the first conversation to a signed development and supply agreement.',
    do: ['Build a pipeline of pharma, biotech, biosimilar and generic partners', 'Lead platform evaluations with customers’ device, formulation and regulatory teams', 'Own proposals, development and supply agreements', 'Act as the customer’s single point of contact across engineering, quality and operations'],
    bring: ['BD experience in drug-delivery devices, combination products or CDMO services', 'Working knowledge of ISO 11608 and combination-product regulation', 'A network across pharma device and procurement teams', 'Comfort with international travel'], tags: ['Platform sales', 'Key accounts', 'Contracts'] },
  { id: 'design', business: 'healthcare', title: 'Senior Device Design Engineer — Pens & Auto-injectors', fn: 'Engineering', loc: ['UK'], type: 'Full-time', exp: '6+ years',
    sum: 'Design and customise mechanisms for our pen and auto-injector platforms at the UK R&D Studio.',
    do: ['Design mechanisms for variable, fixed-dose and spring-driven devices', 'Customise platforms to drug, dose and user needs', 'Tolerance analysis and design for moulding and assembly', 'Own design inputs, risk files and verification'],
    bring: ['Mechanical design on injectable devices or precision products', 'Strong 3D CAD and tolerance stack-up skills', 'Understanding of ISO 11608 and design controls'], tags: ['CAD', 'Mechanisms', 'Design controls'] },
  { id: 'qra', business: 'healthcare', title: 'Quality & Regulatory Specialist — Medical Devices', fn: 'Quality', loc: ['India'], type: 'Full-time', exp: '5+ years',
    sum: 'Keep our QMS and device documentation audit-ready across ISO 13485, FDA 21 CFR 820, MDSAP and CDSCO.',
    do: ['Maintain QMS processes, CAPA and change control', 'Host customer and notified-body audits', 'Compile technical documentation for customer submissions'],
    bring: ['Medical-device QMS experience', 'Audit experience with FDA, notified bodies or customers', 'ISO 14971 risk management'], tags: ['ISO 13485', 'Audits', 'CAPA'] },
  { id: 'kam', business: 'consumer', title: 'Key Account Manager — Home Furnishings', fn: 'Business Development', loc: ['India'], type: 'Full-time', exp: '6+ years',
    sum: 'Grow long-term relationships with global home-furnishing and FMCG brands.',
    do: ['Manage programmes from brief to launch', 'Coordinate design, tooling and production teams', 'Develop new categories with existing customers'],
    bring: ['Account management in consumer products or packaging', 'Understanding of injection-moulded product development', 'Export customer experience'], tags: ['Key accounts', 'Exports'] },
  { id: 'pde', business: 'consumer', title: 'Product Development Engineer — Consumer Products', fn: 'Engineering', loc: ['India'], type: 'Full-time', exp: '3+ years',
    sum: 'Turn customer concepts into manufacturable, decorated products.',
    do: ['Design for moulding, assembly and decoration', 'Run trials and first-article approvals', 'Drive material and cost improvements, including recycled polymers'],
    bring: ['Plastic part design experience', 'Knowledge of decoration processes', 'Hands-on problem solving'], tags: ['DFM', 'Decoration', 'Recycled materials'] },
  { id: 'semi', business: 'key', title: 'Process Engineer — Semiconductor Trays', fn: 'Engineering', loc: ['India'], type: 'Full-time', exp: '4+ years',
    sum: 'Industrialise conductive chip trays for semiconductor assembly and test.',
    do: ['Qualify moulding processes for conductive polymers', 'Set up inspection for flatness and dimensional control', 'Work with the technology partner on ramp-up'],
    bring: ['Precision moulding process experience', 'Familiarity with ESD-safe materials', 'Data-driven process control'], tags: ['Semiconductors', 'Process'] },
  { id: 'auto', business: 'key', title: 'Programme Manager — Automotive & Industrial', fn: 'Programme Management', loc: ['India'], type: 'Full-time', exp: '6+ years',
    sum: 'Lead new automotive, power-tool and lighting programmes to launch under IATF 16949.',
    do: ['Run APQP and PPAP', 'Coordinate tooling, moulding and quality', 'Manage customer milestones and change'],
    bring: ['Automotive programme experience', 'IATF 16949 and APQP knowledge', 'Clear customer communication'], tags: ['APQP', 'IATF 16949'] },
  { id: 'q40', business: 'group', title: 'Data & Automation Engineer — Quality 4.0', fn: 'Digital', loc: ['India'], type: 'Full-time', exp: '3+ years',
    sum: 'Connect machines and quality systems to move from inspection to prediction.',
    do: ['Integrate IoT data from presses and assembly lines', 'Build dashboards and predictive-quality models', 'Support digital traceability'],
    bring: ['Industrial IoT or MES experience', 'Python/SQL and analytics', 'Curiosity about manufacturing'], tags: ['IoT', 'Analytics', 'AI'] },
  { id: 'tool', business: 'group', title: 'Tool Design & Manufacturing Engineer', fn: 'Tooling', loc: ['India'], type: 'Full-time', exp: '5+ years',
    sum: 'Design and build high-precision multi-cavity moulds in our in-house tool rooms.',
    do: ['Design moulds for precision components', 'Programme 5-axis machining and EDM', 'Run mould trials and optimisation'],
    bring: ['Mould design and tool-room experience', 'CAM on 5-axis machines', 'Shop-floor problem solving'], tags: ['Mould design', '5-axis', 'EDM'] }
];
var BUSINESS_NAMES = { healthcare: 'Healthcare', consumer: 'Consumer', key: 'Key Segments', group: 'Group functions' };

/* ---------- Consumer ---------- */
var CONSUMER_PRODUCTS = [
  { title: 'Home furnishings', img: 'kids_chair.webp', tone: 'o', short: 'Precision components and finished products for global home and furniture brands.',
    text: 'Components and finished products for global home-furnishing brands, many in long-running programmes spanning 10–25 years.', list: ['Furniture components and fittings', 'Children’s furniture', 'Assembled and packed products'] },
  { title: 'Kitchen & dining', img: 'kitchen_jar.webp', tone: '', short: 'Kitchenware, integrated cooking and dining products.',
    text: 'Food-contact kitchenware, integrated cooking and dining products, moulded and finished for retail.', list: ['Storage jars and containers', 'Tableware and serveware', 'Integrated cooking products'] },
  { title: 'Storage & organisation', img: 'cups_trays.webp', tone: 't', short: 'Organisational and storage solutions for every room.',
    text: 'Stackable, modular storage and organisation products designed for durability and flat-pack logistics.', list: ['Trays, bins and organisers', 'Modular, stackable designs', 'Multi-colour programmes'] },
  { title: 'Household care', img: 'brushes.webp', tone: 'o', short: 'Brushes and cleaning products built for daily use.',
    text: 'Household cleaning products, moulded, assembled and finished in-house.', list: ['Multi-material products', 'Moulded and assembled in-house', 'Decorated to brand standards'] },
  { title: 'Personal-care packaging', img: 'cosmetic_caps.webp', tone: '', short: 'Caps, closures and dispensers for FMCG and beauty brands.',
    text: 'High-volume precision packaging for personal-care and FMCG brands, decorated to brand standards.', list: ['Caps, closures and dispensers', 'Hot stamping and metallised finishes', 'Higher-cavitation moulds'] },
  { title: 'FMCG closures', img: 'caps.webp', tone: 't', short: 'Closures in brand colours at very high volume.',
    text: 'Closures and components in brand colours for leading FMCG brands, produced at very high volumes.', list: ['Brand colours', 'High-volume moulding', 'Higher-cavitation moulds'] },
  { title: 'Bio-based tableware', img: 'bio_tableware.webp', tone: '', short: 'Plates, cups and cutlery in bio-based and recycled polymers.',
    text: 'Products in bio-based and recycled polymers, supported by ISCC Plus certification for traceable sustainable materials.', list: ['Bio-polymers and recycled content', 'ISCC Plus certification', 'Lower-carbon materials'] },
  { title: 'Carbon-steel furniture', img: 'hall_close.webp', tone: 'o', short: 'Metal furniture made alongside our plastics.',
    text: 'A dedicated carbon-steel facility with press shop, laser cutting, welding and powder coating, so multi-material furniture is built under one roof.', list: ['Press shop and laser cutting', 'Robotic welding', 'Powder coating'] }
];
var CAP_CONS = [
  { label: 'Design & tooling', eyebrow: 'Concept to tool', title: 'Designed for the shelf, engineered for the line',
    desc: 'We develop products with our customers’ design teams and build the tools in-house, balancing aesthetics, function, durability and cost.',
    facts: ['Product development with brand teams', 'In-house mould design and tool rooms', 'Higher-cavitation moulds', 'Trials and approvals in-house'],
    items: [{ src: 'cad_engineer.webp', cap: 'Product engineering' }, { src: 'tech_toolroom_haas_vf5.webp', cap: 'Tool room' }, { src: 'toolroom_worker.webp', cap: 'Mould maintenance' }] },
  { label: 'Moulding at scale', eyebrow: 'High-volume moulding', title: 'Millions of parts, every one the same',
    desc: 'Large halls of robot-tended presses, from small to large tonnage, with automated material handling.',
    facts: ['Robot-tended moulding lines', 'Presses from small to large tonnage', 'Engineering and commodity polymers', 'Automated material feed'],
    items: [{ src: 'tech_moulding_robots.webp', cap: 'Robot-tended moulding lines' }, { src: 'hall_wide.webp', cap: 'Moulding hall' }, { src: 'tech_moulding_bl550.webp', cap: 'Large-tonnage presses' }] },
  { label: 'Decoration', eyebrow: 'Finishing', title: 'Finishes that carry the brand',
    desc: 'A full range of decoration and secondary operations in-house.',
    facts: ['Pad printing and screen printing', 'Hot stamping and painting', 'PVD coating and vacuum metallising', 'Laser marking and ultrasonic welding'],
    items: [{ src: 'pad_printing.webp', cap: 'Multi-colour pad printing' }, { src: 'cosmetic_caps.webp', cap: 'Decorated closures' }, { src: 'knobs.webp', cap: 'Metallised finishes' }] },
  { label: 'Assembly & delivery', eyebrow: 'Assembly', title: 'Finished, packed and shipped',
    desc: 'Automated assembly and packing, shipped from one base near Vadodara to customers in 31+ countries.',
    facts: ['Assembly and packing', 'Finished, packed products', 'Close to key ports', 'Exports to 31+ countries'],
    items: [{ src: 'cleanroom_line.webp', cap: 'Automated assembly' }, { src: 'organiser.webp', cap: 'Retail-ready products' }, { src: 'fac_india.webp', cap: 'India manufacturing facility' }] }
];
var CONSUMER_CUSTOMERS = ['IKEA', 'Unilever', 'P&G', 'Gillette', 'Corvi', 'Lidl', 'Lowe’s'];

/* ---------- Key Segments ---------- */
var KEY_SEGMENTS = [
  { id: 'industrial', name: 'Industrial', short: 'Automotive, appliances, lighting and power tools', img: 'auto_parts_black.webp',
    title: 'Precision parts for demanding applications',
    text: 'Automotive components including knobs and switchgear parts, appliance casings, LED-lighting components, power-tool parts and high-performance engineering products — where dimensional accuracy, repeatability and material performance are non-negotiable.',
    list: ['Automotive interior and switchgear parts', 'Appliance casings and knobs', 'LED-lighting components', 'Power-tool components', 'High-performance engineering parts in PEEK and Torlon'],
    facts: [['+41%', 'Growth last year'], ['IATF 16949', 'Automotive quality'], ['Torlon', 'Licensed processor']] },
  { id: 'electronics', name: 'Consumer electronics', short: 'Precision internal components', img: 'pcb.webp',
    title: 'Inside the devices people carry',
    text: 'After multi-quarter qualification, Shaily began commercial supply of precision internal components to its first consumer-electronics customer — with two new business wins during the year.',
    list: ['Precision internal components', 'Tight-tolerance precision moulding', 'Qualified with leading global OEMs', 'Scaling production through a South India facility'],
    facts: [['2', 'New business wins'], ['5 µm', 'Tolerances'], ['0.03 g', 'Lightest parts']] },
  { id: 'semis', name: 'Semiconductors', short: 'Conductive chip trays for assembly and test', img: 'semi_tray.webp',
    title: 'Inside the semiconductor supply chain',
    text: 'A supply agreement with a Korean technology partner to manufacture conductive chip trays — a daily-use consumable for semiconductor assembly and test — with Shaily as the partner’s intended sole manufacturing partner in India.',
    list: ['Conductive, ESD-safe chip trays', 'Recurring, consumable-style demand', 'Serving assembly and test first, fabs as India’s ecosystem grows', 'Export potential beyond India'],
    facts: [['Sole', 'Intended partner in India'], ['ESD', 'Conductive materials'], ['Daily', 'Consumable demand']] }
];
var MATERIALS = [
  ['PEEK', 'Ultra-high-performance polymer for heat, chemical and wear resistance.'], ['Torlon', 'Polyamide-imide for extreme strength at high temperature — Shaily is a licensed processor.'],
  ['LCP', 'Liquid-crystal polymer for thin walls and fine features in electronics.'], ['PPS', 'Dimensionally stable, flame-resistant and chemically resistant.'],
  ['PES', 'Transparent, tough and heat-resistant engineering polymer.'], ['PA6 / 66 / 12', 'Nylons for strength, toughness and wear.'],
  ['PBT', 'Electrical-grade polyester for connectors and housings.'], ['POM', 'Low-friction acetal for gears and mechanisms.'], ['PC', 'Clear, impact-resistant polycarbonate.']
];
var REASONS = [
  ['Proven precision', 'Components as light as 0.03 g, to tolerances as tight as five microns, at commercial volumes — built over fifteen years in regulated healthcare.'],
  ['Established quality systems', 'ISO 9001, IATF 16949, ISO 13485, MDSAP, ISO 14001 and RBA — with consistency, traceability and audit readiness built in.'],
  ['Commercial traction', 'Supplying a first consumer-electronics customer and contracted to make semiconductor chip trays — proof of moving from qualification to supply.'],
  ['Disciplined capacity', 'Asset utilisation and productivity first, with a strong credit profile to support growth.'],
  ['Global presence', 'An India-based manufacturing platform with international operations and customers across 31+ countries.']
];
var CAP_KEY = [
  { label: 'Precision moulding', eyebrow: 'Micro-precision', title: 'Tolerances measured in microns',
    desc: 'Servo-driven and all-electric presses mould engineering polymers to five-micron tolerances.',
    facts: ['Servo-driven and all-electric presses', 'Higher-cavitation moulds', 'Engineering and ultra-high-performance polymers', 'IoT-enabled process data'],
    items: [{ src: 'micro_moulding.webp', cap: 'Micro-precision moulding' }, { src: 'tech_moulding_jsw220.webp', cap: 'All-electric presses' }, { src: 'tech_moulding_jsw300.webp', cap: 'Automated material feed' }] },
  { label: 'Tooling', eyebrow: 'Tool room', title: 'Moulds built in-house',
    desc: '5-axis machining, graphite milling and spark erosion for high-precision, multi-cavity moulds.',
    facts: ['5-axis machining centres', 'Graphite milling and EDM', 'Mould trials and optimisation', 'Faster tooling iterations'],
    items: [{ src: 'tech_toolroom_haas_cnc.webp', cap: 'CNC machining' }, { src: 'edm_machine.webp', cap: 'Spark erosion' }, { src: 'cnc_laser.webp', cap: 'Precision machining' }] },
  { label: 'Metrology', eyebrow: 'Quality 4.0', title: 'Measured, traced, predicted',
    desc: 'CT scanning, optical and tactile metrology, with IoT-enabled manufacturing and predictive quality.',
    facts: ['ZEISS METROTOM CT scanning', 'VMMs and CMMs from ZEISS, Micro-Vu and Keyence', 'Digital traceability', 'IATF 16949 quality system'],
    items: [{ src: 'metrology_engineer.webp', cap: 'Metrology' }, { src: 'qc_vmm.webp', cap: 'Video measuring machine lab' }, { src: 'tech_ct_metrotom.webp', cap: 'CT scanner' }] }
];
var KEY_CUSTOMERS = ['GE Appliances', 'Garrett Advancing Motion', 'MABE', 'Phoenix Mechano', 'Schaeffler', 'Hilti', 'Focus Light', 'Armivan', 'Muviq'];
