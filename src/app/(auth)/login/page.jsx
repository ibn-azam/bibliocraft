'use client';

import { useState } from 'react';
import Link from 'next/link';

const LogInPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setError('');
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError('Please fill in all fields.');
            return;
        }
        setLoading(true);
        // Replace with your real auth logic (NextAuth signIn, etc.)
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
    };

    return (
        <main
            className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0f0c07 0%, #1a1508 50%, #0f0c07 100%)' }}
        >
            {/* Ambient glows */}
            <div
                className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10 blur-[120px]"
                style={{ background: '#a07840' }}
            />
            <div
                className="pointer-events-none absolute bottom-0 left-1/4 w-[300px] h-[300px] opacity-8 blur-[100px]"
                style={{ background: '#e8d5a3' }}
            />

            <div className="relative z-10 w-full max-w-md">

                {/* ── Brand ── */}
                <div className="text-center mb-10">
                    <Link href="/">
                        <h1
                            className="text-4xl font-bold cursor-pointer inline-block"
                            style={{
                                fontFamily: 'Georgia, serif',
                                background: 'linear-gradient(135deg, #e8d5a3, #a07840)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Bibliocraft
                        </h1>
                    </Link>
                    <p
                        className="text-xs uppercase tracking-[0.3em] mt-2"
                        style={{ color: '#a07840', fontFamily: 'Georgia, serif' }}
                    >
                        Welcome Back
                    </p>
                    <div
                        className="mx-auto mt-4 h-px w-16"
                        style={{ background: 'linear-gradient(90deg, transparent, #e8d5a3, transparent)' }}
                    />
                </div>

                {/* ── Card ── */}
                <div
                    className="rounded-3xl p-8 relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)',
                        border: '1px solid rgba(232,213,163,0.12)',
                        boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
                    }}
                >
                    {/* Corner glow */}
                    <div
                        className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 opacity-10 blur-3xl"
                        style={{ background: 'radial-gradient(circle, #e8d5a3, transparent)' }}
                    />

                    <form onSubmit={handleSubmit} className="relative z-10 space-y-6">

                        {/* ── Error message ── */}
                        {error && (
                            <div
                                className="px-4 py-3 rounded-xl text-sm"
                                style={{
                                    background: 'rgba(248,113,113,0.08)',
                                    border: '1px solid rgba(248,113,113,0.25)',
                                    color: '#f87171',
                                    fontFamily: 'Georgia, serif',
                                }}
                            >
                                ⚠ {error}
                            </div>
                        )}

                        {/* ── Email ── */}
                        <div className="space-y-2">
                            <label
                                className="text-xs uppercase tracking-widest"
                                style={{ color: '#a07840', fontFamily: 'Georgia, serif' }}
                            >
                                Email Address
                            </label>
                            <div className="relative">
                                <span
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-base pointer-events-none"
                                    style={{ color: '#5a4a2a' }}
                                >
                                    ✉
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                                    style={{
                                        background: 'rgba(232,213,163,0.05)',
                                        border: '1px solid rgba(232,213,163,0.15)',
                                        color: '#e8d5a3',
                                        fontFamily: 'Georgia, serif',
                                        transition: 'border-color 0.25s, box-shadow 0.25s',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(232,213,163,0.45)';
                                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(160,120,64,0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(232,213,163,0.15)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                />
                            </div>
                        </div>

                        {/* ── Password ── */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label
                                    className="text-xs uppercase tracking-widest"
                                    style={{ color: '#a07840', fontFamily: 'Georgia, serif' }}
                                >
                                    Password
                                </label>
                                <Link href="/forgot-password">
                                    <span
                                        className="text-xs cursor-pointer"
                                        style={{
                                            color: '#5a4a2a',
                                            transition: 'color 0.2s',
                                            fontFamily: 'Georgia, serif',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#e8d5a3')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = '#5a4a2a')}
                                    >
                                        Forgot password?
                                    </span>
                                </Link>
                            </div>
                            <div className="relative">
                                <span
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-base pointer-events-none"
                                    style={{ color: '#5a4a2a' }}
                                >
                                    🔒
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-12 py-3 rounded-xl text-sm outline-none"
                                    style={{
                                        background: 'rgba(232,213,163,0.05)',
                                        border: '1px solid rgba(232,213,163,0.15)',
                                        color: '#e8d5a3',
                                        fontFamily: 'Georgia, serif',
                                        transition: 'border-color 0.25s, box-shadow 0.25s',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(232,213,163,0.45)';
                                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(160,120,64,0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(232,213,163,0.15)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                />
                                {/* Show/hide toggle */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs"
                                    style={{ color: '#5a4a2a', transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#e8d5a3')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#5a4a2a')}
                                >
                                    {showPassword ? '🙈' : '👁'}
                                </button>
                            </div>
                        </div>

                        {/* ── Submit Button ── */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-xl text-sm font-semibold tracking-wide relative overflow-hidden"
                            style={{
                                background: loading
                                    ? 'rgba(232,213,163,0.3)'
                                    : 'linear-gradient(135deg, #e8d5a3, #c4a05a)',
                                color: loading ? '#7a6a4a' : '#0f0c07',
                                fontFamily: 'Georgia, serif',
                                boxShadow: loading ? 'none' : '0 4px 20px rgba(232,213,163,0.25)',
                                transition: 'all 0.25s ease',
                                cursor: loading ? 'not-allowed' : 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                if (!loading) {
                                    e.currentTarget.style.boxShadow = '0 6px 28px rgba(232,213,163,0.4)';
                                    e.currentTarget.style.transform = 'translateY(-1px)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(232,213,163,0.25)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg
                                        className="animate-spin w-4 h-4"
                                        fill="none" viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25" cx="12" cy="12" r="10"
                                            stroke="currentColor" strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8v8z"
                                        />
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                'Sign In →'
                            )}
                        </button>

                        {/* ── Divider ── */}
                        <div className="flex items-center gap-4">
                            <div
                                className="flex-1 h-px"
                                style={{ background: 'rgba(232,213,163,0.08)' }}
                            />
                            <span className="text-xs" style={{ color: '#3a3020' }}>or</span>
                            <div
                                className="flex-1 h-px"
                                style={{ background: 'rgba(232,213,163,0.08)' }}
                            />
                        </div>

                        {/* ── Google Sign In ── */}
                        <button
                            type="button"
                            className="w-full py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-3"
                            style={{
                                background: 'rgba(232,213,163,0.04)',
                                border: '1px solid rgba(232,213,163,0.12)',
                                color: '#c4aa78',
                                fontFamily: 'Georgia, serif',
                                transition: 'all 0.25s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(232,213,163,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(232,213,163,0.25)';
                                e.currentTarget.style.color = '#e8d5a3';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(232,213,163,0.04)';
                                e.currentTarget.style.borderColor = 'rgba(232,213,163,0.12)';
                                e.currentTarget.style.color = '#c4aa78';
                            }}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Continue with Google
                        </button>

                        {/* ── Sign up link ── */}
                        <p className="text-center text-xs" style={{ color: '#3a3020' }}>
                            Don&apos;t have an account?{' '}
                            <Link href="/signup">
                                <span
                                    className="cursor-pointer font-semibold"
                                    style={{
                                        color: '#a07840',
                                        transition: 'color 0.2s',
                                        fontFamily: 'Georgia, serif',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#e8d5a3')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#a07840')}
                                >
                                    Create an account →
                                </span>
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </main>
    );
};

export default LogInPage;