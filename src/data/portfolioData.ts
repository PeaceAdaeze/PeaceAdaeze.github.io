export interface MetricItem {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
}

export interface CompetencyPillar {
  id: string;
  index: string;
  title: string;
  summary: string;
  items: {
    name: string;
    detail: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  category: 'agronomy' | 'leadership';
  highlights: string[];
}

export interface ProjectCaseStudy {
  id: string;
  subtitle: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  cropFocus: string;
  scaleOrYield: string;
  summary: string;
  extendedOverview: string;
  specs: { label: string; value: string }[];
  roleResponsibilities: string[];
  methodsApplied: string[];
  outcome: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  gallery: { src: string; alt: string; label: string }[];
}

export interface SpeakingEngagement {
  event: string;
  role: string;
  topic: string;
}

export interface BookPublication {
  title: string;
  year: string;
  citation: string;
}

export interface EducationItem {
  credential: string;
  institution: string;
  date: string;
  status?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category:
    | 'Greenhouse Canopy'
    | 'Seedling & Substrate'
    | 'Crop & IPM Inspection'
    | 'Executive Portrait';
  aspectClass: string;
  objectPosition?: string;
}

export const CV_PDF_URL = '/assets/aistudio/PEACE_ADAEZE_ANYAERIUBA_025547_25cd5e57.pdf';
export const CV_DOWNLOAD_FILENAME = 'Peace_Adaeze_Anyaeriuba_CV.pdf';

export const PROFILE = {
  fullName: 'Peace Adaeze Anyaeriuba',
  displayNameWithCredential: 'Peace Adaeze Anyaeriuba (MBA)',
  cvTitleLine:
    'Senior Agronomist | Greenhouse Consultant | Agricultural Monetisation & Agribusiness Strategist',
  headline: 'Engineering Predictable Greenhouse Yields & Profitable Agricultural Monetisation',
  heroSummary:
    'Senior Agronomist, Greenhouse Production Specialist, and Agricultural Monetisation Strategist experienced across 11 commercial greenhouse and open-field developments. Specializing in high-value indeterminate tomatoes and peppers (1,600–1,800 kg per cycle) while transforming agricultural operations into structured, revenue-generating agribusinesses with over 80% improvement in production outcomes.',
  phone: '+2348140437356',
  phoneHref: 'tel:+2348140437356',
  email: 'zenithadaeze1996@gmail.com',
  emailHref: 'mailto:zenithadaeze1996@gmail.com',
  linkedinLabel: 'www.linkedin.com/in/peace-anyaeriuba',
  linkedinUrl: 'https://www.linkedin.com/in/peace-anyaeriuba',
  heroImage: '/assets/aistudio/IMG-20261124-WA0017_b7250b3f.jpg',
  heroImageAlt:
    'Peace Adaeze Anyaeriuba inspecting trellised pepper crops inside a commercial greenhouse canopy with trellising twine in hand',
  portraitImage: '/assets/aistudio/IMG-20260821-WA0006_0283e94d.jpg',
  portraitImageAlt:
    'Studio portrait of Peace Adaeze Anyaeriuba, Senior Agronomist and Greenhouse Consultant',
};

export const WORKFLOW_STEPS = [
  'Nursery & Propagation',
  'Substrate & Greenhouse Setup',
  'Automated Fertigation',
  'IPM & Canopy Control',
  'Post-Harvest & Off-Take',
];

export const HERO_METRICS: MetricItem[] = [
  {
    target: 11,
    suffix: '',
    label: 'Commercial Developments',
    context: 'Greenhouse & open-field sites managed and consulted',
  },
  {
    target: 1800,
    suffix: ' kg',
    label: 'Cycle Yield Benchmark',
    context: '10 m × 30 m greenhouse minimum (1,600 kg in 8 m × 24 m)',
  },
  {
    target: 80,
    prefix: '> ',
    suffix: '%',
    label: 'Outcome Improvement',
    context: 'Production gains with reduced first-cycle losses',
  },
  {
    target: 1000,
    suffix: '+',
    label: 'Women & Youth Empowered',
    context: 'Alongside 200+ students mentored & 100+ farmers trained',
  },
];

export const ABOUT_NARRATIVE = {
  leadPrefix: 'I don’t just manage crops —',
  leadHighlight: 'I turn agricultural production into structured, monetizable wealth.',
  paragraphs: [
    'Peace Adaeze Anyaeriuba is a Senior Agronomist, Greenhouse Consultant, and Agricultural Monetisation Strategist whose work pairs rigorous plant science with commercial profit architecture. Grounded in Science Education (Biology/Chemistry) from the University of Nigeria, Nsukka, and advancing an MBA at Ahmadu Bello University, Zaria, she bridges agronomic precision and disciplined enterprise monetisation.',
    'Across six completed production cycles and eleven commercial greenhouse and open-field developments, she specializes in high-value indeterminate tomatoes, bell peppers, and habanero peppers—achieving minimum benchmark yields of 1,600 kg per cycle in 8 m × 24 m greenhouses and 1,800 kg per cycle in 10 m × 30 m structures through precision nutrient management, cocopeat/substrate cultivation, NFT hydroponics, automated fertigation, and Integrated Pest Management (IPM).',
    'As an Agricultural Monetisation Strategist, she helps startup farms, agripreneurs, and investors transition from subsistence or trial farming to bankable commercial ventures—aligning planting schedules with market windows, strengthening off-taker sales channels, and cutting avoidable first-cycle losses for over 80% improvement in production outcomes. She is the author of four 2025 agribusiness books (including Wealth Pathways in Agriculture and Multiplying Profit Using the ATM Model), trainer of 100+ farmers, mentor to 200+ agricultural students, advisor to 50+ agribusinesses, and an international speaker featured on Agro Turk TV (Turkey).',
  ],
};

export const SERVICE_PILLARS = [
  {
    id: 'protected-ag',
    title: 'Protected-Environment Production',
    desc: 'Commercial greenhouse crop management, NFT hydroponics, cocopeat/substrate culture, and climate-controlled cultivation engineered for predictable high-value yields.',
  },
  {
    id: 'precision-nutrition',
    title: 'Fertigation, Nursery & IPM',
    desc: 'End-to-end seedling propagation protocols, calibrated drip irrigation and automated fertigation regimes, and biological/chemical Integrated Pest Management.',
  },
  {
    id: 'agribusiness-strategy',
    title: 'Agricultural Monetisation & Strategy',
    desc: 'Farm monetisation frameworks, Business Model Canvas structuring, profit multiplication models, off-taker alignment, agribusiness financial literacy, and workforce training.',
  },
];

export const COMPETENCY_PILLARS: CompetencyPillar[] = [
  {
    id: 'agronomy',
    index: '01',
    title: 'Agronomy & Crop Science',
    summary:
      'Biological crop stewardship rooted in plant physiology, soil chemistry, and proactive pest protection from seed germination to harvest.',
    items: [
      {
        name: 'Indeterminate Tomatoes & Peppers',
        detail: 'Commercial production of indeterminate tomatoes, bell peppers, and habanero peppers.',
      },
      {
        name: 'Nursery Care & Seedling Propagation',
        detail: 'Seed sowing, germination protocols, and seedling vigor management prior to transplanting.',
      },
      {
        name: 'Integrated Pest Management (IPM)',
        detail: 'Biological and chemical IPM procedures protecting crops against greenhouse pests.',
      },
      {
        name: 'Soil Fertility & Nutrition Management',
        detail: 'Precision crop nutrition and soil fertility plans improving resource efficiency.',
      },
      {
        name: 'Open-Field & Protected Physiology',
        detail: 'Plant health supervision across both open-field plots and protected structures.',
      },
    ],
  },
  {
    id: 'greenhouse',
    index: '02',
    title: 'Greenhouse & Hydroponics',
    summary:
      'Turnkey protected-agriculture systems engineered to standardize yield benchmarks and mitigate environmental volatility.',
    items: [
      {
        name: 'NFT Hydroponics & Substrate Culture',
        detail: 'Nutrient Film Technique hydroponics and cocopeat/substrate grow-bag cultivation.',
      },
      {
        name: 'Drip Irrigation & Automated Fertigation',
        detail: 'Precision drip irrigation scheduling and stage-mapped automated fertigation regimes.',
      },
      {
        name: 'Climate & Environmental Control',
        detail: 'Protected microclimate regulation sustaining steady pollination and fruit set.',
      },
      {
        name: 'Protected Agriculture Design & Setup',
        detail: 'Greenhouse layout commissioning, weed-mat flooring, and overhead trellising.',
      },
      {
        name: 'Post-Harvest Loss Reduction',
        detail: 'Standardized harvesting and post-harvest handling protocols protecting market grade.',
      },
    ],
  },
  {
    id: 'agribusiness',
    index: '03',
    title: 'Agricultural Monetisation & Strategy',
    summary:
      'Commercial monetisation frameworks and human-capacity systems that turn technical farms into profitable, bankable agribusinesses.',
    items: [
      {
        name: 'Farm Monetisation & Profit Modeling',
        detail: 'Designing revenue pathways, contract farming structures, and profit-multiplication systems.',
      },
      {
        name: 'Business Model Canvas (BMC)',
        detail: 'Certified agribusiness modeling aligned with BMZ (Germany) enterprise standards.',
      },
      {
        name: 'Agribusiness Financial Literacy',
        detail: 'Unit economics, cost control, and financial literacy education for agripreneurs.',
      },
      {
        name: 'Extension & Capacity Building',
        detail: 'Hands-on technical training for farmers, interns, client staff, and masterclasses.',
      },
      {
        name: 'Commercial Risk & Off-Taker Alignment',
        detail: 'Preventing first-cycle crop failures while strengthening vendor and off-taker sales channels.',
      },
    ],
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'ati-admin',
    role: 'Administrator',
    organization: 'Agribusiness Thinking Institute',
    location: 'Nigeria',
    period: 'May 2026 – Present',
    category: 'leadership',
    highlights: [
      'Direct administrative coordination and strategic program delivery for agribusiness leadership and enterprise initiatives.',
    ],
  },
  {
    id: 'afara-farm',
    role: 'Start-up Farm Technical Support',
    organization: 'Afara Farm',
    location: 'Umuahia, Abia State',
    period: 'April 2026 – Present',
    category: 'agronomy',
    highlights: [
      'Designing structured planting schedules aligned with market demand and crop cycles.',
      'Mapping out stage-specific fertigation regimes for optimal crop nutrition.',
      'Establishing post-harvest handling protocols to preserve quality and reduce avoidable losses.',
      'Training local farmers on disciplined greenhouse and field execution.',
    ],
  },
  {
    id: 'ijebu-unique',
    role: 'Greenhouse Consultant',
    organization: 'Ijebu Unique Farms',
    location: 'Umuahia, Abia State',
    period: 'Dec. 2025 – Present',
    category: 'agronomy',
    highlights: [
      'Designing planting schedules for protected-environment commercial production.',
      'Mapping out precision fertigation regimes tailored to substrate cultivation.',
      'Implementing standardized post-harvest handling protocols.',
      'Training local farmers on greenhouse management and daily operational standards.',
    ],
  },
  {
    id: 'homefront-tech',
    role: 'Greenhouse Consultant',
    organization: 'Homefront Tech Farm',
    location: 'Uyo, Akwa Ibom State',
    period: 'July 2025 – Dec. 2025',
    category: 'agronomy',
    highlights: [
      'Trained local farmers on greenhouse processes and standard operating procedures.',
      'Drove consistent yields of ≥ 1,200 kg per cycle for high-value pepper varieties.',
    ],
  },
  {
    id: 'bic-farms',
    role: 'Agronomy Trainer & Nursery Manager',
    organization: 'BIC Farms Concept',
    location: 'Ogun State',
    period: 'Jan. 2025 – June 2025',
    category: 'agronomy',
    highlights: [
      'Directed all nursery operations, managing seed sowing, germination, and seedling propagation protocols to ensure maximum seedling vigor prior to field and greenhouse transplanting.',
      'Supervised transplanting and crop maintenance across 6 commercial greenhouses (8 m × 24 m), optimizing drip irrigation and fertigation schedules.',
      'Formulated and delivered practical curriculum for interns, client representatives, and Masterclass participants on nursery setups, greenhouse management, and protected cropping.',
      'Enforced biological and chemical Integrated Pest Management (IPM) procedures to protect indeterminate tomato and pepper crops against common greenhouse pests.',
    ],
  },
  {
    id: 'ezesinachi-farms',
    role: 'Farm Coordinator',
    organization: 'Ezesinachi Farms',
    location: 'Aba, Abia State',
    period: 'May 2022 – Dec. 2024',
    category: 'agronomy',
    highlights: [
      'Coordinated end-to-end operations for a multi-crop commercial family farm, managing resource allocation, input procurement, and labor teams.',
      'Implemented modern agronomic techniques and soil fertility management plans, improving resource efficiency and reducing operational waste.',
      'Strengthened commercial partnerships with input vendors and off-takers to ensure input availability and profitable sales channels.',
      'Managed field labor during planting, weeding, fertigation, and harvest, maintaining strict quality standards for market produce.',
    ],
  },
  {
    id: 'bank-of-a-woman',
    role: 'Operations Manager',
    organization: 'B.A.N.K. of A Woman Global Initiative',
    location: 'Nigeria',
    period: 'May 2020 – Present',
    category: 'leadership',
    highlights: [
      'Lead operational planning, event execution, and outreach strategy for regional workshops, leadership summits, and empowerment campaigns.',
      'Spearheaded financial literacy and capacity-building programs that empowered over 1,000 females, including undergraduate students, secondary school girls, and mothers.',
      'Established operational frameworks to optimize organizational workflows, stakeholder communication, and resource deployment.',
    ],
  },
];

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'bic-six-greenhouses',
    subtitle: 'Commercial Nursery & Protected Cropping',
    title: 'Six-Unit Commercial Greenhouse & Nursery Operations',
    organization: 'BIC Farms Concept',
    location: 'Ogun State',
    period: 'Jan. 2025 – June 2025',
    cropFocus: 'Indeterminate Tomatoes & Peppers',
    scaleOrYield: '6 Greenhouses (8 m × 24 m) · 1,600 kg Benchmark',
    summary:
      'Directed end-to-end nursery propagation, transplanting, drip fertigation optimization, and practical masterclass instruction across six commercial 8 m × 24 m greenhouse units.',
    extendedOverview:
      'Serving as Agronomy Trainer and Nursery Manager at BIC Farms Concept in Ogun State, Peace oversaw every biological and operational milestone from seed sowing and germination vigor checks through transplanting into substrate grow-bags inside six commercial 8 m × 24 m greenhouses. Alongside crop supervision, she authored and delivered hands-on training curricula for interns, client farm representatives, and Masterclass cohorts, enforcing strict biological and chemical IPM protocols.',
    specs: [
      { label: 'Facility Footprint', value: '6 Commercial Greenhouses (8 m × 24 m each)' },
      { label: 'Target Crops', value: 'Indeterminate Tomatoes & High-Value Peppers' },
      { label: 'Cultivation System', value: 'Cocopeat / Substrate Grow-Bags & Drip Fertigation' },
      { label: 'Benchmark Capacity', value: '1,600 kg minimum yield per 8 m × 24 m cycle' },
      { label: 'Training Scope', value: 'Interns, Client Representatives & Masterclasses' },
    ],
    roleResponsibilities: [
      'Directed all nursery operations including seed sowing, germination, and seedling propagation protocols.',
      'Supervised transplanting, trellising, and crop maintenance across 6 commercial greenhouses (8 m × 24 m).',
      'Optimized drip irrigation and stage-specific fertigation schedules.',
      'Enforced biological and chemical IPM procedures against common greenhouse pests.',
    ],
    methodsApplied: [
      'Seedling Vigor & Nursery Propagation Protocols',
      'Calibrated Drip Irrigation & Automated Fertigation',
      'Biological & Chemical Integrated Pest Management',
      'Hands-On Masterclass & Client Curriculum Delivery',
    ],
    outcome:
      'Established uniform seedling vigor prior to transplanting, disciplined pest protection across all six greenhouses, and repeatable protected-cropping execution for client teams.',
    image: '/assets/aistudio/IMG-20261124-WA0023_8a75e75f.jpg',
    imageAlt:
      'Peace Adaeze Anyaeriuba inspecting newly transplanted seedlings in substrate grow-bags with drip lines inside a commercial greenhouse',
    objectPosition: 'center 25%',
    gallery: [
      {
        src: '/assets/aistudio/IMG-20261124-WA0023_8a75e75f.jpg',
        alt: 'Inspecting young seedlings in cocopeat substrate bags with drip emitters',
        label: 'Transplanting & Substrate Grow-Bag Commissioning',
      },
      {
        src: '/assets/aistudio/IMG-20261124-WA0017_b7250b3f.jpg',
        alt: 'Mature trellised pepper canopy inside a commercial greenhouse',
        label: 'Mature Canopy Trellising & Twine Support',
      },
      {
        src: '/assets/aistudio/IMG-20261124-WA0006_c65ad54e.jpg',
        alt: 'Greenhouse walkthrough beneath blue and yellow IPM sticky traps',
        label: 'Routine IPM Sticky-Trap & Crop Scouting',
      },
    ],
  },
  {
    id: 'homefront-pepper-yield',
    subtitle: 'High-Yield Pepper Consulting',
    title: 'High-Value Greenhouse Pepper Production & Farmer Training',
    organization: 'Homefront Tech Farm',
    location: 'Uyo, Akwa Ibom State',
    period: 'July 2025 – Dec. 2025',
    cropFocus: 'High-Value Pepper Varieties',
    scaleOrYield: '≥ 1,200 kg Consistent Yield per Cycle',
    summary:
      'Consulted on commercial greenhouse workflow standardization and local farmer training in Uyo, driving consistent pepper yields of ≥ 1,200 kg per cycle.',
    extendedOverview:
      'At Homefront Tech Farm in Uyo, Akwa Ibom State, Peace led technical consulting focused on operational consistency and team capability. By training local farm personnel on disciplined daily greenhouse procedures, fertigation timing, canopy management, and proactive scouting, the operation achieved reliable commercial pepper harvests across production cycles.',
    specs: [
      { label: 'Location', value: 'Uyo, Akwa Ibom State' },
      { label: 'Engagement Period', value: 'July 2025 – Dec. 2025' },
      { label: 'Crop Focus', value: 'High-Value Greenhouse Pepper Varieties' },
      { label: 'Documented Yield', value: '≥ 1,200 kg consistent output per cycle' },
      { label: 'Capacity Impact', value: 'Local farmer training on greenhouse SOPs' },
    ],
    roleResponsibilities: [
      'Trained local farmers on structured greenhouse processes and daily operational procedures.',
      'Supervised crop nutrition, canopy balance, and harvest readiness to sustain commercial yields.',
    ],
    methodsApplied: [
      'Standardized Greenhouse SOPs',
      'Precision Fertigation & Foliar Inspection',
      'Sticky-Trap IPM Monitoring',
    ],
    outcome:
      'Delivered consistent commercial yields of ≥ 1,200 kg per cycle for high-value pepper varieties while equipping local staff with repeatable agronomic skills.',
    image: '/assets/aistudio/IMG-20261124-WA0020_32076fc8.jpg',
    imageAlt:
      'Close-up inspection of healthy vegetative-stage pepper foliage grown in drip-irrigated substrate bags',
    objectPosition: 'center 20%',
    gallery: [
      {
        src: '/assets/aistudio/IMG-20261124-WA0020_32076fc8.jpg',
        alt: 'Close-up pepper foliage check in drip-irrigated substrate bags',
        label: 'Vegetative Canopy & Shoot Inspection',
      },
      {
        src: '/assets/aistudio/IMG-20261124-WA0004_fa9b520a.jpg',
        alt: 'Close foliar pest and nutrient inspection of greenhouse pepper seedlings',
        label: 'Early-Stage Foliar & Emitter Diagnostics',
      },
    ],
  },
  {
    id: 'umuahia-startup-support',
    subtitle: 'Startup Farm Advisory',
    title: 'Start-Up Greenhouse Commissioning & First-Cycle Advisory',
    organization: 'Ijebu Unique Farms & Afara Farm',
    location: 'Umuahia, Abia State',
    period: 'Dec. 2025 – Present',
    cropFocus: 'Protected Crops & Startup Systems',
    scaleOrYield: '> 80% Outcome Improvement Protocol',
    summary:
      'Delivering active greenhouse consulting and startup technical support in Umuahia—designing planting schedules, mapping fertigation regimes, and establishing post-harvest protocols.',
    extendedOverview:
      'Emerging farms frequently suffer avoidable yield losses during their first production cycle due to misaligned planting calendars, inconsistent fertigation, or poor post-harvest handling. Across her active engagements with Ijebu Unique Farms (since Dec. 2025) and Afara Farm (since April 2026) in Umuahia, Peace establishes complete agronomic blueprints and trains local farm teams hands-on to safeguard first-cycle performance.',
    specs: [
      { label: 'Client Farms', value: 'Ijebu Unique Farms & Afara Farm (Umuahia, Abia State)' },
      { label: 'Status', value: 'Active Advisory (Dec. 2025 – Present)' },
      { label: 'Core Deliverables', value: 'Planting Schedules, Fertigation Maps & Post-Harvest SOPs' },
      { label: 'Training Focus', value: 'Hands-on local farmer upskilling' },
    ],
    roleResponsibilities: [
      'Design crop-cycle planting schedules tailored to protected cultivation.',
      'Map out stage-specific fertigation regimes to prevent nutrient imbalances.',
      'Establish post-harvest handling protocols to minimize avoidable losses.',
      'Train local farm operators on daily greenhouse execution.',
    ],
    methodsApplied: [
      'Planting Calendar Engineering',
      'Stage-Mapped Fertigation Regimes',
      'Post-Harvest Loss Reduction Protocols',
    ],
    outcome:
      'Protected startup farm capital by eliminating first-cycle operational blind spots and instilling disciplined agronomic routines among local teams.',
    image: '/assets/aistudio/IMG-20261124-WA0014_56364ab9.jpg',
    imageAlt:
      'Peace Adaeze Anyaeriuba walking along the central aisle of a newly commissioned greenhouse lined with drip-irrigated pepper plants',
    objectPosition: 'center 20%',
    gallery: [
      {
        src: '/assets/aistudio/IMG-20261124-WA0014_56364ab9.jpg',
        alt: 'Walkthrough along central greenhouse aisle during commissioning',
        label: 'Greenhouse Bay Layout & Drip Alignment',
      },
      {
        src: '/assets/aistudio/IMG-20261124-WA0013_5faf83a6.jpg',
        alt: 'Inspecting drip lines inside greenhouse with mulched open-field rows outside',
        label: 'Drip Line Verification & Open-Field Integration',
      },
    ],
  },
  {
    id: 'ezesinachi-commercial-farm',
    subtitle: 'Multi-Crop Farm Operations',
    title: 'Multi-Crop Commercial Farm Coordination & Value-Chain Alignment',
    organization: 'Ezesinachi Farms',
    location: 'Aba, Abia State',
    period: 'May 2022 – Dec. 2024',
    cropFocus: 'Multi-Crop Commercial Production',
    scaleOrYield: '2.5+ Years End-to-End Commercial Operations',
    summary:
      'Coordinated end-to-end operations for a multi-crop commercial farm in Aba—integrating soil fertility plans, field labor management, input procurement, and off-taker partnerships.',
    extendedOverview:
      'Over more than two and a half years as Farm Coordinator at Ezesinachi Farms in Aba, Abia State, Peace managed the full operational lifecycle of a multi-crop commercial enterprise. Beyond technical soil fertility management and disciplined labor supervision across planting, weeding, fertigation, and harvest, she strengthened commercial supply chains with both input vendors and produce off-takers.',
    specs: [
      { label: 'Location', value: 'Aba, Abia State' },
      { label: 'Duration', value: 'May 2022 – Dec. 2024' },
      { label: 'Operational Scope', value: 'Multi-crop resource allocation, procurement & labor' },
      { label: 'Commercial Focus', value: 'Input vendor & off-taker channel strengthening' },
    ],
    roleResponsibilities: [
      'Coordinated end-to-end multi-crop operations, resource allocation, input procurement, and labor teams.',
      'Implemented modern agronomic techniques and soil fertility management plans.',
      'Strengthened partnerships with input vendors and off-takers for reliable sales channels.',
      'Supervised planting, weeding, fertigation, and harvest to maintain strict produce quality.',
    ],
    methodsApplied: [
      'Soil Fertility & Nutrient Management Plans',
      'Field Workforce & Resource Allocation',
      'Commercial Vendor & Off-Taker Contracting',
    ],
    outcome:
      'Improved resource efficiency, reduced operational waste, and secured consistent market-grade produce across consecutive seasons.',
    image: '/assets/aistudio/IMG-20261124-WA0013_5faf83a6.jpg',
    imageAlt:
      'Peace Adaeze Anyaeriuba examining drip lines inside a greenhouse with mulched open-field cultivation rows visible beyond the netting',
    objectPosition: 'center 25%',
    gallery: [
      {
        src: '/assets/aistudio/IMG-20261124-WA0013_5faf83a6.jpg',
        alt: 'Inspecting drip lines with mulched open-field beds beyond the screen',
        label: 'Protected & Open-Field Operational Coordination',
      },
      {
        src: '/assets/aistudio/IMG-20261124-WA0023_8a75e75f.jpg',
        alt: 'Checking substrate moisture and seedling establishment',
        label: 'Input Efficiency & Crop Establishment Checks',
      },
    ],
  },
];

export const INTERNATIONAL_MEDIA = {
  outlet: 'Agro Turk Television (Turkey)',
  role: 'Guest Speaker · Televised Interview',
  topic: 'Beyond Farming: How African Youth Can Build Profitable Agribusiness Systems That Last.',
};

export const DIGITAL_REACH = [
  {
    platform: 'LinkedIn',
    metric: '18,000+ Followers',
    focus:
      'Weekly educational content on protected agriculture, agribusiness financial models, and greenhouse crop management.',
  },
  {
    platform: 'Facebook & Instagram',
    metric: '3,400+ Followers',
    focus:
      'Digital campaigns promoting modern agricultural technology, youth involvement, and farm monetization.',
  },
  {
    platform: 'Mentorship & Capacity Building',
    metric: '200+ Students · 50+ Agripreneurs',
    focus:
      'Completed 6 full farming cycles while mentoring agricultural students and supporting commercial ventures.',
  },
];

export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = [
  {
    event: 'Reapvest Agric Summit',
    role: 'Keynote Speaker',
    topic: 'Agribusiness Strategies: Influence, Structure, and Sustainability.',
  },
  {
    event: 'Women Advancing Africa (WAA)',
    role: 'Guest Speaker',
    topic: 'Understanding the Agrifood System.',
  },
  {
    event: 'Agridirectgh',
    role: 'Panelist',
    topic: 'Understanding Contract Farming Models.',
  },
  {
    event: 'Agribusiness Thinking Institute',
    role: 'Technical Lecturer',
    topic: 'Strategic Framework for Generating Profitable Agribusiness Ideas.',
  },
  {
    event: 'All Agricultural Students Circle',
    role: 'Guest Speaker',
    topic: 'More Than an Agricultural Degree: Building Commercial Capability.',
  },
];

export const PUBLICATIONS: BookPublication[] = [
  {
    title: 'Wealth Pathways in Agriculture',
    year: '2025',
    citation: 'Anyaeriuba, P. A. (2025). Wealth Pathways in Agriculture.',
  },
  {
    title: 'Multiplying Profit Using the ATM Model',
    year: '2025',
    citation: 'Anyaeriuba, P. A. (2025). Multiplying Profit Using the ATM Model.',
  },
  {
    title: 'Transitioning from Agriculture to Agribusiness',
    year: '2025',
    citation: 'Anyaeriuba, P. A. (2025). Transitioning from Agriculture to Agribusiness.',
  },
  {
    title: 'Finance Literacy for Agripreneurs',
    year: '2025',
    citation: 'Anyaeriuba, P. A. (2025). Finance Literacy for Agripreneurs.',
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    credential: 'Master of Business Administration (MBA)',
    institution: 'Ahmadu Bello University, Zaria, Nigeria',
    date: 'January 2026',
    status: 'In-view',
  },
  {
    credential: 'National Youth Service Corps (NYSC)',
    institution: 'Federal Republic of Nigeria',
    date: 'October 2024',
    status: 'Discharged',
  },
  {
    credential: 'Bachelor of Science in Education (B.Sc.Ed.) — Education / Chemistry',
    institution: 'University of Nigeria, Nsukka (Alvan Campus), Nigeria',
    date: 'April 2017',
  },
  {
    credential: 'National Certificate in Education (NCE) — Biology / Chemistry',
    institution: 'Alvan Ikoku Federal College of Education, Owerri, Nigeria',
    date: 'May 2014',
  },
  {
    credential: 'West African Senior School Certificate (WAEC)',
    institution: 'Giant Step Christian Academy, Nigeria',
    date: 'May / June 2014',
  },
  {
    credential: 'First School Leaving Certificate (FSLC)',
    institution: 'Merit Base International Primary School, Nigeria',
    date: 'August 2003',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Business Model Canvas for Agribusiness',
    issuer: 'Federal Ministry for Economic Cooperation and Development (BMZ, Germany)',
  },
  {
    title: 'Climate Smart Agribusiness',
    issuer: 'Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH',
  },
  {
    title: 'Agripreneurship & Apprenticeship Program (6-Month Incubator)',
    issuer: 'Certified Graduate',
  },
  {
    title: 'Growth for Sustainable Agriculture Initiative (GSAI)',
    issuer: 'Certified Participant',
  },
  {
    title: 'Digital & Social Media Marketing Strategy',
    issuer: 'Professional Certificate',
  },
  {
    title: 'Girl-Centered Leadership Design',
    issuer: 'Leadership Certificate',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-canopy',
    src: '/assets/aistudio/IMG-20261124-WA0017_b7250b3f.jpg',
    alt: 'Peace Adaeze Anyaeriuba tending mature trellised pepper plants inside a commercial greenhouse',
    caption: 'Trellised pepper canopy management and twine support inside a commercial greenhouse.',
    category: 'Greenhouse Canopy',
    aspectClass: 'md:col-span-2 md:row-span-2',
    objectPosition: 'center 20%',
  },
  {
    id: 'photo-portrait',
    src: '/assets/aistudio/IMG-20260821-WA0006_0283e94d.jpg',
    alt: 'Executive studio portrait of Peace Adaeze Anyaeriuba',
    caption: 'Executive portrait — Senior Agronomist, Greenhouse Consultant & Agribusiness Strategist.',
    category: 'Executive Portrait',
    aspectClass: 'md:col-span-1 md:row-span-1',
    objectPosition: 'center 20%',
  },
  {
    id: 'photo-substrate',
    src: '/assets/aistudio/IMG-20261124-WA0023_8a75e75f.jpg',
    alt: 'Inspecting young pepper seedlings in cocopeat substrate polybags with drip emitters',
    caption: 'Early-stage transplanting check on cocopeat substrate grow-bags and drip irrigation lines.',
    category: 'Seedling & Substrate',
    aspectClass: 'md:col-span-1 md:row-span-1',
    objectPosition: 'center 25%',
  },
  {
    id: 'photo-vegetative',
    src: '/assets/aistudio/IMG-20261124-WA0020_32076fc8.jpg',
    alt: 'Close-up crop inspection of vigorous pepper foliage in greenhouse grow-bags',
    caption: 'Vegetative vigor evaluation and basal shoot inspection under drip fertigation.',
    category: 'Crop & IPM Inspection',
    aspectClass: 'md:col-span-1 md:row-span-1',
    objectPosition: 'center 20%',
  },
  {
    id: 'photo-aisle',
    src: '/assets/aistudio/IMG-20261124-WA0014_56364ab9.jpg',
    alt: 'Peace Adaeze Anyaeriuba walking along the central aisle of a timber-framed greenhouse',
    caption: 'Row uniformity and trellising architecture assessment across commercial greenhouse bays.',
    category: 'Greenhouse Canopy',
    aspectClass: 'md:col-span-1 md:row-span-1',
    objectPosition: 'center 20%',
  },
  {
    id: 'photo-openfield-backdrop',
    src: '/assets/aistudio/IMG-20261124-WA0013_5faf83a6.jpg',
    alt: 'Checking emitter placement with open-field mulched beds visible outside the greenhouse screen',
    caption: 'Emitter calibration inside protected structure overlooking adjacent mulched open-field beds.',
    category: 'Seedling & Substrate',
    aspectClass: 'md:col-span-1 md:row-span-1',
    objectPosition: 'center 25%',
  },
  {
    id: 'photo-ipm-walkthrough',
    src: '/assets/aistudio/IMG-20261124-WA0006_c65ad54e.jpg',
    alt: 'Greenhouse walkthrough beneath blue and yellow IPM sticky traps',
    caption: 'Routine greenhouse scouting beneath blue and yellow Integrated Pest Management sticky traps.',
    category: 'Crop & IPM Inspection',
    aspectClass: 'md:col-span-1 md:row-span-1',
    objectPosition: 'center 20%',
  },
  {
    id: 'photo-foliar-check',
    src: '/assets/aistudio/IMG-20261124-WA0004_fa9b520a.jpg',
    alt: 'Close foliar pest and nutrient inspection of young greenhouse pepper seedlings',
    caption: 'Detailed foliar scouting for early pest pressure and nutrient uptake diagnostics.',
    category: 'Crop & IPM Inspection',
    aspectClass: 'md:col-span-1 md:row-span-1',
    objectPosition: 'center 25%',
  },
];
