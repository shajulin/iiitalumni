import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (id) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="absolute top-0 left-0 right-0 z-50 w-full">
            <nav className="w-full flex justify-between items-center px-4 md:px-10 py-4 bg-slate-100/80 backdrop-blur-2xl border-b border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-500">
                
                {/* Brand Logo with 3D hover effect */}
                <div className="flex-shrink-0 cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1" onClick={() => handleScroll('hero')}>
                    <span className="font-extrabold text-2xl md:text-3xl text-slate-800 tracking-tight drop-shadow-md">
                        Int<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-orange-500">Aff</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-2">
                    <button onClick={() => handleScroll('mous')} className="px-5 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-white/50 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)] font-semibold transition-all duration-300 transform hover:-translate-y-1 text-sm tracking-wide">MoUs</button>
                    <button onClick={() => handleScroll('collaborators')} className="px-5 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-white/50 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)] font-semibold transition-all duration-300 transform hover:-translate-y-1 text-sm tracking-wide">Intl. Collaborators</button>
                    <button onClick={() => handleScroll('team')} className="px-5 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-white/50 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)] font-semibold transition-all duration-300 transform hover:-translate-y-1 text-sm tracking-wide">Our Team</button>
                    <button onClick={() => handleScroll('contact')} className="px-5 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-white/50 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)] font-semibold transition-all duration-300 transform hover:-translate-y-1 text-sm tracking-wide">Contact Us</button>
                </div>
                
                {/* Desktop Register Button with Strong 3D Effect */}
                <div className="hidden md:block">
                    <div 
                        className="p-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-500 cursor-pointer shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 hover:shadow-[0_15px_30px_rgba(217,70,239,0.5)]" 
                        onClick={() => navigate('/register')}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <button className="px-8 py-2.5 rounded-full bg-slate-900 text-white font-bold text-sm tracking-wide transition-colors hover:bg-transparent hover:text-slate-900">
                            Register
                        </button>
                    </div>
                </div>
                
                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 p-2 rounded-full hover:bg-white/50 focus:outline-none transition-transform hover:scale-110">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="absolute top-[76px] left-0 right-0 bg-slate-100/95 backdrop-blur-2xl border-b border-white/50 shadow-2xl overflow-hidden z-40 transform origin-top transition-all duration-300">
                    <div className="px-4 py-6 space-y-2 flex flex-col items-center">
                        <button onClick={() => handleScroll('mous')} className="block px-4 py-3 text-center text-base font-bold text-slate-700 hover:text-slate-900 hover:bg-white/50 rounded-xl w-full transition-colors">MoUs</button>
                        <button onClick={() => handleScroll('collaborators')} className="block px-4 py-3 text-center text-base font-bold text-slate-700 hover:text-slate-900 hover:bg-white/50 rounded-xl w-full transition-colors">Intl. Collaborators</button>
                        <button onClick={() => handleScroll('team')} className="block px-4 py-3 text-center text-base font-bold text-slate-700 hover:text-slate-900 hover:bg-white/50 rounded-xl w-full transition-colors">Our Team</button>
                        <button onClick={() => handleScroll('contact')} className="block px-4 py-3 text-center text-base font-bold text-slate-700 hover:text-slate-900 hover:bg-white/50 rounded-xl w-full transition-colors">Contact Us</button>
                        
                        <div className="w-full pt-6 mt-4 border-t border-slate-300/50 px-4">
                            <div className="p-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-500 w-full cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(217,70,239,0.3)]" onClick={() => navigate('/register')}>
                                <button className="w-full px-7 py-3.5 rounded-full bg-slate-900 text-white font-bold text-base hover:bg-transparent hover:text-slate-900 transition-colors">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
