import React from "react";
import { PortfolioData } from "@/lib/data";
import { cn } from "@/lib/utils";

interface SidebarProps {
  data: PortfolioData;
  activeSkills: Set<string>;
  toggleSkill: (skill: string) => void;
  clearSkills: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ data, activeSkills, toggleSkill, clearSkills }) => {
  const contact = data.contact;

  return (
    <aside className="w-full pr-8 flex flex-col gap-10">
      {/* Name & Role */}
      <div className="flex flex-col">
        <h2 className="text-serif text-[22px] text-ink leading-tight">{data.name}</h2>
        <div className="text-mono text-[10px] text-ink-2 mt-1 uppercase tracking-wider">{data.tagline}</div>
        
        <div className="mt-6 p-3 bg-paper-2 border border-rule relative">
          <div className="text-mono text-[9.5px] text-ink-3 uppercase tracking-widest flex items-center gap-2">
            <span className="pulse-dot" /> Open for Opportunities
          </div>
          <p className="text-[12.5px] text-ink-2 mt-2 leading-relaxed">{data.currently}</p>
        </div>
      </div>

      {/* Contact */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2 border-b border-rule pb-1.5">
          <span className="text-mono text-[10px] text-ink-3">§ 01</span>
          <h2 className="text-serif text-lg font-medium">Contact</h2>
        </div>
        <div className="flex flex-col">
          <ContactRow href={`https://github.com/${contact.github}`} label="GitHub" value={contact.github} />
          <ContactRow href={`mailto:${contact.email}`} label="Email" value={contact.email} />
          <ContactRow href={`https://www.linkedin.com/in/${contact.linkedin}/`} label="LinkedIn" value="snaehath-p" />
          <ContactRow href={`https://${contact.portfolio}`} label="Web" value="portfolio" />
        </div>
      </section>

      {/* Skills */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-rule pb-1.5">
          <div className="flex items-center gap-2">
            <span className="text-mono text-[10px] text-ink-3">§ 02</span>
            <h2 className="text-serif text-lg font-medium">Skills</h2>
          </div>
          {activeSkills.size > 0 && (
            <button onClick={clearSkills} className="text-mono text-[9px] text-accent hover:underline cursor-pointer">
              Clear ({activeSkills.size})
            </button>
          )}
        </div>
        
        {Object.entries(data.skills).map(([group, items]) => (
          <div key={group} className="flex flex-col gap-2">
            <h3 className="text-mono text-[9.5px] text-ink-3">{group}</h3>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => {
                const isActive = activeSkills.has(skill);
                
                return (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={cn(
                      "px-2 py-0.5 text-mono text-[11px] border rounded-sm transition-all duration-150 cursor-pointer",
                      isActive 
                        ? "bg-ink text-paper border-ink font-semibold" 
                        : "bg-transparent text-ink-2 border-rule-soft hover:border-rule hover:text-ink",
                      activeSkills.size > 0 && !isActive && "opacity-40"
                    )}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2 border-b border-rule pb-1.5">
          <span className="text-mono text-[10px] text-ink-3">§ 03</span>
          <h2 className="text-serif text-lg font-medium">Education</h2>
        </div>
        {data.education.map((edu, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="text-serif text-[15px] leading-snug">{edu.school}</div>
            <div className="text-[12px] text-ink-2 mt-0.5">{edu.degree}</div>
            <div className="flex justify-between text-mono text-[10px] text-ink-3 mt-1.5">
              <span>{edu.start} — {edu.end}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2 border-b border-rule pb-1.5">
          <span className="text-mono text-[10px] text-ink-3">§ 04</span>
          <h2 className="text-serif text-lg font-medium">Certs</h2>
        </div>
        <ul className="flex flex-col">
          {data.certifications.map((cert, idx) => (
            <li key={idx} className="text-[12px] text-ink-2 py-1.5 border-b border-dotted border-rule-soft flex items-center gap-2 last:border-none">
              <span className="text-mono text-[10px] text-ink-3">—</span>
              {cert}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

const ContactRow: React.FC<{ href: string; label: string; value: string }> = ({ href, label, value }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    title={value}
    className="group flex items-center justify-between py-2 border-b border-dotted border-rule-soft last:border-none hover:bg-paper-2/50 px-1 transition-all gap-2"
  >
    <span className="text-mono text-[9.5px] text-ink-3 shrink-0">{label}</span>
    <span className="text-mono text-[10.5px] text-ink group-hover:text-accent transition-colors truncate text-right">{value}</span>
  </a>
);
