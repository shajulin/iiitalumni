import React, { useEffect, useState, useCallback } from 'react';
import { getCollaborators, addCollaborator } from '../api/api';
import { Loader2, Search, Filter, PlusCircle, X, User, Building2, Globe, CheckCircle } from 'lucide-react';

// ─── Add Collaborator Modal ────────────────────────────────────────────────────
const AddCollaboratorModal = ({ onClose, onSuccess }) => {
    const [formData, setFormData] = useState({ name: '', organization: '', country: '' });
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
            const result = await addCollaborator(formData);
            setSubmitStatus({ loading: false, message: result.message || 'Collaborator added successfully!', error: false });
            setFormData({ name: '', organization: '', country: '' });
            // Brief pause so the user sees the success state, then close & refresh
            setTimeout(() => {
                onSuccess();
                onClose();
            }, 1200);
        } catch (err) {
            const msg = err?.response?.data?.error || 'Failed to add collaborator. Please try again.';
            setSubmitStatus({ loading: false, message: msg, error: true });
        }
    };

    const isDisabled = submitStatus.loading || (!submitStatus.error && !!submitStatus.message);

    return (
        // Backdrop
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
            aria-modal="true"
            role="dialog"
            aria-labelledby="add-collaborator-title"
        >
            {/* Modal card — stop propagation so clicks inside don't close */}
            <div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: 'fadeSlideUp 0.25s ease-out' }}
            >
                {/* Decorative gradient bar at the top — matches the slate gradient from the section heading */}
                <div className="h-1.5 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700" />

                <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <p className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">Partnerships</p>
                            <h3 id="add-collaborator-title" className="text-2xl font-extrabold text-slate-900">Add New Collaborator</h3>
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
                        {/* Name field */}
                        <div>
                            <label htmlFor="collab-name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                                Full Name
                            </label>
                            <div className="relative">
                                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                <input
                                    id="collab-name"
                                    type="text"
                                    name="name"
                                    placeholder="e.g. Dr. Jane Smith"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={isDisabled}
                                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800
                                               placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-none
                                               focus:border-slate-500 focus:ring-2 focus:ring-slate-100 transition-all duration-200
                                               disabled:opacity-60 disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Organization field */}
                        <div>
                            <label htmlFor="collab-organization" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                                Organization
                            </label>
                            <div className="relative">
                                <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                <input
                                    id="collab-organization"
                                    type="text"
                                    name="organization"
                                    placeholder="e.g. University of Melbourne"
                                    required
                                    value={formData.organization}
                                    onChange={handleChange}
                                    disabled={isDisabled}
                                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800
                                               placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-none
                                               focus:border-slate-500 focus:ring-2 focus:ring-slate-100 transition-all duration-200
                                               disabled:opacity-60 disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Country field */}
                        <div>
                            <label htmlFor="collab-country" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                                Country
                            </label>
                            <div className="relative">
                                <Globe size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                <input
                                    id="collab-country"
                                    type="text"
                                    name="country"
                                    placeholder="e.g. Australia"
                                    required
                                    value={formData.country}
                                    onChange={handleChange}
                                    disabled={isDisabled}
                                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800
                                               placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-none
                                               focus:border-slate-500 focus:ring-2 focus:ring-slate-100 transition-all duration-200
                                               disabled:opacity-60 disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Status message */}
                        {submitStatus.message && (
                            <div className={`flex items-center gap-2 text-sm rounded-xl px-4 py-3 font-medium
                                ${submitStatus.error
                                    ? 'bg-red-50 text-red-600 border border-red-100'
                                    : 'bg-slate-50 text-slate-700 border border-slate-200'
                                }`}
                            >
                                {!submitStatus.error && <CheckCircle size={16} className="shrink-0 text-slate-600" />}
                                {submitStatus.message}
                            </div>
                        )}

                        {/* Submit button */}
                        <button
                            id="add-collaborator-submit"
                            type="submit"
                            disabled={isDisabled}
                            className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800
                                       text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2
                                       transition-all duration-200 shadow-md hover:shadow-slate-300 hover:shadow-lg
                                       active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none mt-2"
                        >
                            {submitStatus.loading
                                ? <><Loader2 className="animate-spin" size={18} /> Saving…</>
                                : <><PlusCircle size={18} /> Add Collaborator</>
                            }
                        </button>
                    </form>
                </div>
            </div>

            {/* Keyframe — matches MousProjects modal animation */}
            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(16px) scale(0.97); }
                    to   { opacity: 1; transform: translateY(0)   scale(1);    }
                }
            `}</style>
        </div>
    );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const Collaborators = () => {
    const [collaborators, setCollaborators] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);

    const countries = ['All', 'Germany', 'USA', 'UK', 'Spain', 'Romania', 'Australia', 'Japan', 'Chile', 'Canada', 'Norway', 'Austria'];

    const fetchCollaborators = useCallback(async (country = selectedCountry) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getCollaborators(country);
            setCollaborators(data);
        } catch (err) {
            setError('Failed to load Collaborators data.');
        } finally {
            setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCountry]);

    useEffect(() => {
        fetchCollaborators(selectedCountry);
    }, [selectedCountry, fetchCollaborators]);

    // After a successful add, reset filter to 'All' so the new card is visible
    const handleAddSuccess = useCallback(() => {
        setSelectedCountry('All');
        // selectedCountry is already 'All' if user didn't change it — force a fresh fetch either way
        fetchCollaborators('All');
    }, [fetchCollaborators]);

    const filteredData = collaborators.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.organization.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <section id="collaborators" className="py-24 bg-slate-100 relative border-t border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section heading */}
                    <div className="text-center mb-16 flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 transform transition-all duration-500 hover:scale-105 cursor-default pb-2 drop-shadow-sm">
                            International Collaborators
                        </h2>

                        {/* Add Collaborator trigger button */}
                        <button
                            id="open-add-collaborator-modal"
                            onClick={() => setShowModal(true)}
                            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900
                                       hover:from-slate-700 hover:to-slate-800 active:scale-[0.97]
                                       text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md
                                       hover:shadow-slate-400/30 hover:shadow-lg transition-all duration-200"
                        >
                            <PlusCircle size={17} />
                            Add Collaborator
                        </button>
                    </div>

                    {/* Search + Country filter row */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                        <div className="relative w-full md:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search name or organization..."
                                className="block w-full pl-10 pr-3 py-3 border border-slate-200/60 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:border-slate-400 sm:text-sm transition duration-300 ease-in-out shadow-sm hover:shadow-md"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                            <Filter className="h-5 w-5 text-slate-400 hidden md:block mr-2" />
                            {countries.map(country => (
                                <button
                                    key={country}
                                    onClick={() => setSelectedCountry(country)}
                                    className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                        selectedCountry === country
                                            ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg shadow-slate-900/20 translate-y-[-1px]'
                                            : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md hover:border-slate-300'
                                    }`}
                                >
                                    {country}
                                </button>
                            ))}
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <Loader2 className="animate-spin text-intaff-teal" size={48} />
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-500 py-10 bg-red-50 rounded-2xl">{error}</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredData.map((collab) => (
                                <div key={collab.id} className="bg-white rounded-3xl p-7 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                                    <div className="flex items-center justify-between mb-5 relative z-10">
                                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white font-bold text-xl shadow-md rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                            {collab.name.charAt(0)}
                                        </div>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-50 text-slate-600 border border-slate-100 shadow-sm">
                                            {collab.country}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors relative z-10">{collab.name}</h4>
                                    <p className="text-sm text-slate-500 font-medium relative z-10">{collab.organization}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Add Collaborator Modal — rendered outside section to avoid stacking-context issues */}
            {showModal && (
                <AddCollaboratorModal
                    onClose={() => setShowModal(false)}
                    onSuccess={handleAddSuccess}
                />
            )}
        </>
    );
};

export default Collaborators;
