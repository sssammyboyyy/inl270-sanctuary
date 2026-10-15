// INL270 Sanctuary — Audio Engine, Speech Synthesizer & Interactive State Machine
// Built for seamless offline Apple & mobile experiences

(function () {
  'use strict';

  // --- AUDIO SYNTHESIZER (Web Audio API) ---
  class SanctuaryAudio {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }

    // Gentle Tibetan singing bowl harmonic chime
    playChime(freq = 432) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const harmonics = [1, 2, 3];
      const gains = [0.15, 0.05, 0.02];

      harmonics.forEach((h, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * h, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(gains[i], now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 1.7);
      });
    }

    // Soft organic click on card change
    playTick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.06);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.07);
    }
  }

  // --- SPEECH NARRATOR (Web Speech API) ---
  class SanctuaryNarrator {
    constructor() {
      this.synth = window.speechSynthesis;
      this.isSpeaking = false;
      this.currentBtn = null;
    }

    speak(text, buttonElement) {
      if (!this.synth) return;

      if (this.synth.speaking) {
        this.synth.cancel();
        if (this.currentBtn) {
          this.currentBtn.classList.remove('speaking-active');
        }
        if (this.currentBtn === buttonElement) {
          this.currentBtn = null;
          this.isSpeaking = false;
          return;
        }
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.94;
      utterance.pitch = 0.98;

      // Select natural English voice if available
      const voices = this.synth.getVoices();
      const preferred = voices.find(v => 
        (v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Karen') || v.lang.startsWith('en')) && v.localService
      );
      if (preferred) utterance.voice = preferred;

      this.currentBtn = buttonElement;
      if (buttonElement) buttonElement.classList.add('speaking-active');
      this.isSpeaking = true;

      utterance.onend = () => {
        if (buttonElement) buttonElement.classList.remove('speaking-active');
        this.currentBtn = null;
        this.isSpeaking = false;
      };

      utterance.onerror = () => {
        if (buttonElement) buttonElement.classList.remove('speaking-active');
        this.currentBtn = null;
        this.isSpeaking = false;
      };

      this.synth.speak(utterance);
    }

    stop() {
      if (this.synth && this.synth.speaking) {
        this.synth.cancel();
      }
      if (this.currentBtn) {
        this.currentBtn.classList.remove('speaking-active');
        this.currentBtn = null;
      }
      this.isSpeaking = false;
    }
  }

  // --- MAIN APP CONTROLLER ---
  class SanctuaryApp {
    constructor() {
      this.audio = new SanctuaryAudio();
      this.narrator = new SanctuaryNarrator();

      this.currentTab = 'compass';
      this.essentialsOnly = false;
      this.activeParadigmIdx = 0;
      this.activeLens = 'indigenous'; // 'indigenous' | 'western'
      this.activeDilemmaIdx = 0;
      this.revealedDilemmas = new Set();
      this.userChoices = {}; // dilemmaId -> 'A' | 'B'

      this.touchStartX = 0;
      this.touchStartY = 0;

      this.init();
    }

    get filteredParadigms() {
      if (!this.essentialsOnly) return SANCTUARY_DATA.paradigms;
      return SANCTUARY_DATA.paradigms.filter(p => p.highYield);
    }

    get filteredDilemmas() {
      if (!this.essentialsOnly) return SANCTUARY_DATA.dilemmas;
      return SANCTUARY_DATA.dilemmas.filter(d => d.highYield);
    }

    init() {
      this.bindEvents();
      this.render();
      this.showToast("Welcome to INL270 Sanctuary. Take a deep breath.", 3000);
    }

    bindEvents() {
      // Global click handler to unlock Web Audio on first gesture
      document.addEventListener('click', () => this.audio.init(), { once: true });

      // Tab switcher clicks
      document.querySelectorAll('[data-tab-target]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const tab = e.currentTarget.getAttribute('data-tab-target');
          this.switchTab(tab);
        });
      });

      // Essentials toggle
      const essentialsToggle = document.getElementById('btnEssentials');
      if (essentialsToggle) {
        essentialsToggle.addEventListener('click', () => {
          this.essentialsOnly = !this.essentialsOnly;
          this.activeParadigmIdx = 0;
          this.activeDilemmaIdx = 0;
          this.audio.playChime(520);
          this.render();
          this.showToast(this.essentialsOnly ? "🌿 High-Yield Exam Essentials Filtered" : "Displaying All Course Material");
        });
      }

      // Audio mute toggle
      const audioToggle = document.getElementById('btnAudioToggle');
      if (audioToggle) {
        audioToggle.addEventListener('click', () => {
          const isEnabled = this.audio.toggle();
          audioToggle.innerHTML = isEnabled ? '🔔 Sound On' : '🔕 Muted';
          if (!isEnabled) this.narrator.stop();
          else this.audio.playChime(480);
        });
      }

      // Dark Mode toggle
      const darkToggle = document.getElementById('btnDarkToggle');
      if (darkToggle) {
        darkToggle.addEventListener('click', () => {
          document.documentElement.classList.toggle('dark');
          const isDark = document.documentElement.classList.contains('dark');
          darkToggle.innerHTML = isDark ? '☀️ Light' : '🌙 Dark';
          this.audio.playTick();
        });
      }

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key === '1') this.switchTab('compass');
        if (e.key === '2') this.switchTab('dilemmas');
        if (e.key === '3') this.switchTab('essay');
        if (e.key === 'e' || e.key === 'E') {
          if (essentialsToggle) essentialsToggle.click();
        }

        if (this.currentTab === 'compass') {
          if (e.key === 'ArrowRight') this.nextParadigm();
          if (e.key === 'ArrowLeft') this.prevParadigm();
          if (e.key === ' ') {
            e.preventDefault();
            this.toggleLens();
          }
        } else if (this.currentTab === 'dilemmas') {
          if (e.key === 'ArrowRight') this.nextDilemma();
          if (e.key === 'ArrowLeft') this.prevDilemma();
        }
      });

      // Touch Gestures for iOS
      const mainContainer = document.getElementById('appContent');
      if (mainContainer) {
        mainContainer.addEventListener('touchstart', (e) => {
          this.touchStartX = e.changedTouches[0].screenX;
          this.touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        mainContainer.addEventListener('touchend', (e) => {
          const deltaX = e.changedTouches[0].screenX - this.touchStartX;
          const deltaY = e.changedTouches[0].screenY - this.touchStartY;

          // Horizontal swipe detection (> 50px horizontal and > vertical)
          if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < 0) {
              // Swipe Left -> Next
              if (this.currentTab === 'compass') this.nextParadigm();
              if (this.currentTab === 'dilemmas') this.nextDilemma();
            } else {
              // Swipe Right -> Prev
              if (this.currentTab === 'compass') this.prevParadigm();
              if (this.currentTab === 'dilemmas') this.prevDilemma();
            }
          }
        }, { passive: true });
      }
    }

    switchTab(tab) {
      if (this.currentTab === tab) return;
      this.currentTab = tab;
      this.narrator.stop();
      this.audio.playChime(tab === 'compass' ? 432 : tab === 'dilemmas' ? 512 : 576);

      // Update Nav buttons
      document.querySelectorAll('[data-tab-target]').forEach(btn => {
        const isCurrent = btn.getAttribute('data-tab-target') === tab;
        btn.classList.toggle('active-tab', isCurrent);
        btn.classList.toggle('text-[#C86D51]', isCurrent);
        btn.classList.toggle('dark:text-[#E08465]', isCurrent);
        btn.classList.toggle('font-bold', isCurrent);
      });

      this.render();
    }

    toggleLens() {
      this.activeLens = this.activeLens === 'indigenous' ? 'western' : 'indigenous';
      this.audio.playTick();
      this.renderCompass();
    }

    prevParadigm() {
      const list = this.filteredParadigms;
      if (this.activeParadigmIdx > 0) {
        this.activeParadigmIdx--;
        this.audio.playTick();
        this.renderCompass();
      }
    }

    nextParadigm() {
      const list = this.filteredParadigms;
      if (this.activeParadigmIdx < list.length - 1) {
        this.activeParadigmIdx++;
        this.audio.playTick();
        this.renderCompass();
      }
    }

    prevDilemma() {
      if (this.activeDilemmaIdx > 0) {
        this.activeDilemmaIdx--;
        this.audio.playTick();
        this.renderDilemmas();
      }
    }

    nextDilemma() {
      const list = this.filteredDilemmas;
      if (this.activeDilemmaIdx < list.length - 1) {
        this.activeDilemmaIdx++;
        this.audio.playTick();
        this.renderDilemmas();
      }
    }

    render() {
      // Update filter button appearance
      const btnEssentials = document.getElementById('btnEssentials');
      if (btnEssentials) {
        if (this.essentialsOnly) {
          btnEssentials.classList.add('bg-[#3D5A45]', 'text-white', 'border-transparent');
          btnEssentials.classList.remove('bg-transparent', 'text-stone-700', 'dark:text-stone-300');
        } else {
          btnEssentials.classList.remove('bg-[#3D5A45]', 'text-white', 'border-transparent');
          btnEssentials.classList.add('bg-transparent', 'text-stone-700', 'dark:text-stone-300');
        }
      }

      if (this.currentTab === 'compass') {
        this.renderCompass();
      } else if (this.currentTab === 'dilemmas') {
        this.renderDilemmas();
      } else if (this.currentTab === 'essay') {
        this.renderEssayForge();
      }
    }

    // --- TAB 1: THE PARADIGM COMPASS ---
    renderCompass() {
      const container = document.getElementById('appContent');
      if (!container) return;

      const list = this.filteredParadigms;
      if (this.activeParadigmIdx >= list.length) this.activeParadigmIdx = 0;
      const p = list[this.activeParadigmIdx];
      const isIndigenous = this.activeLens === 'indigenous';
      const currentLensData = isIndigenous ? p.indigenous : p.western;

      container.innerHTML = `
        <div class="tab-content max-w-2xl mx-auto px-4 py-2">
          <!-- Top Counter & Audio -->
          <div class="flex items-center justify-between mb-4 text-xs font-medium text-stone-500 dark:text-stone-400">
            <span class="tracking-wider uppercase">PARADIGM ${this.activeParadigmIdx + 1} OF ${list.length}</span>
            <div class="flex items-center gap-2">
              <button id="btnNarrateParadigm" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 hover:border-[#C86D51] transition tap-bounce">
                <span>🔊</span> <span>Listen</span>
              </button>
            </div>
          </div>

          <!-- Main Interactive Card -->
          <div class="glass-panel p-6 sm:p-8 relative overflow-hidden">
            <!-- Header Title -->
            <h2 class="font-serif-editorial text-2xl sm:text-3xl font-bold mb-3 leading-snug">
              ${p.title}
            </h2>

            <!-- Dual Lens Pill Selector -->
            <div class="grid grid-cols-2 p-1.5 bg-stone-200/60 dark:bg-stone-800/80 rounded-2xl mb-6">
              <button id="btnLensIndigenous" class="py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition tap-bounce ${isIndigenous ? 'bg-white dark:bg-stone-900 shadow-sm text-[#3D5A45] dark:text-[#5B8266]' : 'text-stone-600 dark:text-stone-400'}">
                🌿 Indigenous Relational
              </button>
              <button id="btnLensWestern" class="py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition tap-bounce ${!isIndigenous ? 'bg-white dark:bg-stone-900 shadow-sm text-[#C86D51] dark:text-[#E08465]' : 'text-stone-600 dark:text-stone-400'}">
                🔬 Western Cartesian
              </button>
            </div>

            <!-- Lens Content Area -->
            <div class="min-h-[170px] flex flex-col justify-between">
              <div>
                <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${isIndigenous ? 'bg-[#3D5A45]/10 text-[#3D5A45] dark:text-[#5B8266]' : 'bg-[#C86D51]/10 text-[#C86D51] dark:text-[#E08465]'}">
                  ${currentLensData.badge}
                </div>
                <h3 class="font-serif-editorial text-xl font-bold mb-2 text-stone-900 dark:text-stone-100">
                  ${currentLensData.title}
                </h3>
                <p class="text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300">
                  ${currentLensData.desc}
                </p>
              </div>

              <!-- Evocative Quote -->
              <div class="mt-6 pt-4 border-t border-stone-200/70 dark:border-stone-800">
                <p class="italic text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif-editorial">
                  "${currentLensData.quote}"
                </p>
              </div>
            </div>

            <!-- Exam Hook Pill -->
            <div class="mt-6 p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
              <span class="text-base leading-none">💡</span>
              <div>
                <strong class="font-semibold">Exam Application:</strong> ${p.examHook}
              </div>
            </div>
          </div>

          <!-- Bottom Navigation Controls -->
          <div class="flex items-center justify-between mt-6 px-1">
            <button id="btnPrevParadigm" class="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl glass-panel text-xs sm:text-sm font-semibold tap-bounce ${this.activeParadigmIdx === 0 ? 'opacity-40 pointer-events-none' : ''}">
              ← Previous
            </button>
            <span class="text-xs text-stone-400 hidden sm:inline">Tip: Press [Space] to flip lens, [← / →] to navigate</span>
            <button id="btnNextParadigm" class="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-[#C86D51] text-white text-xs sm:text-sm font-semibold tap-bounce hover:bg-[#b55e43] transition">
              ${this.activeParadigmIdx === list.length - 1 ? 'Go to Dilemmas ▸' : 'Next Paradigm →'}
            </button>
          </div>
        </div>
      `;

      // Wire events for Compass view
      document.getElementById('btnLensIndigenous')?.addEventListener('click', () => {
        this.activeLens = 'indigenous';
        this.audio.playTick();
        this.renderCompass();
      });
      document.getElementById('btnLensWestern')?.addEventListener('click', () => {
        this.activeLens = 'western';
        this.audio.playTick();
        this.renderCompass();
      });
      document.getElementById('btnPrevParadigm')?.addEventListener('click', () => this.prevParadigm());
      document.getElementById('btnNextParadigm')?.addEventListener('click', () => {
        if (this.activeParadigmIdx === list.length - 1) {
          this.switchTab('dilemmas');
        } else {
          this.nextParadigm();
        }
      });
      document.getElementById('btnNarrateParadigm')?.addEventListener('click', (e) => {
        this.narrator.speak(p.audioText, e.currentTarget);
      });
    }

    // --- TAB 2: THE DILEMMA SIMULATOR ---
    renderDilemmas() {
      const container = document.getElementById('appContent');
      if (!container) return;

      const list = this.filteredDilemmas;
      if (this.activeDilemmaIdx >= list.length) this.activeDilemmaIdx = 0;
      const d = list[this.activeDilemmaIdx];
      const isRevealed = this.revealedDilemmas.has(d.id);
      const chosenPath = this.userChoices[d.id];

      container.innerHTML = `
        <div class="tab-content max-w-2xl mx-auto px-4 py-2">
          <!-- Counter & Unit Header -->
          <div class="flex items-center justify-between mb-4 text-xs font-medium text-stone-500 dark:text-stone-400">
            <span class="px-2.5 py-1 rounded-full bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-semibold text-[11px]">
              ${d.unit}
            </span>
            <div class="flex items-center gap-2">
              <span class="tracking-wider uppercase">CASE ${this.activeDilemmaIdx + 1} OF ${list.length}</span>
              <button id="btnNarrateDilemma" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 hover:border-[#C86D51] transition tap-bounce">
                <span>🔊</span> <span>Listen</span>
              </button>
            </div>
          </div>

          <!-- Main Dilemma Card -->
          <div class="glass-panel p-6 sm:p-8 relative">
            <!-- Watercolor Asset Illustration Header -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5 pb-5 border-b border-stone-200/70 dark:border-stone-800">
              <img src="${d.image}" alt="${d.title}" class="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl bg-amber-100/30 dark:bg-stone-800/40 p-1 shrink-0 drop-shadow-sm" />
              <div>
                <h2 class="font-serif-editorial text-2xl sm:text-3xl font-bold leading-tight">
                  ${d.title}
                </h2>
                <span class="text-xs text-[#C86D51] dark:text-[#E08465] font-semibold mt-1 inline-block">
                  ⚖️ Real University Exam Scenario
                </span>
              </div>
            </div>

            <!-- Dilemma Scene Description -->
            <p class="text-sm sm:text-base leading-relaxed text-stone-800 dark:text-stone-200 mb-6">
              ${d.dilemma}
            </p>

            <!-- Decision Options -->
            <div class="space-y-3 mb-6">
              <div class="text-xs font-bold tracking-wider uppercase text-stone-400">CHOOSE YOUR PATH:</div>
              
              <!-- Option A -->
              <button id="btnOptionA" class="w-full text-left p-4 rounded-2xl border transition tap-bounce ${chosenPath === 'A' ? 'border-[#C86D51] bg-[#C86D51]/10' : 'border-stone-200/80 dark:border-stone-800 hover:border-stone-400'}">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="font-bold text-xs uppercase text-[#C86D51] dark:text-[#E08465]">${d.pathA.verdict}</span>
                  <span class="text-xs text-stone-400">[Path A]</span>
                </div>
                <div class="font-serif-editorial font-bold text-base mb-1 text-stone-900 dark:text-stone-100">${d.pathA.label}</div>
                <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">${d.pathA.summary}</p>
              </button>

              <!-- Option B -->
              <button id="btnOptionB" class="w-full text-left p-4 rounded-2xl border transition tap-bounce ${chosenPath === 'B' ? 'border-[#3D5A45] bg-[#3D5A45]/10' : 'border-stone-200/80 dark:border-stone-800 hover:border-stone-400'}">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="font-bold text-xs uppercase text-[#3D5A45] dark:text-[#5B8266]">${d.pathB.verdict}</span>
                  <span class="text-xs text-stone-400">[Path B]</span>
                </div>
                <div class="font-serif-editorial font-bold text-base mb-1 text-stone-900 dark:text-stone-100">${d.pathB.label}</div>
                <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">${d.pathB.summary}</p>
              </button>
            </div>

            <!-- Reveal Container (Accordion Bloom) -->
            <div id="revealContainer" class="bloom-reveal ${isRevealed ? 'open' : ''}">
              <div class="p-5 rounded-2xl bg-[#3D5A45]/10 dark:bg-[#3D5A45]/15 border border-[#3D5A45]/20 mt-4 space-y-4">
                <!-- Examiner's Lens -->
                <div>
                  <div class="text-[11px] font-bold tracking-wider uppercase text-[#3D5A45] dark:text-[#5B8266] flex items-center gap-1.5 mb-1">
                    <span>🎓</span> THE EXAMINER'S PERSPECTIVE
                  </div>
                  <p class="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                    ${d.reveal.examinerLens}
                  </p>
                </div>

                <!-- Why Western Logic Fails -->
                <div>
                  <div class="text-[11px] font-bold tracking-wider uppercase text-[#C86D51] dark:text-[#E08465] flex items-center gap-1.5 mb-1">
                    <span>⚡</span> WHY THE WESTERN ADMINISTRATIVE LOGIC FAILS
                  </div>
                  <p class="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                    ${d.reveal.whyWesternFails}
                  </p>
                </div>

                <!-- Scholar Anchor -->
                <div class="pt-2 border-t border-[#3D5A45]/15">
                  <span class="text-xs font-semibold text-stone-700 dark:text-stone-300">Anchor Theorist:</span>
                  <span class="text-xs text-stone-600 dark:text-stone-400 italic ml-1">${d.reveal.scholarAnchor}</span>
                </div>

                <!-- Golden Rubric Keywords -->
                <div>
                  <div class="text-[10px] font-bold tracking-wider uppercase text-stone-500 mb-2">GRADING RUBRIC KEYWORDS:</div>
                  <div class="flex flex-wrap gap-1.5">
                    ${d.reveal.rubricKeywords.map(kw => `
                      <span class="px-2.5 py-1 rounded-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-[11px] font-semibold text-stone-700 dark:text-stone-300 shadow-xs">
                        #${kw}
                      </span>
                    `).join('')}
                  </div>
                </div>

                <!-- 1-Tap Copy Exam Sentence -->
                <div class="pt-3 border-t border-[#3D5A45]/15 flex items-center justify-between gap-3">
                  <p class="text-xs text-stone-600 dark:text-stone-300 italic flex-1">
                    "${d.reveal.examSentence}"
                  </p>
                  <button id="btnCopyExamSentence" class="shrink-0 px-3.5 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-xs font-bold text-stone-800 dark:text-stone-200 hover:border-[#C86D51] transition tap-bounce shadow-xs">
                    📋 Copy Sentence
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Dilemma Controls -->
          <div class="flex items-center justify-between mt-6 px-1">
            <button id="btnPrevDilemma" class="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl glass-panel text-xs sm:text-sm font-semibold tap-bounce ${this.activeDilemmaIdx === 0 ? 'opacity-40 pointer-events-none' : ''}">
              ← Previous Case
            </button>
            <button id="btnNextDilemma" class="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-[#C86D51] text-white text-xs sm:text-sm font-semibold tap-bounce hover:bg-[#b55e43] transition">
              ${this.activeDilemmaIdx === list.length - 1 ? 'Go to Essay Forge ▸' : 'Next Case →'}
            </button>
          </div>
        </div>
      `;

      // Wire events for Dilemma view
      const handleChoice = (path) => {
        this.userChoices[d.id] = path;
        this.revealedDilemmas.add(d.id);
        this.audio.playChime(path === 'B' ? 520 : 440);
        this.renderDilemmas();
      };

      document.getElementById('btnOptionA')?.addEventListener('click', () => handleChoice('A'));
      document.getElementById('btnOptionB')?.addEventListener('click', () => handleChoice('B'));
      document.getElementById('btnPrevDilemma')?.addEventListener('click', () => this.prevDilemma());
      document.getElementById('btnNextDilemma')?.addEventListener('click', () => {
        if (this.activeDilemmaIdx === list.length - 1) {
          this.switchTab('essay');
        } else {
          this.nextDilemma();
        }
      });
      document.getElementById('btnCopyExamSentence')?.addEventListener('click', () => {
        navigator.clipboard.writeText(d.reveal.examSentence);
        this.audio.playTick();
        this.showToast("Copied exam sentence to clipboard! ✨");
      });
      document.getElementById('btnNarrateDilemma')?.addEventListener('click', (e) => {
        const text = `${d.title}. ${d.dilemma}. The examiner's perspective: ${d.reveal.examinerLens}`;
        this.narrator.speak(text, e.currentTarget);
      });
    }

    // --- TAB 3: THE ESSAY FORGE ---
    renderEssayForge() {
      const container = document.getElementById('appContent');
      if (!container) return;

      const forge = SANCTUARY_DATA.essayForge;

      container.innerHTML = `
        <div class="tab-content max-w-2xl mx-auto px-4 py-2">
          <!-- Header -->
          <div class="glass-panel p-6 sm:p-8 mb-6">
            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 rounded-full bg-[#C86D51]/10 text-[#C86D51] text-xs font-bold uppercase tracking-wider">
                COMPULSORY LONG QUESTION DEFENSE
              </span>
              <button id="btnCopyEntireEssay" class="px-4 py-2 rounded-xl bg-[#C86D51] text-white text-xs font-bold hover:bg-[#b55e43] transition tap-bounce shadow-sm">
                📋 Copy Full Essay Blueprint
              </button>
            </div>
            <h2 class="font-serif-editorial text-2xl sm:text-3xl font-bold mb-2">
              ${forge.title}
            </h2>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              ${forge.description}
            </p>
          </div>

          <!-- Essay Steps List -->
          <div class="space-y-4">
            ${forge.steps.map(s => `
              <div class="glass-panel p-5 sm:p-6 transition">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold uppercase tracking-wider text-[#3D5A45] dark:text-[#5B8266]">
                    STEP ${s.step} · ${s.title}
                  </span>
                  <button class="btn-copy-step text-xs font-semibold text-stone-500 hover:text-[#C86D51] transition" data-copy="${encodeURIComponent(s.sample)}">
                    Copy Paragraph 📋
                  </button>
                </div>
                <p class="text-xs font-medium text-stone-500 dark:text-stone-400 mb-3 italic">
                  ${s.prompt}
                </p>
                <div class="p-4 rounded-xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-serif-editorial">
                  ${s.sample}
                </div>
                <div class="mt-3 flex flex-wrap gap-1.5">
                  ${s.keywords.map(kw => `
                    <span class="px-2 py-0.5 rounded-md bg-stone-200/50 dark:bg-stone-800 text-[10px] font-semibold text-stone-600 dark:text-stone-400">
                      ${kw}
                    </span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      // Copy entire essay
      document.getElementById('btnCopyEntireEssay')?.addEventListener('click', () => {
        const fullEssay = forge.steps.map(s => `## Step ${s.step}: ${s.title}\n${s.sample}\n`).join('\n');
        navigator.clipboard.writeText(fullEssay);
        this.audio.playChime(640);
        this.showToast("Full Essay Blueprint copied for Apple Notes! ✨");
      });

      // Copy individual steps
      document.querySelectorAll('.btn-copy-step').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const text = decodeURIComponent(e.currentTarget.getAttribute('data-copy'));
          navigator.clipboard.writeText(text);
          this.audio.playTick();
          this.showToast("Paragraph copied to clipboard! ✨");
        });
      });
    }

    // Floating Apple-style Toast
    showToast(message, duration = 2500) {
      let toast = document.getElementById('sanctuaryToast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'sanctuaryToast';
        toast.className = 'fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full glass-dock text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-100 shadow-lg pointer-events-none transition-all duration-300 opacity-0 translate-y-[-10px] border border-stone-300/40 dark:border-stone-700/60';
        document.body.appendChild(toast);
      }
      toast.textContent = message;
      toast.classList.remove('opacity-0', 'translate-y-[-10px]');
      toast.classList.add('opacity-100', 'translate-y-0');

      if (this.toastTimeout) clearTimeout(this.toastTimeout);
      this.toastTimeout = setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-[-10px]');
      }, duration);
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new SanctuaryApp());
  } else {
    new SanctuaryApp();
  }

})();
