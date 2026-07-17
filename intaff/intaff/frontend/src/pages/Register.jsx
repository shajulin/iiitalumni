import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { submitRegistration } from '../api/api';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        full_name: '', email: '', phone: '', institution: '', country: '', purpose: 'Other', message: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });
        try {
            await submitRegistration(formData);
            setStatus({ loading: false, success: true, error: '' });
            setFormData({ full_name: '', email: '', phone: '', institution: '', country: '', purpose: 'Other', message: '' });
        } catch (err) {
            setStatus({ loading: false, success: false, error: 'Registration failed. Please check your details and try again.' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="bg-intaff-navy px-8 py-10 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-intaff-teal rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                        <h1 className="text-3xl font-extrabold text-white relative z-10">Global Network Registration</h1>
                        <p className="mt-2 text-slate-300 relative z-10">Join our international community of researchers and collaborators.</p>
                    </div>
                    
                    <div className="p-8 sm:p-10">
                        {status.success ? (
                            <div className="text-center py-10">
                                <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" />
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Registration Successful!</h2>
                                <p className="text-slate-600 mb-8">Thank you for registering. We will be in touch shortly.</p>
                                <button 
                                    onClick={() => navigate('/')}
                                    className="px-6 py-3 bg-intaff-navy text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
                                >
                                    Return to Home
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {status.error && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3">
                                        <AlertCircle size={20} />
                                        <p className="text-sm font-medium">{status.error}</p>
                                    </div>
                                )}
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                                        <input type="text" name="full_name" required value={formData.full_name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-intaff-teal focus:border-transparent transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-intaff-teal focus:border-transparent transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-intaff-teal focus:border-transparent transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Institution / Organization</label>
                                        <input type="text" name="institution" value={formData.institution} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-intaff-teal focus:border-transparent transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Country</label>
                                        <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-intaff-teal focus:border-transparent transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Purpose of Registration</label>
                                        <select name="purpose" value={formData.purpose} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-intaff-teal focus:border-transparent transition-colors appearance-none">
                                            <option value="Internship">Internship</option>
                                            <option value="Collaboration">Collaboration</option>
                                            <option value="MoU">MoU</option>
                                            <option value="Research">Research</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                                    <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-intaff-teal focus:border-transparent transition-colors resize-none"></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={status.loading}
                                    className="w-full md:w-auto md:px-12 py-4 bg-gradient-to-r from-intaff-teal to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 transition-all duration-200 flex justify-center items-center"
                                >
                                    {status.loading ? <Loader2 className="animate-spin mr-2" size={20} /> : null}
                                    {status.loading ? 'Submitting...' : 'Submit Registration'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Register;
