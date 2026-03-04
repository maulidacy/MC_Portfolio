"use client";

import React, { useRef, useMemo, memo } from "react";
import { motion, useInView, type Variants } from "framer-motion";

import {
  Brain,
  LineChart,
  Rocket,
  Code2,
  Wrench,
  Laptop,
  Sparkles,
  Terminal,
  Cpu,
  Database,
  Code,
  Layout,
} from "lucide-react";

type ChipItem = {
  label: string;
  Icon: React.ElementType;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const SkillChip = memo(function SkillChip({ label, Icon }: ChipItem) {
  return (
    <div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-900/50 px-2.5 py-1 transition-all hover:border-blue-900 hover:bg-slate-800">
      <Icon className="h-3 w-3 text-slate-400" />
      <span className="text-[11px] font-mono font-medium text-slate-300 uppercase tracking-tight">
        {label}
      </span>
    </div>
  );
});

const SkillCard = memo(function SkillCard({
  title,
  subtitle,
  Icon,
  chips,
}: {
  title: string;
  subtitle: string;
  Icon: React.ElementType;
  chips: ChipItem[];
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex flex-col overflow-hidden rounded-md border border-slate-800 bg-[#0a0f1a] shadow-xl transition-all hover:border-slate-600"
    >
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#0d1321] px-3 py-1.5">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-slate-700 transition-colors group-hover:bg-red-900/80" />
          <div className="h-2 w-2 rounded-full bg-slate-700 transition-colors group-hover:bg-yellow-900/80" />
          <div className="h-2 w-2 rounded-full bg-slate-700 transition-colors group-hover:bg-green-900/80" />
        </div>
        <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
          sys_module_v1.0
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-slate-700 bg-slate-800/50 text-blue-500">
            <Icon className="h-5 w-5" />
          </div>

          <div>
            <h3 className="text-md font-bold tracking-tight text-white">
              {title}
            </h3>
            <p className="mt-1 text-[12px] leading-tight text-slate-500">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {chips.map((chip) => (
            <SkillChip key={chip.label} {...chip} />
          ))}
        </div>
      </div>
    </motion.div>
  );
});

export default function Skills() {

  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.1, once: true });

  const { ml, engineering, environment } = useMemo(() => ({

    ml: [
      { label: "Python", Icon: Code },
      { label: "Pandas", Icon: LineChart },
      { label: "NumPy", Icon: Cpu },
      { label: "Scikit-Learn", Icon: Brain },
      { label: "Preprocessing", Icon: Database },
    ],

    engineering: [
      { label: "Next.js", Icon: Layout },
      { label: "Vercel", Icon: Rocket },
      { label: "Git/GitHub", Icon: Code2 },
      { label: "API Design", Icon: Wrench },
    ],

    environment: [
      { label: "VS Code", Icon: Laptop },
      { label: "MySQL", Icon: Database },
      { label: "Jupyter", Icon: Terminal },
      { label: "OpenAI API", Icon: Sparkles },
    ],

  }), []);

  return (
    <section id="skills" className="bg-transparent pt-10 pb-12 scroll-mt-24">

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10" ref={ref}>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-8 border-l-2 border-blue-900 pl-6"
        >

          <motion.div
            variants={itemVariants}
            className="mb-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-700"
          >

            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-800 mb-2">
              <Code2 className="h-4 w-4" />
              [ Tools & Workflow ]
            </div>

          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl"
          >
            Tools & Technologies <span className="text-blue-900">I Work With</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-slate-600"
          >
            A practical toolkit I use to build ML projects and ship reliable
            applications-from experimentation to deployment.
          </motion.p>

        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >

          <SkillCard
            title="Machine Learning"
            subtitle="Modeling & evaluation"
            Icon={Brain}
            chips={ml}
          />

          <SkillCard
            title="Engineering"
            subtitle="APIs, delivery & deployment"
            Icon={Rocket}
            chips={engineering}
          />

          <SkillCard
            title="Environment"
            subtitle="Tooling & data systems"
            Icon={Wrench}
            chips={environment}
          />

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-7 flex items-center justify-start gap-3 border-t border-slate-800 pt-5 font-mono text-[11px] text-slate-600"
        >
          <span className="font-bold text-blue-900">maulidacy@root:</span>
          <span className="italic text-slate-400">
            Engineering is the art of organized intelligence.
          </span>
        </motion.div>

      </div>

    </section>
  );
}