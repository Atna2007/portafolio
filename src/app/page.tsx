"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Globe } from "@/components/ui/globe";
import {
  Home, User, Code2, GitBranch, Briefcase, GraduationCap, Bot, Zap,
  Mail, ExternalLink, Copy, Check, Layers, Server, Workflow, Sparkles,
  ArrowRight, Wand2, Rocket, MapPin, MessageCircle, Terminal, Cpu, Send
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// ============================================
// ICONOS REALES DESDE CDN - 100% ORIGINALES
// ============================================

const SimpleIcon = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
  // Usar simpleicons.org con el color original de la marca
  const iconUrl = `https://cdn.simpleicons.org/${name}`;
  return (
    <img
      src={iconUrl}
      alt={name}
      className={className}
      style={{ filter: 'brightness(1.2) saturate(1.2)' }}
      onError={(e) => {
        // Fallback si el icono no carga
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  );
};

const ServiceTool = ({ name, slug, color }: { name: string; slug: string; color: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all cursor-default group"
    >
      <SimpleIcon name={slug} className="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span className="text-sm font-medium text-white/90">{name}</span>
    </motion.div>
  );
};

// ============================================
// FONDO AURORA + CÓDIGO ESTILO BLACKBOX.AI
// ============================================

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base oscuro absoluto */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Gradiente Aurora */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Grid sutil */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      {/* Partículas flotantes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? "rgba(139, 92, 246, 0.5)" : "rgba(59, 130, 246, 0.4)",
            boxShadow: `0 0 ${4 + Math.random() * 6}px currentColor`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 50, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// ============================================
// FONDO DE CÓDIGO ESTILO BLACKBOX.AI
// ============================================

const codeSnippets = [
  { lang: "typescript", code: "const automate = async () => {", opacity: 0.15 },
  { lang: "python", code: "def connect_api(webhook):", opacity: 0.12 },
  { lang: "javascript", code: "import { AI } from '@ai/sdk';", opacity: 0.18 },
  { lang: "typescript", code: "interface Workflow {", opacity: 0.1 },
  { lang: "python", code: "chatbot = ChatGPT(context)", opacity: 0.14 },
  { lang: "bash", code: "n8n execute --workflow", opacity: 0.08 },
  { lang: "typescript", code: "export const handler = async ()", opacity: 0.12 },
  { lang: "javascript", code: "const response = await fetch(url)", opacity: 0.15 },
  { lang: "python", code: "print('Automatización lista')", opacity: 0.1 },
  { lang: "typescript", code: "type Automation = {", opacity: 0.13 },
];

const CodeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs md:text-sm whitespace-nowrap"
          style={{
            left: `${(i % 5) * 20 + Math.random() * 10}%`,
            top: `${Math.floor(i / 5) * 25 + Math.random() * 10}%`,
            color: snippet.lang === "python" ? "#61AFEF" :
                   snippet.lang === "javascript" ? "#F1FA8C" :
                   snippet.lang === "bash" ? "#50FA7B" :
                   "#FF79C6",
            opacity: snippet.opacity,
            textShadow: "0 0 20px currentColor",
          }}
          animate={{
            x: [0, 20, 0],
            opacity: [snippet.opacity * 0.5, snippet.opacity, snippet.opacity * 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          {snippet.code}
        </motion.div>
      ))}

      {/* Gradiente overlay para que el código no sea intrusivo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
    </div>
  );
};

// ============================================
// CHAT BUBBLE COMPONENT
// ============================================

const ChatBubble = ({
  children,
  isUser = false,
  delay = 0,
  icon: Icon = Bot
}: {
  children: React.ReactNode;
  isUser?: boolean;
  delay?: number;
  icon?: React.ComponentType<{className?: string}>;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}
    >
      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
        isUser ? "bg-violet-500/20 text-violet-400" : "bg-emerald-500/20 text-emerald-400"
      }`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className={`max-w-[80%] p-4 rounded-2xl ${
        isUser
          ? "bg-violet-500/10 border border-violet-500/20 rounded-tr-sm"
          : "bg-white/5 border border-white/10 rounded-tl-sm"
      }`}>
        {children}
      </div>
    </motion.div>
  );
};

const TypingIndicator = () => (
  <div className="flex gap-1 p-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 rounded-full bg-white/40"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

// ============================================
// SERVICIOS
// ============================================

const services = [
  {
    id: "automatizacion",
    title: "Automatización",
    subtitle: "No-Code / Low-Code",
    description: "Conecto apps y automatizo flujos de trabajo complejos. Desde simples integraciones hasta flujos que ahorran horas diarias de trabajo manual.",
    icon: Wand2,
    tools: [
      { name: "Make", slug: "make", color: "#6B4FBB" },
      { name: "Zapier", slug: "zapier", color: "#FF4A00" },
      { name: "n8n", slug: "n8n", color: "#FF6D5A" },
    ],
    tags: ["Integromat", "APIs", "Webhooks"],
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    borderColor: "hover:border-violet-500/50",
    glowColor: "group-hover:shadow-violet-500/20",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    id: "chatbots",
    title: "Chatbots IA",
    subtitle: "Conversational AI",
    description: "Chatbots inteligentes con memoria de conversación y contexto personalizado. Desde Discord hasta WhatsApp y web.",
    icon: Bot,
    tools: [
      { name: "OpenAI", slug: "openai", color: "#412991" },
      { name: "Discord", slug: "discord", color: "#5865F2" },
      { name: "Telegram", slug: "telegram", color: "#26A5E4" },
    ],
    tags: ["GPT-4", "Assistants", "NLP"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "group-hover:shadow-emerald-500/20",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    id: "integraciones",
    title: "Integraciones",
    subtitle: "Webhooks & APIs",
    description: "Conexiones en tiempo real entre sistemas. Datos que fluyen automáticamente donde los necesitas, cuando los necesitas.",
    icon: MessageCircle,
    tools: [
      { name: "Webhooks", slug: "webhook", color: "#00D4AA" },
      { name: "Google Sheets", slug: "google", color: "#34A853" },
      { name: "Notion", slug: "notion", color: "#fff" },
    ],
    tags: ["REST", "JSON", "Eventos"],
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    borderColor: "hover:border-blue-500/50",
    glowColor: "group-hover:shadow-blue-500/20",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    id: "web",
    title: "Desarrollo Web",
    subtitle: "Full Stack",
    description: "Aplicaciones modernas con código limpio, rápido y escalable. Desde landing pages hasta sistemas completos con IA.",
    icon: Code2,
    tools: [
      { name: "React", slug: "react", color: "#61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "#fff" },
      { name: "Node.js", slug: "nodedotjs", color: "#339933" },
    ],
    tags: ["TypeScript", "Tailwind", "PostgreSQL"],
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
    borderColor: "hover:border-orange-500/50",
    glowColor: "group-hover:shadow-orange-500/20",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
  },
];

const techStack = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind", "JavaScript"],
  backend: ["Node.js", "Python", "PostgreSQL", "Git"],
  automation: ["Make", "n8n", "OpenAI", "Docker"],
};

const experiences = [
  {
    title: "Práctica Profesional - Caja de Ahorros",
    date: "2024",
    description: "Desarrollo de soluciones internas y automatización de procesos financieros.",
    tags: ["Automatización", "Python", "Excel"],
  },
  {
    title: "Desarrollo de Chatbots",
    date: "2024 - 2025",
    description: "Creación de chatbots inteligentes con memoria de conversación y contexto personalizado.",
    tags: ["OpenAI", "Make", "JavaScript"],
  },
  {
    title: "Proyectos Personales",
    date: "2023 - Presente",
    description: "Desarrollo de aplicaciones web y automatizaciones para optimizar flujos de trabajo.",
    tags: ["React", "Next.js", "TypeScript"],
  },
];

const projects = {
  profesional: [
    {
      name: "Nor.AI",
      description: "Chatbot inteligente con contexto de conversación, gestión multi-usuario e interfaz web estilo ChatGPT.",
      tags: ["OpenAI API", "Make", "Webhooks", "JavaScript"],
      icon: Bot,
      color: "purple",
      github: "https://github.com/Atna2007/Nor.AI",
    },
    {
      name: "autoCool",
      description: "Sistema de automatización para optimizar flujos de trabajo repetitivos con integración de APIs.",
      tags: ["Automatización", "Scripting", "Git", "Python"],
      icon: Zap,
      color: "green",
      github: "https://github.com/Atna2007/autoCool",
    },
  ],
  personal: [
    {
      name: "Portfolio Web",
      description: "Portafolio personal con animaciones, efectos visuales y diseño moderno.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      icon: Layers,
      color: "blue",
      github: "https://github.com/Atna2007",
    },
    {
      name: "API Integrations",
      description: "Conjunto de integraciones con APIs de terceros para automatización de datos.",
      tags: ["REST APIs", "Webhooks", "Google Sheets", "Make"],
      icon: Workflow,
      color: "orange",
      github: "https://github.com/Atna2007",
    },
  ],
};

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"profesional" | "personal">("profesional");
  const [copied, setCopied] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(true);
  const email = "ariel.navas@ejemplo.com";

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);

  useEffect(() => {
    // Simular typing en el chat
    const timer = setTimeout(() => setIsTyping(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden font-sans selection:bg-violet-500/30">
      {/* Fondo Aurora */}
      <AuroraBackground />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 pb-40 flex flex-col gap-32">

        {/* ============================================
            HERO
            ============================================ */}
        <motion.section
          id="home"
          style={{ opacity, scale }}
          className="flex flex-col items-center text-center gap-8 pt-16 min-h-[95vh] justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
              </span>
              Disponible para proyectos
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Automatización
              </span>
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                & Chatbots IA
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[700px] text-lg md:text-xl text-white/60 leading-relaxed"
          >
            Transformo procesos manuales en flujos automáticos inteligentes. Especializado en
            <span className="text-white font-medium"> automatización No-Code</span>,
            <span className="text-white font-medium"> chatbots con IA</span> e
            <span className="text-white font-medium"> integraciones de sistemas</span> con visión de negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-white/40 text-sm"
          >
            <MapPin className="w-4 h-4" />
            <span>Panamá · UTC-5</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Ver Proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all text-white/90 hover:text-white"
            >
              Contáctame
              <Mail className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-white/30"
            >
              <motion.div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
                <motion.div className="w-1 h-2 bg-white/50 rounded-full" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ============================================
            SOBRE MÍ - ESTILO CHATBOT CON FONDO CÓDIGO
            ============================================ */}
        <section id="about" className="relative flex flex-col gap-8">
          {/* Fondo de código tipo Blackbox */}
          <CodeBackground />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="h-8 w-[2px] bg-gradient-to-b from-violet-500 to-fuchsia-500" />
            <h2 className="text-3xl font-bold tracking-tight">Sobre mí</h2>
          </motion.div>

          {/* Chat Interface */}
          <div className="relative max-w-3xl mx-auto w-full">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-t-2xl">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-white/40 font-mono">chat-with-ariel.ts</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-6 bg-black/40 backdrop-blur-xl border-x border-b border-white/10 rounded-b-2xl">
              {/* Bot Message */}
              <ChatBubble delay={0}>
                <p className="text-white/80">
                  ¡Hola! Soy <span className="text-violet-400 font-semibold">Ariel</span>. Te cuento sobre mí:
                </p>
              </ChatBubble>

              {/* User Question */}
              <ChatBubble isUser delay={0.2} icon={Terminal}>
                <p className="text-white/80">¿Cuál es tu experiencia profesional?</p>
              </ChatBubble>

              {/* Bot Response */}
              <ChatBubble delay={0.4}>
                <div className="space-y-3 text-white/80">
                  <p>
                    🏦 <span className="text-emerald-400 font-medium">Práctica Profesional</span> en la{" "}
                    <span className="text-white font-semibold">Caja de Ahorros de Panamá</span>
                  </p>
                  <p>
                    🤖 Desarrollo de <span className="text-violet-400 font-medium">chatbots inteligentes</span> con memoria de conversación
                  </p>
                  <p>
                    ⚡ Integraciones avanzadas con <span className="text-orange-400 font-medium">Make.com</span>, Webhooks y APIs
                  </p>
                </div>
              </ChatBubble>

              {/* User Question 2 */}
              <ChatBubble isUser delay={0.6} icon={Cpu}>
                <p className="text-white/80">Cuéntame de tu perfil técnico</p>
              </ChatBubble>

              {/* Bot Response 2 */}
              <ChatBubble delay={0.8}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="text-white/50 text-xs uppercase tracking-wider">Info Personal</p>
                    <p className="text-white/80">🎂 <span className="text-white">18 años</span></p>
                    <p className="text-white/80">🎓 <span className="text-white">ITSE Panamá</span></p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/50 text-xs uppercase tracking-wider">Status</p>
                    <p className="text-white/80 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-400">Disponible</span>
                    </p>
                    <p className="text-white/80">⚽ Fútbol · 🏖️ Playa · 💻 Tech</p>
                  </div>
                </div>
              </ChatBubble>

              {/* Input Area */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="flex items-center gap-3 pt-4 border-t border-white/10"
              >
                <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white/30 text-sm">Escribe un mensaje...</span>
                </div>
                <button className="p-3 rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30 hover:bg-violet-500/30 transition-all">
                  <Send className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================
            SERVICIOS
            ============================================ */}
        <section id="services" className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-[2px] bg-gradient-to-b from-violet-500 to-fuchsia-500" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Lo que hago</h2>
            </div>
            <p className="text-white/50 max-w-2xl text-lg">
              Soluciones digitales que automatizan, conectan e inteligentizan tu flujo de trabajo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group"
              >
                <div className={`relative p-8 flex flex-col gap-6 bg-gradient-to-br ${service.gradient} backdrop-blur-xl rounded-3xl border border-white/10 ${service.borderColor} transition-all duration-500 h-full overflow-hidden ${service.glowColor} group-hover:shadow-2xl`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>

                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl ${service.iconBg} ${service.iconColor} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <service.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        <p className={`text-sm ${service.iconColor}`}>{service.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="relative text-white/60 text-sm leading-relaxed">{service.description}</p>

                  <div className="relative flex flex-col gap-3">
                    <p className="text-xs text-white/40 uppercase tracking-wider font-medium">Herramientas</p>
                    <div className="flex flex-wrap gap-3">
                      {service.tools.map((tool) => (
                        <ServiceTool key={tool.name} name={tool.name} slug={tool.slug} color={tool.color} />
                      ))}
                    </div>
                  </div>

                  <div className="relative flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className={`text-xs ${service.iconColor} border-current opacity-50 group-hover:opacity-100 transition-opacity`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============================================
            TECH STACK
            ============================================ */}
        <section id="stack" className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="h-8 w-[2px] bg-gradient-to-b from-violet-500 to-fuchsia-500" />
            <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Frontend", icon: Code2, color: "blue", items: techStack.frontend },
              { title: "Backend", icon: Server, color: "emerald", items: techStack.backend },
              { title: "Automatización", icon: Sparkles, color: "violet", items: techStack.automation },
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 flex flex-col gap-4 bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-${category.color}-500/20 text-${category.color}-400`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 text-white/70 text-sm hover:bg-white/10 hover:text-white transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============================================
            EXPERIENCE
            ============================================ */}
        <section id="experience" className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="h-8 w-[2px] bg-gradient-to-b from-violet-500 to-fuchsia-500" />
            <h2 className="text-3xl font-bold tracking-tight">Experiencia</h2>
          </motion.div>

          <div className="max-w-2xl">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-10 border-l border-white/10 last:pb-0 group"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-white/20 border-2 border-[#0a0a0f] group-hover:bg-violet-500 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-all duration-300" />
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-white/40 font-mono">{exp.date}</span>
                  <h3 className="text-lg font-semibold group-hover:text-violet-400 transition-colors">{exp.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs text-white/50 border-white/10 group-hover:border-violet-500/30 group-hover:text-violet-400 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============================================
            PROJECTS
            ============================================ */}
        <section id="projects" className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between flex-wrap gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-[2px] bg-gradient-to-b from-violet-500 to-fuchsia-500" />
              <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
            </div>

            <div className="flex p-1 rounded-full bg-white/5 border border-white/10">
              {["profesional", "personal"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "profesional" | "personal")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab ? "bg-white text-black shadow-lg" : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {projects[activeTab].map((project, index) => {
                const Icon = project.icon;
                const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
                  purple: { bg: "bg-violet-500/20", text: "text-violet-400", border: "hover:border-violet-500/30" },
                  green: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "hover:border-emerald-500/30" },
                  blue: { bg: "bg-blue-500/20", text: "text-blue-400", border: "hover:border-blue-500/30" },
                  orange: { bg: "bg-orange-500/20", text: "text-orange-400", border: "hover:border-orange-500/30" },
                };
                const colors = colorClasses[project.color];

                return (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className={`p-8 flex flex-col justify-between gap-6 bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 ${colors.border} transition-all duration-500 h-full group-hover:bg-white/[0.05]`}>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <div className={`p-3 rounded-2xl ${colors.bg} ${colors.text}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-full text-white/30 hover:text-white hover:bg-white/10 transition-all">
                            <GitBranch className="w-5 h-5" />
                          </a>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-white transition-colors">{project.name}</h3>
                          <p className="text-sm text-white/50 mt-3 leading-relaxed">{project.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs text-white/40 border-white/10">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ============================================
            CONTACT
            ============================================ */}
        <section id="contact" className="flex flex-col items-center text-center gap-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              ¿Trabajamos juntos?
            </h2>
            <p className="text-white/50 text-lg">
              Estoy abierto a oportunidades de práctica profesional, proyectos freelance y colaboraciones.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-all"
              >
                <div className="p-2 rounded-full bg-violet-500/20 text-violet-400">
                  {copied ? <Check className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/40">Email</p>
                  <p className="font-medium text-white/90">{copied ? "¡Copiado!" : email}</p>
                </div>
                {!copied && <Copy className="w-4 h-4 text-white/30" />}
              </motion.button>

              <motion.a
                href="https://github.com/Atna2007"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-all"
              >
                <div className="p-2 rounded-full bg-white/10 text-white">
                  <GitBranch className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/40">GitHub</p>
                  <p className="font-medium text-white/90 flex items-center gap-1">
                    Atna2007
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-white/30 pt-10 border-t border-white/5">
          <p>© {new Date().getFullYear()} Ariel Navas. Hecho con Next.js, café y mucha pasión ☕</p>
        </footer>
      </div>

      {/* Globe decorativo */}
      <div className="fixed bottom-0 right-0 z-0 opacity-[0.08] pointer-events-none" style={{ width: 700, height: 700, transform: "translate(30%, 30%)" }}>
        <Globe />
      </div>

      {/* DOCK NAVIGATION */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Dock iconMagnification={68} iconDistance={120}>
          <a href="#home" title="Inicio">
            <DockIcon>
              <Home className="size-full p-[22%] text-white/80 hover:text-white transition-colors" />
            </DockIcon>
          </a>
          <a href="#about" title="Sobre mí">
            <DockIcon>
              <User className="size-full p-[22%] text-white/80 hover:text-white transition-colors" />
            </DockIcon>
          </a>
          <a href="#services" title="Servicios">
            <DockIcon>
              <Rocket className="size-full p-[22%] text-white/80 hover:text-white transition-colors" />
            </DockIcon>
          </a>
          <a href="#stack" title="Tech Stack">
            <DockIcon>
              <Layers className="size-full p-[22%] text-white/80 hover:text-white transition-colors" />
            </DockIcon>
          </a>
          <a href="#projects" title="Proyectos">
            <DockIcon>
              <Code2 className="size-full p-[22%] text-white/80 hover:text-white transition-colors" />
            </DockIcon>
          </a>
          <a href="#contact" title="Contacto">
            <DockIcon>
              <Mail className="size-full p-[22%] text-white/80 hover:text-white transition-colors" />
            </DockIcon>
          </a>
        </Dock>
      </div>
    </main>
  );
}
