import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const taglines = [
        "Unfolding Global Dynamics",
        "Developing International Affairs",
        "Cultivating Global Understanding",
        "Fostering Global Connections"
    ];
    
    const [currentTagline, setCurrentTagline] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagline((prev) => (prev + 1) % taglines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Custom Animation Styles */}
            <style>
                {`
                @keyframes revealUp {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-reveal-up {
                    animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .delay-100 { animation-delay: 100ms; }
                .delay-300 { animation-delay: 300ms; }
                `}
            </style>

            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-new-panoramic-view.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
            </div>
            
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
                <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-4 drop-shadow-2xl opacity-0 animate-reveal-up">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-orange-400">
                        International Affairs
                    </span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg opacity-0 animate-reveal-up delay-100">
                    IIIT - Kottayam
                </h2>
                
                {/* Paragraph with continuous scrolling (marquee) animation */}
                <div className="overflow-hidden mb-8 w-full">
                    <marquee scrollamount="12" className="text-lg md:text-2xl text-slate-200 font-medium leading-relaxed">
                        Embark on a global journey of learning, collaboration, and innovation with IntAff
                    </marquee>
                </div>
                
                <div className="h-8 mb-12 opacity-0 animate-reveal-up delay-300">
                    <p className="text-white font-bold text-lg md:text-2xl drop-shadow-md transition-all duration-500 ease-in-out">
                        {taglines[currentTagline]}
                    </p>
                </div>
                
                {/* Register Button matching Navbar exactly */}
                <div className="flex justify-center opacity-0 animate-reveal-up delay-300">
                    <div 
                        className="p-[4px] rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-500 cursor-pointer shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 hover:shadow-[0_15px_30px_rgba(217,70,239,0.5)]" 
                        onClick={() => navigate('/register')}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <button className="px-10 py-3.5 rounded-full bg-slate-900 text-white font-bold text-lg tracking-wide transition-colors hover:bg-transparent hover:text-white">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
