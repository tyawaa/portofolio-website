import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Brain,
  Code2,
  LineChart,
  Layout,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  Download,
  GraduationCap,
  Trophy,
  Users,
  Sparkles,
  Award,
  CalendarDays,
  Menu as MenuIcon,
  ExternalLink,
  Cpu,
  Database,
  Stethoscope,
  Recycle,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Tyara Penelope Lumban Gaol — Information Systems Student | Data, AI & Software",
      },
      {
        name: "description",
        content:
          "Portfolio of Tyara Penelope Lumban Gaol, an Information Systems and Technology undergraduate at Institut Teknologi Bandung exploring data science, machine learning, and software engineering.",
      },
      {
        property: "og:title",
        content: "Tyara Penelope Lumban Gaol — Data, AI & Software Portfolio",
      },
      {
        property: "og:description",
        content:
          "Information Systems and Technology undergraduate at ITB building solutions across data, AI, and software development.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Portfolio() {
  const active = useScrollSpy(NAV.map((n) => n.id));
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundGlow />
      <Nav active={active} />
      <main>
        <Hero />
        <About />
        <Focus />
        <Experience />
        <Achievements />
        <Projects />
        <Certifications />
        <Organization />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Background ---------------- */
function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-amber/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 font-display text-sm font-bold text-primary ring-1 ring-primary/30">
            T
          </span>
          <span className="font-display text-sm font-bold tracking-widest text-foreground">
            TPLG
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                active === n.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
              {active === n.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-primary" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden md:inline-flex">
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Me
            </Button>
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-border">
              <div className="mt-10 flex flex-col gap-1">
                {NAV.map((n) => (
                  <SheetClose asChild key={n.id}>
                    <a
                      href={`#${n.id}`}
                      className="rounded-md px-3 py-3 text-base text-foreground/90 hover:bg-primary/10 hover:text-primary"
                    >
                      {n.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a href="#contact" className="mt-4">
                    <Button className="w-full rounded-full">Contact Me</Button>
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 grid-dots opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 md:px-8 md:pt-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-32">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Hello, I'm Tyara.
          </p>

          <p className="mt-5 font-display text-lg font-medium text-amber">
            Tyara Penelope Lumban Gaol
          </p>

          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-[2.75rem] lg:text-5xl xl:text-[3.25rem]">
            Information Systems Student{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-amber bg-clip-text text-transparent">
              Building Solutions
            </span>{" "}
            Across Data, AI, and Software Development
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
            I am passionate about transforming ideas and data into meaningful
            digital solutions through machine learning, software development,
            and structured problem solving.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Data Science",
              "Machine Learning",
              "Software Engineering",
              "Front-End Development",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects">
              <Button className="group rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                View My Projects
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            {/* TODO: replace this disabled button with a working download link once the resume PDF is available, e.g.:
                <a href="/resume.pdf" download>
                  <Button variant="outline" className="rounded-full border-amber text-amber hover:bg-amber/10">
                    <Download /> Download Resume
                  </Button>
                </a>
            */}
            <Button
              variant="outline"
              disabled
              className="rounded-full border-border bg-card/40 text-muted-foreground"
            >
              <Download /> Resume Coming Soon
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Trophy className="h-3.5 w-3.5 text-amber" /> Hackathon Finalist
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Machine Learning
              Competition Finalist
            </span>
            <span className="inline-flex items-center gap-2">
              <Code2 className="h-3.5 w-3.5 text-primary" /> Front-End
              Development Experience
            </span>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <ProfileFrame />
        </div>
      </div>
    </section>
  );
}

function ProfileFrame() {
  // Elegant placeholder frame. To replace with a real photo:
  //   1. Drop your image at src/assets/tyara.jpg
  //   2. Import it: import tyaraPhoto from "@/assets/tyara.jpg"
  //   3. Replace the <AbstractSilhouette /> below with:
  //      <img src={tyaraPhoto} alt="Tyara Penelope Lumban Gaol" className="h-full w-full object-cover" />
  return (
    <div className="relative aspect-[4/5] w-full">
      <div className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-tr from-primary/25 via-amber/15 to-amber/25 blur-3xl" />
      <div className="absolute -top-8 -right-6 h-28 w-28 rounded-3xl bg-amber/30 blur-2xl" />
      <div className="absolute -bottom-6 -left-4 h-32 w-32 rounded-3xl bg-primary/25 blur-xl" />

      {/* Layered frame */}
      <div className="absolute inset-6 -rotate-3 rounded-[2rem] border border-amber/30 bg-amber/5" />
      <div className="absolute inset-3 rotate-2 rounded-[2rem] border border-primary/30 bg-primary/5" />

      <div className="relative h-full overflow-hidden rounded-[2rem] border border-border bg-card backdrop-blur">
        <AbstractSilhouette />
        <DataNodes />

        {/* Floating education card */}
        <div className="absolute -bottom-4 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-border bg-card/95 p-4 backdrop-blur-xl glow-teal">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Information Systems and Technology Undergraduate
              </p>
              <p className="text-xs text-muted-foreground">
                Institut Teknologi Bandung
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AbstractSilhouette() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.28 0.04 260)" />
          <stop offset="100%" stopColor="oklch(0.2 0.03 260)" />
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="35%" r="40%">
          <stop offset="0%" stopColor="oklch(0.78 0.11 195 / 0.45)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="body" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.11 195)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="oklch(0.78 0.13 60)" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#bg)" />
      <rect width="400" height="500" fill="url(#halo)" />
      {/* Head */}
      <circle cx="200" cy="180" r="62" fill="url(#body)" opacity="0.9" />
      {/* Shoulders */}
      <path
        d="M70 500 C90 360 140 290 200 290 C260 290 310 360 330 500 Z"
        fill="url(#body)"
        opacity="0.95"
      />
      {/* Soft outline */}
      <circle
        cx="200"
        cy="180"
        r="62"
        fill="none"
        stroke="oklch(0.78 0.11 195 / 0.5)"
        strokeWidth="1"
      />
      <text
        x="200"
        y="470"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fill="oklch(0.76 0.02 245 / 0.6)"
        letterSpacing="3"
      >
        PHOTO PLACEHOLDER
      </text>
    </svg>
  );
}

function DataNodes() {
  const nodes = [
    { x: 30, y: 40 },
    { x: 350, y: 80 },
    { x: 60, y: 380 },
    { x: 340, y: 320 },
    { x: 200, y: 30 },
  ];
  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      {nodes.map((n, i) =>
        nodes
          .slice(i + 1)
          .map((m, j) => (
            <line
              key={`${i}-${j}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke="oklch(0.78 0.11 195 / 0.18)"
              strokeWidth="0.7"
            />
          )),
      )}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="3"
          fill="oklch(0.78 0.13 60)"
          opacity="0.85"
        />
      ))}
    </svg>
  );
}

/* ---------------- Section helpers ---------------- */
function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      <span className="mx-auto mt-3 block h-0.5 w-12 rounded-full bg-gradient-to-r from-primary to-amber" />
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:glow-teal ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader eyebrow="About" title="About Me" />
      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <div className="reveal lg:col-span-3">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am an enthusiastic Information Systems undergraduate at Institut
            Teknologi Bandung with a growing passion for data science, machine
            learning, and software engineering. Through organizational roles,
            competitions, hackathons, and technical projects, I have developed
            experience in building digital solutions, analyzing complex
            problems, and collaborating with diverse teams.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am especially interested in how data and technology can be
            transformed into meaningful, accessible, and impactful solutions.
          </p>
        </div>

        <Card className="reveal lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber/15 text-amber ring-1 ring-amber/30">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Education
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                Institut Teknologi Bandung
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Information Systems and Technology Undergraduate
              </p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-primary">
                <CalendarDays className="h-3.5 w-3.5" /> 2024 – 2028
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

/* ---------------- Focus ---------------- */
function Focus() {
  const items = [
    {
      icon: Brain,
      title: "Data Science & Machine Learning",
      desc:
        "Exploring predictive modeling, natural language processing, computer vision, and data-driven decision making.",
    },
    {
      icon: Cpu,
      title: "Software Engineering",
      desc:
        "Building structured, reliable, and user-focused digital solutions through thoughtful system development.",
    },
    {
      icon: Layout,
      title: "Front-End Development",
      desc:
        "Developing responsive and reusable interfaces using React, TypeScript, HTML, CSS, and Tailwind CSS.",
    },
    {
      icon: LineChart,
      title: "Business & System Analysis",
      desc:
        "Translating real-world problems into structured workflows, requirements, and actionable technology solutions.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader
        eyebrow="Focus Areas"
        title="What I'm Exploring"
        description="Four directions shaping how I learn, build, and contribute."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <Card key={it.title} className="reveal">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
              {it.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {it.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Experience ---------------- */
function Experience() {
  const items = [
    {
      role: "Front-End Engineering Division",
      org: "Information Technology OSKM",
      date: "July – September 2025",
      bullets: [
        "Developed and maintained reusable UI components, including Toast, Badge, Menu variants, and Menu OHKM, using TypeScript and React.",
        "Supported a large-scale web application used by 5,053+ first-year students.",
        "Collaborated with cross-functional teams to align user interface functionality with system requirements and user needs.",
      ],
    },
    {
      role: "Committee Member",
      org: "Data Science HMF ITB Competition and Community",
      date: "September 2025 – January 2026",
      bullets: [
        "Conducted interviews with national competition winners and produced written summaries highlighting practical strategies for data competitions.",
        "Authored and published technical and community-focused articles on Medium.",
        "Managed community discussions and distributed competition-related information through Discord to support student participation.",
      ],
    },
    {
      role: "Committee Member",
      org: "Datavidia ITB",
      date: "November 2025 – February 2026",
      bullets: [
        "Supported participant administration for 150+ participants.",
        "Assisted in problem design involving a multivariate time-series dataset for Indonesian food price forecasting across 34 provinces, enriched with Google Trends, global commodity prices, and currency data.",
      ],
    },
    {
      role: "Member of Technology Development",
      org: "HMF ITB 2026 Tech Issues and Exploration",
      date: "May 2026 – Present",
      bullets: ["Responsible for front-end development of the HMF SUPER APP."],
    },
  ];

  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader eyebrow="Journey" title="Experience" />
      <div className="relative mt-14">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2 md:block" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <div key={i} className="reveal relative md:grid md:grid-cols-2 md:gap-12">
              <div className={i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}>
                <Card>
                  <p className="inline-flex items-center gap-1.5 text-xs text-primary">
                    <CalendarDays className="h-3.5 w-3.5" /> {it.date}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                    {it.role}
                  </h3>
                  <p className="text-sm text-amber">{it.org}</p>
                  <ul className="mt-4 space-y-2 text-left text-sm text-muted-foreground">
                    {it.bullets.map((b, k) => (
                      <li key={k} className="flex gap-2">
                        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
              <div className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-amber ring-4 ring-background shadow-[0_0_0_3px_color-mix(in_oklab,var(--amber)_25%,transparent)] md:left-1/2 md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Achievements ---------------- */
function Achievements() {
  const featured = {
    title: "Finalist — HSIL ITB x Harvard Hackathon",
    date: "January 2026",
    highlight:
      "Top 37 teams out of 805 participants contributing 237 innovative ideas.",
    description:
      "Developed an offline-first Android application designed to assist healthcare workers in conducting preliminary skin disease screening using AI-based image analysis and adaptive clinical questionnaires.",
    bullets: [
      "Contributed to front-end implementation and diagnostic workflow data integration.",
      "Supported patient consent, image capture, screening results, and consultation history workflows.",
      "Worked with a Kotlin-based Android technology stack incorporating CameraX, TensorFlow Lite, ONNX Runtime, Room Database, and SQLCipher to support local AI processing and secure offline data storage.",
    ],
  };

  const others = [
    {
      title: "Finalist — Dataquest Machine Learning Competition 4.0 UNAIR",
      date: "September 2025",
      highlight: "Top 10 out of 100+ teams.",
      description:
        "Applied Natural Language Processing techniques to analyze complex legal case texts from 100,000 text records, including offense details, witness statements, and charged articles.",
      bullets: [
        "Engineered a modeling dataset using Random Forest, LightGBM, CatBoost with K-Fold, SVC, bagging, and out-of-fold blending.",
        "Achieved an RMSE score of 12.00.",
      ],
    },
    {
      title: "1st Winner — Business Case Competition StudentxCEOs Bandung",
      date: "August 2025",
      description:
        "Delivered a data-driven business strategy to improve participant retention and engagement for a nationwide student program with 180,000+ participants.",
      bullets: [
        "Addressed a 91.5% dropout rate through segmentation and personalization strategies.",
        "Developed an end-to-end implementation and financial model projecting 32.9% net profit growth, 69.9% ROI, and a 3.07-year payback period.",
      ],
    },
    {
      title: "Semifinalist — Lomba FindIT UGM UI/UX",
      date: "2024",
      description:
        "Designed an innovative mobile UI/UX solution for MitraDarat, a transportation application, by applying the Design Sprint methodology to develop and validate the \u201CTeman Bus\u201D feature for urban mobility in Bandung.",
    },
  ];

  return (
    <section id="achievements" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader
        eyebrow="Recognition"
        title="Achievements & Competitions"
        description="A snapshot of competitions, hackathons, and case challenges that shaped my growth."
      />

      {/* Featured */}
      <div className="reveal mt-12 overflow-hidden rounded-3xl border border-amber/30 bg-gradient-to-br from-card via-card to-amber/5 p-1 glow-amber">
        <div className="rounded-[1.4rem] p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/15 px-3 py-1 text-xs font-semibold text-amber ring-1 ring-amber/30">
              <Trophy className="h-3.5 w-3.5" /> Featured Achievement
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5" /> {featured.date}
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
            {featured.title}
          </h3>
          <p className="mt-3 text-amber">{featured.highlight}</p>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            {featured.description}
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {featured.bullets.map((b, i) => (
              <li
                key={i}
                className="rounded-xl border border-border bg-card/60 p-4 text-sm text-muted-foreground"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {others.map((a) => (
          <Card key={a.title} className="reveal flex flex-col">
            <div className="flex items-center gap-2 text-xs text-primary">
              <Award className="h-4 w-4" /> {a.date}
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
              {a.title}
            </h3>
            {a.highlight && (
              <p className="mt-1 text-sm text-amber">{a.highlight}</p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {a.description}
            </p>
            {a.bullets && (
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {a.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: typeof Brain;
  accent: "teal" | "amber";
  featured?: boolean;
  repoUrl?: string; // Add a URL string here to render a "View Repository" button.
};

function Projects() {
  const projects: Project[] = [
    {
      title: "AI Medical Diagnostic Tool",
      category: "Hackathon Project — AI for Healthcare",
      description:
        "An offline-first Android medical diagnostic application designed to support healthcare workers in preliminary skin disease screening through AI-assisted image analysis and adaptive clinical questionnaires.",
      tags: [
        "Android",
        "Kotlin",
        "Machine Learning",
        "Computer Vision",
        "Offline-First",
        "Healthcare",
      ],
      icon: Stethoscope,
      accent: "amber",
      featured: true,
    },
    {
      title: "Privy ID System Development Project",
      category: "Information Systems and Technology Fundamentals",
      description:
        "An end-to-end system development project for Privy ID involving business analysis, functional and non-functional requirements, architectural planning, business process modeling, NoSQL data modeling, and implementation support in Odoo.",
      tags: [
        "System Analysis",
        "BPMN",
        "Odoo",
        "NoSQL",
        "Requirements Engineering",
        "Business Process Modeling",
      ],
      icon: Database,
      accent: "teal",
    },
    {
      title: "Eco-Sorter",
      category: "Image Classification for Waste Sorting",
      description:
        "A supervised computer vision pipeline for multi-class waste image classification, including categories such as plastic, paper, and glass, using data preprocessing and augmentation techniques to achieve approximately 90% test accuracy.",
      tags: [
        "Computer Vision",
        "Image Classification",
        "Data Augmentation",
        "Machine Learning",
      ],
      icon: Recycle,
      accent: "teal",
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader
        eyebrow="Portfolio"
        title="Selected Projects"
        description="A few of the projects I've contributed to across AI, systems, and data."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <Card className="reveal flex flex-col">
      <div className="flex h-28 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-primary/10 via-card to-primary/5">
        <Icon className="h-10 w-10 text-primary" />
      </div>
      <p className="mt-4 text-xs uppercase tracking-widest text-primary">
        {project.category}
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-card/60 px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button
          size="sm"
          variant="outline"
          className="rounded-full border-primary/40 text-primary hover:bg-primary/10"
        >
          View Details <ArrowRight />
        </Button>
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer noopener">
            <Button size="sm" variant="ghost" className="rounded-full">
              View Repository <ExternalLink />
            </Button>
          </a>
        )}
      </div>
    </Card>
  );
}

/* ---------------- Certifications ---------------- */
function Certifications() {
  const certs = [
    {
      name: "Building Transformer-Based Natural Language Processing Applications",
      issuer: "NVIDIA",
      year: "2025",
    },
    {
      name: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      year: "2025",
    },
  ];
  const bootcamps = ["Business Case Bootcamp TEC", "Business Case Bootcamp AnakBisnis"];

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader
        eyebrow="Learning"
        title="Certifications & Learning"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card className="reveal">
          <p className="text-xs uppercase tracking-widest text-primary">
            Certifications
          </p>
          <ul className="mt-4 space-y-4">
            {certs.map((c) => (
              <li
                key={c.name}
                className="flex items-start gap-4 rounded-xl border border-border bg-card/40 p-4"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {c.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="reveal">
          <p className="text-xs uppercase tracking-widest text-amber">
            Bootcamps
          </p>
          <ul className="mt-4 space-y-2">
            {bootcamps.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 rounded-lg border border-border bg-card/40 px-4 py-3 text-sm text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Developed structured problem-solving skills through frameworks such
            as SWOT, PESTEL, Porter's Five Forces, 7P, and McKinsey, along with
            implementation planning involving timelines, cashflow analysis, and
            risk assessment.
          </p>
        </Card>
      </div>
    </section>
  );
}

/* ---------------- Organization ---------------- */
function Organization() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader eyebrow="Community" title="Community & Organization" />
      <Card className="reveal mt-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
            <Building2 className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Google Developer Group on ITB
            </h3>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="text-amber">Explorer</span>
              <span>2025 – Present</span>
              <span>Focus: Data and Artificial Intelligence</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Actively exploring technology development and learning
              opportunities in the fields of Data and Artificial Intelligence
              through a technology-focused student community.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}

/* ---------------- Skills ---------------- */
function Skills() {
  const groups = [
    {
      title: "Technical Skills",
      accent: "primary",
      items: [
        "Java",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "SQL",
        "Docker",
      ],
    },
    {
      title: "Data & AI Interests",
      accent: "amber",
      items: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Data Analysis",
      ],
    },
    {
      title: "Professional Skills",
      accent: "primary",
      items: [
        "Agile Collaboration",
        "Adaptability and Fast Learning",
        "Stakeholder Communication",
        "Project Coordination",
        "Structured Problem Solving",
      ],
    },
  ];
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader eyebrow="Toolbox" title="Skills & Technologies" />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {groups.map((g) => (
          <Card key={g.title} className="reveal">
            <div className="flex items-center gap-2">
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  g.accent === "amber" ? "bg-amber" : "bg-primary"
                }`}
              />
              <h3 className="font-display text-lg font-semibold text-foreground">
                {g.title}
              </h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className={`rounded-full border px-3 py-1 text-xs ${
                    g.accent === "amber"
                      ? "border-amber/30 bg-amber/10 text-amber"
                      : "border-primary/30 bg-primary/10 text-primary"
                  }`}
                >
                  {it}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-24 md:px-8">
      <div className="reveal overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur md:p-12">
        <div className="absolute" />
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs uppercase tracking-widest text-primary">
          Contact
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Let's Build Meaningful Technology Together
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          I am open to opportunities, collaborations, and meaningful
          conversations around technology, data, artificial intelligence, and
          software development.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="mailto:tyaraxd.06@gmail.com">
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Mail /> Contact Me
            </Button>
          </a>
          <a href="mailto:tyaraxd.06@gmail.com">
            <Button
              variant="outline"
              className="rounded-full border-amber/40 text-amber hover:bg-amber/10"
            >
              tyaraxd.06@gmail.com
            </Button>
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn — Tyara Lumban Gaol"
            className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/tyawaa"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub — tyawaa"
            className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <div className="text-xs text-muted-foreground">
            <p>LinkedIn: Tyara Lumban Gaol</p>
            <p>GitHub: tyawaa</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 text-center text-xs text-muted-foreground md:flex-row md:px-8 md:text-left">
        <p>
          © 2026 Tyara Penelope Lumban Gaol. Designed with curiosity and built
          for meaningful technology.
        </p>
        <div className="flex items-center gap-2">
          <Users className="h-3.5 w-3.5 text-primary" />
          <span>TPLG · Portfolio</span>
        </div>
      </div>
    </footer>
  );
}
