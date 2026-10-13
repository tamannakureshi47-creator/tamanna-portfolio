import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Code2, Database,
  GitBranch, Mail, Menu, MonitorSmartphone, Send, Server, Sparkles, Workflow,
  X, Github, Linkedin, ExternalLink
} from "lucide-react";




const skillGroups = [
  {
    title: "Frontend development",
    description: "Building responsive user interfaces",
    icon: <MonitorSmartphone size={19} />,
    iconStyle: "bg-sky-50 text-sky-700",
    skills: [
      { name: "HTML", style: "border-orange-200 bg-orange-50 text-orange-700" },
      { name: "CSS", style: "border-blue-200 bg-blue-50 text-blue-700" },
      { name: "JavaScript", style: "border-amber-200 bg-amber-50 text-amber-700" },
      { name: "React", style: "border-sky-200 bg-sky-50 text-sky-700" },
      { name: "Tailwind CSS", style: "border-cyan-200 bg-cyan-50 text-cyan-700" },
      { name: "Bootstrap", style: "border-purple-200 bg-purple-50 text-purple-700" },
    ],
  },
  {
    title: "Backend development",
    description: "Server-side apps and APIs",
    icon: <Server size={19} />,
    iconStyle: "bg-emerald-50 text-emerald-700",
    skills: [
      { name: "Node.js", style: "border-emerald-200 bg-emerald-50 text-emerald-700" },
      { name: "Express.js", style: "border-slate-200 bg-slate-50 text-slate-700" },
      { name: "REST APIs", style: "border-violet-200 bg-violet-50 text-violet-700" },
      { name: "Full-stack development", style: "border-teal-200 bg-teal-50 text-teal-700" },
    ],
  },
  {
    title: "Database",
    description: "Working with application data",
    icon: <Database size={19} />,
    iconStyle: "bg-amber-50 text-amber-700",
    skills: [
      { name: "MongoDB", style: "border-green-200 bg-green-50 text-green-700" },
    ],
  },
  {
    title: "Automation & AI",
    description: "Workflows and intelligent tools",
    icon: <Workflow size={19} />,
    iconStyle: "bg-fuchsia-50 text-fuchsia-700",
    skills: [
      { name: "n8n", style: "border-orange-200 bg-orange-50 text-orange-700" },
      { name: "AI agents", style: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700" },
      { name: "Workflow automation", style: "border-violet-200 bg-violet-50 text-violet-700" },
    ],
  },
  {
    title: "Tools & CMS",
    description: "Everyday development workflow",
    icon: <GitBranch size={19} />,
    iconStyle: "bg-indigo-50 text-indigo-700",
    skills: [
      { name: "Git", style: "border-orange-200 bg-orange-50 text-orange-700" },
      { name: "GitHub", style: "border-slate-200 bg-slate-50 text-slate-700" },
      { name: "WordPress", style: "border-indigo-200 bg-indigo-50 text-indigo-700" },
      { name: "Responsive design", style: "border-cyan-200 bg-cyan-50 text-cyan-700" },
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "Netflix Clone",
    type: "Streaming UI · React",
    description: "A streaming-platform interface inspired by Netflix, built to practice reusable React components and movie browsing layouts.",
    stack: ["React", "JavaScript", "Responsive UI"],
    liveUrl: "https://netflix-clone-indol-psi.vercel.app/",
    previewImage: "https://image.thum.io/get/width/1000/fullpage/noanimate/https://netflix-clone-indol-psi.vercel.app/",
  },
  {
    number: "02",
    name: "Smart Todo App",
    type: "Task Management · Web App",
    description: "A smart task-management app designed to help users organize tasks and keep track of what needs to get done.",
    stack: ["Task Management", "Productivity", "Responsive UI"],
    liveUrl: "https://smart-todo-app-gilt.vercel.app/",
    previewImage: "/assets/img/todo.png",
  },
  {
    number: "03",
    name: "Form Builder",
    type: "Interactive · Web App",
    description: "An interactive form-building app for creating and organizing forms through a clean, approachable interface.",
    stack: ["Form Builder", "Interactive UI", "Responsive Design"],
    liveUrl: "https://form-builder-six-blush.vercel.app/",
    previewImage: "/assets/img/formbuilder.png",
  },
  {
    number: "04",
    name: "Panto Furniture Website",
    type: "Furniture · Bootstrap",
    description: "A furniture website concept with a product-focused layout, elegant visual styling, and responsive sections.",
    stack: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://panto-furniture-bootstrap.vercel.app/",
    previewImage: "/assets/img/bootstrap.png",
  },
  {
    number: "05",
    name: "TOTC Online Learning Platform",
    type: "Education Website",
    description: "An online-learning website interface designed to present courses and learning content in an accessible layout.",
    stack: ["HTML", "CSS", "Responsive UI", "Tailwind css"],
    liveUrl: "https://totc-online-learning-platform.vercel.app/",
    previewImage: "/assets/img/tailwind.png",
  },
  {
    number: "06",
    name: "Figma UI Bootstrap Website",
    type: "UI-to-Web Implementation",
    description: "A website interface inspired by a Figma design, focused on translating visual structure into a clean web layout.",
    stack: ["Bootstrap", "HTML", "CSS"],
    liveUrl: "https://figma-ui-bootstrap-website.vercel.app/",
    previewImage: "https://image.thum.io/get/width/1000/fullpage/noanimate/https://figma-ui-bootstrap-website.vercel.app/",
  },
];

const sectionKicker = "font-mono text-[10px] tracking-[1.15px] text-brand mb-5 block";
const sectionTitle = "font-display font-extrabold text-4xl sm:text-5xl tracking-[-2px] leading-[1.12] text-ink";
const buttonBase = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-xs font-bold transition hover:-translate-y-0.5";

function ProjectPreview({ project, index }) {
  return (
    <div className={`project-art project-art-${index + 1} relative grid h-[245px] place-items-center overflow-hidden`}>
      <span className="absolute left-4 top-4 z-10 font-mono text-[9px] tracking-wider text-slate-500">{String(index + 1).padStart(2, "0")} / 06</span>
      <div className="project-screen">
        <img
          className="project-preview-image"
          src={project.previewImage}
          alt={`Full-page screenshot of ${project.name}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="preview-scroll-hint" aria-hidden="true">Hover to scroll preview <ArrowDownRight size={13} /></span>
      <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-violet-800"><ArrowUpRight size={18} /></span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const appRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (
      !appRef.current ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const targets = appRef.current.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    appRef.current.classList.add("motion-ready");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={appRef} className="overflow-hidden bg-paper text-ink">
      <header className="relative z-20 mx-auto flex h-[78px] w-[calc(100%-38px)] max-w-[1240px] items-center justify-between border-b border-ink/[0.07] sm:h-[86px] sm:w-[calc(100%-64px)]">
        <a className="flex items-center gap-3" href="#home" onClick={closeMenu} aria-label="Tamanna Kureshi home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink font-display text-[22px] font-extrabold text-white">T<span className="text-violet-300">.</span></span>
          <span className="font-display text-sm font-extrabold tracking-tight">Tamanna Kureshi<small className="mt-1 block font-mono text-[9px] font-normal tracking-[1.15px] text-slate-500">FULL STACK DEVELOPER</small></span>
        </a>
        <button className="rounded-lg p-2 text-ink md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[68px] flex-col gap-1 rounded-xl border border-slate-200 bg-white p-4 shadow-soft md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          <a className="px-2 py-3 text-xs text-slate-600 hover:text-brand md:p-0" href="#about" onClick={closeMenu}>About</a>
          <a className="px-2 py-3 text-xs text-slate-600 hover:text-brand md:p-0" href="#skills" onClick={closeMenu}>Skills</a>
          <a className="px-2 py-3 text-xs text-slate-600 hover:text-brand md:p-0" href="#projects" onClick={closeMenu}>Projects</a>
          <a className="px-2 py-3 text-xs text-slate-600 hover:text-brand md:p-0" href="#journey" onClick={closeMenu}>Journey</a>
          <a className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg border border-violet-200 px-4 py-3 text-xs font-bold text-brand hover:bg-violet-50 md:mt-0" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section id="home" aria-labelledby="home-title" className="relative mx-auto grid min-h-[600px] w-[calc(100%-38px)] max-w-[1120px] grid-cols-1 items-center gap-5 pb-20 pt-16 sm:w-[calc(100%-64px)] md:grid-cols-[1.05fr_.95fr] md:gap-7 md:pb-20 md:pt-10">
          <div className="pb-3" data-reveal>
            <div className="mb-7 flex items-center gap-2.5 font-mono text-[10px] tracking-[1px] text-slate-500"><span className="h-2 w-2 rounded-full bg-emerald-400 ring-4 ring-emerald-100" /> OPEN TO LEARNING & NEW CHALLENGES</div>
            <h1 id="home-title" className="font-display text-[clamp(44px,7vw,66px)] font-extrabold leading-[1.07] tracking-[-2.8px] text-ink">Full Stack<br /><span className="text-brand">Developer</span></h1>
            <p className="mb-7 mt-6 max-w-[440px] text-sm leading-8 text-muted"><strong className="text-ink">Tamanna Kureshi</strong> builds responsive, user-friendly web applications with React, JavaScript, Node.js, Express, and MongoDB.</p>
            <div className="flex flex-wrap items-center gap-3">
              <a className={`${buttonBase} bg-brand text-white shadow-lg shadow-violet-200 hover:bg-violet-700`} href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className={`${buttonBase} text-slate-600 hover:text-brand`} href="#about">More about me <ArrowRight size={16} /></a>
            </div>
            <div className="mt-11 flex max-w-[450px] gap-8 border-t border-slate-200 pt-5 sm:gap-10">
              <div className="grid gap-2"><span className="font-mono text-[9px] tracking-wider text-slate-400">FOCUS</span><strong className="text-[11px]">Full Stack Development</strong></div>
              <div className="grid gap-2"><span className="font-mono text-[9px] tracking-wider text-slate-400">CURRENTLY</span><strong className="text-[11px]">Felix ITs, Ahmedabad</strong></div>
            </div>
          </div>
          <div className="hero-visual relative mx-auto grid h-[350px] w-full max-w-[460px] place-items-center sm:h-[420px] md:h-[435px]" data-reveal>
            <div className="pointer-events-none absolute h-[72%] w-[94%] rotate-[-20deg] rounded-[50%] border border-violet-100" />
            <div className="pointer-events-none absolute h-[90%] w-[78%] rotate-[36deg] rounded-[50%] border border-violet-100" />
            <div className="relative z-10 w-[min(365px,86%)] rotate-[-2deg] overflow-hidden rounded-xl bg-[#17313a] shadow-[0_30px_65px_rgba(23,49,58,.16)]">
              <div className="flex h-[42px] items-center gap-1.5 border-b border-white/5 bg-[#24434a] px-4"><span className="h-2 w-2 rounded-full bg-rose-300" /><span className="h-2 w-2 rounded-full bg-amber-200" /><span className="h-2 w-2 rounded-full bg-emerald-300" /><small className="ml-auto font-mono text-[10px] text-violet-200/70">developer.js</small></div>
              <div className="space-y-0.5 px-4 py-5 font-mono text-[10px] leading-[2.1] text-violet-50 sm:px-5 sm:text-[11px]">
                <div><span className="mr-5 text-violet-300/40">01</span><span className="text-violet-300">const</span> developer = {"{"}</div>
                <div><span className="mr-5 text-violet-300/40">02</span>&nbsp; name: <span className="text-emerald-200">'Tamanna'</span>,</div>
                <div><span className="mr-5 text-violet-300/40">03</span>&nbsp; role: <span className="text-emerald-200">'Full Stack'</span>,</div>
                <div><span className="mr-5 text-violet-300/40">04</span>&nbsp; mindset: <span className="text-emerald-200">'Keep learning'</span></div>
                <div><span className="mr-5 text-violet-300/40">05</span>{"}"}</div>
                <div className="mt-3"><span className="mr-5 text-violet-300/40">06</span><span className="text-violet-300">while</span> (growing) {"{"}</div>
                <div><span className="mr-5 text-violet-300/40">07</span>&nbsp; build();</div>
                <div><span className="mr-5 text-violet-300/40">08</span>&nbsp; improve();</div>
                <div><span className="mr-5 text-violet-300/40">09</span>{"}"}</div>
              </div>
              <div className="bg-[#203c43] px-4 py-3 text-[9px] text-violet-100/70"><span className="mr-2 text-emerald-300">✓</span>Always learning, always building</div>
            </div>
            <div className="absolute right-0 top-6 z-20 flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white p-3 text-[11px] font-bold shadow-soft sm:right-1"><span className="grid h-8 w-8 place-items-center rounded-lg bg-violet-100 text-brand"><Sparkles size={17} /></span>Thoughtful design</div>
            <div className="absolute bottom-5 left-0 z-20 flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white p-3 shadow-soft sm:bottom-7"><span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-emerald-700"><Braces size={18} /></span><div><strong className="block text-[11px]">Ideas into interfaces</strong><small className="mt-1 block text-[9px] text-slate-500">With purpose & precision</small></div></div>
            <div className="absolute bottom-12 right-0 rotate-6 font-mono text-[9px] leading-relaxed tracking-widest text-violet-400">CREATE<br />& GROW</div>
          </div>
          <a href="#about" className="absolute bottom-5 left-0 hidden items-center gap-2.5 font-mono text-[9px] tracking-widest text-slate-400 md:flex"><span className="h-px w-7 bg-violet-300" />SCROLL TO EXPLORE</a>
        </section>

        <div className="border-y border-violet-100 bg-[#edf5f2]">
          <div className="mx-auto flex min-h-[65px] w-[calc(100%-38px)] max-w-[1120px] flex-wrap items-center justify-center gap-3 py-4 font-mono text-[8px] tracking-wider text-slate-500 sm:w-[calc(100%-64px)] sm:gap-8 sm:text-[9px]">
            <span>CURIOUS BY NATURE</span><i className="h-1 w-1 rounded-full bg-violet-400" /><span>BUILT THROUGH PRACTICE</span><i className="h-1 w-1 rounded-full bg-violet-400" /><span>FOCUSED ON GROWTH</span>
          </div>
        </div>


        <section
          id="about"
          aria-labelledby="about-title"
          className="relative mx-auto w-[calc(100%-38px)] max-w-[1120px] overflow-hidden py-20 sm:w-[calc(100%-64px)] sm:py-28"
        >
          {/* Section Header */}
          <div data-reveal>
            <span className={`${sectionKicker} inline-flex items-center gap-2`}>
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              01 / A LITTLE ABOUT ME
            </span>

            <h2 id="about-title" className={`${sectionTitle} mt-4 leading-[1.12]`}>
              About me: building
              <br />
              <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                useful web experiences.
              </span>
            </h2>
          </div>

          {/* About Content */}
          <div className="mt-10 grid gap-7 md:mt-14 md:grid-cols-[0.9fr_1.1fr] md:gap-12" data-reveal>

            {/* Introduction Card */}
            <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-violet-100/80 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50/60 p-6 sm:p-8">

              {/* Decorative Elements */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-200/30 blur-3xl transition-all duration-500 group-hover:bg-fuchsia-200/40" />

              <div className="relative flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-violet-700 shadow-sm ring-1 ring-violet-100">
                  <Sparkles size={23} />
                </span>

                <div>
                  <p className="text-sm font-extrabold text-slate-900">
                    Hello, I'm Tamanna!
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-violet-600">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <h3 className="relative mt-8 max-w-[390px] font-display text-2xl font-extrabold leading-snug tracking-tight text-[#17313a] sm:text-3xl">
                I enjoy turning ideas into
                <span className="text-violet-700"> clean, useful</span> digital experiences.
              </h3>

              <p className="relative mt-5 text-[12px] leading-7 text-slate-600 sm:text-[13px]">
                I'm Tamanna Kureshi, a passionate developer who enjoys learning
                new technologies and solving real-world problems through code.
                I focus on building user-friendly web experiences while strengthening
                my skills through practical projects, experimentation, and new challenges.
              </p>

              <p className="relative mt-3 text-[12px] leading-7 text-slate-600 sm:text-[13px]">
                For me, every project is an opportunity to learn something new,
                improve my approach, and turn an idea into something useful.
              </p>

              <div className="relative mt-7 border-t border-violet-100 pt-5">
                <a
                  href="#contact"
                  className="group/link inline-flex items-center gap-2 rounded-xl bg-[#17313a] px-5 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
                >
                  Let's build something meaningful
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            {/* About Highlights */}
            <div className="flex flex-col gap-4">

              {[
                {
                  icon: <MonitorSmartphone size={21} />,
                  number: "01",
                  label: "01 / DESIGN & EXPERIENCE",
                  title: "Responsive experiences",
                  desc: "Creating clean, intuitive interfaces that feel consistent across screen sizes and devices.",
                  accent: "group-hover:bg-violet-50 group-hover:text-violet-700",
                },
                {
                  icon: <Braces size={21} />,
                  number: "02",
                  label: "02 / DEVELOPMENT",
                  title: "Full stack learning",
                  desc: "Strengthening frontend and backend skills by building practical projects and exploring new technologies.",
                  accent: "group-hover:bg-fuchsia-50 group-hover:text-fuchsia-700",
                },
                {
                  icon: <Sparkles size={21} />,
                  number: "03",
                  label: "03 / GROWTH MINDSET",
                  title: "Continuous improvement",
                  desc: "Learning from challenges, experimenting with ideas, and finding better ways to solve problems.",
                  accent: "group-hover:bg-indigo-50 group-hover:text-indigo-700",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group relative flex flex-1 gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_14px_35px_rgba(91,33,182,0.08)] sm:gap-5 sm:p-6"
                >
                  {/* Hover Accent */}
                  <span className="absolute left-0 top-0 h-full w-[3px] origin-bottom scale-y-0 bg-gradient-to-b from-violet-600 to-fuchsia-500 transition-transform duration-300 group-hover:scale-y-100" />

                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-slate-100 bg-slate-50 text-slate-600 transition-all duration-300 ${item.accent}`}
                  >
                    {item.icon}
                  </span>

                  <div className="min-w-0 flex-1 pr-1">
                    <span className="font-mono text-[9px] font-medium tracking-[0.13em] text-slate-400">
                      {item.label}
                    </span>

                    <h3 className="mt-2 text-sm font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-violet-800 sm:text-[15px]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-6 text-slate-500 sm:text-xs">
                      {item.desc}
                    </p>
                  </div>

                  <span className="absolute right-4 top-4 font-mono text-[10px] text-slate-300">
                    {item.number}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section
          id="skills"
          aria-labelledby="skills-title"
          className="border-y border-slate-200/70 bg-slate-50/70"
        >
          <div className="mx-auto w-[calc(100%-38px)] max-w-[1120px] py-16 sm:w-[calc(100%-64px)] sm:py-20">
            <div className="flex flex-col gap-5 border-b border-slate-200 pb-7 sm:pb-8 md:flex-row md:items-end md:justify-between" data-reveal>
              <div className="max-w-[650px]">
                <span className={`${sectionKicker} inline-flex items-center gap-2`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  02 / SKILLS & TECHNOLOGIES
                </span>
                <h2 id="skills-title" className={`${sectionTitle} mt-3`}>
                  My technical<br className="sm:hidden" /> <span className="text-brand">toolkit.</span>
                </h2>
                <p className="mt-3 max-w-[560px] text-sm leading-7 text-slate-500">
                  The technologies I use to build responsive web applications, develop backend features, and create useful automations.
                </p>
              </div>
              <span className="mb-1 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-3.5 py-2 font-mono text-[9px] font-medium tracking-wider text-emerald-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                FULL STACK · AUTOMATION · AI
              </span>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <article
                  key={group.title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 60}ms` }}
                  className={`group relative rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                    group.title === "Automation & AI"
                      ? "border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 to-white text-slate-900 shadow-[0_8px_24px_rgba(23,49,58,0.04)] hover:border-emerald-300 hover:shadow-[0_16px_32px_rgba(23,49,58,0.09)]"
                      : "border-slate-200 bg-white text-slate-900 shadow-[0_8px_24px_rgba(23,49,58,0.04)] hover:border-brand/30 hover:shadow-[0_16px_32px_rgba(23,49,58,0.08)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${
                      group.title === "Automation & AI" ? "bg-emerald-100 text-emerald-800" : group.iconStyle
                    }`}>
                      {group.icon}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{group.title}</h3>
                      <p className="mt-1 text-[11px] leading-5 text-slate-500">{group.description}</p>
                    </div>
                  </div>
                  <div className="my-4 border-t border-slate-100" />
                  <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-medium text-slate-700 transition-colors duration-200 group-hover:border-brand/20 group-hover:bg-white"
                        >
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>



        <section
          id="projects"
          aria-labelledby="projects-title"
          className="relative mx-auto w-[calc(100%-38px)] max-w-[1120px] py-20 sm:w-[calc(100%-64px)] sm:py-28"
        >
          {/* Section Header */}
          <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <span className={`${sectionKicker} inline-flex items-center gap-2`}>
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                03 / SELECTED PROJECTS
              </span>

              <h2 id="projects-title" className={`${sectionTitle} mt-4 leading-[1.12]`}>
                Selected development
                <br />
                <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                  projects.
                </span>
              </h2>
            </div>

            <div className="max-w-[330px] border-l-2 border-violet-200 pl-4 md:mb-1">
              <p className="text-sm leading-7 text-slate-500">
                A collection of ideas turned into interactive web experiences,
                built through creativity, learning, and hands-on development.
              </p>

              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-600">
                Design · Develop · Improve
              </p>
            </div>
          </div>

          {/* Project cards with hover-scrolling previews */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <article
                key={project.number}
                data-reveal
                style={{ "--reveal-delay": `${i * 75}ms` }}
                className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(23,49,58,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_45px_rgba(23,49,58,0.14)]"
              >
                {/* Preview */}
                <div className="relative overflow-hidden border-b border-slate-100">
                  <ProjectPreview project={project} index={i} />

                  {/* Project Number */}
                  <span className="absolute left-4 top-4 z-10 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 font-mono text-[10px] font-medium tracking-widest text-slate-700 shadow-sm backdrop-blur">
                    PROJECT {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Preview Link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name} live website`}
                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-all duration-300 hover:rotate-45 hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                {/* Project Details */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="w-fit rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.15em] text-violet-700">
                    {project.type}
                  </span>

                  <h3 className="mt-4 text-lg font-extrabold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-violet-700">
                    {project.name}
                  </h3>

                  <p className="mt-2 flex-1 text-[12px] leading-7 text-slate-500">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-medium text-slate-600 transition-colors duration-200 group-hover:border-violet-100 group-hover:bg-violet-50/70 group-hover:text-violet-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live ${project.name} project`}
                      className="group/link inline-flex w-full items-center justify-between rounded-xl bg-slate-950 px-4 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
                    >
                      <span>Explore Project</span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:bg-white/20">
                        <ArrowUpRight size={16} />
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50/80 via-white to-fuchsia-50/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7" data-reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-sm ring-1 ring-violet-100">
                <Sparkles size={19} />
              </span>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Every project is progress.
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Learning, building, and getting better with every experience.
                </p>
              </div>
            </div>

            <a
              href="https://github.com/tamannakureshi47"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 self-start rounded-lg border border-violet-200 bg-white px-4 py-2.5 text-xs font-semibold text-violet-800 transition-all hover:border-violet-500 hover:bg-violet-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400 sm:self-auto"
            >
              Explore GitHub
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>


        <section id="journey" aria-labelledby="journey-title" className="border-t border-violet-100 bg-gradient-to-b from-[#edf5f2] to-white">
          <div className="mx-auto w-[calc(100%-38px)] max-w-[1120px] py-20 sm:w-[calc(100%-64px)] sm:py-28" data-reveal>
            <div className="mb-10 max-w-[620px] sm:mb-12">
              <span className={sectionKicker}>04 / EDUCATION & EXPERIENCE</span>
              <h2 id="journey-title" className={`${sectionTitle} mt-3`}>The path that shaped<br /><span className="text-brand">my journey.</span></h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">A growing foundation in software, from academic studies to hands-on full-stack learning.</p>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
              <div className="relative grid gap-5 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-px before:bg-gradient-to-b before:from-brand/50 before:to-violet-200">
                <article className="group relative ml-1 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_28px_rgba(23,49,58,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_18px_36px_rgba(23,49,58,0.1)] sm:p-6" data-reveal>
                  <span className="absolute -left-[1px] top-7 grid h-10 w-10 place-items-center rounded-xl border-4 border-[#edf5f2] bg-brand text-white shadow-sm"><Code2 size={17} /></span>
                  <div className="pl-11">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 font-mono text-[9px] font-medium tracking-wider text-emerald-800">CURRENT TRAINING</span>
                      <span className="font-mono text-[10px] tracking-wide text-slate-400">2026 — PRESENT</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight text-ink transition-colors group-hover:text-brand sm:text-xl">Full Stack Web Development</h3>
                    <p className="mt-1 text-xs font-semibold text-brand">Felix ITs <span className="px-1 text-slate-300">·</span> Ahmedabad</p>
                    <p className="mt-3 text-xs leading-6 text-slate-500">Hands-on training in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, with a focus on responsive and user-friendly full-stack applications.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["React", "Node.js", "Express", "MongoDB"].map((skill) => <span key={skill} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600 transition-colors group-hover:border-emerald-100 group-hover:bg-emerald-50/70">{skill}</span>)}
                    </div>
                  </div>
                </article>

                <article className="group relative ml-1 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_28px_rgba(23,49,58,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_18px_36px_rgba(23,49,58,0.1)] sm:p-6" data-reveal>
                  <span className="absolute -left-[1px] top-7 grid h-10 w-10 place-items-center rounded-xl border-4 border-[#edf5f2] bg-violet-100 text-brand shadow-sm"><Braces size={17} /></span>
                  <div className="pl-11">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-violet-50 px-3 py-1 font-mono text-[9px] font-medium tracking-wider text-violet-800">EDUCATION</span>
                      <span className="font-mono text-[10px] tracking-wide text-slate-400">2023 — 2026</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight text-ink transition-colors group-hover:text-brand sm:text-xl">Bachelor of Computer Applications</h3>
                    <p className="mt-1 text-xs font-semibold text-brand">Saurashtra University</p>
                    <p className="mt-3 text-xs leading-6 text-slate-500">Building an academic foundation in computer applications and technology.</p>
                  </div>
                </article>
              </div>

              <aside className="overflow-hidden rounded-2xl border border-[#24434a] bg-[#17313a] p-5 text-white shadow-[0_18px_45px_rgba(23,49,58,0.14)] sm:p-7" data-reveal>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-emerald-200"><Sparkles size={20} /></span>
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.16em] text-emerald-200">MILESTONES</span>
                    <h3 className="mt-1 font-display text-lg font-extrabold">Certificates</h3>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-6 text-white/60">Extra learning that complements my degree and practical development work.</p>

                <div className="mt-6 grid gap-3">
                  <div className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-emerald-200/40 hover:bg-white/[0.08]">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-200/10 text-emerald-200"><Code2 size={16} /></span>
                    <div><span className="font-mono text-[9px] tracking-wider text-emerald-200/70">CERTIFICATE · 2026</span><h4 className="mt-1.5 text-sm font-bold">Full Stack Development</h4><p className="mt-1 text-[11px] text-white/55">Felix ITs, Ahmedabad</p></div>
                  </div>
                  <div className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-emerald-200/40 hover:bg-white/[0.08]">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-200/10 text-emerald-200"><Braces size={16} /></span>
                    <div><span className="font-mono text-[9px] tracking-wider text-emerald-200/70">CERTIFICATE · 2026</span><h4 className="mt-1.5 text-sm font-bold">MERN Stack</h4><p className="mt-1 text-[11px] text-white/55">Gronited Pvt. Ltd.</p></div>
                  </div>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 font-mono text-[9px] tracking-wider text-white/45">ALWAYS LEARNING · ALWAYS BUILDING</div>
              </aside>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-[#17313a] text-white">
          <div className="relative mx-auto grid w-[calc(100%-38px)] max-w-[1120px] gap-8 py-20 sm:w-[calc(100%-64px)] sm:py-24 md:grid-cols-[1fr_.8fr] md:gap-20">
            <div className="relative z-10" data-reveal><span className="mb-5 block font-mono text-[10px] tracking-widest text-violet-300">05 / GET IN TOUCH</span><h2 className="font-display text-5xl font-extrabold leading-[1.1] tracking-[-2px] sm:text-6xl">Have an idea?<br /><span className="text-violet-300">Let’s connect.</span></h2><p className="mb-6 mt-5 max-w-[365px] text-xs leading-7 text-violet-100/70">I’m open to opportunities, collaboration, and conversations about web development.</p><a className={`${buttonBase} bg-white text-[#17313a] hover:bg-violet-50`} href="mailto:tamannakureshi28@gmail.com">Send me an email <Send size={16} /></a></div>
            <div className="relative z-10 pt-2 md:pt-6" data-reveal>
              <a href="mailto:tamannakureshi28@gmail.com" className="flex items-center gap-3.5 border-b border-white/10 py-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-violet-200"><Mail size={18} /></span><span className="grid gap-1.5"><small className="font-mono text-[9px] tracking-widest text-violet-200/70">EMAIL</small><strong className="break-all text-xs font-semibold">tamannakureshi28@gmail.com</strong></span><ArrowUpRight className="ml-auto shrink-0 text-violet-200" size={17} /></a>
              <a href="tel:+919054548041" className="flex items-center gap-3.5 border-b border-white/10 py-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-violet-200"><Send size={18} /></span><span className="grid gap-1.5"><small className="font-mono text-[9px] tracking-widest text-violet-200/70">PHONE</small><strong className="text-xs font-semibold">+91 9054548041</strong></span><ArrowUpRight className="ml-auto shrink-0 text-violet-200" size={17} /></a>
              <div className="mt-6">
                <p className="mb-3 font-mono text-[9px] tracking-[1.2px] text-violet-200/70">CONNECT WITH ME</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/tamannakureshi47-creator" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold text-white transition hover:border-violet-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-300" aria-label="Open Tamanna's GitHub profile"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>
                  <a href="https://www.linkedin.com/in/tamanna-kureshi-58a90a303/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold text-white transition hover:border-violet-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-300" aria-label="Open Tamanna's LinkedIn profile"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a>
                </div>
              </div>
            </div>
            <span className="pointer-events-none absolute -bottom-24 right-0 font-display text-[230px] font-black tracking-[-25px] text-white/[0.025]">TK.</span>
          </div>
        </section>
      </main>



      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex min-h-[76px] w-[calc(100%-38px)] max-w-[1240px] flex-wrap items-center justify-between gap-x-5 gap-y-3 py-5 sm:w-[calc(100%-64px)]">

          {/* Name */}
          <a
            href="#home"
            className="shrink-0 font-display text-sm font-extrabold tracking-tight text-slate-900 transition-colors hover:text-violet-700"
          >
            Tamanna Kureshi<span className="text-violet-600">.</span>
          </a>

          {/* Tagline */}
          <p className="order-3 w-full text-center text-[11px] leading-relaxed text-slate-500 sm:order-none sm:w-auto">
            Building ideas into{" "}
            <span className="font-semibold text-violet-700">
              powerful digital experiences.
            </span>
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            className="group inline-flex shrink-0 items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-slate-500 transition-colors hover:text-violet-700"
          >
            BACK TO TOP
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>

        </div>
      </footer>

    </div>
  );
}

export default App;