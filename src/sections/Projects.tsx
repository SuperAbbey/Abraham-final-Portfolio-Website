import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
    {
        company: "UC-RIVERSIDE-Bourns College of Engineering",
        year: "2022",
        title: "Adaptive Hearing Aid",
        results: [
            { title: "Real-time audio processing using Teensy 4.1 for adaptive hearing assistance." },
            { title: "Implemented FFT-based frequency shifting and filtering for enhanced sound clarity." },
            { title: "Developed a portable prototype integrating microphone input, audio shield, and user customization." },
        ],
        link: "https://github.com/SuperAbbey/Hearing_Aid",
        image: darkSaasLandingPage,
    },
    {
        company: "Moreno Valley College",
        year: "2021",
        title: "RadiantReach: Geiger Counter Balloon Mission for Solar Data",
        results: [
            { title: "Led an end-to-end project of a high-altitude balloon mission for solar and radiation data collection." },
            { title: "Engineered a custom Arduino-based system with integrated sensors and Geiger counter based on C language." },
            { title: "Ensured mission success through real-time tracking and collaboration with March Air Force Base" },
        ],
         link: "https://frontend-tribe-ai-startup-landing-f-ten.vercel.app/#",
        image: lightSaasLandingPage,
    },
    {
        company: "Quantum Dynamics",
        year: "2023",
        title: "AI Startup Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://frontend-tribe-ai-startup-landing-f-ten.vercel.app/#",
        image: aiStartupLandingPage,
    },
];

export const ProjectsSection = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="Real-World Results"
                    title="Featured Projects"
                    description="See how I transform concepts into engaging digital experiences"
                />
                <div className="mt-10 md:mt-20 flex flex-col gap-20">
                    {portfolioProjects.map((project, projectIndex) => (
                        <Card
                            key={project.title}
                            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                            style={{
                                top: `calc(64px + ${projectIndex * 40}px)`,  // <-- fixed missing closing paren
                            }}
                        >
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div
                                        className="uppercase font-semibold tracking-widest bg-gradient-to-r
                                        from-emerald-300 to-sky-400 text-sm inline-flex gap-2
                                        text-center bg-clip-text text-transparent"
                                    >
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                        {project.results.map((result) => (
                                            <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                                                <CheckCircleIcon className="size-5 md:size-6" />
                                                <span>{result.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <button
                                            className="bg-white text-gray-950 h-12 w-full md:w-auto px-6
                                            rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 -mb-4"
                                        >
                                            <span>Visit my creation</span>
                                            <ArrowUpRightIcon className="size-4" />
                                        </button>
                                    </a>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

