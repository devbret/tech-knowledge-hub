import type { GlossaryEntry, LinkEntry, Category } from "./types";

export const ALL_CATEGORIES: Category[] = [
  "OSINT",
  "AI",
  "Video Games",
  "FOSS",
  "Programming",
  "Audio",
  "OPSEC",
  "Music",
  "Other",
  "Hardware",
];

export const glossary: GlossaryEntry[] = [
  {
    term: "OPSEC",
    definition:
      "The practice of safeguarding critical information by denying adversaries insight into your activities, intentions or vulnerabilities.",
    category: ["OPSEC"],
    source: "NIST",
    source_url: "https://csrc.nist.gov/glossary/term/operations_security",
    quote:
      "...process by which potential adversaries can be denied information about capabilities and intentions by identifying, controlling, and protecting generally unclassified evidence of the planning and execution of sensitive activities.",
  },
  {
    term: "Techno Optimism",
    definition:
      "The belief that advances in science, engineering and technology will lead to long-term improvements in human life.",
    category: ["AI"],
    source: "Springer",
    source_url: "https://link.springer.com/article/10.1007/s13347-022-00555-x",
    quote:
      "...the stance that holds that technology plays a key role in ensuring that the good prevails over the bad.",
  },
  {
    term: "OSINT",
    definition:
      "The collection and analysis of information from publicly available sources to produce actionable intelligence.",
    category: ["OSINT", "FOSS"],
    source: "Recorded Future",
    source_url:
      "https://www.recordedfuture.com/blog/open-source-intelligence-definition",
    quote:
      "Open source intelligence (OSINT) is the practice of gathering, analyzing, and disseminating information from publicly available sources to address specific intelligence requirements.",
  },
  {
    term: "Silicon Lottery",
    definition:
      "The natural variation in performance, efficiency and overclocking potential among individual computer chips, even when they are the same model.",
    category: ["Hardware"],
    source: "MUO",
    source_url:
      "https://www.makeuseof.com/silicon-lottery-why-no-two-processors-are-the-same/",
    quote:
      "...the term silicon lottery refers to the inherent differences between two processors of the same product line. These differences affect overclocking performance.",
  },
  {
    term: "Overview Effect",
    definition:
      "A cognitive and emotional shift in awareness experienced by some astronauts after viewing Earth from space.",
    category: ["Other"],
    source: "Wikipedia",
    source_url: "https://en.wikipedia.org/wiki/Overview_effect",
    quote:
      "Researchers have characterized the effect as a state of awe with self-transcendent qualities, precipitated by a particularly striking visual stimulus.",
  },
  {
    term: "Synchronicity",
    definition:
      "Meaningful coincidences that are not linked by a clear cause-and-effect relationship which seem connected by their meaning to the observer.",
    category: ["Other"],
    source: "International Association for Analytical Psychology",
    source_url:
      "https://iaap.org/jung-analytical-psychology/short-articles-on-analytical-psychology/synchronicity-an-acausal-connecting-principle/",
    quote:
      "...synchronicity was defined by Jung as an acausal connecting principle, whereby internal, psychological events are linked to external world events by meaningful coincidences rather than causal chains.",
  },
];

export const links: LinkEntry[] = [
  {
    title: "Open Invention Network",
    url: "https://openinventionnetwork.com/",
    description:
      "The only institution focused on mitigating patent risk in Open Source Software (OSS).",
    category: ["FOSS"],
  },
  {
    title: "Freesound",
    url: "https://freesound.org/",
    description:
      "A huge collaborative database of audio snippets, samples and recordings released under Creative Commons licenses that allow their reuse.",
    category: ["Audio"],
  },
  {
    title: "Free Geek",
    url: "https://www.freegeek.org/",
    description:
      "Refurbishes donated technology and gives it back to the community at no or low cost to provide the most vulnerable with digital literacy skills to succeed and thrive.",
    category: ["Hardware", "FOSS"],
  },
  {
    title: "Mage",
    url: "https://www.mage.space/",
    description: "Generate images and videos with AI.",
    category: ["AI"],
  },
  {
    title: "Agentics Foundation",
    url: "https://agentics.org/",
    description:
      "A non-profit organization dedicated to democratizing artificial intelligence education and innovation.",
    category: ["AI"],
  },
  {
    title: "n8n",
    url: "https://n8n.io/",
    description:
      "n8n lets you automate business processes without limits on your logic.",
    category: ["AI", "FOSS", "Programming"],
  },
  {
    title: "Raspberry Pi Foundation",
    url: "https://www.raspberrypi.org/",
    description:
      "A UK-based charity with the mission to enable young people to realise their full potential through the power of computing and digital technologies.",
    category: ["Hardware"],
  },
  {
    title: "Pi-hole",
    url: "https://pi-hole.net/",
    description:
      "Instead of browser plugins or other software on each computer, install Pi-hole in one place and your entire network is protected.",
    category: ["FOSS", "OPSEC"],
  },
  {
    title: "Linux Mint",
    url: "https://linuxmint.com/",
    description:
      "Linux Mint is one of the most popular desktop Linux distributions and used by millions of people.",
    category: ["FOSS", "Programming"],
  },
  {
    title: "TrueNAS",
    url: "https://www.truenas.com/",
    description:
      "TrueNAS is an award-winning universal data platform used by a majority of Fortune 500 companies.",
    category: ["FOSS"],
  },
  {
    title: "OPNsense",
    url: "https://opnsense.org/",
    description:
      "An open source, feature rich firewall and routing platform, offering cutting-edge network protection.",
    category: ["FOSS", "OPSEC"],
  },
  {
    title: "DOA",
    url: "https://www.dogsonacid.com/",
    description: "A drum and bass (DNB) community forum of note.",
    category: ["Audio", "Music"],
  },
  {
    title: "NotebookLM",
    url: "https://notebooklm.google.com/",
    description:
      "An AI-powered research and note-taking assistant that summarizes, explains and answers questions based solely on personal sources.",
    category: ["AI", "OSINT"],
  },
  {
    title: "Create T3 App",
    url: "https://create.t3.gg/",
    description:
      "A web development stack focused on simplicity, modularity, and full-stack typesafety.",
    category: ["Programming"],
  },
  {
    title: "Kagi Search",
    url: "https://kagi.com/",
    description: "Liberate your search.",
    category: ["OSINT"],
  },
  {
    title: "ProtonDB",
    url: "https://www.protondb.com/",
    description:
      "Welcome to your home for crowdsourced Linux and Steam Deck game compatibility reports!",
    category: ["Video Games"],
  },
  {
    title: "Inoreader",
    url: "https://www.inoreader.com/",
    description:
      "With Inoreader, content comes to you the minute it's available. Enjoy what's important to you, all in one place.",
    category: ["OSINT"],
  },
  {
    title: "AI 2027",
    url: "https://ai-2027.com/",
    description:
      "The AI 2027 scenario is the first major release from the AI Futures Project. We're a new nonprofit forecasting the future of AI.",
    category: ["AI"],
  },
  {
    title: "The Network State",
    url: "https://thenetworkstate.com/",
    description:
      "This book explains how to build the successor to the nation state, a concept we call the network state.",
    category: ["AI"],
  },
  {
    title: "Proxmox",
    url: "https://www.proxmox.com/",
    description:
      "Powerful and efficient open-source software to simplify your server management.",
    category: ["FOSS"],
  },
];
