import React, { useEffect, useState } from 'react';
import { getTeam } from '../api/api';
import { Loader2 } from 'lucide-react';

const OurTeam = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const data = await getTeam();
                setTeam(data);
            } catch (err) {
                setError('Failed to load Team data.');
            } finally {
                setLoading(false);
            }
        };
        fetchTeam();
    }, []);

    return (
        <section id="team" className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 flex flex-col items-center perspective-1000">
                    <h2 className="text-sm font-bold text-intaff-gold tracking-widest uppercase mb-2">Leadership & Members</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 transform transition-all duration-500 hover:scale-110 hover:rotate-1 hover:-translate-y-2 hover:drop-shadow-[0_20px_20px_rgba(245,158,11,0.3)] cursor-default">Our Team</h3>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="animate-spin text-intaff-teal" size={48} />
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 py-10 bg-red-50 rounded-2xl">{error}</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div key={member.id} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-slate-100 group">
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-intaff-teal to-intaff-gold rounded-full blur opacity-20 group-hover:opacity-50 transition-opacity"></div>
                                    <img 
                                        src={member.photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0D8ABC&color=fff&size=128&rounded=true`} 
                                        alt={member.name} 
                                        className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
                                    />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                                <p className="text-sm font-medium text-intaff-teal">{member.role}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default OurTeam;
