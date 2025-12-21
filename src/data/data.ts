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
  "Cybersecurity",
  "Other",
  "Hardware",
  "Biohacking",
  "Blockchain",
  "DevOps",
];

export const glossary: GlossaryEntry[] = [
  {
    term: "Orchestration",
    definition:
      "The automated coordination and management of multiple services or containers—handling tasks like deployment, scaling, networking and recovery so systems run reliably.",
    category: ["DevOps"],
    source: "Databricks",
    source_url: "https://www.databricks.com/glossary/orchestration",
    quote:
      "Orchestration is the coordination and management of multiple computer systems, applications and/or services, stringing together multiple tasks in order to execute a larger workflow or process.",
  },
  {
    term: "Container",
    definition:
      "A lightweight, isolated package for bundling an application with its dependencies and configuration so it runs consistently across different environments.",
    category: ["Programming", "DevOps"],
    source: "Docker Docs",
    source_url:
      "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
    quote:
      "...containers are isolated processes for each of your app's components. Each component [...] runs in its own isolated environment, completely isolated from everything else on your machine.",
  },
  {
    term: "Unit Testing",
    definition:
      "The practice of verifying individual, small pieces of code are behaving correctly in isolation.",
    category: ["Programming"],
    source: "AWS",
    source_url: "https://aws.amazon.com/what-is/unit-testing/",
    quote:
      "...if a test fails, you can quickly isolate the area of the code that has the bug or error. Unit testing enforces modular thinking paradigms and improves test coverage and quality.",
  },
  {
    term: "Mutability",
    definition:
      "The property of an object or value which determines whether it can be changed after it is created.",
    category: ["Programming"],
    source: "MIT",
    source_url: "https://web.mit.edu/6.005/www/fa15/classes/09-immutability/",
    quote:
      "...some objects are immutable: once created, they always represent the same value. Other objects are mutable: they have methods that change the value of the object.",
  },
  {
    term: "Software",
    definition:
      "A set of instructions and data telling a computer or other device how to perform tasks or provide functions.",
    category: ["Programming", "FOSS"],
    source: "freeCodeCamp",
    source_url: "https://www.freecodecamp.org/news/software-definition/",
    quote:
      "Software can describe an operating system like Windows 10 or macOS, or their underlying processes. Software can also describe things like Microsoft Word or Adobe Photoshop.",
  },
  {
    term: "Scope",
    definition:
      "The region of code where a variable, function, or name is visible and can be accessed.",
    category: ["Programming"],
    source: "W3Schools",
    source_url: "https://www.w3schools.com/programming/prog_scope.php",
    quote:
      "Think of scope as a container. Variables defined in one container (scope) may or may not be visible to code in other containers, depending on the type of scope.",
  },
  {
    term: "Context Window",
    definition:
      "The fixed amount of text or data an AI model can see at once, including your prompt and the model's.",
    category: ["AI"],
    source: "Claude Docs",
    source_url:
      "https://platform.claude.com/docs/en/build-with-claude/context-windows",
    quote:
      '...is different from the large corpus of data the language model was trained on, and instead represents a "working memory" for the model.',
  },
  {
    term: "Jungle",
    definition:
      "An early-1990s UK breakbeat hardcore offshoot that uses sped-up, chopped amen-style breakbeats, heavy sub-bass, ragga/dancehall and hip-hop samples and a raw, syncopated, rave-driven vibe.",
    category: ["Music"],
    source: "The Cat Rave",
    source_url: "https://thecatrave.com/jungle-music-guide",
    quote:
      "What started as a local sound in London’s urban jungle quickly became a cultural movement with its own slang, fashion, and fierce community.",
  },
  {
    term: "Drum And Bass (DNB)",
    definition:
      "Fast, bass-heavy electronic dance music style built around rapid breakbeats (typically 160-180 BPM) and deep sub-bass lines.",
    category: ["Music"],
    source: "Wikipedia",
    source_url: "https://en.wikipedia.org/wiki/Drum_and_bass",
    quote:
      "Originating in the UK jungle scene in the early 1990s, drum and bass drew on elements of reggae, dub, hip hop, breakbeat hardcore, techno, and house.",
  },
  {
    term: "Hyperstition",
    definition:
      "Ideas or narratives that, once introduced, propagate through culture and eventually bring about the very realities they describe.",
    category: ["Other"],
    source: "Cyborg Anthropology Wiki",
    source_url: "https://cyborganthropology.com/index.php/Hyperstition",
    quote:
      "Hyperstition was coined by the British cultural theorists Nick Land and Mark Fisher to describe the way in which certain cultural ideas or narratives can become self-fulfilling prophecies.",
  },
  {
    term: "Computer Vision",
    definition:
      "A field of artificial intelligence that enables machines to perceive and process visual information as input, such as from images and videos.",
    category: ["AI"],
    source: "SAS",
    source_url:
      "https://www.sas.com/en_us/insights/analytics/computer-vision.html",
    quote:
      "...trains computers to interpret and understand the visual world. Using digital images from cameras and videos and deep learning models, machines can accurately identify and classify objects...",
  },
  {
    term: "Tokenization",
    definition:
      "Breaking down text into smaller, meaningful units which are the fundamental building blocks used by language models and other AI systems to understand and process information.",
    category: ["AI"],
    source: "AI21",
    source_url: "https://www.ai21.com/knowledge/tokenization/",
    quote:
      "AI tokenization is the process of converting text into smaller, standardized units called tokens that language models can mathematically process. Depending on the tokenization method used, these tokens can represent whole words, parts of words (subwords), or even individual characters.",
  },
  {
    term: "Inference",
    definition:
      "Process by which a trained model uses learned patterns from data to make predictions, generate outputs or draw conclusions from new, unseen inputs.",
    category: ["AI", "Programming"],
    source: "IBM",
    source_url: "https://www.ibm.com/think/topics/ai-inference",
    quote:
      "...inference is the ability of trained AI models to recognize patterns and draw conclusions from information that they haven't seen before.",
  },
  {
    term: "Agentic AI",
    definition:
      "A type of system that can autonomously perceive its environment, make decisions and execute multi-step actions to proactively achieve specific goals without requiring constant human intervention.",
    category: ["AI", "Programming"],
    source: "Amazon Web Services",
    source_url: "https://aws.amazon.com/what-is/agentic-ai/",
    quote:
      "...agentic AI is proactive and can perform complex tasks without constant human oversight. 'Agentic' indicates agency — the ability of these systems to act independently, but in a goal-driven manner.",
  },
  {
    term: "Neural Entrainment",
    definition:
      "The process by which brainwave activity synchronizes with the rhythmic patterns of external stimuli, such as sound, light, or vibration.",
    category: ["Biohacking"],
    source: "Nature",
    source_url: "https://www.nature.com/articles/s41598-025-93948-9",
    quote:
      "Neural entrainment to rhythmic patterns has been proposed as a mechanism that underlies beat perception and could explain individual differences in sensorimotor synchronization abilities.",
  },
  {
    term: "DAO",
    definition:
      "A community-led entity governed by smart contracts on a blockchain, where decisions and rules are enforced transparently without centralized control.",
    category: ["FOSS", "Blockchain"],
    source: "Hedera",
    source_url:
      "https://hedera.com/learning/decentralized-finance/decentralized-autonomous-organization",
    quote:
      "A decentralized autonomous organization, or DAO, is a member-owned organization or company that operates without centralized leadership using blockchain technology. DAOs can operate across borders without difficulty, bringing members together across geographic boundaries.",
  },
  {
    term: "Artificial Intelligence",
    definition:
      "The field of computer science responsible for creating systems capable of performing tasks typically requiring human intelligence, such as reasoning, learning, perception and decision-making.",
    category: ["AI"],
    source: "IBM",
    source_url: "https://www.ibm.com/think/topics/artificial-intelligence",
    quote:
      "...is technology that enables computers and machines to simulate human learning, comprehension, problem solving, decision making, creativity and autonomy.",
  },
  {
    term: "Paragon",
    definition:
      "A person or thing regarded as the perfect example of a particular quality or excellence.",
    category: ["Other"],
    source: "Radford Writes",
    source_url: "https://www.radfordwrites.com/blog/paragon",
    quote:
      "The role of the paragon is usually to serve as an example to other characters. They show us how to be the best versions of ourselves and this means they can trigger immense character growth in other characters.",
  },
  {
    term: "Infinite Recursion",
    definition:
      "Occurs when a recursive function never reaches a base case, causing it to keep calling itself endlessly until the program crashes or runs out of memory.",
    category: ["Programming"],
    source: "GeeksforGeeks",
    source_url:
      "https://www.geeksforgeeks.org/dsa/introduction-to-recursion-2/",
    quote:
      "The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function.",
  },
  {
    term: "Technology",
    definition:
      "The application of knowledge, tools and systems to create solutions that extend human capabilities and transform the way we interact with the world.",
    category: ["AI", "Programming"],
    source: "Christopher Roosen",
    source_url:
      "https://www.christopherroosen.com/blog/2022/8/1/a-wide-definition-of-technology",
    quote:
      "...a means to fulfill a human purpose. For some technologies [...] the purpose is explicit. For others [...] the purpose may be hazy, multiple, and changing. As a means, a technology may be a method or process or device...",
  },
  {
    term: "Legendary Loot",
    definition:
      "Exceptionally rare and highly valued in-game rewards, often marked by unique abilities, powerful stats or iconic status which set it apart from ordinary items/loot.",
    category: ["Video Games"],
    source: "Wikipedia",
    source_url: "https://en.wikipedia.org/wiki/Loot_(video_games)",
    quote:
      "...the collection of items picked up by the player character that increase their power or level up their abilities, such as currency, spells, equipment and weapons.",
  },
  {
    term: "Apotheosis",
    definition:
      "The elevation of a person or thing to divine status, often symbolizing the highest point of glory, perfection or idealization.",
    category: ["Other"],
    source: "Wikipedia",
    source_url: "https://en.wikipedia.org/wiki/Apotheosis",
    quote:
      "...the glorification of a subject to divine levels and, commonly, the treatment of a human being, any other living thing, or an abstract idea in the likeness of a deity. ",
  },
  {
    term: "Augmented Cognition",
    definition:
      "The study and application of technologies and methods to extend or enhance human cognitive processes through real-time interaction between people and computational systems.",
    category: ["AI"],
    source: "Wikipedia",
    source_url: "https://en.wikipedia.org/wiki/Augmented_cognition",
    quote:
      "...applications which capture the human user's cognitive state [...] to drive real-time computer systems.",
  },
  {
    term: "Cyborg",
    definition:
      "A being who combines organic biological components with mechanical or electronic enhancements to extend or augment its abilities.",
    category: ["Biohacking", "Hardware"],
    source: "The University Of Chicago",
    source_url: "https://csmt.uchicago.edu/glossary2004/cyborg.htm",
    quote:
      "...a person whose physical tolerances or capabilities are extended beyond normal human limitations by a machine or other external agency that modifies the body's functions...",
  },
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
    category: ["FOSS"],
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
    category: ["OPSEC", "Cybersecurity"],
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
    category: ["Video Games", "Other"],
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
    category: ["OSINT", "Cybersecurity"],
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
  {
    term: "Lucid Dreaming",
    definition:
      "The state of being aware that you are dreaming while still within the dream, often allowing you to influence or control its content.",
    category: ["Biohacking"],
    source: "ScienceDirect",
    source_url:
      "https://www.sciencedirect.com/science/article/abs/pii/S1053810012001614",
    quote:
      "...about a half of the population have experienced a lucid dream at least once and about one out of five people are experiencing lucid dreams regularly...",
  },
  {
    term: "Dubplate",
    definition:
      "A custom, one-off vinyl or acetate recording (often featuring exclusive mixes or artist shout-outs) used by DJs and sound systems for unique, competitive playback.",
    category: ["Music", "Audio"],
    source: "Reggae Roast",
    source_url:
      "https://reggaeroast.co.uk/blogs/news/dubplates-the-secret-sauce-of-soundsystem-culture",
    quote:
      "...an exclusive version of a track, often personalised with lyrics or sounds unique to the DJ, sound system, or selector who commissions it.",
  },
  {
    term: "Autopoiesis",
    definition:
      "The process by which a system continuously regenerates and sustains the components which constitute it, while maintaining its identity and boundaries.",
    category: ["Other"],
    source: "Emergent Futures Lab",
    source_url:
      "https://emergentfutureslab.com/innovation-glossary/autopoiesis",
    quote:
      "Autopoietic systems can generate order and even life from non-order. Self-organizing systems under the right conditions will spontaneously generate order.",
  },
];

export const links: LinkEntry[] = [
  {
    title: "Kdenlive",
    url: "https://kdenlive.org/",
    description:
      "...a community project which aims to deliver a free and open source video editing software application to allow everybody to produce high quality content in order to increase the democratization of the media.",
    category: ["FOSS", "Other"],
  },
  {
    title: "Wikimedia Foundation",
    url: "https://wikimediafoundation.org/",
    description:
      "We are the nonprofit that hosts Wikipedia. We support the people, technology, and policies that enable reliable information to be shared with the world.",
    category: ["Other"],
  },
  {
    title: "VGHF",
    url: "https://gamehistory.org/",
    description:
      "The Video Game History Foundation is a 501(c)3 non-profit organization dedicated to preserving, celebrating, and teaching the history of video games.",
    category: ["Video Games"],
  },
  {
    title: "OKF",
    url: "https://okfn.org/en/",
    description:
      "Since 2004, the Open Knowledge Foundation has worked at the intersection of cutting-edge digital tools and a distributed network of communities and movements to serve the public interest with open knowledge.",
    category: ["Other"],
  },
  {
    title: "P2P Foundation",
    url: "https://p2pfoundation.net/",
    description:
      "...is a non-profit organization and global network dedicated to advocacy and research of commons-oriented peer to peer (P2P) dynamics in society.",
    category: ["Other"],
  },
  {
    title: "OWASP",
    url: "https://owasp.org/",
    description:
      "...is a nonprofit foundation that works to improve the security of software.",
    category: ["FOSS", "Cybersecurity"],
  },
  {
    title: "W3C",
    url: "https://www.w3.org/",
    description:
      "...develops standards and guidelines to help everyone build a web based on the principles of accessibility, internationalization, privacy and security.",
    category: ["Other"],
  },
  {
    title: "OpenSSF",
    url: "https://openssf.org/",
    description:
      "...seeks to make it easier to sustainably secure the development, maintenance, release, and consumption of the open source software (OSS) we all depend on.",
    category: ["FOSS", "Cybersecurity"],
  },
  {
    title: "ASF",
    url: "https://www.apache.org/",
    description:
      "The Apache Software Foundation provides software for the public good, guided by community over code. Like the enduring oak tree, our projects thrive through the contributions of thousands worldwide.",
    category: ["FOSS", "Other", "Programming"],
  },
  {
    title: "OAuth",
    url: "https://oauth.net/",
    description:
      "An open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications.",
    category: ["Other", "Programming"],
  },
  {
    title: "Python",
    url: "https://www.python.org/",
    description:
      "...is a programming language that lets you work quickly and integrate systems more effectively.",
    category: ["Programming"],
  },
  {
    title: "TDF",
    url: "https://www.documentfoundation.org/",
    description:
      "[The Document Foundation] is an independent self-governing meritocratic entity, created by a large group of Free Software advocates, in the form of a charitable Foundation under German law...",
    category: ["FOSS"],
  },
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
    category: ["FOSS", "OPSEC", "DevOps"],
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
    category: ["FOSS", "DevOps"],
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
  {
    title: "Adafruit",
    url: "https://www.adafruit.com/",
    description:
      "...the best place online for learning electronics and making the best designed products for makers of all ages and skill levels.",
    category: ["Hardware"],
  },
  {
    title: "Project Gutenberg",
    url: "https://gutenberg.org/",
    description:
      "You will find the world's great literature here, with focus on older works for which U.S. copyright has expired.",
    category: ["Other"],
  },
  {
    title: "OSHWA",
    url: "https://oshwa.org/",
    description:
      "...aims to foster technological knowledge and encourage research that is accessible, collaborative and respects user freedom.",
    category: ["Hardware"],
  },
  {
    title: "W3Schools",
    url: "https://www.w3schools.com/",
    description:
      "...is a school for web developers, covering all the aspects of web development...",
    category: ["Programming"],
  },
  {
    title: "SFC",
    url: "https://sfconservancy.org/",
    description:
      "Software Freedom Conservancy is a nonprofit organization centered around ethical technology. Our mission is to ensure the right to repair, improve and reinstall software.",
    category: ["FOSS", "Programming"],
  },
  {
    title: "GOL",
    url: "https://www.gamingonlinux.com/",
    description:
      "Taking great pride in having accurate information around Linux, Linux Gaming, Steam Deck, SteamOS and all related news.",
    category: ["FOSS", "Video Games"],
  },
  {
    title: "freeCodeCamp",
    url: "https://www.freecodecamp.org/",
    description:
      "Our mission [is] to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public.",
    category: ["Programming"],
  },
  {
    title: "FSF",
    url: "https://www.fsf.org/",
    description:
      "The Free Software Foundation (FSF) is a nonprofit with a worldwide mission to promote computer user freedom. We defend the rights of all software users. ",
    category: ["Programming", "FOSS"],
  },
  {
    title: "Internet Society",
    url: "https://www.internetsociety.org/",
    description:
      "...a global network of leaders shaping an open, secure, and inclusive Internet. The Internet Society fosters collaborations that drive meaningful change.",
    category: ["Cybersecurity"],
  },
  {
    title: "The Odin Project",
    url: "https://www.theodinproject.com/",
    description:
      "...is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.",
    category: ["Programming"],
  },
  {
    title: "Real Python",
    url: "https://realpython.com/",
    description:
      "...is a leading provider of online Python education and one of the largest language-specific online communities for software developers.",
    category: ["Programming"],
  },
  {
    title: "Long Now",
    url: "https://longnow.org/",
    description:
      "A nonprofit fostering long-term thinking and responsibility on the timescale of civilization through projects, talks, and cultural initiatives.",
    category: ["Other"],
  },
  {
    title: "Docker Engine",
    url: "https://docs.docker.com/engine/",
    description:
      "...an open source containerization technology for building and containerizing your applications.",
    category: ["FOSS", "DevOps"],
  },
  {
    title: "Lifeboat Foundation",
    url: "https://lifeboat.com/",
    description:
      "...dedicated to encouraging scientific advancements while helping humanity survive existential risks and possible misuse of increasingly powerful technologies...",
    category: ["Other"],
  },
  {
    title: "Audacity",
    url: "https://www.audacityteam.org/",
    description:
      "Audacity is the world's most popular free software for recording and editing audio.",
    category: ["Audio", "FOSS"],
  },
  {
    title: "The Debian Project",
    url: "https://www.debian.org/",
    description: `...an association of individuals, sharing a common goal: We want to create a free operating system, freely available for everyone.`,
    category: ["FOSS"],
  },
  {
    title: "Ubuntu",
    url: "https://ubuntu.com/",
    description: `The number 1 open source operating system powering millions of PCs and laptops around the world.`,
    category: ["Programming", "FOSS"],
  },
  {
    title: "GIMP",
    url: "https://www.gimp.org/",
    description: `GIMP is a cross-platform image editor available for GNU/Linux, macOS, Windows and more operating systems.`,
    category: ["FOSS"],
  },
  {
    title: "OBS",
    url: "https://obsproject.com/",
    description: `Free and open source software for video recording and live streaming.`,
    category: ["FOSS", "Audio"],
  },
  {
    title: "Mozilla",
    url: "https://www.mozilla.org/",
    description: `Mozilla is a global community of passionate volunteers, fellows and contributors who have been building, protecting and shaping the internet [...] since 1998.`,
    category: ["Other", "FOSS"],
  },
  {
    title: "Internet Archive",
    url: "https://archive.org/",
    description: `...a non-profit library of millions of free texts, movies, software, music, websites, and more.`,
    category: ["OSINT", "Other"],
  },
  {
    title: "OpenVPN",
    url: "https://openvpn.net/",
    description: `Free and open-source server/client software which uses SSL/TLS to create secure, encrypted VPN tunnels for remote access or site-to-site networking.`,
    category: ["OPSEC", "FOSS"],
  },
  {
    title: "KeePassXC",
    url: "https://keepassxc.org/",
    description: `A free, open-source, cross-platform password manager for storing your credentials in an encrypted local database.`,
    category: ["OPSEC", "FOSS"],
  },
  {
    title: "ZoneMinder",
    url: "https://zoneminder.com/",
    description: `A free, open-source, self-hosted video surveillance system for Linux that lets you capture, monitor, record and review security camera feeds.`,
    category: ["OPSEC", "FOSS"],
  },
  {
    title: "News API",
    url: "https://newsapi.org/",
    description: `Locate articles and breaking news headlines from news sources and blogs across the web with a JSON API.`,
    category: ["OSINT", "Programming"],
  },
  {
    title: "VLC",
    url: "https://www.videolan.org/",
    description: `...a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols. `,
    category: ["FOSS", "Audio"],
  },
  {
    title: "Chroma",
    url: "https://www.trychroma.com/",
    description: `...makes it easy to build LLM apps by making knowledge, facts, and skills pluggable for LLMs.`,
    category: ["FOSS", "Programming"],
  },
];
