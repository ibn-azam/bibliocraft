'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

const inputStyle = {
    background: 'rgba(232,213,163,0.05)',
    border: '1px solid rgba(232,213,163,0.15)',
    color: '#e8d5a3',
    fontFamily: 'Georgia, serif',
};

const labelStyle = {
    color: '#a07840',
    fontFamily: 'Georgia, serif',
};

const EditProfileModal = ({ isOpen, onClose, user, onSuccess }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            name: user?.name || '',
            phone: user?.phone || '',
            photoURL: user?.photoURL || '',
            bio: user?.bio || '',
        },
    });

    useEffect(() => {
        if (isOpen && user) {
            reset({
                name: user.name || '',
                phone: user.phone || '',
                photoURL: user.photoURL || '',
                bio: user.bio || '',
            });
        }
    }, [isOpen, user, reset]);

    const onSubmit = async (data) => {
        try {
            const res = await fetch('/api/user/update', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
    email: user.email,
    name: data.name,
    phone: data.phone,
    bio: data.bio,
    image: data.photoURL,
}),
            });

            const result = await res.json();

if (!res.ok) {
    throw new Error(result.message || 'Failed to update profile');
}

            onSuccess();
        } catch (error) {
            console.error('Profile update error:', error);
            toast.error(error.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/70"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div
                            className="w-full max-w-lg rounded-3xl p-8 space-y-6 max-h-[90vh] overflow-y-auto"
                            style={{
                                background: 'linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)',
                                border: '1px solid rgba(232,213,163,0.15)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                            }}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold" style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}>
                                    Edit Profile
                                </h3>
                                <button onClick={onClose} className="text-sm" style={{ color: '#5a4a2a' }}>✕</button>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest" style={labelStyle}>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                        style={inputStyle}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.45)';
                                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(160,120,64,0.1)';
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.15)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                        {...register('name', { required: 'Name is required' })}
                                    />
                                    {errors.name && <p className="text-xs" style={{ color: '#f87171' }}>{errors.name.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest" style={labelStyle}>Email Address</label>
                                    <div className="w-full px-4 py-3 rounded-xl text-sm opacity-60 cursor-not-allowed" style={inputStyle}>
                                        {user?.email}
                                    </div>
                                    <p className="text-[10px]" style={{ color: '#5a4a2a' }}>Email changes aren't supported here yet.</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest" style={labelStyle}>Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+1 234 567 890"
                                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                        style={inputStyle}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.45)';
                                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(160,120,64,0.1)';
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.15)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                        {...register('phone')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest" style={labelStyle}>Photo URL</label>
                                    <input
                                        type="url"
                                        placeholder="https://your-photo-url.com"
                                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                        style={inputStyle}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.45)';
                                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(160,120,64,0.1)';
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.15)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                        {...register('photoURL')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest" style={labelStyle}>Bio</label>
                                    <textarea
                                        placeholder="Tell us about yourself..."
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                                        style={inputStyle}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.45)';
                                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(160,120,64,0.1)';
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.15)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                        {...register('bio')}
                                    />
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="flex-1 py-3 rounded-xl text-sm font-semibold"
                                        style={{ border: '1px solid rgba(232,213,163,0.2)', color: '#c4aa78', fontFamily: 'Georgia, serif' }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 py-3 rounded-xl text-sm font-semibold disabled:opacity-50"
                                        style={{ background: 'linear-gradient(135deg, #e8d5a3, #c4a05a)', color: '#0f0c07', fontFamily: 'Georgia, serif' }}
                                    >
                                        {isSubmitting ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default EditProfileModal;