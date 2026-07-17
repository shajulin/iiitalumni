import React, { useEffect, useState } from 'react';
import { getContactInfo, submitContactMessage } from '../api/api';
import { Phone, Mail, MapPin, Clock, Loader2, Send } from 'lucide-react';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState({ loading: false, message: '', error: false });

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const data = await getContactInfo();
                setContactInfo(data);
            } catch (err) {
                console.error('Failed to load Contact info.');
            } finally {
                setLoading(false);
            }
        };
        fetchContactInfo();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus({ loading: true, message: '', error: false });
        try {
            await submitContactMessage(formData);
            setSubmitStatus({ loading: false, message: 'Message sent successfully!', error: false });
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setSubmitStatus({ loading: false, message: 'Failed to send message. Please try again.', error: true });
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 flex justify-center perspective-1000">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 transform transition-all duration-500 hover:scale-110 hover:-rotate-1 hover:-translate-y-2 hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.2)] cursor-default">
                        Get In Touch
                    </h2>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
                    {/* Google Map */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border border-slate-100 mb-12 lg:mb-0 relative group">
                        {loading ? (
                             <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                                 <Loader2 className="animate-spin text-intaff-teal" size={32} />
                             </div>
                        ) : (
                            <iframe 
                                src={contactInfo?.map_embed_url} 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        )}
                    </div>
                    
                    {/* Contact Card & Form */}
                    <div className="glass-dark rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-intaff-teal rounded-full blur-3xl opacity-20"></div>
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-intaff-gold rounded-full blur-3xl opacity-20"></div>
                        
                        <div className="relative z-10">
                            {loading ? (
                                <div className="flex justify-center py-10"><Loader2 className="animate-spin text-intaff-teal" size={32} /></div>
                            ) : (
                                <div className="space-y-6 mb-10">
                                    <div className="flex items-start space-x-4 group">
                                        <div className="bg-white/10 p-3 rounded-xl group-hover:bg-intaff-teal transition-colors">
                                            <Phone size={24} className="text-intaff-gold group-hover:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-300">Phone & WhatsApp</p>
                                            <p className="text-lg font-semibold">{contactInfo?.phone.join(', ')}</p>
                                            <p className="text-md text-slate-300">{contactInfo?.whatsapp}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 group">
                                        <div className="bg-white/10 p-3 rounded-xl group-hover:bg-intaff-teal transition-colors">
                                            <Mail size={24} className="text-intaff-gold group-hover:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-300">Email</p>
                                            <p className="text-lg font-semibold">{contactInfo?.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 group">
                                        <div className="bg-white/10 p-3 rounded-xl group-hover:bg-intaff-teal transition-colors">
                                            <MapPin size={24} className="text-intaff-gold group-hover:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-300">Address</p>
                                            <p className="text-md font-medium leading-relaxed">{contactInfo?.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 group">
                                        <div className="bg-white/10 p-3 rounded-xl group-hover:bg-intaff-teal transition-colors">
                                            <Clock size={24} className="text-intaff-gold group-hover:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-300">Working Hours</p>
                                            <p className="text-md font-medium">{contactInfo?.working_hours}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="border-t border-slate-700 pt-8 mt-8">
                                <h4 className="text-xl font-bold mb-4">Send us a message</h4>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input 
                                        type="text" name="name" placeholder="Your Name" required
                                        value={formData.name} onChange={handleChange}
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-intaff-teal focus:ring-1 focus:ring-intaff-teal"
                                    />
                                    <input 
                                        type="email" name="email" placeholder="Your Email" required
                                        value={formData.email} onChange={handleChange}
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-intaff-teal focus:ring-1 focus:ring-intaff-teal"
                                    />
                                    <textarea 
                                        name="message" placeholder="Your Message" rows="3" required
                                        value={formData.message} onChange={handleChange}
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-intaff-teal focus:ring-1 focus:ring-intaff-teal resize-none"
                                    ></textarea>
                                    
                                    <button 
                                        type="submit" 
                                        disabled={submitStatus.loading}
                                        className="w-full bg-gradient-to-r from-intaff-teal to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 flex justify-center items-center gap-2"
                                    >
                                        {submitStatus.loading ? <Loader2 className="animate-spin" size={20} /> : <><Send size={20} /> Send Message</>}
                                    </button>
                                    {submitStatus.message && (
                                        <p className={`text-sm text-center mt-2 ${submitStatus.error ? 'text-red-400' : 'text-green-400'}`}>
                                            {submitStatus.message}
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
