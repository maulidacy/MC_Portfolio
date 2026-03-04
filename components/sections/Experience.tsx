"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Sparkles,
  Code2,
} from "lucide-react";

type Exp = {
  role: string;
  org: string;
  type: "work" | "education" | "org";
  location?: string;
  period: string;
  highlights: string[];
  stack?: string[];
};

export default function Experience() {

  const items: Exp[] = useMemo(() => [
    {
      role: "AI Engineer - Independent Study Program",
      org: "DBS Foundation x Dicoding",
      type: "work",
      location: "Remote",
      period: "2025 - Present",
      highlights: [
        "Completed an intensive independent study focused on applied Machine Learning and AI engineering.",
        "Designed and implemented end-to-end ML pipelines including data preprocessing, model training, evaluation (precision, recall, F1-score), and optimization.",
        "Built ML prototypes using Python and FastAPI following industry-oriented engineering practices.",
        "Collaborated in capstone projects with structured experimentation and performance analysis."
      ],
      stack: ["Python", "Scikit-Learn", "TensorFlow", "FastAPI"],
    },
    {
      role: "Hackathon Finalist - Top 20 Winner",
      org: "Hacktiv8 x IBM SkillsBuild",
      type: "org",
      location: "Indonesia",
      period: "2024",
      highlights: [
        "Developed an AI-based solution for a real-world case study using an end-to-end development approach.",
        "Independently contributed to model design and technical implementation.",
        "Recognized as Top 20 Final Project Winner in the Student Developer Initiative program."
      ],
      stack: ["Scikit-Learn", "NumPy", "Pandas"],
    },
    {
      role: "Informatics Student",
      org: "Universitas Dian Nuswantoro",
      type: "education",
      location: "Semarang",
      period: "2023 - Present",
      highlights: [
        "Focused on Machine Learning, Data Science, and Software Engineering.",
        "Actively building AI-driven and deployment-ready portfolio projects."
      ],
      stack: ["Machine Learning", "Data Science", "PostgreSQL"],
    },
  ], []);

  const ref = useRef<HTMLElement | null>(null);

  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="experience"
      className="relative scroll-mt-24 py-16 overflow-hidden bg-transparent"
    >

      <div className="pointer-events-none absolute -top-24 left-0 h-96 w-96 rounded-full bg-blue-600/6 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-indigo-600/5 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 border-l-2 border-blue-900 pl-6"
        >

          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 mb-2">
            <Code2 className="h-4 w-4" />
            [ Experience_Log ]
          </div>

          <h2 className="text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl uppercase">
            Career <span className="text-blue-900">Journey</span>
          </h2>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative space-y-4"
        >

          <div className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-[1px] bg-slate-900/15" />

          {items.map((e) => (
            <motion.div
              key={e.role}
              variants={itemVariants}
              className="relative flex gap-6 pl-1.5"
            >

              <div className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-blue-500/25 bg-blue-600/10 text-blue-900 shadow-[0_10px_28px_rgba(37,99,235,0.28)] backdrop-blur-md">

                <div className="pointer-events-none absolute inset-0 rounded-lg bg-blue-500/20 blur-[10px] opacity-80" />

                <div className="relative">
                  {e.type === "work" ? (
                    <Briefcase className="h-4 w-4" />
                  ) : e.type === "education" ? (
                    <GraduationCap className="h-4 w-4" />
                  ) : (
                    <Sparkles className="h-4 w-4" />
                  )}
                </div>

              </div>

              <div className="group relative flex-1 overflow-hidden rounded-xl border border-slate-800/80 bg-[#050812]/92 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.40)] transition-all hover:border-blue-900/40">

                <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#0B1220]/70 px-4 py-2">

                  <div className="flex items-center gap-4">

                    <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-red-500/55" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500/55" />
                      <div className="h-2 w-2 rounded-full bg-green-500/55" />
                    </div>

                    <span className="text-[9px] font-mono text-slate-300/80 uppercase tracking-widest">
                      {e.period}
                    </span>

                  </div>

                  <div className="text-[9px] font-mono text-blue-300/70 font-bold uppercase tracking-tighter">
                    {e.type}_block
                  </div>

                </div>

                <div className="p-5">

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                    <div>

                      <h3 className="text-lg font-bold text-slate-50 tracking-tight group-hover:text-blue-200 transition-colors">
                        {e.role}
                      </h3>

                      <div className="mt-1 flex items-center gap-3 text-slate-300/70 font-mono text-xs">

                        <span className="font-bold text-slate-100">
                          {e.org}
                        </span>

                        {e.location && (
                          <>
                            <span className="text-slate-500">|</span>
                            <span className="flex items-center gap-1 text-[10px] text-slate-300/70">
                              <MapPin className="h-3 w-3" />
                              {e.location}
                            </span>
                          </>
                        )}

                      </div>

                    </div>

                    <div className="flex flex-wrap gap-1.5">

                      {e.stack?.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-slate-700/70 bg-slate-900/50 px-2 py-0.5 text-[9px] font-mono font-semibold text-slate-200/75 uppercase tracking-tighter transition-colors group-hover:border-blue-900/50"
                        >
                          {s}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="mt-5 space-y-2">

                    {e.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        className="flex gap-3 text-[12px] leading-relaxed text-slate-200/80 font-medium"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/80" />
                        <p>{h}</p>
                      </div>
                    ))}

                  </div>

                </div>

                <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.22)_50%)] bg-[length:100%_6px]" />

              </div>

            </motion.div>
          ))}

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center gap-2 border-t border-slate-900/10 pt-6 font-mono text-[10px] text-slate-600"
        >

          <span className="text-blue-900 font-bold">
            maulidacy@root:
          </span>

          <span className="uppercase tracking-widest italic">
            journey_log.load() --status:complete
          </span>

          <span className="h-3.5 w-1.5 animate-pulse bg-blue-900" />

        </motion.div>

      </div>
    </section>
  );
}