import type { GlossaryEntry, LinkEntry, Category } from "./types";

export const ALL_CATEGORIES: Category[] = [
  "OSINT",
  "AI",
  "Video Games",
  "FOSS",
  "Programming",
  "Audio",
  "OPSEC",
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
    title: "NotebookLM",
    url: "https://notebooklm.google.com/",
    description:
      "An AI-powered research and note-taking assistant that summarizes, explains and answers questions based solely on personal sources.",
    category: ["AI", "OSINT"],
  },
  {
    title: "The Big Blocklist Collection",
    url: "https://firebog.net/",
    description:
      "This collection hopes to help you minimise advertisers, trackers and malicious content using the free and open source utility known as Pi-hole.",
    category: ["FOSS"],
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
];
