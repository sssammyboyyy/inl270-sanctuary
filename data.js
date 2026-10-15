// INL270 Sanctuary — Knowledge Engine & Course Dataset
// Sourced from INL270 S2 2026 Curriculum (UP / ClickUP)

const SANCTUARY_DATA = {
  course: {
    code: "INL270",
    name: "Indigenous Knowledge Systems",
    exam: "Semester Test 2",
    date: "16 October 2026",
    time: "12:30 – 14:00"
  },

  paradigms: [
    {
      id: "p1",
      title: "Relational Ontology vs. Cartesian Dualism",
      highYield: true,
      audioText: "In Indigenous ontology, land, ancestors, humans, and more-than-human kin form an inseparable moral web. Knowledge lives within relationships. Western Cartesian thought splits mind from matter, nature from culture, treating the earth as an inert resource for extraction.",
      indigenous: {
        title: "Relational Ontology (Ubuntu / Kinship)",
        desc: "Land, waters, ancestors, and communities exist in a moral web of mutual accountability. We belong to the land; knowledge is not owned, it is enacted through relationship.",
        quote: "Umuntu ngumuntu ngabantu — I am because we are, and we are because the land sustains us.",
        badge: "Interconnected Moral Web"
      },
      western: {
        title: "Cartesian Dualism (Subject vs. Object)",
        desc: "Splits mind from body, culture from nature, observer from observed. The natural world is codified as inert 'raw material' awaiting human exploitation.",
        quote: "Man as master and possessor of nature. — Descartes",
        badge: "Inert Resource Extraction"
      },
      examHook: "Whenever an essay asks about resource conflict, contrast Cartesian commodification with relational stewardship."
    },
    {
      id: "p2",
      title: "Holism vs. Reductionism",
      highYield: true,
      audioText: "Indigenous knowledge is holistic: validated in context by lived survival and ecological balance. Western science isolates single variables in sterile laboratories, often stripping phenomena of their cultural, spiritual, and seasonal meaning.",
      indigenous: {
        title: "Ecological Holism",
        desc: "Knowledge is validated by lived harmony in context. A medicinal plant cannot be separated from its soil, the ritual of its harvesting, or the spiritual health of the community.",
        quote: "Does it heal the whole person and sustain the community across seasons?",
        badge: "Contextual & Lived Validation"
      },
      western: {
        title: "Mechanistic Reductionism",
        desc: "Breaks systems into isolated parts, testing single chemical compounds in a laboratory to extract generalizable, universal laws independent of context.",
        quote: "Isolate the active compound, standardize dosage, universalize the market.",
        badge: "Laboratory Isolation"
      },
      examHook: "Use this to explain why pharmaceutical firms often fail to replicate the full healing efficacy of traditional medicine."
    },
    {
      id: "p3",
      title: "Cyclical Time vs. Linear Progress",
      highYield: false,
      audioText: "Indigenous time is cyclical, governed by seasons, renewal, and the Seventh Generation Principle. Western linear time conceives development as a one-way highway from traditional primitive to modern technological progress.",
      indigenous: {
        title: "Cyclical Renewal & 7th Generation",
        desc: "Time moves in rhythmic cycles of return, renewal, and generational care. Decisions made today must preserve ecological life for seven generations into the future.",
        quote: "We do not inherit the earth from our ancestors; we borrow it from our children.",
        badge: "Generational Accountability"
      },
      western: {
        title: "Linear Industrial Progress",
        desc: "A teleological forward march measuring human advancement by GDP, technological turnover, and quarterly market growth, treating past tradition as obsolete.",
        quote: "Development is the linear transition from traditional stagnation to modern growth.",
        badge: "Extractive Growth"
      },
      examHook: "Deploy in questions critiquing UN Sustainable Development Goals (SDGs) from an indigenous perspective."
    },
    {
      id: "p4",
      title: "Collective Stewardship vs. Individual IP",
      highYield: true,
      audioText: "Indigenous knowledge is held collectively by communities across generations under customary law. Western intellectual property law awards a 20-year temporary monopoly to a single identifiable inventor for commercial gain.",
      indigenous: {
        title: "Customary Collective Trust",
        desc: "Knowledge belongs to the collective, inherited from ancestors and held in trust for future generations. Customary protocols govern who can practice or teach specific wisdom.",
        quote: "You cannot patent the song of an ancestor or the memory of the elders.",
        badge: "Trans-generational Trust"
      },
      western: {
        title: "Intellectual Property & Patents",
        desc: "A statutory 20-year exclusionary monopoly granted to an inventor who proves novelty, inventive step, and industrial applicability for commercial profit.",
        quote: "Exclusive right to manufacture, use, and sell for financial return.",
        badge: "20-Year Commercial Monopoly"
      },
      examHook: "Anchor Graham Dutfield’s argument that patent regimes structurally exclude collective, cumulative traditional knowledge."
    },
    {
      id: "p5",
      title: "Living Orality vs. Codified Archives",
      highYield: false,
      audioText: "Indigenous knowledge is living, embodied, and transmitted through oral history, ritual, and apprenticeship. Codifying it into static databases risks freezing living cultures into historical museum artifacts.",
      indigenous: {
        title: "Embodied Living Orality",
        desc: "Knowledge exists as long as it is spoken, danced, harvested, and lived. Elders transmit nuance through stories that adapt organically to current environmental changes.",
        quote: "When an elder dies without transmission, a living library burns to the ground.",
        badge: "Dynamic & Experiential"
      },
      western: {
        title: "Codified Static Archive",
        desc: "Truth is legitimized only when fixed in written text, peer-reviewed journals, or digital databases, privileging the written word over oral memory.",
        quote: "If it is not written down and indexed, it is dismissed as folklore.",
        badge: "Fixed Textual Storage"
      },
      examHook: "Connect to Lishan Adam’s warning: ICTs must support oral transmission rather than replacing it with rigid databases."
    },
    {
      id: "p6",
      title: "In-Situ Living Wisdom vs. Ex-Situ Extraction (Agrawal)",
      highYield: true,
      audioText: "Arun Agrawal's core paradox: archiving indigenous knowledge in national databases contradicts what makes it indigenous. Genuine preservation requires protecting communities' land rights and autonomy where the knowledge lives.",
      indigenous: {
        title: "In-Situ Preservation (Agrawal's Ground)",
        desc: "Knowledge cannot survive separated from the land and community that gave birth to it. True protection means land rights, political autonomy, and community control.",
        quote: "Preserve the forest and the community, and the medicine thrives.",
        badge: "Agrawal's In-Situ Law"
      },
      western: {
        title: "Ex-Situ Database Extraction",
        desc: "Extracts local recipes and botanical lists into centralized national databases, decoupling knowledge from its people and landscape.",
        quote: "Digitize it into an open catalog so the world can study it.",
        badge: "Ex-Situ Extraction Paradox"
      },
      examHook: "This is the single highest-scoring critique in INL270. Cite Agrawal to challenge top-down digital archives."
    },
    {
      id: "p7",
      title: "Consent-as-Relationship vs. Consent-as-Form",
      highYield: true,
      audioText: "In the Havasupai case, researchers used a signed diabetes consent form to conduct genetic migration and schizophrenia studies that violated spiritual beliefs. Indigenous consent is ongoing, collective, and revocable—not a one-time signature.",
      indigenous: {
        title: "Ongoing Collective Consent",
        desc: "Consent is an evolving relationship between researchers and the collective council. It requires continuous consultation, community review of findings, and the right to revoke permission.",
        quote: "Consent is a covenant between communities, not a piece of paper signed under duress.",
        badge: "Relational & Revocable"
      },
      western: {
        title: "Transactional Institutional Form",
        desc: "A legalistic liability waiver signed once by an individual subject, often written in complex academic jargon that grants broad institutional usage rights.",
        quote: "Signed the IRB form; the institution now holds unrestricted research purview.",
        badge: "Legalistic Waiver"
      },
      examHook: "Always cite the Havasupai Tribe v. Arizona State University settlement (2010) as your primary evidence."
    },
    {
      id: "p8",
      title: "Sustainability Through Belonging vs. Fortress Conservation",
      highYield: false,
      audioText: "Fortress conservation fences indigenous peoples out of ancestral lands in the name of biodiversity, causing ecological decline. Indigenous stewardship maintains biodiversity through active, customary relationship and community mapping.",
      indigenous: {
        title: "Customary Co-Management",
        desc: "Humans are active caretakers in the ecosystem. Traditional controlled burns, selective harvesting, and customary taboos foster high biodiversity.",
        quote: "The forest needs its people as much as the people need the forest.",
        badge: "UNESCO LINKS Co-Management"
      },
      western: {
        title: "Fortress Conservation (Exclusion)",
        desc: "Constructs artificial 'wilderness' by forcibly evicting local inhabitants, erecting fences, and stationing armed rangers to protect parks from the very people who created them.",
        quote: "Nature must be pristine, untouched by human presence.",
        badge: "Exclusionary Fencing"
      },
      examHook: "Mention community mapping as an empowering tool for communities to prove customary tenure and defeat fortress conservation."
    }
  ],

  dilemmas: [
    {
      id: "d1",
      unit: "SU5 · Biopiracy & IP",
      title: "The Curare Alkaloid Patent",
      image: "assets/elder.png",
      highYield: true,
      dilemma: "A multinational pharmaceutical firm collects a neuromuscular hunting formulation from Amazonian elders. In their laboratory, chemists isolate the active alkaloid, synthesize a muscle relaxant for general anesthesia, and file a global patent generating hundreds of millions of dollars.",
      pathA: {
        label: "The Western Patent View",
        summary: "The patent is legally valid: isolating and characterizing an active chemical compound satisfies novelty, non-obviousness, and industrial utility. Traditional knowledge was merely prior observation.",
        verdict: "Western Commercial Law"
      },
      pathB: {
        label: "The Indigenous & Decolonial View",
        summary: "This is classic biopiracy. The invention is cumulative, trans-generational knowledge stolen without Prior Informed Consent (PIC) or fair Mutually Agreed Terms (MAT) for benefit-sharing under the Nagoya Protocol.",
        verdict: "Nagoya & Decolonial Ethics"
      },
      reveal: {
        examinerLens: "The examiner tests whether you recognize that patent law's requirement for a 'single individual inventor' structurally erases collective inter-generational indigenous innovation.",
        whyWesternFails: "Western patent regimes dismiss traditional knowledge as 'nature' or 'unscientific folklore' until a Western lab isolates one molecule, turning public community heritage into private corporate wealth.",
        scholarAnchor: "Graham Dutfield & Darrell Posey — 'Patents structurally facilitate biopiracy because they cannot accommodate collective, trans-generational prior art.'",
        rubricKeywords: ["Biopiracy", "Nagoya Protocol", "Prior Informed Consent (PIC)", "Access and Benefit-Sharing (ABS)", "Sui Generis Protection"],
        examSentence: "As Dutfield emphasizes, patent regimes structurally dispossess indigenous communities by treating ancestral cumulative knowledge as mere raw material until isolated by Western laboratories, directly violating the Nagoya Protocol's benefit-sharing mandate."
      }
    },
    {
      id: "d2",
      unit: "SU2 · Conservation & Policy",
      title: "The Fenced Ancestral Forest",
      image: "assets/yurt.png",
      highYield: true,
      dilemma: "A national park authority evicts a local community from their ancestral forest to establish a strict 'biodiversity sanctuary' under donor funding. Five years later, invasive species choke the understory, illegal poachers infiltrate unguarded boundaries, and centuries-old cultural ceremonies lapse.",
      pathA: {
        label: "The Exclusionary View",
        summary: "Human presence inevitably degrades ecosystems. Enforcing strict fortress conservation with armed boundaries is necessary to preserve pristine wilderness.",
        verdict: "Fortress Conservation"
      },
      pathB: {
        label: "The Relational Stewardship View",
        summary: "Biodiversity in ancestral lands was co-produced by community customary management. Evicting the people removes the ecological caretakers.",
        verdict: "Co-Management & LINKS"
      },
      reveal: {
        examinerLens: "The question tests your ability to critique 'fortress conservation' using UNESCO’s Local and Indigenous Knowledge Systems (LINKS) framework and community participatory mapping.",
        whyWesternFails: "Western ecology mistakenly views nature and humans as dualistic opponents. It fails to realize that periodic indigenous harvesting and customary taboos were the active stabilizing mechanism of the ecosystem.",
        scholarAnchor: "UNESCO LINKS Framework & Community Participatory 3D Mapping (P3DM).",
        rubricKeywords: ["Fortress Conservation", "Co-Management", "UNESCO LINKS", "Community Mapping", "Customary Tenure"],
        examSentence: "Rather than preserving ecosystems, fortress conservation divorces ecological health from customary stewardship; UNESCO’s LINKS framework proves that co-management based on community mapping produces far superior conservation outcomes."
      }
    },
    {
      id: "d3",
      unit: "SU5 · Research Ethics",
      title: "The Havasupai Blood Samples",
      image: "assets/transfer.png",
      highYield: true,
      dilemma: "Between 1990 and 1994, geneticists collected blood samples from the Havasupai Tribe at the bottom of the Grand Canyon to study high diabetes rates. Years later, tribal members discovered their DNA was used without permission for research on schizophrenia, inbreeding, and population migration theories that directly contradicted their sacred emergence origin stories.",
      pathA: {
        label: "The Institutional Biobank View",
        summary: "The consent form allowed research into 'the causes of behavioral and medical disorders'. Stored biospecimens should be freely usable by scientists to advance human knowledge.",
        verdict: "Transactional Consent"
      },
      pathB: {
        label: "The Genomic Sovereignty View",
        summary: "Consent was procured under false pretenses. Using sacred DNA to disprove a tribe's origin narratives causes profound spiritual harm and violates collective autonomy.",
        verdict: "Relational & Revocable Consent"
      },
      reveal: {
        examinerLens: "The examiner looks for direct citation of Havasupai Tribe v. Arizona State University (settled in 2010 with $700,000 compensation and the return of blood samples) to illustrate that consent must be collective, ongoing, and revocable.",
        whyWesternFails: "Western bioethics treats consent as an individual, one-off legal waiver. It ignores collective indigenous sovereignty, spiritual harm, and the psychological impact of research outputs.",
        scholarAnchor: "Nanibaa’ Garrison (2010) — Genomic Justice and Indigenous Data Sovereignty.",
        rubricKeywords: ["Informed Consent", "Collective Consent", "Spiritual Harm", "Repatriation of Samples", "Indigenous Data Sovereignty"],
        examSentence: "The landmark Havasupai case demonstrates that transactional, individualistic consent forms commit epistemic violence; legitimate research requires ongoing collective consent that respects indigenous origin narratives and community governance."
      }
    },
    {
      id: "d4",
      unit: "SU4 · Knowledge Management",
      title: "The Open-Access Medicine Portal",
      image: "assets/elder.png",
      highYield: true,
      dilemma: "A national science council launches an ambitious digital initiative to interview traditional healers, transcribe their secret herbal recipes, and publish an open-access web database 'to preserve dying heritage before it disappears.'",
      pathA: {
        label: "The Open Digital Archive View",
        summary: "Digitizing and publishing heritage online preserves it permanently for posterity and prevents knowledge from dying with aging elders.",
        verdict: "Ex-Situ Open Access"
      },
      pathB: {
        label: "The Agrawal Paradox & Defensive Layer View",
        summary: "Publicly broadcasting sacred recipes without access controls destroys novelty, strips elder stewardship, and provides a shopping catalog for commercial pharmaceutical exploiters.",
        verdict: "Tiered Defensive Access (TKDL Model)"
      },
      reveal: {
        examinerLens: "Tests whether you understand Arun Agrawal's paradox: ex-situ archiving strips indigenous knowledge of its context. Contrast with India’s Traditional Knowledge Digital Library (TKDL), which is closed to the public and accessible only to patent examiners.",
        whyWesternFails: "Western open-access dogma assumes transparency is always benign. In unequal commercial power structures, public databases make exploitation effortless unless legally protected by defensive publication.",
        scholarAnchor: "Arun Agrawal (1995) on the archive paradox & Jane Hunter on community-controlled access tiers.",
        rubricKeywords: ["Agrawal's Paradox", "Defensive Publication", "Traditional Knowledge Digital Library (TKDL)", "Access Tiers", "Misappropriation"],
        examSentence: "As Agrawal demonstrated, ex-situ digitization strips knowledge of its relational context; therefore, systems like India’s TKDL succeed only when structured as defensive, tiered databases closed to commercial biopirates."
      }
    },
    {
      id: "d5",
      unit: "SU6 · Intellectual Property Options",
      title: "The Artisanal Cacao & Rooibos Brand",
      image: "assets/transfer.png",
      highYield: false,
      dilemma: "Multinational luxury chocolatiers and tea brands market 'wild-harvested Criollo cacao' and 'authentic African Rooibos,' capturing 95% of retail profit margins while the indigenous farming cooperatives that bred and cultivated these crops remain in poverty.",
      pathA: {
        label: "The Standard Patent / Trademark Route",
        summary: "The crops are already widely cultivated and lack novelty; patents cannot apply. Free trade dictates whoever packages and brands the product captures the margin.",
        verdict: "Free Market Commodity"
      },
      pathB: {
        label: "The Sui Generis & Geographical Indication Route",
        summary: "Establish a Geographical Indication (GI) and collective trademarks tied to indigenous territory and customary methods, legally capturing origin premium.",
        verdict: "Sui Generis & GI Regimes"
      },
      reveal: {
        examinerLens: "Tests knowledge of alternative intellectual property tools beyond patents: Geographical Indications (GIs), Collective Trademarks, and South Africa's landmark Rooibos Access and Benefit-Sharing Agreement (2019).",
        whyWesternFails: "Individual patent law offers zero protection for traditional agricultural varieties. Indigenous groups need collective, territory-linked intellectual property tools.",
        scholarAnchor: "WIPO Intergovernmental Committee (IGC) on Intellectual Property and Genetic Resources.",
        rubricKeywords: ["Geographical Indications (GIs)", "Collective Trademarks", "Sui Generis Regimes", "Rooibos ABS Agreement", "Value Capture"],
        examSentence: "Rather than forcing living heritage into ill-fitting patent regimes, indigenous communities achieve economic sovereignty through Geographical Indications and sui generis mechanisms that legally tether commercial value to customary territory."
      }
    },
    {
      id: "d6",
      unit: "SU1 · Epistemology & Demarcation",
      title: "The Medical Curriculum Stand-Off",
      image: "assets/elder.png",
      highYield: true,
      dilemma: "A university curriculum committee reviews a proposal to co-teach an integrative clinical module alongside certified indigenous sangomas and traditional healers. Conservative faculty reject the proposal, calling traditional healing 'unverifiable, unscientific superstition.'",
      pathA: {
        label: "The Positivist Demarcation View",
        summary: "Medical degrees must rely exclusively on double-blind empirical science. Incorporating indigenous concepts dilutes scientific rigor.",
        verdict: "Cartesian Positivism"
      },
      pathB: {
        label: "The Epistemic Justice View",
        summary: "Science also fails its own rigid demarcation tests (Popper, Feyerabend). Indigenous healing represents centuries of empirical observation integrated with psychosocial holism.",
        verdict: "Epistemic Pluralism (Agrawal)"
      },
      reveal: {
        examinerLens: "Examiners want to see the philosophical critique of the 'demarcation problem' (Karl Popper, Paul Feyerabend, Arun Agrawal). Show how Western science frequently commits 'epistemicide' (Santos).",
        whyWesternFails: "Positivism assumes Western science is the sole arbiter of universal truth, ignoring that over 70% of rural Southern Africans consult traditional health practitioners first with proven psychosomatic efficacy.",
        scholarAnchor: "Arun Agrawal & Boaventura de Sousa Santos (Epistemologies of the South).",
        rubricKeywords: ["Demarcation Problem", "Epistemic Justice", "Epistemicide", "Co-Production", "Traditional Health Practitioners Act"],
        examSentence: "Drawing on Agrawal’s critique of the false dichotomy between traditional and scientific thought, integrating indigenous healers restores epistemic justice and acknowledges empirical knowledge systems marginalized by colonial medicine."
      }
    },
    {
      id: "d7",
      unit: "SU4 · Repatriation & Museums",
      title: "The Virtual Repatriation of Sacred Masks",
      image: "assets/yurt.png",
      highYield: true,
      dilemma: "A metropolitan museum houses sacred ceremonial wooden masks acquired under questionable colonial trade. The originating indigenous community requests their return. The museum board refuses physical deaccession citing conservation facilities, but offers 3D high-resolution digital scans.",
      pathA: {
        label: "The Technocratic Digital Twin View",
        summary: "A digital 3D model allows anyone in the world to admire the artifact while museum experts preserve the fragile wood in climate-controlled vaults.",
        verdict: "Digital Universalism"
      },
      pathB: {
        label: "The Spiral of Knowledge Model (Hunter)",
        summary: "Virtual repatriation is meaningful only if the community controls access tiers: sacred/secret masks must be restricted to initiated elders, not posted online.",
        verdict: "Hunter's Spiral of Knowledge"
      },
      reveal: {
        examinerLens: "Directly tests Jane Hunter’s research on the Smithsonian National Museum of the American Indian (NMAI) and the 'Spiral of Knowledge' workflow.",
        whyWesternFails: "Treating sacred objects as public 3D files violates customary law. Certain masks are living entities only meant to be seen by specific initiates during sacred ceremonies.",
        scholarAnchor: "Jane Hunter (University of Queensland) — IT for Indigenous Knowledge Management.",
        rubricKeywords: ["Virtual Repatriation", "Spiral of Knowledge", "Jane Hunter", "NAGPRA", "Access Rights & Tiers"],
        examSentence: "As Jane Hunter establishes in the Spiral of Knowledge framework, virtual repatriation succeeds only when digital architecture enforces customary protocols, allowing elders to govern viewing permissions rather than enforcing universal public access."
      }
    },
    {
      id: "d8",
      unit: "SU4 · ICT in Rural Communities",
      title: "The High-Tech Telecentre White Elephant",
      image: "assets/women.png",
      highYield: false,
      dilemma: "An international aid agency builds a solar-powered computer lab in an Ethiopian pastoralist village to store veterinary and weather forecasts in an SQL database. Two years later, the computers sit covered in dust while pastoralists continue relying on elder weather divination.",
      pathA: {
        label: "The Deficit Modernization View",
        summary: "The pastoralists suffer from digital illiteracy and cultural resistance. More mandatory computer training workshops are required.",
        verdict: "Technological Determinism"
      },
      pathB: {
        label: "The Appropriate Oral ICT View (Lishan Adam)",
        summary: "Text databases conflict with oral cultures. ICTs must use community radio, audio-visual storytelling, and existing social venues (idir, markets).",
        verdict: "Lishan Adam's Orality Model"
      },
      reveal: {
        examinerLens: "Tests Lishan Adam’s paper on ICTs and Indigenous Knowledge in Africa: top-down database rollouts fail because they do not match the dynamic, oral nature of indigenous communication.",
        whyWesternFails: "Donors believe technology is neutral and that 'access to screens' equals empowerment. They ignore that pastoralists make collective oral decisions in community gatherings.",
        scholarAnchor: "Lishan Adam (Ethiopia) — ICTs for Supporting Indigenous Knowledge in Africa.",
        rubricKeywords: ["Appropriate Technology", "Orality", "Telecentres", "Top-Down Failure", "Community Structures (Idir)"],
        examSentence: "Lishan Adam’s analysis proves that imposing text-heavy centralized databases on oral pastoralist communities fails; ICT interventions must align with existing social structures like community radio and oral gatherings."
      }
    },
    {
      id: "d9",
      unit: "SU3 · MDGs / SDGs & Health",
      title: "Traditional Healers as Pill Couriers",
      image: "assets/transfer.png",
      highYield: false,
      dilemma: "A national HIV/AIDS health campaign recruits 500 traditional healers. The ministry requires them to act strictly as referral couriers who identify sick patients and transport them to Western clinics, prohibiting them from performing customary cleansing ceremonies.",
      pathA: {
        label: "The Instrumentalist Health View",
        summary: "Healers have high community trust and should be utilized as foot soldiers to deliver Western antiretroviral therapy without confusing patients with unproven rituals.",
        verdict: "Instrumental Referral"
      },
      pathB: {
        label: "The Authentic Co-Management View (Guinea MAP)",
        summary: "Healers must be treated as equal partners in diagnosis and psychosocial counseling. Cleansing rituals reduce stigma and ensure long-term patient adherence.",
        verdict: "Holistic Integration"
      },
      reveal: {
        examinerLens: "Tests the World Bank’s Indigenous Knowledge for Development framework and health partnerships (e.g. Guinea traditional medicine project).",
        whyWesternFails: "Treating healers as mere couriers insults their status, strips psychosocial and spiritual care from medicine, and breeds resentment.",
        scholarAnchor: "World Bank IK for Development Framework & UN SDG 3 (Good Health and Well-Being).",
        rubricKeywords: ["Mainstreaming", "Participation Ladder", "Valuation of Healers", "Psychosocial Adherence", "SDG 3"],
        examSentence: "When development programs treat traditional healers as passive delivery conduits rather than equal partners, they dismantle the social trust that sustains patient adherence, failing the World Bank's integration principles."
      }
    },
    {
      id: "d10",
      unit: "SU7 · Gender & Environmental Defense",
      title: "The Excluded Water Protectors",
      image: "assets/women.png",
      highYield: true,
      dilemma: "A pipeline consultation meets exclusively with male tribal council chairmen to negotiate route clearances. Female elders—who possess sacred knowledge of natural spring aquifers and medicinal river flora—are barred from the negotiation room.",
      pathA: {
        label: "The Patriarchal Administrative View",
        summary: "Government agencies are required only to consult official recognized elected tribal council officers. Speed and legal formality take precedence.",
        verdict: "Colonial Bureaucracy"
      },
      pathB: {
        label: "The Gendered Knowledge Sovereignty View",
        summary: "Indigenous knowledge is deeply gendered. Women hold specific water, seed, and birth stewardship that cannot be represented by male officials (Standing Rock model).",
        verdict: "Intersectionality & Standing Rock"
      },
      reveal: {
        examinerLens: "Tests SU7 on the gendered dimensions of IK. References Standing Rock (Lakota women leaders as water protectors) and rural seed preservation.",
        whyWesternFails: "Colonial structures imposed Victorian patriarchal governance onto previously egalitarian clan systems, disenfranchising women who hold 80% of food and medicinal knowledge.",
        scholarAnchor: "Standing Rock Water Protectors & Gendered Agricultural Epistemologies.",
        rubricKeywords: ["Gendered Knowledge", "Free Prior Informed Consent (FPIC)", "Water Protectors", "Standing Rock", "Seed Sovereignty"],
        examSentence: "By ignoring the gendered nature of indigenous ecological knowledge, extractive consultations violate Free Prior Informed Consent (FPIC), silencing women who serve as primary water protectors and seed custodians."
      }
    }
  ],

  essayForge: {
    title: "INL270 Essay Forge — The House Model Architecture",
    description: "The standard 7-step blueprint guaranteed to satisfy University of Pretoria examiners. Every paragraph matches the exact grading rubric.",
    steps: [
      {
        step: 1,
        title: "Introduction & Theoretical Roadmap (10% of marks)",
        prompt: "Define Indigenous Knowledge clearly, articulate its structural tension with Western frameworks, and state your thesis in 2 sentences.",
        sample: "Indigenous Knowledge (IK) is a dynamic, holistic, and relational system of knowing, being, and doing, preserved collectively across generations through oral tradition and customary practice. This essay evaluates how Western legal and developmental frameworks—rooted in Cartesian dualism and commercial property—have historically marginalized IK, arguing that genuine preservation requires transitioning from ex-situ extraction to in-situ community sovereignty.",
        keywords: ["Dynamic & Holistic", "Relational Ontology", "Ex-Situ vs. In-Situ", "Cartesian Dualism"]
      },
      {
        step: 2,
        title: "The Epistemological Tension & Agrawal's Paradox (25% of marks)",
        prompt: "Explain why Western and Indigenous paradigms collide. You MUST cite Arun Agrawal's critique of the false dichotomy.",
        sample: "Central to this analysis is Arun Agrawal’s (1995) seminal critique, which demonstrates that attempts to rigidly distinguish 'traditional' knowledge from 'scientific' knowledge collapse on substantive, methodological, and contextual grounds. Agrawal highlights the central paradox of modernity: international efforts to archive indigenous knowledge in centralized databases contradict the very essence of indigeneity by severing living wisdom from its territorial and cultural moorings. While Western science relies on mechanistic reductionism, IK derives validity from contextual, lived balance.",
        keywords: ["Arun Agrawal (1995)", "Epistemic Demarcation", "The Archive Paradox", "Mechanistic Reductionism"]
      },
      {
        step: 3,
        title: "The Institutional & Policy Dimension (15% of marks)",
        prompt: "Anchor your argument in international and regional policy (WIPO, Nagoya Protocol, or the South African IKS Policy).",
        sample: "At the policy level, international instruments have struggled to bridge this divide. While the World Intellectual Property Organization (WIPO) Intergovernmental Committee has explored defensive publication and sui generis rights, conventional intellectual property law remains ill-equipped for collective ownership. However, the Nagoya Protocol to the Convention on Biological Diversity establishes a binding regime for Prior Informed Consent (PIC) and Access and Benefit-Sharing (ABS), reflected domestically in South Africa’s Indigenous Knowledge Act (2019) and IKS Policy (2004).",
        keywords: ["Nagoya Protocol", "Prior Informed Consent (PIC)", "Access & Benefit Sharing (ABS)", "SA IKS Act (2019)", "WIPO IGC"]
      },
      {
        step: 4,
        title: "Comparative Case Analysis (African + Global) (30% of marks)",
        prompt: "Examiners heavily reward pairing one Southern African case with one non-African comparative case.",
        sample: "This paradigm tension is crystallized in two landmark cases. In Southern Africa, the San Council's struggle over Hoodia gordonii and the 2019 Rooibos Benefit-Sharing Agreement proved that commercial exploitation of indigenous remedies without community recognition constitutes biopiracy; only legally enforced benefit-sharing can restore equity. Comparatively, in the United States, Havasupai Tribe v. Arizona State University revealed the violence of extractive academia, where blood samples donated for diabetes research were repurposed without collective consent for schizophrenia and migration studies, violating spiritual emergence narratives.",
        keywords: ["San Council / Hoodia / Rooibos", "Havasupai Tribe v. ASU", "Biopiracy", "Spiritual Harm", "Genomic Justice"]
      },
      {
        step: 5,
        title: "Critical Risks & Digital Caveats (10% of marks)",
        prompt: "Discuss the double-edged sword of ICTs, digitisation, and gender exclusion.",
        sample: "Furthermore, the digitization of heritage carries grave risks if executed naively. As Jane Hunter warns, virtual repatriation and digital archives must enforce community-governed access tiers rather than open-access universalism. Similarly, development interventions that bypass women's gendered seed and medicinal knowledge—as seen in pipeline disputes echoing Standing Rock—reproduce colonial dispossession under modern administrative guises.",
        keywords: ["Jane Hunter", "Access Tiers", "Virtual Repatriation", "Gendered Knowledge", "Standing Rock"]
      },
      {
        step: 6,
        title: "Recommendations & Conclusion (10% of marks)",
        prompt: "Provide 3 concrete policy recommendations and a reflective closing sentence.",
        sample: "To achieve authentic epistemic justice, policy makers must: (1) Mandate ongoing, collective, and revocable consent protocols for all research; (2) Implement sui generis legal mechanisms and Geographical Indications rather than commodified patents; and (3) Champion in-situ preservation by legally securing indigenous land tenure. In conclusion, Indigenous Knowledge is not a static museum relic awaiting Western validation, but a living relational compass indispensable for planetary survival.",
        keywords: ["Epistemic Justice", "Sui Generis Regimes", "In-Situ Land Tenure", "Living Relational Compass"]
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SANCTUARY_DATA;
}
