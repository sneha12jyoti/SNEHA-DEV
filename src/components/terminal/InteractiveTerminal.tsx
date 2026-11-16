import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { personalData } from '../../data/personal';
import { projectsData } from '../../data/projects';
import { educationData } from '../../data/education';
import { experienceData } from '../../data/experience';
import { skillCategories } from '../../data/skills';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  text: string | React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialLines: TerminalLine[] = [
    {
      id: 'init-1',
      type: 'system',
      text: (
        <div className="text-zinc-400 space-y-1">
          <p className="text-violet-400 font-bold">
            SNEHA.DEV Neural Terminal v2.4 [x86_64-pc-portfolio]
          </p>
          <p className="text-zinc-500">
            Type <span className="text-cyan-400 font-semibold">'help'</span> to see available commands or click on suggestions below.
          </p>
        </div>
      )
    }
  ];

  const [lines, setLines] = useState<TerminalLine[]>(initialLines);

  useEffect(() => {
    // Only auto-scroll the internal terminal content box when commands are typed
    if (lines.length > 1 && terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    // Add to history
    setHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newLines: TerminalLine[] = [
      ...lines,
      {
        id: `input-${Date.now()}`,
        type: 'input',
        text: trimmed
      }
    ];

    const args = trimmed.toLowerCase().split(' ');
    const cmd = args[0];

    switch (cmd) {
      case 'help':
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-1.5 py-1 text-zinc-300">
              <p className="text-violet-400 font-semibold">Available Commands:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono text-xs">
                <div><span className="text-cyan-300">about</span> - Display personal background & bio</div>
                <div><span className="text-cyan-300">skills</span> - List technical capabilities & tech stack</div>
                <div><span className="text-cyan-300">projects</span> - Display the 6 portfolio projects</div>
                <div><span className="text-cyan-300">experience</span> - Show research internship details</div>
                <div><span className="text-cyan-300">education</span> - Display academic background</div>
                <div><span className="text-cyan-300">contact</span> - Show email, phone & social handles</div>
                <div><span className="text-cyan-300">github</span> - Open GitHub profile in new tab</div>
                <div><span className="text-cyan-300">leetcode</span> - Open LeetCode profile in new tab</div>
                <div><span className="text-cyan-300">whoami</span> - Display current operator identity</div>
                <div><span className="text-cyan-300">clear</span> - Clear the terminal buffer</div>
              </div>
            </div>
          )
        });
        break;

      case 'about':
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-2 py-1 text-zinc-300 text-xs sm:text-sm">
              <p className="font-semibold text-white">{personalData.name} — {personalData.title}</p>
              <p className="text-zinc-400">
                Computer Science & Engineering undergraduate at NIST University, Berhampur (CGPA: 9.2/10).
              </p>
              <p className="text-zinc-400">
                Focuses on Artificial Intelligence, Machine Learning algorithms, deep learning architectures (CNN/LSTM), and full-stack software development.
              </p>
            </div>
          )
        });
        break;

      case 'skills':
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-2 py-1 text-xs">
              <p className="text-violet-400 font-semibold">Verified Tech Stack:</p>
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-cyan-300 min-w-36 font-semibold">{cat.category}:</span>
                  <span className="text-zinc-300">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'projects':
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-3 py-1 text-xs">
              <p className="text-violet-400 font-semibold">Registered Portfolio Projects (6):</p>
              {projectsData.map((p, i) => (
                <div key={i} className="border-l-2 border-violet-500/40 pl-3 space-y-0.5">
                  <p className="text-white font-semibold">
                    [{i + 1}] {p.title} {p.featured && <span className="text-amber-400">(Featured)</span>}
                  </p>
                  <p className="text-zinc-400">{p.description}</p>
                  <p className="text-zinc-500 font-mono">Stack: {p.tags.join(', ')}</p>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'experience':
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-2 py-1 text-xs">
              {experienceData.map((exp, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-white font-bold">{exp.role} @ {exp.organization}</p>
                  <p className="text-cyan-400 font-mono">{exp.period} | {exp.location}</p>
                  <ul className="list-disc list-inside text-zinc-400 space-y-1">
                    {exp.description.map((d, dIdx) => (
                      <li key={dIdx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'education':
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-2 py-1 text-xs">
              {educationData.map((ed, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-1">
                  <div>
                    <p className="text-white font-semibold">{ed.degree}</p>
                    <p className="text-zinc-400">{ed.institution} ({ed.period})</p>
                  </div>
                  <p className="text-violet-300 font-mono font-bold mt-1 sm:mt-0">{ed.scoreType}: {ed.score}</p>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'contact':
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-1 py-1 text-xs font-mono text-zinc-300">
              <p><span className="text-cyan-400">Email:</span> {personalData.email}</p>
              <p><span className="text-cyan-400">Phone:</span> {personalData.phone}</p>
              <p><span className="text-cyan-400">Location:</span> {personalData.location}</p>
              <p><span className="text-cyan-400">LinkedIn:</span> {personalData.linkedin}</p>
              <p><span className="text-cyan-400">GitHub:</span> {personalData.github}</p>
              <p><span className="text-cyan-400">LeetCode:</span> {personalData.leetcode}</p>
              <p><span className="text-cyan-400">GeeksforGeeks:</span> {personalData.geeksforgeeks}</p>
            </div>
          )
        });
        break;

      case 'github':
        window.open(personalData.github, '_blank');
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: <p className="text-emerald-400 text-xs">Opening GitHub profile in new tab...</p>
        });
        break;

      case 'leetcode':
        if (personalData.leetcode) {
          window.open(personalData.leetcode, '_blank');
          newLines.push({
            id: `out-${Date.now()}`,
            type: 'output',
            text: <p className="text-amber-400 text-xs">Opening LeetCode profile ({personalData.leetcode})...</p>
          });
        }
        break;

      case 'clear':
        setLines([]);
        setInputVal('');
        return;

      case 'whoami':
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: <p className="text-cyan-300 text-xs">visitor@sneha-dev-terminal (guest / read-only permissions)</p>
        });
        break;

      default:
        newLines.push({
          id: `err-${Date.now()}`,
          type: 'error',
          text: (
            <p className="text-rose-400 text-xs">
              Command not recognized: '{trimmed}'. Type <span className="text-white underline cursor-pointer" onClick={() => handleCommand('help')}>'help'</span> for list of valid commands.
            </p>
          )
        });
        break;
    }

    setLines(newLines);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < history.length) {
          setHistoryIndex(nextIdx);
          setInputVal(history[history.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <section id="terminal" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading
          number="08"
          badge="INTERACTIVE CLI"
          title="INTERACTIVE TERMINAL"
          subtitle="Explore the portfolio via a Unix-inspired command line interface."
        />

        {/* Terminal Window */}
        <div
          className={`mx-auto rounded-2xl bg-zinc-950/95 border border-violet-500/30 shadow-2xl shadow-violet-950/30 overflow-hidden font-mono transition-all duration-300 ${
            isExpanded ? 'max-w-6xl' : 'max-w-4xl'
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-white/10 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-zinc-400 font-sans font-medium flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-violet-400" />
                sneha@portfolio: ~ (bash)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="text-zinc-400 hover:text-white transition-colors"
                title={isExpanded ? 'Compress' : 'Expand'}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Quick command buttons */}
          <div className="px-4 py-2 bg-zinc-900/40 border-b border-white/5 flex flex-wrap items-center gap-2 text-[11px] text-zinc-400">
            <span className="text-zinc-600 font-mono">Quick run:</span>
            {['help', 'about', 'skills', 'projects', 'experience', 'education', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(cmd);
                }}
                className="px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-violet-900/40 hover:text-violet-300 text-zinc-300 border border-white/5 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Console Output */}
          <div
            ref={terminalBodyRef}
            className="p-4 sm:p-6 min-h-[340px] max-h-[500px] overflow-y-auto space-y-3 text-xs sm:text-sm"
          >
            {lines.map((line) => {
              if (line.type === 'input') {
                return (
                  <div key={line.id} className="flex items-center gap-2 text-zinc-100">
                    <span className="text-violet-400 font-bold">sneha@dev:~$</span>
                    <span>{line.text}</span>
                  </div>
                );
              }
              return (
                <div key={line.id} className="pl-4 border-l border-white/5">
                  {line.text}
                </div>
              );
            })}
          </div>

          {/* Active Input Line */}
          <div className="px-4 sm:px-6 py-3 bg-zinc-900/60 border-t border-white/10 flex items-center gap-2">
            <span className="text-violet-400 font-bold text-xs sm:text-sm shrink-0">
              sneha@dev:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command (try 'projects' or 'help')..."
              className="w-full bg-transparent text-zinc-100 focus:outline-none font-mono text-xs sm:text-sm placeholder-zinc-600"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="text-zinc-500 hover:text-violet-400 p-1 transition-colors"
              title="Submit command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
