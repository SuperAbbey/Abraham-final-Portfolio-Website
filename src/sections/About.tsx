"use client";
import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/react.svg';
import pythonIcon from '@/assets/icons/python.svg';
import arduinoIcon from '@/assets/icons/arduino-1.svg';
import kubernetesIcon from '@/assets/icons/kubernetes.svg'
import ReactIcon from '@/assets/icons/chrome.svg';
import CIcon from'@/assets/icons/c.svg';
import dockerIcon from '@/assets/icons/docker.svg';
import awsImage from '@/assets/icons/aws.svg';
import GithubIcon from '@/assets/icons/github.svg';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import {CardHeader} from "@/components/CardHeader";
import {ToolboxItems} from "@/components/ToolboxItems";
import {motion} from 'framer-motion';
import {useRef} from "react";

const toolboxItems = [
    {
        title: "Java",
        iconType: JavascriptIcon,
    },
    {
        title: "HTML5",
        iconType: HTMLIcon,
    },
    {
        title: "CSS3",
        iconType: CssIcon,
    },
    {
        title: "React",
        iconType: ReactIcon,
    },
    {
        title: "C ++",
        iconType: CIcon,
    },
    {
        title: "Github",
        iconType: GithubIcon,
    },
    {
        title: "AWS",
        iconType: awsImage,
    },
    {
        title: "Python",
        iconType: pythonIcon,
    },
    {
        title: "Kubernetes",
        iconType: kubernetesIcon,
    },
    {
        title: "Docker",
        iconType: dockerIcon,
    },
    {
        title: "Arduino",
        iconType: arduinoIcon,
    },
];
const hobbies = [
    {
        title: "Photography",
        emoji: "📷",
        left: "5%",
        top: "5%",
    },
    {
        title: "Gym",
        emoji: "🏋",
        left: "50%",
        top: "5%",
    },
    {
        title: "Fútbol",
        emoji: "⚽️",
        left: "35%",
        top: "40%",
    },
    {
        title: "Cosplay",
        emoji: "🦸🏻‍♂️",
        left: "10%",
        top: "35%",
    },
    {
        title: "Cooking",
        emoji: "👨🏻‍🍳",
        left: "70%",
        top: "45%",
    },
    {
        title: 'Music',
        emoji: "🎸",
        left: "5%",
        top: "65%",
    },
    {
        title: "Travel",
        emoji: "✈️",
        left: "45%",
        top: "75%",
    },
]
export const AboutSection = () => {
    const constraintRef = useRef(null);
    return (
        <div className="py-20 lg:py-28">
            <div className="container">
                <SectionHeader title="A Glimpse Into My World"
                               eyebrow="About me"
                               description="Learn more about who I am, what I do, and what inspires me"

                />
                <div className="mt-20 flex flex-col
                gap-8">
                    <div className="grid grid-cols-1 gap-8
                    md:grid-cols-5 lg:grid-cols-3">
                    <Card className="h-[320px]
                    md:col-span-2 lg:col-span-1 ">
                        <CardHeader title="My Reads"
                                    description="Explore the books shaping my personality"
                        />
                        <div className="w-40 mx-auto mt-2 md:mt-0">
                            <Image src={bookImage} alt={"Book Cover"}/>
                        </div>
                    </Card>
                    <Card className="h-[320px] md:col-span-3 lg:col-span-2 ">
                        <CardHeader title="My Toolbox"
                                    description="Explore the technologies and tools I use to craft my work and engineering builds."
                                    className=" "

                        />
                        <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
                        <ToolboxItems
                            items={toolboxItems}
                            className="mt-6"
                            itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>


                    </Card>
                    </div>
                    <div className="grid grid-cols-1
                    md:grid-cols-5 lg:grid-cols-3 gap-8">
                    <Card className="h-[320px] p-0 flex-col md:col-span-3 lg:col-span-2">
                        <CardHeader
                            title="Beyond the Code"
                            description="Explore my interests and hobbies that I do beyond my work as an engineer"
                            className="px-6 py-6"
                        />

                    <div className="relative flex-1" ref = {constraintRef}>
                            {hobbies.map((hobby) => (
                                <motion.div
                                    key={hobby.title}
                                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r
                             from-emerald-300 to-sky-400
                              rounded-full py-1.5 absolute"
                                    style={{
                                        left: hobby.left,
                                        top: hobby.top,

                                    }}
                                    drag
                                    dragConstraints={constraintRef}
                                >
                                    <span className="font-medium text-gray-950"> {hobby.title} </span>
                                    <span> {hobby.emoji} </span>
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                    <Card className ="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                        <Image src={mapImage}
                               alt={"map"}
                               className="h-full w-full object-cover
                        object-left-top"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2
                        -translate-y-1/2 size-20 rounded-full  after:content-['']
                          after:absolute after:inset-0 after:outline after:outline-2
                          after:-outline-offset-2 after:rounded-full
                          after:outline-gray-950/30">

                            <div className="absolute inset-0 rounded-fullbg-gradient-to-r
                         from-emerald-300 to-sky-400 -z-20 animate-ping-large [animation-duration:2s]">

                            </div>

                           <div className="absolute inset-0 rounded-fullbg-gradient-to-r
                         from-emerald-300 to-sky-400 -z-10 animate-ping-large [animation-duration:2s]" ></div>
                        <Image src={smileMemoji} alt="smiling memoji" className="size-30"/>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
        </div>




    );
};
