# INL270 Sanctuary — Master Specification & Architectural Plan

## 1. Executive Context & Constraints
- **Target Exam:** INL270 Semester Test 2 — Tomorrow, 16 October 2026, 12:30–14:00 (Strict venue lockout at 12:40).
- **Core Objective:** An ADHD-optimized, zero-friction, Apple-grade study sanctuary engineered to lower cortisol, eliminate walls of text, and lock in high-yield marking triggers through spatial memory, audio synthesis, and tactile interaction.
- **Architectural Mandate:** Zero-build, offline-first single-file web application (`index.html`) ready for instant deployment via GitHub Pages or local Safari Home Screen installation.

## 2. Curriculum Ground Truth (Audited against INL270 Sources)
### A. 8 Core Conceptual Paradigms
1. **Relational Holism vs. Cartesian Dualism:** Emeagwali & Dei (2014) — Holistic interconnections of body, mind, soul, spirit, and Land vs. Western nature/culture commodification.
2. **Dynamic Lived Experimentation vs. Frozen Lore:** Flavier et al. (1995) & Warren (1991) — Continuous internal experimentation cycle vs. colonial myth of static tradition.
3. **Tacit Context-Embeddedness vs. Codified Universalism:** World Bank (1998) — Knowledge embedded in community practices and rituals vs. decontextualized lab abstractions.
4. **Communal Fiduciary Custodianship vs. Individual Ownership:** *Bulun Bulun v R & T Textiles* (1998) — Equitable fiduciary duty to the Ganalbingu clan vs. alienable single-inventor monopolies.
5. **In-Situ Living Practice vs. Ex-Situ Archival Extraction:** Agrawal (1995) — The Archiving Paradox: central databanks strip context and create a "mausoleum for knowledge."
6. **Relational Revocable Consent vs. Transactional Waiver:** Garrison (2013) — Ongoing, collective genomic justice (*Havasupai*) vs. one-time signed forms used for scope-creep.
7. **Methodological Pluralism vs. Demarcation Hierarchy:** Agrawal (1995) — Popper, Lakatos, and Feyerabend proved no strict demarcation criterion separates science from non-science.
8. **Power Asymmetry vs. Epistemic Neutrality:** Agrawal (1996 *Tanggapan*) — The true divide is not epistemological; it is defined by relationship to power and resource control.

### B. 10 High-Yield Exam Dilemmas & Empirical Cases
1. **D1: Extractive Biomedical Scope-Creep (*Havasupai Tribe v. ASU*)** — $700k settlement, 412 blood samples repatriated (2010), ban on ASU researchers after diabetes blood was used for schizophrenia, inbreeding, and Bering Strait migration studies.
2. **D2: Sacred Art on Commercial Goods (*Milpurrurru v Indofurn* 1994)** — Vietnamese-made carpets copied 8 Aboriginal artists' Dreamtime works; $189,000 awarded including collective "cultural harm."
3. **D3: Clan Title vs. Individual Copyright (*Bulun Bulun v R & T Textiles* 1998)** — Sacred waterhole design (*Atunypa*); court established an equitable **fiduciary duty** from artist to clan.
4. **D4: Pharmaceutical Biopiracy (Venezuelan *Curare* & SA *Hoodia*)** — Alkaloid d-tubocurarine isolated from Amazonian arrow poison without PIC or benefit-sharing under the Nagoya Protocol.
5. **D5: The Ex-Situ Digitization Trap (Agrawal vs. India's TKDL)** — Open-access publication destroys novelty and invites theft; solved via defensive, closed patent-examiner databases (TKDL) and NMAI role-based access tiers (Hunter 2005).
6. **D6: Decolonizing the Classroom (Emeagwali Model A vs. Model B)** — Teacher-centered textbook "hostages to text" (Model A) vs. student-centered, problem-oriented community praxis (Model B) and Semali's lived Nyererean classroom conflict.
7. **D7: Virtual Repatriation & Customary Secrecy (Smithsonian NMAI & *Ara Irititja*)** — Jane Hunter's "Spiral of Knowledge" and MPEG-21/XrML rights metadata enforcing gender, clan, and initiation restrictions.
8. **D8: Origin-Linked Agricultural Value (*Criollo* Cacao GIs)** — Dutfield (2020): Geographical Indications protect collective, terroir-bound community practices in perpetuity, unlike 20-year patents.
9. **D9: Digital Gatekeeping (Wikipedia's Oral Citation Catch-22)** — Winschiers-Theophilus & Gallert: Ovaherero elders blocked from editing Wikipedia because oral history lacks "secondary Western published sources."
10. **D10: Gendered Erasure vs. Custodianship (SA IKS Policy & World Bank)** — Malicounda (Senegal) women ending FGM, Ibo postpartum care, and SA 2004 IKS Policy (Sec 2.7) accrediting women via NIKSO and the NQF.

## 3. Aesthetic & Sensory System
- **Palette ("Ceremonial Earth & Apple Glass"):**
  - Light Sanctuary: `#F9F6F0` (Warm Bone), `#C86D51` (Terracotta Ochre), `#3D5A45` (Botanical Sage), `#1E1E1C` (Deep Charcoal Ink).
  - Obsidian Night: `#121312` (Soft Obsidian), `#1C1E1C` (Elevated Glass Surface), `#E08266` (Luminous Ochre), `#6B9E78` (Luminous Sage).
- **Typography:** Editorial Serif (`Fraunces` / `New York` / `Georgia`) for headings and conceptual anchors; clean sans-serif (`SF Pro Display` / `Inter` / `system-ui`) for scannable micro-bullets.
- **Visual Assets:** Graceful integration of `./elder.png`, `./transfer.png`, `./women.png`, and `./yurt.png` with automatic CSS fallback art so the layout never breaks if an image path shifts.

## 4. Interaction & Audio Architecture
- **Persistent Top Bar:**
  - Live Countdown & Lockout Alert (`16 Oct 12:30 — Lockout 12:40`).
  - `🌿 Essentials Only` Panic-Reduction Toggle: Collapses every card to a single 10-word gold-standard sentence + 3 grading keywords.
  - `🥣 Singing Bowl` Web Audio API Synthesizer: Pure harmonic sine-wave resonance (432Hz + 648Hz + 864Hz) on tab switches and mastery checks.
  - `🎙️ Broadcast / Voice-Over Mode`: Native Safari Web Speech API reader formatted as crisp, rhythmic radio scripts so she can listen eyes-closed or read out loud effortlessly.
- **4 Core Interactive Modules:**
  - **Tab 1: The Paradigm Compass** (Interactive split-pills with 1-tap "Agrawal Trap" reveal).
  - **Tab 2: The Dilemma Simulator** (10 interactive case scenarios with POV toggle, Concrete Evidence badge, and Examiner's Marking Rubric).
  - **Tab 3: The Thinker & Policy Matrix** (Ranked flashcards with instant 1-sentence frameworks).
  - **Tab 4: The Essay Forge** (Interactive 8-paragraph house model builder + 1-tap "Copy to Apple Notes" & "Read Script Aloud").
