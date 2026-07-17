import React from 'react';
import { Globe2 } from 'lucide-react';

const WhoWeAre = () => {
    return (
        <section id="who-we-are" className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 flex justify-center perspective-1000">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight transform transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:-translate-y-2 hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.2)] cursor-default">
                        Who We Are
                    </h2>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="mb-12 lg:mb-0 relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-intaff-teal to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                            alt="Global Collaboration" 
                            className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full border border-slate-100"
                        />
                        <div className="absolute bottom-6 left-6 glass px-6 py-4 rounded-2xl flex items-center space-x-4">
                            <div className="bg-intaff-teal p-3 rounded-full text-white">
                                <Globe2 size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-800">Global Reach</p>
                                <p className="text-xs text-slate-500">Connecting minds worldwide</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-sm font-bold text-intaff-teal tracking-widest uppercase mb-2">Who We Are</h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Catalysts of International Collaboration</h3>
                        </div>
                        
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                At IntAff, we are the catalysts of international collaboration, the architects of global partnerships, and the pioneers of cross-cultural innovation.
                            </p>
                            <p>
                                Our mission is to connect bright minds from around the world, foster meaningful relationships, and drive impactful change through education and research.
                            </p>
                            <p className="font-medium text-slate-800 border-l-4 border-intaff-gold pl-4 py-1">
                                Join us in shaping the future of global education and exploration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
