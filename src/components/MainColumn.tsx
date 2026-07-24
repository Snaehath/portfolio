import React, { useState } from "react";
import { PortfolioData, Experience, Project } from "@/lib/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="text-ink font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </>
  );
};

interface MainColumnProps {
  data: PortfolioData;
  activeSkills: Set<string>;
  onPeek: (p: Project, ev: React.MouseEvent) => void;
  onPeekEnd: () => void;
  onShowAllProjects: () => void;
}

export const MainColumn: React.FC<MainColumnProps> = ({ data, activeSkills, onPeek, onPeekEnd, onShowAllProjects }) => {
  const affectedExp = new Set<string>();
  const affectedProj = new Set<string>();
  
  if (activeSkills.size > 0) {
    activeSkills.forEach(skill => {
      const lowerSkill = skill.toLowerCase();

      // Check explicit mappings
      (data.skillProjects[skill] || []).forEach(id => {
        affectedExp.add(id);
        affectedProj.add(id);
      });

      // Match experience stacks
      data.experience.forEach(exp => {
        if (exp.stack.some(s => s.toLowerCase() === lowerSkill || s.toLowerCase().includes(lowerSkill))) {
          affectedExp.add(exp.id);
        }
      });

      // Match project stacks
      data.projects.forEach(proj => {
        if (proj.stack.some(s => s.toLowerCase() === lowerSkill || s.toLowerCase().includes(lowerSkill))) {
          affectedProj.add(proj.id);
        }
      });
    });
  }

  const hasFilter = activeSkills.size > 0;
  const displayedProjects = data.projects.slice(0, 5);

  return (
    <main className="flex-1 flex flex-col gap-16">
      {/* Experience */}
      <section id="experience" className="flex flex-col">
        <div className="flex items-center justify-between border-b-2 border-rule pb-2 mb-2">
          <div className="flex items-center gap-3">
            <span className="text-mono text-[10px] text-ink-3">§ 05</span>
            <h2 className="text-serif text-2xl font-medium tracking-tight">Experience</h2>
          </div>
          <span className="text-mono text-[10px] text-ink-3 uppercase tracking-widest">
            {hasFilter ? `${affectedExp.size} matches` : "Chronological Archive"}
          </span>
        </div>
        
        <div className="flex flex-col">
          {data.experience.map((exp, idx) => (
            <ExperienceEntry 
              key={exp.id} 
              exp={exp} 
              defaultOpen={idx === 0} 
              dimmed={hasFilter && !affectedExp.has(exp.id)}
              activeSkills={activeSkills}
            />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="flex flex-col">
        <div className="flex items-center justify-between border-b-2 border-rule pb-2 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-mono text-[10px] text-ink-3">§ 06</span>
            <h2 className="text-serif text-2xl font-medium tracking-tight">Selected Projects</h2>
          </div>
          <span className="text-mono text-[10px] text-ink-3 uppercase tracking-widest">
            {hasFilter ? `${affectedProj.size} selections` : "Curated Selection"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-rule-soft">
          {displayedProjects.map((proj) => (
            <ProjectCard 
              key={proj.id} 
              proj={proj} 
              dimmed={hasFilter && !affectedProj.has(proj.id)}
              activeSkills={activeSkills}
              onPeek={onPeek}
              onPeekEnd={onPeekEnd}
            />
          ))}
          
          <div 
            onClick={onShowAllProjects}
            className="group relative flex items-center justify-center border-r border-b border-rule-soft cursor-pointer py-16 transition-all hover:bg-ink/[0.03]"
          >
             <div className="bg-paper border-2 border-rule px-8 py-3 shadow-[6px_6px_0_var(--rule-soft)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                <span className="text-mono text-[11px] font-bold tracking-widest uppercase">View More →</span>
             </div>
             {/* Decorative lines */}
             <div className="absolute top-4 left-4 w-12 h-[1px] bg-rule-soft opacity-20" />
             <div className="absolute bottom-4 right-4 w-12 h-[1px] bg-rule-soft opacity-20" />
          </div>
        </div>
      </section>

      {/* Hackathons & Certifications */}
      {data.achievements.length > 0 && (
        <section id="achievements" className="flex flex-col">
          <div className="flex items-center gap-3 border-b-2 border-rule pb-2 mb-6">
            <span className="text-mono text-[10px] text-ink-3">§ 07</span>
            <h2 className="text-serif text-2xl font-medium tracking-tight">Hackathons & Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[160px] gap-4">
            {data.achievements.map((ach, idx) => {
              const isHackathon = ach.title.includes("MAMMATHON");
              return (
                <div 
                  key={idx} 
                  className={cn(
                    "group relative overflow-hidden p-6 border-2 border-rule transition-all hover:bg-ink/[0.02]",
                    isHackathon ? "md:col-span-4 md:row-span-2" : "md:col-span-2 md:row-span-1"
                  )}
                >
                  <div className="absolute top-4 right-4 text-mono text-[10px] text-ink-3 opacity-40 group-hover:opacity-100 transition-opacity">
                    {ach.year}
                  </div>
                  
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="text-mono text-[10px] text-ink-3 mb-2 uppercase tracking-[0.2em]">
                        {isHackathon ? "Participation" : "Achievement"}
                      </div>
                      <h3 className={cn(
                        "text-serif leading-tight",
                        isHackathon ? "text-3xl mb-4" : "text-lg mb-2"
                      )}>
                        {ach.title}
                      </h3>
                      <p className={cn(
                        "text-ink-2 leading-relaxed",
                        isHackathon ? "text-[14px] max-w-md" : "text-[12px]"
                      )}>
                        <FormattedText text={ach.detail} />
                      </p>
                    </div>
                    
                    {isHackathon && (
                      <div className="mt-auto pt-6 flex items-center gap-3">
                        <div className="h-[1px] flex-1 bg-rule-soft" />
                        <span className="text-mono text-[9px] uppercase tracking-widest text-ink-3">Event Record</span>
                      </div>
                    )}
                  </div>

                  {/* Decorative Shorthand Grid Lines */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-rule-soft opacity-20" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-rule-soft opacity-20" />
                </div>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
};

const ExperienceEntry: React.FC<{ exp: Experience; defaultOpen: boolean; dimmed: boolean; activeSkills: Set<string> }> = ({ exp, defaultOpen, dimmed, activeSkills }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article 
      className={cn(
        "entry relative first:pt-3 py-6 border-b border-rule-soft last:border-none transition-all duration-300",
        dimmed ? "opacity-30 blur-[0.5px]" : "opacity-100"
      )}
    >
      <header className="flex justify-between items-baseline gap-4 cursor-pointer group print:cursor-default" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex-1">
          <div className="text-mono text-[9px] text-ink-3 uppercase tracking-[0.2em] mb-1">{exp.type}</div>
          <h3 className="text-serif text-2xl group-hover:text-accent transition-colors print:group-hover:text-ink">
            {exp.role} <span className="text-ink-2 font-sans not-italic text-sm font-medium ml-2 opacity-60">/ {exp.company}</span>
          </h3>
        </div>
        <div className="text-mono text-[10.5px] text-ink-3 text-right">
          {exp.start} — {exp.end}
        </div>
      </header>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {exp.stack.map(skill => (
          <span key={skill} className={cn(
            "chip text-mono text-[9px] px-2 py-0.5 border border-rule-soft transition-all uppercase tracking-wider",
            activeSkills.has(skill) ? "bg-accent text-paper border-accent shadow-[2px_2px_0_var(--rule)]" : "text-ink-3 hover:border-ink hover:text-ink"
          )}>
            {skill}
          </span>
        ))}
      </div>

      {!isOpen && (
        <div className="entry-preview print:hidden relative mt-6 pl-8 text-serif italic text-[16px] text-ink-2 before:content-['“'] before:absolute before:left-0 before:top-[-10px] before:text-[40px] before:text-rule-soft before:leading-none">
          <FormattedText text={exp.bullets[0]} />
        </div>
      )}

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden bullets-container"
      >
        <ul className="flex flex-col gap-0 border-t border-rule-soft pt-4 mt-6">
          {exp.bullets.map((bullet, idx) => (
            <li key={idx} className="grid grid-cols-[32px_1fr] gap-2 py-2 text-[14px] text-ink-2 leading-relaxed">
              <span className="text-mono text-[10px] text-ink-3 pt-1">{(idx + 1).toString().padStart(2, '0')}</span>
              <span><FormattedText text={bullet} /></span>
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="mt-6 flex items-center gap-4 text-mono text-[10px] text-ink-3 cursor-pointer select-none print:hidden group/toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="group-hover/toggle:text-accent transition-colors tracking-widest uppercase">{isOpen ? "Fold Record" : `Expand Details · ${exp.bullets.length} points`}</span>
        <div className="flex-1 h-px bg-rule-soft group-hover/toggle:bg-accent transition-colors" />
        <span className="group-hover/toggle:text-accent transition-colors">{isOpen ? "−" : "+"}</span>
      </div>
    </article>
  );
};

const ProjectCard: React.FC<{ proj: Project; dimmed: boolean; activeSkills: Set<string>; onPeek: (p: Project, ev: React.MouseEvent) => void; onPeekEnd: () => void }> = ({ proj, dimmed, activeSkills, onPeek, onPeekEnd }) => {
  return (
    <div
      onMouseEnter={(ev) => onPeek(proj, ev)}
      onMouseMove={(ev) => onPeek(proj, ev)}
      onMouseLeave={onPeekEnd}
      className={cn(
        "project relative px-8 py-10 transition-all duration-300 border-r border-b border-rule-soft",
        dimmed ? "opacity-30 blur-[0.5px]" : "opacity-100",
        "hover:bg-ink/[0.015] print:hover:bg-transparent group"
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-serif text-2xl group-hover:text-accent transition-colors leading-tight">{proj.name}</h3>
        <span className="text-mono text-[10px] text-ink-3 bg-paper px-1.5 py-0.5 border border-rule-soft">{proj.year}</span>
      </div>

      <p className="text-[13.5px] text-ink-2 leading-relaxed line-clamp-2 print:line-clamp-none h-11 print:h-auto"><FormattedText text={proj.summary} /></p>

      <div className="flex flex-wrap gap-1.5 mt-8">
        {proj.stack.map(skill => (
          <span key={skill} className={cn(
            "chip text-mono text-[9px] px-1.5 py-0.5 border border-rule-soft transition-all uppercase tracking-wider",
            activeSkills.has(skill) ? "bg-accent text-paper border-accent" : "text-ink-3"
          )}>
            {skill}
          </span>
        ))}
      </div>

      {/* Grid Decals */}
      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full border border-rule-soft opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};
