"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { MagicCard } from "@/components/ui/magic-card";
import { Globe } from "@/components/ui/globe";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Home, User, Code2, GitBranch, Briefcase, GraduationCap, Bot, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "Make.com", "OpenAI API", "Webhooks", "Google Sheets API",
  "Node.js", "REST APIs", "Git", "Automatización", "Chatbots",
];

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Purple radial glow background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(120, 90, 220, 0.18), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 pb-40 flex flex-col gap-28">

        {/* ── HERO ── */}
        <section id="home" className="flex flex-col items-center text-center gap-6 pt-10">
          <Badge className="px-4 py-1.5 rounded-full text-xs tracking-widest uppercase bg-secondary text-secondary-foreground">
            Desarrollador de Software · Panamá 🇵🇦
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
            Hola, soy
          </h1>

          <SparklesText
            className="text-5xl md:text-7xl font-extrabold"
            colors={{ first: "#a855f7", second: "#ec4899" }}
          >
            Ariel Navas
          </SparklesText>

          <p className="max-w-[560px] text-base md:text-lg text-muted-foreground mt-2 leading-relaxed">
            Estudiante de Desarrollo de Software apasionado por la{" "}
            <span className="text-foreground font-medium">Inteligencia Artificial</span> y la{" "}
            <span className="text-foreground font-medium">Automatización</span>. Transformo ideas en
            soluciones digitales reales.
          </p>

          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <a href="#projects">
              <ShimmerButton className="shadow-2xl px-6 py-3">
                <span className="text-sm font-semibold text-white">Ver proyectos</span>
              </ShimmerButton>
            </a>
            <a
              href="https://github.com/Atna2007"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
            >
              <GitBranch className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Sobre mí</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <MagicCard
              className="p-7 flex flex-col gap-5 bg-card/50"
              gradientColor="#1a0a30"
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Briefcase className="w-5 h-5 text-purple-400" />
                Experiencia
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  Práctica profesional en la{" "}
                  <strong className="text-foreground">Caja de Ahorros de Panamá</strong>.
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  Desarrollo de{" "}
                  <strong className="text-foreground">chatbots inteligentes</strong> con contexto y
                  memoria de conversación.
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  Integraciones avanzadas con <strong className="text-foreground">Make.com</strong>,
                  Webhooks, APIs y Google Sheets.
                </li>
              </ul>
            </MagicCard>

            <MagicCard
              className="p-7 flex flex-col gap-5 bg-card/50"
              gradientColor="#0a1a30"
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                Perfil
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground font-medium">Edad:</span> 18 años
                </p>
                <p>
                  <span className="text-foreground font-medium">Ubicación:</span> Panamá 🇵🇦
                </p>
                <p>
                  <span className="text-foreground font-medium">Institución:</span> ITSE — Instituto
                  Técnico Superior Especializado
                </p>
                <p>
                  <span className="text-foreground font-medium">Hobbies:</span> Fútbol ⚽ · Playa 🏖️
                </p>
              </div>
            </MagicCard>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground uppercase tracking-widest text-sm">
              Habilidades & Tecnologías
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-3 py-1 text-xs hover:bg-primary/10 hover:border-primary/40 transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Nor.AI */}
            <MagicCard
              className="p-7 flex flex-col justify-between gap-6 bg-card/50"
              gradientColor="#1a0a30"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <a
                    href="https://github.com/Atna2007/Nor.AI"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <GitBranch className="w-5 h-5" />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Nor.AI</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Chatbot inteligente construido con Make.com y OpenAI. Mantiene contexto de
                    conversación, gestiona múltiples usuarios y cuenta con una interfaz web
                    responsive inspirada en ChatGPT.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                <Badge variant="outline" className="text-xs">OpenAI API</Badge>
                <Badge variant="outline" className="text-xs">Make.com</Badge>
                <Badge variant="outline" className="text-xs">Webhooks</Badge>
                <Badge variant="outline" className="text-xs">JavaScript</Badge>
              </div>
            </MagicCard>

            {/* autoCool */}
            <MagicCard
              className="p-7 flex flex-col justify-between gap-6 bg-card/50"
              gradientColor="#0a1a10"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-green-500/10 text-green-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <a
                    href="https://github.com/Atna2007/autoCool"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <GitBranch className="w-5 h-5" />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-bold">autoCool</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Proyecto de automatización enfocado en optimizar y agilizar flujos de trabajo
                    repetitivos. Desarrollado con control de versiones y buenas prácticas de
                    desarrollo.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                <Badge variant="outline" className="text-xs">Automatización</Badge>
                <Badge variant="outline" className="text-xs">Scripting</Badge>
                <Badge variant="outline" className="text-xs">Git</Badge>
              </div>
            </MagicCard>
          </div>
        </section>
      </div>

      {/* ── GLOBE BACKGROUND ── */}
      <div
        className="fixed bottom-0 right-0 z-0 opacity-30 pointer-events-none"
        style={{ width: 600, height: 600, transform: "translate(20%, 20%)" }}
      >
        <Globe />
      </div>

      {/* ── DOCK NAVIGATION ── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Dock iconMagnification={68} iconDistance={120}>
          <a href="#home" title="Inicio">
            <DockIcon>
              <Home className="size-full p-[22%] text-foreground" />
            </DockIcon>
          </a>
          <a href="#about" title="Sobre mí">
            <DockIcon>
              <User className="size-full p-[22%] text-foreground" />
            </DockIcon>
          </a>
          <a href="#projects" title="Proyectos">
            <DockIcon>
              <Code2 className="size-full p-[22%] text-foreground" />
            </DockIcon>
          </a>
          <a href="https://github.com/Atna2007" target="_blank" rel="noreferrer" title="GitHub">
            <DockIcon>
              <GitBranch className="size-full p-[22%] text-foreground" />
            </DockIcon>
          </a>
        </Dock>
      </div>
    </main>
  );
}
