import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white pt-20 pb-10 overflow-hidden border-t border-white/10">
            {/* Background glowing orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-intaff-teal/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand */}
                    <div className="space-y-6">
                        <span className="font-extrabold text-4xl tracking-tight text-white cursor-pointer drop-shadow-md" onClick={() => window.scrollTo(0,0)}>
                            Int<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Aff</span>
                        </span>
                        <p className="text-slate-400 text-sm leading-relaxed font-light">
                            Embark on a global journey of learning, collaboration, and innovation. We build bridges for global education and transform the future of research.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><button onClick={() => { navigate('/'); setTimeout(()=>window.scrollTo(0,0), 100); }} className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 hover:opacity-100 transition-opacity"></span> Home</button></li>
                            <li><button onClick={() => { document.getElementById('who-we-are')?.scrollIntoView({behavior:'smooth'})}} className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 hover:opacity-100 transition-opacity"></span> About Us</button></li>
                            <li><button onClick={() => { document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 hover:opacity-100 transition-opacity"></span> Contact</button></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Connect With Us</h4>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-teal-500 hover:to-blue-500 hover:border-transparent hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] text-slate-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <FaFacebook size={22} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-sky-400 hover:to-blue-600 hover:border-transparent hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] text-slate-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <FaTwitter size={22} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-pink-500 hover:to-orange-400 hover:border-transparent hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] text-slate-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <FaInstagram size={22} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-800 hover:border-transparent hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] text-slate-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <FaLinkedin size={22} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-indigo-500 hover:to-purple-600 hover:border-transparent hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] text-slate-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <FaDiscord size={22} />
                            </a>
                        </div>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Join the Global Journey</h4>
                        <p className="text-slate-400 text-sm mb-6 font-light">Register today to connect with our international network.</p>
                        <button 
                            onClick={() => navigate('/register')}
                            className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 w-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                        >
                            Register Now
                        </button>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm font-light">
                        &copy; 2026 IntAff - IIIT Kottayam. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500 font-light">
                        <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
