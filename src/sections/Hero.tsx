import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import CaptainShield from "@/assets/icons/captain-america.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
    return (
        <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}
                ></div>
                <div className="size-[620px] hero-ring"></div>
                <div className="size-[820px] hero-ring"></div>
                <div className="size-[1020px] hero-ring"></div>
                <div className="size-[1220px] hero-ring"></div>

                <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s">
                    <SparkleIcon className="size-8 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
                    <SparkleIcon className="size-5 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
                    <div className="size-2 rounded-full text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
                    <SparkleIcon className="size-10 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
                    <StarIcon className="size-12 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="6s">
                    <StarIcon className="size-8 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit s
