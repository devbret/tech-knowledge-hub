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
  "Biohacking",
];

export const glossary: GlossaryEntry[] = [
  {
    term: "Serendipity",
    definition:
      "The unexpected discovery of something valuable, meaningful or pleasant while not intentionally seeking it.",
    category: ["Other"],
    source: "ShiftSchool",
    source_url:
      "https://www.shiftschool.de/guidebook-post/flexicon/serendipity/",
    quote:
      "I see it more as the art of stumbling into something where you least expect it. [...] This only happens if you let it occur.",
  },
  {
    term: "Remix Culture",
    definition:
      "A participatory creative practice where individuals rework, adapt and combine existing media, ideas or technologies to produce new cultural expressions and meanings.",
    category: ["Other", "Audio"],
    source: "Remix Theory",
    source_url: "https://remixtheory.net/?page_id=3",
    quote:
      "...the global activity consisting of the creative and efficient exchange of information made possible by digital technologies that is supported by the practice of cut/copy and paste.",
  },
  {
    term: "Open Source",
    definition:
      "A development model where software’s source code is made freely available for anyone to inspect, modify, and redistribute, fostering transparency and collaborative innovation.",
    category: ["FOSS", "Programming"],
    source: "Penn State University",
    source_url:
      "https://opensource.psu.edu/project/what-is-open-source-software/",
    quote:
      "...software whose source code is freely available to anyone. It can be modified, used, and distributed by anyone under defined licensing terms.",
  },
  {
    term: "Prosumer",
    definition:
      "An individual who both consumes and produces media or products, actively shaping culture rather than only receiving it.",
    category: ["Audio", "FOSS"],
    source: "Wikipedia",
    source_url: "https://en.wikipedia.org/wiki/Prosumer",
    quote:
      "...an individual who both consumes and produces. The term is a portmanteau of the words producer and consumer. [...] Technological breakthroughs and a rise in user participation blurs the line between production and consumption activities, with the consumer becoming a prosumer.",
  },
  {
    term: "Biohacking",
    definition:
      "The practice of using science, technology and self-experimentation to optimize and enhance the body's biology, health and performance.",
    category: ["Biohacking"],
    source: "Cleveland Clinic",
    source_url:
      "https://my.clevelandclinic.org/podcasts/health-essentials/what-is-biohacking-with-melissa-young",
    quote:
      "...a DIY approach to self-care that uses everything from lifestyle changes to high-tech tools to improve your health.",
  },
  {
    term: "Pattern Recognition",
    definition:
      "The cognitive or computational process of detecting irregularities, structures and recurring relationships within complex data or sensory input.",
    category: ["Biohacking"],
    source: "HappyNeuron",
    source_url:
      "https://www.happyneuronpro.com/en/info/what-is-pattern-recognition/",
    quote:
      "...the ability to identify and understand patterns within information, such as data or our surrounding environment. [...] This process involves noticing similarities, differences, and trends in input, and using this information to predict outcomes, make decisions, or learn new concepts.",
  },
  {
    term: "Digital Immortality",
    definition:
      "Preserving a person's identity, memories and consciousness indefinitely through digital means.",
    category: ["Other", "AI"],
    source: "University Of Worcester",
    source_url:
      "https://www.worcester.ac.uk/about/news/academic-blog/education-blogs/Digital-immortality-and-Artificial-Intelligence.aspx",
    quote:
      "...digital immortality has moved beyond simple memorial pages and 'beyond the grave' updates, from dead family or friends. There are now companies dedicated to creating digitally immortal personas.",
  },
  {
    term: "Liminal Space",
    definition:
      "A transitional or in-between environment, which evokes a sense of ambiguity, quiet and transformation.",
    category: ["Other", "Biohacking"],
    source: "Merriam-Webster",
    source_url: "https://www.merriam-webster.com/dictionary/liminal",
    quote:
      "...of, relating to, or situated at a sensory threshold : barely perceptible or capable of eliciting a response...",
  },
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
    term: "Upskill",
    definition:
      "To learn new or improved skills which enhance your ability to perform a job, adapt to changes or advance in your career.",
    category: ["Other", "Programming"],
    source: "Stanford Online",
    source_url: "https://online.stanford.edu/what-upskilling-and-reskilling",
    quote:
      "...obtaining  knowledge, expertise, or capabilities related to your current field or industry in order to advance your career or adapt to changes in the job market.",
  },
  {
    term: "Force Multiplier",
    definition:
      "Any factor that significantly increases the effectiveness and impact of a group or individual beyond their inherent capabilities.",
    category: ["Programming"],
    source: "Effective Altruism",
    source_url:
      "https://www.effectivealtruism.org/articles/ea-global-2018-force-multiplication",
    quote:
      "...a factor or a combination of factors that dramatically increase the effectiveness of a group, relative to what they'd be able to achieve without these factors.",
  },
  {
    term: "Easter Egg",
    definition:
      "An Easter Egg is a hidden feature, message or inside joke intentionally placed within a video game, movie or software for players or users to discover.",
    category: ["Video Games"],
    source: "Arizona State University",
    source_url:
      "https://gamesandimpact.org/uncategorized/the-cake-is-a-lie-easter-eggs-in-video-games/",
    quote:
      "...Easter eggs are the “hidden properties of games that can be revealed by button combinations or by accessing remote areas in the game or on the disc itself,”...",
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
    term: "Cyberspace",
    definition:
      "The global, interconnected digital environment created by computer networks, where information is exchanged, communication occurs and virtual activities take place.",
    category: ["Programming", "Other"],
    source: "GeeksforGeeks",
    source_url:
      "https://www.geeksforgeeks.org/computer-networks/what-is-cyberspace/",
    quote:
      "Cyberspace best describes the immaterial space where interactions through digital networks, the internet and computer systems take place.",
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
  {
    term: "Dub Music",
    definition:
      "Emerged in 1970s Jamaica from reggae through innovative studio techniques, eventually laying the groundwork for electronic genres, DJ culture and remix aesthetics worldwide.",
    category: ["Music"],
    source: "Wikipedia",
    source_url: "https://en.wikipedia.org/wiki/Dub_music",
    quote:
      "...dub consists of remixes of existing recordings created by significantly manipulating the original, usually through the removal of vocal parts, emphasis of the rhythm section [...], the application of studio effects such as echo and reverb, and the occasional dubbing of vocal or instrumental snippets from the original version or other works.",
  },
  {
    term: "Homelab",
    definition:
      "A personal computing environment used to experiment with servers, networking, virtualization and other technologies for learning, testing or self-hosting purposes.",
    category: ["AI", "Hardware"],
    source: "Linux Handbook",
    source_url: "https://linuxhandbook.com/homelab/",
    quote:
      "...the name given to a server (or multiple server setup) that resides locally in your home and where you host several applications and virtualized systems for testing and developing or for home and functional usage.",
  },
  {
    term: "Digital Footprint",
    definition:
      "The trail of data a person leaves behind through their online activities, including websites visited, posts made and information shared, which can be tracked and analyzed.",
    category: ["OSINT"],
    source: "Built In",
    source_url: "https://builtin.com/articles/digital-footprint",
    quote:
      "...includes information you actively share through social media posts, blog profiles and online forms, as well as data companies collect on you through cookies and tracking scripts.",
  },
  {
    term: "Neuroplasticity",
    definition:
      "The brain's ability to reorganize and adapt by forming new neural connections throughout life in response to learning, experience or injury.",
    category: ["Biohacking"],
    source: "Cleveland Clinic",
    source_url: "https://health.clevelandclinic.org/neuroplasticity",
    quote:
      "...your brain's ability to absorb information and evolve to manage new challenges. It's a natural gift that allows you to develop as a person and take on the ever-changing tasks of daily life.",
  },
  {
    term: "Flow State",
    definition:
      "A mental condition of complete absorption and effortless focus in an activity, where challenge and skill are perfectly balanced, leading to a loss of self-consciousness and sense of time.",
    category: ["Biohacking"],
    source: "Frontiers",
    source_url:
      "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.645498/full",
    quote:
      "...often associated with athletes, artists, or scientists who are fully task-absorbed in order to achieve peak performance. Yet, flow-like states also occur in more mundane situations, such as when engaging in certain tasks during work or leisure time...",
  },
  {
    term: "Kairos",
    definition:
      "The opportune or decisive moment in time when conditions align perfectly for meaningful action or change.",
    category: ["Other"],
    source: "Institute For Advanced Study",
    source_url: "https://www.ias.edu/ideas/baert-kairos",
    quote:
      "If, however, a single parameter of the intersection were lacking or out of balance, then the knot would unravel and the occasion would not present itself. This is why kairos is also a mirror of cosmic perfection.",
  },
  {
    term: "Systems Theory",
    definition:
      "An interdisciplinary framework that studies how parts of a system interact with each other and the whole, emphasizing interdependence, feedback and emergent behavior.",
    category: ["Other"],
    source: "ScienceDirect",
    source_url:
      "https://www.sciencedirect.com/topics/psychology/systems-theory",
    quote:
      "...the study of open systems composed of interconnected elements that exhibit emergent properties, emphasizing that the whole cannot be reduced to its parts.",
  },
  {
    term: "Cybernetics",
    definition:
      "The interdisciplinary study of control, communication and feedback in systems; whether mechanical, biological or social.",
    category: ["Other", "Biohacking"],
    source: "American Society For Cybernetics",
    source_url: "https://asc-cybernetics.org/definitions/",
    quote:
      "Cybernetics treats not things but ways of behaving. It does not ask “what is this thing?” but “what does it do?” and “what can it do?”",
  },
];

export const links: LinkEntry[] = [
  {
    title: "Cyberpunk Forums",
    url: "https://cyberpunkforums.com/",
    description: "A collective cyberpunk community forums of significance.",
    category: ["Biohacking"],
  },
  {
    title: "Theta Noir",
    url: "https://thetanoir.com/",
    description:
      "A performance art project that challenges mainstream narratives surrounding AI by creating speculative counter-myths.",
    category: ["AI", "Other"],
  },
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
    title: "RPi Foundation",
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
    title: "Hugging Face",
    url: "https://huggingface.co/",
    description:
      "The platform where the machine learning community collaborates on models, datasets, and applications.",
    category: ["AI", "Programming"],
  },
  {
    title: "Hackaday.io",
    url: "https://hackaday.io/",
    description:
      "The world's largest collaborative hardware development community.",
    category: ["Hardware"],
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
  {
    title: "Kubernetes",
    url: "https://kubernetes.io/",
    description:
      "An open source system for automating deployment, scaling, and management of containerized applications.",
    category: ["FOSS"],
  },
  {
    title: "EFF",
    url: "https://www.eff.org/",
    description:
      "The Electronic Frontier Foundation is the leading nonprofit organization defending civil liberties in the digital world.",
    category: ["Other"],
  },
  {
    title: "Dangerous Things",
    url: "https://forum.dangerousthings.com/",
    description: "A place to discuss biohacking, projects, and technology",
    category: ["Biohacking"],
  },
  {
    title: "Biohacking Forums",
    url: "https://biohacking.forum/",
    description:
      "A forum by the International Biohacking Community for individuals to discuss longevity, biohacking, transhumanism, life extension, cryonics, DIY-biology, and more.",
    category: ["Biohacking"],
  },
  {
    title: "Creative Commons",
    url: "https://creativecommons.org/",
    description:
      "An international nonprofit organization that empowers people to grow and sustain the thriving commons of shared knowledge and culture we need to address the world's most pressing challenges and create a brighter future for all.",
    category: ["Other"],
  },
  {
    title: "Open Source Initiative",
    url: "https://opensource.org/",
    description:
      "...the global nonprofit building the future powered by open collaboration, transparency and innovation.",
    category: ["FOSS"],
  },
  {
    title: "LinuxMusicians",
    url: "https://linuxmusicians.com/index.php",
    description: "Creating music freely.",
    category: ["FOSS", "Music"],
  },
  {
    title: "OGA",
    url: "https://opengameart.org/node",
    description: "Freely available media for making video games.",
    category: ["Audio", "Video Games"],
  },
];
