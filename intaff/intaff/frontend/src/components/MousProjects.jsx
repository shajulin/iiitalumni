import React, { useEffect, useState, useCallback } from 'react';
import { getMous, addMou } from '../api/api';
import { Loader2, PlusCircle, X, Building2, MapPin, CheckCircle } from 'lucide-react';

// ─── Add MoU Modal ─────────────────────────────────────────────────────────────
const AddMouModal = ({ onClose, onSuccess }) => {
    const [formData, setFormData] = useState({ organization: '', location: '' });
    const [submitStatus, setSubmitStatus] = useState({ loading: false, message: '', error: false });

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus({ loading: true, message: '', error: false });
        try {
            const result = await addMou(formData);
            setSubmitStatus({ loading: false, message: result.message || 'MoU added successfully!', error: false });
            setFormData({ organization: '', location: '' });
            // Give user a moment to see the success state, then close & refresh
            setTimeout(() => {
                onSuccess();
                onClose();
            }, 1200);
        } catch (err) {
            const msg = err?.response?.data?.error || 'Failed to add MoU. Please try again.';
            setSubmitStatus({ loading: false, message: msg, error: true });
        }
    };

    return (
        // Backdrop
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
            aria-modal="true"
            role="dialog"
            aria-labelledby="add-mou-title"
        >
            {/* Modal card — stop propagation so clicks inside don't close */}
            <div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden
                           animate-[fadeSlideUp_0.25s_ease-out]"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: 'fadeSlideUp 0.25s ease-out' }}
            >
                {/* Decorative teal bar at the top */}
                <div className="h-1.5 bg-gradient-to-r from-intaff-teal to-teal-400" />

                <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <p className="text-xs font-bold text-intaff-teal tracking-widest uppercase mb-1">Partnerships</p>
                            <h3 id="add-mou-title" className="text-2xl font-extrabold text-slate-900">Add New MoU</h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors p-2 rounded-xl"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        {/* Organization field */}
                        <div>
                            <label htmlFor="mou-organization" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                                Organization Name
                            </label>
                            <div className="relative">
                                <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                <input
                                    id="mou-organization"
                                    type="text"
                                    name="organization"
                                    placeholder="e.g. Technische Universität München"
                                    required
                                    value={formData.organization}
                                    onChange={handleChange}
                                    disabled={submitStatus.loading || (!submitStatus.error && submitStatus.message)}
                                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800
                                               placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-none
                                               focus:border-intaff-teal focus:ring-2 focus:ring-teal-100 transition-all duration-200
                                               disabled:opacity-60 disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Location field */}
                        <div>
                            <label htmlFor="mou-location" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                                Location
                            </label>
                            <div className="relative">
                                <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                <input
                                    id="mou-location"
                                    type="text"
                                    name="location"
                                    placeholder="e.g. Germany"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    disabled={submitStatus.loading || (!submitStatus.error && submitStatus.message)}
                                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800
                                               placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-none
                                               focus:border-intaff-teal focus:ring-2 focus:ring-teal-100 transition-all duration-200
                                               disabled:opacity-60 disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Status message */}
                        {submitStatus.message && (
                            <div className={`flex items-center gap-2 text-sm rounded-xl px-4 py-3 font-medium
                                ${submitStatus.error
                                    ? 'bg-red-50 text-red-600 border border-red-100'
                                    : 'bg-teal-50 text-teal-700 border border-teal-100'
                                }`}
                            >
                                {!submitStatus.error && <CheckCircle size={16} className="shrink-0" />}
                                {submitStatus.message}
                            </div>
                        )}

                        {/* Submit button */}
                        <button
                            id="add-mou-submit"
                            type="submit"
                            disabled={submitStatus.loading || (!submitStatus.error && !!submitStatus.message)}
                            className="w-full bg-gradient-to-r from-intaff-teal to-teal-500 hover:from-teal-500 hover:to-teal-400
                                       text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2
                                       transition-all duration-200 shadow-md hover:shadow-teal-200 hover:shadow-lg
                                       active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none mt-2"
                        >
                            {submitStatus.loading
                                ? <><Loader2 className="animate-spin" size={18} /> Saving…</>
                                : <><PlusCircle size={18} /> Add MoU</>
                            }
                        </button>
                    </form>
                </div>
            </div>

            {/* Keyframe style — scoped inline so no external CSS change needed */}
            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(16px) scale(0.97); }
                    to   { opacity: 1; transform: translateY(0)   scale(1);    }
                }
            `}</style>
        </div>
    );
};

// ─── Main Component ─────────────────────────────────────────────────────────────
const MousProjects = () => {
    const [mous, setMous] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchMous = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getMous();
            setMous(data);
        } catch (err) {
            setError('Failed to load MoUs data.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchMous();
    }, [fetchMous]);

    return (
        <>
            <section id="mous" className="py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section heading + Add MoU button */}
                    <div className="text-center mb-16 flex flex-col items-center perspective-1000">
                        <h2 className="text-sm font-bold text-intaff-teal tracking-widest uppercase mb-2">Partnerships</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 transform transition-all duration-500 hover:scale-110 hover:rotate-2 hover:-translate-y-2 hover:drop-shadow-[0_20px_20px_rgba(13,148,136,0.3)] cursor-default">
                            MoUs &amp; Projects
                        </h3>

                        {/* Add MoU trigger button */}
                        <button
                            id="open-add-mou-modal"
                            onClick={() => setShowModal(true)}
                            className="mt-8 inline-flex items-center gap-2 bg-intaff-teal hover:bg-teal-600 active:scale-[0.97]
                                       text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md
                                       hover:shadow-teal-300 hover:shadow-lg transition-all duration-200"
                        >
                            <PlusCircle size={17} />
                            Add MoU
                        </button>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <Loader2 className="animate-spin text-intaff-teal" size={48} />
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-500 py-10 bg-red-50 rounded-2xl">{error}</div>
                    ) : (
                        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider w-16">SN</th>
                                            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Organization</th>
                                            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-100">
                                        {mous.map((mou, index) => (
                                            <tr key={mou.id} className="hover:bg-slate-50 transition-colors duration-150">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400 font-medium">{index + 1}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-800">{mou.organization}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                                                        {mou.location}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Add MoU Modal — rendered outside section via portal-like pattern */}
            {showModal && (
                <AddMouModal
                    onClose={() => setShowModal(false)}
                    onSuccess={fetchMous}
                />
            )}
        </>
    );
};

export default MousProjects;
