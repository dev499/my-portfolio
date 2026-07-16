import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="relative bg-paper text-ink min-h-screen overflow-hidden">
        <div className="fixed inset-0 bg-grid pointer-events-none" />
        <div className="fixed -top-40 right-[-10%] w-[560px] h-[560px] bg-cobalt/10 dark:bg-cobalt/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[480px] h-[480px] bg-coral/10 dark:bg-coral/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="fixed top-1/3 left-1/3 w-[420px] h-[420px] bg-violet/10 dark:bg-violet/15 rounded-full blur-[140px] pointer-events-none" />

        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
