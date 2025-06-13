'use client';
import { useRef, useState } from 'react';
import grainImage from '@/assets/images/grain.jpg';
import SnorlaxImage from '@/assets/icons/pokemon-13.svg';

export const ContactSection = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    // Optional: Update isPlaying when audio ends
    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    return (
        <div className="py-16 pt-12 lg:py-24 lg:pt-20">
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-white py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
                    <div
                        className="absolute inset-0 opacity-5 -z-10"
                        style={{ backgroundImage: `url(${grainImage.src})` }}
                    ></div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">
                                Let&apos;s create something amazing together and let me join your team
                            </h2>
                            <p className="text-sm md:text-base mt-2">
                                Ready to have a new strong member join your team? Let&apos;s connect and allow both your company and my goals be reached.
                            </p>
                        </div>

                        <div>
                            <audio
                                ref={audioRef}
                                src="/PalletTown.wav"
                                preload="auto"
                                onEnded={handleAudioEnded}
                            />

                            <button
                                onClick={handleClick}
                                className="relative z-20 text-white bg-yellow-500 hover:bg-yellow-400 hover:scale-105 transition-all duration-200 cursor-pointer inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-white"
                            >
                                <span className="font-bold">{isPlaying ? 'Pause' : 'Play'}</span>
                                <SnorlaxImage
                                    className={`size-10 transition-transform duration-300 ${
                                        isPlaying ? 'animate-bounce [animation-duration:2s]' : 'hover:scale-110'
                                    }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
