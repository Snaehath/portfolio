import React, { useState, useEffect, useMemo, useRef } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MainColumn } from "@/components/MainColumn";
import { RESUME_DATA, Project, PortfolioData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Settings2, X, Command, Search } from "lucide-react";

export const PortfolioContainer: React.FC = () => {
  const [activeSkills, setActiveSkills] = useState<Set<string>>(new Set());
  
  // Tweak States
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [pairing, setPairing] = useState<"Editorial" | "Classical" | "Brutal" | "Mono">("Editorial");
  const [density, setDensity] = useState<"airy" | "compact">("airy");
  const [texture] = useState<"on" | "off">("on");
  const [isNinjaMode, setIsNinjaMode] = useState(false);
  
  const [showTweaks, setShowTweaks] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [peek, setPeek] = useState<{ p: Project; x: number; y: number } | null>(null);

  // Transition State
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Apply Attributes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-pairing", pairing);
    root.setAttribute("data-density", density);
    root.setAttribute("data-texture", texture);
  }, [theme, pairing, density, texture]);

  // Handle Mode Change with Shutter Effect
  const toggleNinja = (val: boolean) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsNinjaMode(val);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 400);
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShowSearch(prev => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "p") {
        e.preventDefault();
        window.open('resume.pdf', '_blank');
      }
      if (e.key === "Escape") {
        setShowSearch(false);
        setShowTweaks(false);
        setShowAllProjects(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleSkill = (skill: string) => {
    setActiveSkills((prev) => {
      const next = new Set(prev);
      if (next.has(skill)) {
        next.delete(skill);
      } else {
        next.add(skill);
      }
      return next;
    });
  };

  const clearSkills = () => setActiveSkills(new Set());

  const onPeek = (p: Project, ev: React.MouseEvent) => {
    setPeek({ p, x: ev.clientX + 20, y: ev.clientY - 80 });
  };
  const onPeekEnd = () => setPeek(null);

  const onJump = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setShowSearch(false);
  };

  return (
    <div className="relative min-h-screen transition-colors duration-300">
      {/* Editorial Shutter Transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-ink z-[9999] origin-top pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-12 py-8 sm:py-14">
        {/* Masthead */}
        <header className="mast border-b-2 border-rule pb-6 mb-12 relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:border-b after:border-rule">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6">
            <div className="hidden sm:block text-mono text-[10.5px] text-ink-3 uppercase tracking-widest">
              Folio v.2 / {new Date().getFullYear()}
            </div>
            
            <div className="flex-1 text-center">
              <h1 className="text-serif text-5xl sm:text-8xl leading-[0.95] tracking-tight font-medium uppercase">{RESUME_DATA.name}</h1>
              <div className="text-mono text-[11px] mt-3 text-ink-2 tracking-[0.3em] uppercase">{RESUME_DATA.tagline}</div>
            </div>

            <div className="hidden sm:flex flex-col items-end gap-1.5 text-mono text-[10.5px] text-ink-3 uppercase tracking-widest">
              <div className="text-right">
                {new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase()}
              </div>
              <div className="text-[9px] text-accent flex items-center gap-2 border border-rule-soft px-2 py-0.5 rounded-sm bg-paper-2 shadow-sm">
                <span className="opacity-70">SEARCH</span>
                <span className="font-bold">CTRL + K</span>
              </div>
            </div>
          </div>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-0 relative">
          {!isNinjaMode && (
            <div className="hidden sm:block absolute top-0 bottom-0 left-[280px] border-l border-rule-soft" />
          )}

          <AnimatePresence mode="wait">
            {!isNinjaMode && (
              <motion.div
                key="sidebar"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Sidebar 
                  data={RESUME_DATA} 
                  activeSkills={activeSkills} 
                  toggleSkill={toggleSkill} 
                  clearSkills={clearSkills} 
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className={cn("transition-all duration-300", !isNinjaMode ? "sm:pl-12" : "sm:pl-0 sm:col-span-2")}>
            <MainColumn 
              data={RESUME_DATA} 
              activeSkills={activeSkills}
              onPeek={onPeek}
              onPeekEnd={onPeekEnd}
              onShowAllProjects={() => setShowAllProjects(true)}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-6 border-t-2 border-rule grid grid-cols-1 sm:grid-cols-3 items-center gap-6 text-mono text-[10.5px] text-ink-3">
          <div className="text-center sm:text-left">© {new Date().getFullYear()} SNAEHATH P</div>
          <div className="text-serif italic text-sm text-center text-ink-2 lowercase">
            architecting excellence through code and design
          </div>
          <div className="text-center sm:text-right uppercase tracking-widest">React / TypeScript / Vite / Editorial</div>
        </footer>
      </div>

      {/* Peek Popover (The Loupe) */}
      <AnimatePresence>
        {peek && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="peek pointer-events-none fixed z-[9999]"
            style={{ left: peek.x, top: peek.y }}
          >
            <div className="peek-content relative bg-paper border-2 border-rule shadow-[8px_8px_0_var(--rule-soft)] overflow-hidden">
               <ProjectPreviewVisual kind={peek.p.preview} />
               <div className="bg-ink text-paper px-3 py-1.5 flex justify-between items-center">
                  <span className="text-mono text-[9px] uppercase tracking-widest">{peek.p.name}</span>
                  <span className="text-mono text-[9px] opacity-60">{peek.p.year}</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* More Projects Modal (Bento Search) */}
      <AnimatePresence>
        {showAllProjects && (
          <div className="cmdk-back open z-[10000]" onClick={() => setShowAllProjects(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-paper w-full max-w-[900px] border-2 border-rule shadow-[20px_20px_0_var(--rule-soft)] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
               <div className="flex justify-between items-start border-b-2 border-rule p-8 pb-4">
                  <div>
                    <span className="text-mono text-[10px] text-accent uppercase tracking-widest mb-2 block">§ 06-A</span>
                    <h2 className="text-serif text-4xl">More projects</h2>
                  </div>
                  <button onClick={() => setShowAllProjects(false)} className="text-ink hover:text-accent transition-colors">
                    <X size={28} />
                  </button>
               </div>
               
               <ProjectsModalContent data={RESUME_DATA} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Command Palette (Search Metadata) */}
      <AnimatePresence>
        {showSearch && (
          <CmdK 
            data={RESUME_DATA} 
            theme={theme}
            onJump={onJump} 
            onClose={() => setShowSearch(false)} 
            toggleTheme={(t) => {
               setIsTransitioning(true);
               setTimeout(() => {
                 setTheme(t);
                 setTimeout(() => setIsTransitioning(false), 300);
               }, 400);
            }}
          />
        )}
      </AnimatePresence>

      {/* Tweak Panel */}
      <div className="fixed right-6 bottom-6 z-[100] flex flex-col items-end gap-3">
        <AnimatePresence>
          {showTweaks && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="glass w-[340px] shadow-[12px_12px_0_var(--rule)] overflow-hidden flex flex-col border-2 border-rule"
            >
              <div className="flex justify-between items-center bg-paper-2 border-b-2 border-rule px-4 py-3">
                <span className="text-mono text-[10px] font-bold tracking-[0.3em] uppercase">Controller</span>
                <button onClick={() => setShowTweaks(false)} className="hover:text-accent transition-colors"><X size={16} /></button>
              </div>
              
              <div className="p-6 flex flex-col gap-6 bg-paper/80 backdrop-blur-md">
                <div className="tweak-row">
                  <span className="tweak-label">ENVIRONMENT</span>
                  <div className="tweak-opts">
                    {(["light", "dark"] as const).map(t => (
                      <button key={t} onClick={() => {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setTheme(t);
                          setTimeout(() => setIsTransitioning(false), 300);
                        }, 400);
                      }} className={cn("tweak-opt", theme === t && "on")}>{t}</button>
                    ))}
                  </div>
                </div>

                <div className="tweak-row">
                  <span className="tweak-label">TYPOGRAPHY</span>
                  <div className="tweak-opts">
                    {(["Editorial", "Classical", "Brutal", "Mono"] as const).map(p => (
                      <button key={p} onClick={() => setPairing(p)} className={cn("tweak-opt", pairing === p && "on")}>{p}</button>
                    ))}
                  </div>
                </div>

                <div className="tweak-row">
                  <span className="tweak-label">DENSITY</span>
                  <div className="tweak-opts">
                    {(["airy", "compact"] as const).map(d => (
                      <button key={d} onClick={() => setDensity(d)} className={cn("tweak-opt", density === d && "on")}>{d}</button>
                    ))}
                  </div>
                </div>

                <div className="tweak-row">
                  <span className="tweak-label">LAYOUT MODE</span>
                  <div className="tweak-opts">
                    <button onClick={() => toggleNinja(false)} className={cn("tweak-opt", !isNinjaMode && "on")}>Full</button>
                    <button onClick={() => toggleNinja(true)} className={cn("tweak-opt", isNinjaMode && "on")}>Ninja</button>
                  </div>
                </div>

                <div className="tweak-row">
                  <span className="tweak-label">LOCALIZATION</span>
                  <div className="tweak-opts">
                    <button className="tweak-opt on">EN</button>
                    <button className="tweak-opt">JP</button>
                  </div>
                </div>

                <div className="pt-4 border-t border-rule-soft mt-2">
                   <div className="flex flex-wrap gap-x-4 gap-y-2 text-mono text-[9.5px] text-ink-3">
                      <button onClick={() => { setShowTweaks(false); setShowSearch(true); }} className="hover:text-accent flex items-center gap-1.5 transition-colors">
                        <Command size={11} />K · INDEX SEARCH
                      </button>
                      <button onClick={() => window.open('resume.pdf', '_blank')} className="hover:text-accent flex items-center gap-1.5 transition-colors">
                        <Command size={11} />P · VIEW/PRINT PDF
                      </button>
                      <a href="resume.pdf" download="Snaehath_Resume.pdf" className="hover:text-accent flex items-center gap-1.5 transition-colors">
                        <Command size={11} />D · DOWNLOAD PDF
                      </a>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setShowTweaks(!showTweaks)}
          className={cn(
            "bg-ink text-paper p-4 shadow-[6px_6px_0_var(--rule-soft)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-rule",
            showTweaks && "hidden"
          )}
        >
          <Settings2 size={22} />
        </button>
      </div>
    </div>
  );
};

const ProjectsModalContent: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const [q, setQ] = useState("");
  const [activeFilter, setActiveFilter] = useState("All tools");

  const allTools = useMemo(() => {
    const tools = new Set<string>();
    data.projects.forEach(p => p.stack.forEach(s => tools.add(s)));
    return ["All tools", ...Array.from(tools).sort()];
  }, [data]);

  const filtered = data.projects.filter(p => {
    const matchesQ = (p.name + p.summary).toLowerCase().includes(q.toLowerCase());
    const matchesFilter = activeFilter === "All tools" || p.stack.includes(activeFilter);
    return matchesQ && matchesFilter;
  });

  return (
    <div className="flex flex-col h-[70vh]">
      <div className="px-8 py-6 border-b border-rule-soft bg-paper-2/50 backdrop-blur">
        <div className="flex items-center gap-4 mb-6 border-b-2 border-rule pb-2">
          <Search size={20} className="text-ink-3" />
          <input 
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search projects..."
            className="flex-1 bg-transparent outline-none text-serif text-xl italic"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {allTools.map(t => (
            <button 
              key={t} 
              onClick={() => setActiveFilter(t)}
              className={cn(
                "px-3 py-1 text-mono text-[9px] uppercase tracking-wider border transition-all whitespace-nowrap",
                activeFilter === t ? "bg-accent text-paper border-accent" : "border-rule-soft text-ink-3 hover:border-ink"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-0 grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-rule-soft">
        {filtered.map(p => (
          <div key={p.id} className="p-8 hover:bg-ink/[0.015] transition-colors group">
             <div className="flex justify-between items-start mb-4">
                <h3 className="text-serif text-2xl group-hover:text-accent transition-colors">{p.name}</h3>
                <span className="text-mono text-[10px] text-ink-3">{p.year}</span>
             </div>
             <p className="text-[13.5px] text-ink-2 leading-relaxed mb-6 line-clamp-2">{p.summary}</p>
             <div className="flex flex-wrap gap-1.5">
                {p.stack.map(s => (
                  <span key={s} className="px-1.5 py-0.5 border border-rule-soft text-mono text-[9px] text-ink-3 uppercase tracking-wider">
                    {s}
                  </span>
                ))}
             </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-2 py-20 text-center text-mono text-xs text-ink-3 uppercase tracking-widest opacity-40">
            No technical matches found
          </div>
        )}
      </div>
    </div>
  );
};

const CmdK: React.FC<{ data: PortfolioData; theme: "light" | "dark"; onJump: (id: string) => void; onClose: () => void; toggleTheme: (t: "light" | "dark") => void }> = ({ data, theme, onJump, onClose, toggleTheme }) => {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo(() => {
    return [
      { tag: "Section", label: "Experience", act: () => onJump("experience") },
      { tag: "Section", label: "Projects", act: () => onJump("projects") },
      { tag: "Section", label: "Achievements", act: () => onJump("achievements") },
      { tag: "Action", label: "View / Print PDF", meta: "⌘P", act: () => window.open('resume.pdf', '_blank') },
      { tag: "Action", label: "Download Resume", meta: "⌘D", act: () => {
         const link = document.createElement('a');
         link.href = 'resume.pdf';
         link.download = 'Snaehath_Resume.pdf';
         link.click();
      }},
      { tag: "Action", label: "Toggle Theme", meta: "Theme", act: () => {
         toggleTheme(theme === "dark" ? "light" : "dark");
      }},
      { tag: "Contact", label: "Email Snaehath", meta: data.contact.email, act: () => window.location.href = `mailto:${data.contact.email}` },
      { tag: "Contact", label: "Open GitHub", meta: "@" + data.contact.github, act: () => window.open(`https://github.com/${data.contact.github}`, "_blank") },
    ];
  }, [data, theme, onJump, toggleTheme]);

  const filtered = q
    ? items.filter(i => (i.label + " " + i.tag + " " + (i.meta || "")).toLowerCase().includes(q.toLowerCase()))
    : items;

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "ArrowDown") {
        ev.preventDefault();
        setIdx(i => Math.min(i + 1, filtered.length - 1));
      } else if (ev.key === "ArrowUp") {
        ev.preventDefault();
        setIdx(i => Math.max(i - 1, 0));
      } else if (ev.key === "Enter") {
        ev.preventDefault();
        const sel = filtered[idx];
        if (sel) {
          sel.act();
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filtered, idx, onClose]);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 30);
  }, []);

  return (
    <div className="cmdk-back open" onClick={onClose}>
      <div className="cmdk border-2 border-rule" onClick={e => e.stopPropagation()}>
        <div className="flex items-center px-4 border-b-2 border-rule bg-paper-2">
           <Command size={16} className="text-ink-3 mr-3" />
           <input 
             ref={inputRef} 
             value={q} 
             onChange={e => {
               setQ(e.target.value);
               setIdx(0);
             }} 
             placeholder="Search folio index…" 
             className="flex-1 py-4 bg-transparent outline-none text-serif text-lg"
           />
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {filtered.length === 0 && <div className="py-8 text-center text-ink-3 text-mono text-xs">NO RESULTS FOUND</div>}
          {filtered.map((it, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center justify-between px-5 py-3 border-b border-dotted border-rule-soft last:border-none cursor-pointer transition-colors",
                i === idx ? "bg-paper-2 text-ink font-medium" : "text-ink-2 hover:bg-paper-2/50"
              )}
              onMouseEnter={() => setIdx(i)}
              onClick={() => { it.act(); onClose(); }}
            >
              <div className="flex items-center gap-4 min-w-0">
                 <span className="text-mono text-[9px] uppercase tracking-widest text-ink-3 w-16 shrink-0">{it.tag}</span>
                 <span className="text-[14px] truncate">{it.label}</span>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-4">
                 {it.meta && <span className="text-mono text-[9.5px] text-ink-3 uppercase opacity-70">{it.meta}</span>}
                 <span className="text-mono text-[9px] px-1.5 py-0.5 border border-rule-soft text-ink-3 opacity-60">↵</span>
              </div>
            </div>
          ))}
        </div>
        <div className="cmdk-hint border-t-2 border-rule">
          <span>↑↓ NAVIGATE · ↵ SELECT · ESC CLOSE</span>
          <span className="tracking-widest">INDEX</span>
        </div>
      </div>
    </div>
  );
};

const ProjectPreviewVisual: React.FC<{ kind: Project["preview"] }> = ({ kind }) => {
  const common = { width: "220px", height: "140px", display: "block" };
  
  if (kind === "mobile") return (
    <svg viewBox="0 0 220 140" style={common} preserveAspectRatio="none">
      <rect width="220" height="140" fill="var(--paper)" />
      <rect x="80" y="20" width="60" height="100" rx="6" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <rect x="85" y="30" width="50" height="75" rx="1" fill="none" stroke="var(--rule-soft)" strokeWidth="0.5" />
      <circle cx="110" cy="112" r="2.5" fill="var(--accent)" />
      <rect x="90" y="40" width="40" height="4" fill="var(--accent)" opacity="0.4" />
      <rect x="90" y="50" width="30" height="4" fill="var(--rule-soft)" />
      <circle cx="110" cy="75" r="10" fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="1 2" />
    </svg>
  );

  if (kind === "news") return (
    <svg viewBox="0 0 220 140" style={common} preserveAspectRatio="none">
      <rect width="220" height="140" fill="var(--paper)" />
      <rect x="20" y="20" width="180" height="100" rx="4" fill="none" stroke="var(--ink)" strokeWidth="1" />
      <line x1="20" y1="35" x2="200" y2="35" stroke="var(--ink)" strokeWidth="0.5" />
      <circle cx="30" cy="27" r="2" fill="var(--rule-soft)" />
      <circle cx="38" cy="27" r="2" fill="var(--rule-soft)" />
      <rect x="35" y="45" width="40" height="60" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
      <rect x="85" y="45" width="100" height="6" fill="var(--ink)" />
      <rect x="85" y="58" width="100" height="2" fill="var(--rule-soft)" />
      <rect x="85" y="65" width="80" height="2" fill="var(--rule-soft)" />
      <rect x="85" y="72" width="90" height="2" fill="var(--rule-soft)" />
      <rect x="85" y="85" width="40" height="20" fill="none" stroke="var(--rule-soft)" strokeWidth="0.5" />
      <rect x="135" y="85" width="50" height="20" fill="none" stroke="var(--rule-soft)" strokeWidth="0.5" />
    </svg>
  );

  if (kind === "image-gen") return (
    <svg viewBox="0 0 220 140" style={common} preserveAspectRatio="none">
      <rect width="220" height="140" fill="var(--paper)" />
      <rect x="20" y="20" width="180" height="100" rx="4" fill="none" stroke="var(--ink)" strokeWidth="1" />
      <line x1="20" y1="35" x2="200" y2="35" stroke="var(--ink)" strokeWidth="0.5" />
      <rect x="35" y="45" width="100" height="65" fill="none" stroke="var(--accent)" strokeWidth="0.8" />
      <circle cx="85" cy="77" r="15" fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="2 2" />
      <rect x="145" y="45" width="40" height="15" fill="none" stroke="var(--rule-soft)" strokeWidth="0.5" />
      <rect x="145" y="65" width="40" height="15" fill="none" stroke="var(--rule-soft)" strokeWidth="0.5" />
      <rect x="145" y="85" width="40" height="25" fill="var(--accent)" opacity="0.1" />
    </svg>
  );

  if (kind === "game") return (
    <svg viewBox="0 0 220 140" style={common} preserveAspectRatio="none">
      <rect width="220" height="140" fill="var(--paper)" />
      <path d="M60 60 L160 60 L160 100 L140 120 L80 120 L60 100 Z" fill="none" stroke="var(--ink)" strokeWidth="1" />
      <circle cx="85" cy="85" r="8" fill="var(--accent)" opacity="0.4" />
      <rect x="130" y="75" width="15" height="4" fill="var(--ink)" />
      <rect x="135" y="70" width="4" height="15" fill="var(--ink)" />
      <circle cx="110" cy="70" r="2" fill="var(--rule-soft)" />
    </svg>
  );

  if (kind === "system") return (
    <svg viewBox="0 0 220 140" style={common} preserveAspectRatio="none">
      <rect width="220" height="140" fill="var(--paper)" />
      <g stroke="var(--ink)" strokeWidth="0.5" fill="none">
         <path d="M20 20 L200 20 L200 120 L20 120 Z" />
         <path d="M20 50 L200 50 M20 80 L200 80" strokeDasharray="4 2" opacity="0.5" />
         <rect x="40" y="30" width="10" height="10" fill="var(--accent)" />
         <rect x="60" y="30" width="80" height="4" fill="var(--rule-soft)" />
         <circle cx="170" cy="100" r="12" fill="var(--highlight)" opacity="0.6" />
      </g>
    </svg>
  );

  return (
    <svg viewBox="0 0 220 140" style={common} preserveAspectRatio="none">
      <rect width="220" height="140" fill="var(--paper)" />
      <path d="M110 30 L150 110 L70 110 Z" fill="none" stroke="var(--accent)" strokeWidth="1" />
      <circle cx="110" cy="70" r="40" stroke="var(--rule-soft)" fill="none" strokeDasharray="1 4" />
    </svg>
  );
};
