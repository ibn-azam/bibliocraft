'use client';

import Link from 'next/link';
import { useState } from 'react';

const user = {
    name: 'Sophia Lennox',
    email: 'sophia@bibliocraft.com',
    photoURL: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Sophia',
    phone: '+1 234 567 890',
    bio: 'Passionate reader and literary explorer. Always chasing the next great story.',
    joinDate: 'January 2024',
};

const tabs = [
    { key: 'profile',  label: '👤 Profile'  },
    { key: 'password', label: '🔒 Password' },
    { key: 'danger',   label: '⚠ Account'  },
];

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

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <main
            className="min-h-screen relative"
            style={{ background: 'linear-gradient(180deg, #0f0c07 0%, #1a1508 40%, #0f0c07 100%)' }}
        >
            {/* Top border */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #e8d5a3, transparent)' }}
            />

            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-[120px]"
                style={{ background: '#a07840' }}
            />

            <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 py-20 space-y-8">

                {/* ── Page Heading ── */}
                <div className="text-center">
                    <p
                        className="text-xs uppercase tracking-[0.4em] mb-2"
                        style={{ color: '#a07840', fontFamily: 'Georgia, serif' }}
                    >
                        Account
                    </p>
                    <h1
                        className="text-4xl font-bold"
                        style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}
                    >
                        My Profile
                    </h1>
                    <div
                        className="mx-auto mt-3 h-px w-20"
                        style={{ background: 'linear-gradient(90deg, transparent, #e8d5a3, transparent)' }}
                    />
                </div>

                {/* ── Avatar Card ── */}
                <div
                    className="rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)',
                        border: '1px solid rgba(232,213,163,0.12)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                    }}
                >
                    {/* Corner glow */}
                    <div
                        className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 opacity-10 blur-3xl"
                        style={{ background: 'radial-gradient(circle, #e8d5a3, transparent)' }}
                    />

                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                        <div
                            className="w-24 h-24 rounded-2xl overflow-hidden"
                            style={{ border: '2px solid rgba(232,213,163,0.25)' }}
                        >
                            <img
                                src={user.photoURL}
                                alt={user.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Online dot */}
                        <div
                            className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full"
                            style={{ background: '#4ade80', border: '2px solid #16120a' }}
                        />
                    </div>

                    {/* Info */}
                    <div className="text-center sm:text-left flex-1 space-y-1">
                        <h2
                            className="text-2xl font-bold"
                            style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}
                        >
                            {user.name}
                        </h2>
                        <p className="text-sm" style={{ color: '#7a6a4a' }}>
                            {user.email}
                        </p>
                        <p
                            className="text-xs italic"
                            style={{ color: '#5a4a2a', fontFamily: 'Georgia, serif' }}
                        >
                            "{user.bio}"
                        </p>
                        <p className="text-xs" style={{ color: '#3a3020' }}>
                            Member since{' '}
                            <span style={{ color: '#5a4a2a' }}>{user.joinDate}</span>
                        </p>
                    </div>

                    {/* Edit button */}
                    <button
                        className="flex-shrink-0 self-start px-5 py-2 rounded-xl text-sm font-semibold"
                        style={{
                            border: '1px solid rgba(232,213,163,0.2)',
                            color: '#c4aa78',
                            fontFamily: 'Georgia, serif',
                            transition: 'all 0.25s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(232,213,163,0.08)';
                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.35)';
                            e.currentTarget.style.color = '#e8d5a3';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.2)';
                            e.currentTarget.style.color = '#c4aa78';
                        }}
                    >
                        ✎ Edit
                    </button>
                </div>

                {/* ── Tabs ── */}
                <div
                    className="flex gap-1 p-1 rounded-2xl"
                    style={{
                        background: 'rgba(232,213,163,0.04)',
                        border: '1px solid rgba(232,213,163,0.08)',
                    }}
                >
                    {tabs.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className="flex-1 py-2.5 rounded-xl text-xs font-medium"
                            style={{
                                fontFamily: 'Georgia, serif',
                                transition: 'all 0.25s ease',
                                background: activeTab === key
                                    ? 'linear-gradient(135deg, #e8d5a3, #c4a05a)'
                                    : 'transparent',
                                color: activeTab === key ? '#0f0c07' : '#7a6a4a',
                                boxShadow: activeTab === key
                                    ? '0 2px 12px rgba(232,213,163,0.2)'
                                    : 'none',
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* ══════════════════
                    TAB 1 — Profile
                ══════════════════ */}
                {activeTab === 'profile' && (
                    <div
                        className="rounded-3xl p-8 space-y-6"
                        style={{
                            background: 'linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)',
                            border: '1px solid rgba(232,213,163,0.1)',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                        }}
                    >
                        <div>
                            <p className="text-xs uppercase tracking-widest" style={labelStyle}>
                                Personal Info
                            </p>
                            <h3
                                className="text-lg font-bold mt-0.5"
                                style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}
                            >
                                Edit Profile
                            </h3>
                        </div>

                        <div className="space-y-5">

                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest" style={labelStyle}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue={user.name}
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
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest" style={labelStyle}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    defaultValue={user.email}
                                    placeholder="your@email.com"
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
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest" style={labelStyle}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    defaultValue={user.phone}
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
                                />
                            </div>

                            {/* Photo URL */}
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest" style={labelStyle}>
                                    Photo URL
                                </label>
                                <div className="flex gap-3 items-center">
                                    <input
                                        type="url"
                                        defaultValue={user.photoURL}
                                        placeholder="https://your-photo-url.com"
                                        className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                                        style={inputStyle}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.45)';
                                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(160,120,64,0.1)';
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(232,213,163,0.15)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    />
                                    {/* Avatar preview */}
                                    <div
                                        className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0"
                                        style={{ border: '1px solid rgba(232,213,163,0.2)' }}
                                    >
                                        <img
                                            src={user.photoURL}
                                            alt="preview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest" style={labelStyle}>
                                    Bio
                                </label>
                                <textarea
                                    defaultValue={user.bio}
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
                                />
                            </div>
                        </div>

                        {/* Save button */}
                        <button
                            className="w-full py-3 rounded-xl text-sm font-semibold"
                            style={{
                                background: 'linear-gradient(135deg, #e8d5a3, #c4a05a)',
                                color: '#0f0c07',
                                fontFamily: 'Georgia, serif',
                                boxShadow: '0 4px 20px rgba(232,213,163,0.2)',
                                transition: 'all 0.25s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 6px 28px rgba(232,213,163,0.35)';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(232,213,163,0.2)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Save Changes →
                        </button>
                    </div>
                )}

                {/* ══════════════════
                    TAB 2 — Password
                ══════════════════ */}
                {activeTab === 'password' && (
                    <div
                        className="rounded-3xl p-8 space-y-6"
                        style={{
                            background: 'linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)',
                            border: '1px solid rgba(232,213,163,0.1)',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                        }}
                    >
                        <div>
                            <p className="text-xs uppercase tracking-widest" style={labelStyle}>
                                Security
                            </p>
                            <h3
                                className="text-lg font-bold mt-0.5"
                                style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}
                            >
                                Change Password
                            </h3>
                        </div>

                        <div className="space-y-5">
                            {[
                                { label: 'Current Password',  placeholder: 'Enter current password'  },
                                { label: 'New Password',       placeholder: 'Enter new password'       },
                                { label: 'Confirm Password',   placeholder: 'Confirm new password'     },
                            ].map(({ label, placeholder }) => (
                                <div key={label} className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest" style={labelStyle}>
                                        {label}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            placeholder={placeholder}
                                            className="w-full px-4 pr-12 py-3 rounded-xl text-sm outline-none"
                                            style={inputStyle}
                                            onFocus={(e) => {
                                                e.currentTarget.style.borderColor = 'rgba(232,213,163,0.45)';
                                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(160,120,64,0.1)';
                                            }}
                                            onBlur={(e) => {
                                                e.currentTarget.style.borderColor = 'rgba(232,213,163,0.15)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs"
                                            style={{ color: '#5a4a2a' }}
                                        >
                                            👁
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="w-full py-3 rounded-xl text-sm font-semibold"
                            style={{
                                background: 'linear-gradient(135deg, #e8d5a3, #c4a05a)',
                                color: '#0f0c07',
                                fontFamily: 'Georgia, serif',
                                boxShadow: '0 4px 20px rgba(232,213,163,0.2)',
                                transition: 'all 0.25s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 6px 28px rgba(232,213,163,0.35)';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(232,213,163,0.2)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Update Password →
                        </button>
                    </div>
                )}

                {/* ══════════════════
                    TAB 3 — Danger
                ══════════════════ */}
                {activeTab === 'danger' && (
                    <div
                        className="rounded-3xl p-8 space-y-5"
                        style={{
                            background: 'linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)',
                            border: '1px solid rgba(248,113,113,0.15)',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                        }}
                    >
                        <div>
                            <p className="text-xs uppercase tracking-widest" style={{ color: '#f87171' }}>
                                Danger Zone
                            </p>
                            <h3
                                className="text-lg font-bold mt-0.5"
                                style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}
                            >
                                Account Actions
                            </h3>
                        </div>

                        {/* Sign out row */}
                        <div
                            className="flex items-center justify-between p-5 rounded-2xl"
                            style={{
                                background: 'rgba(232,213,163,0.03)',
                                border: '1px solid rgba(232,213,163,0.08)',
                            }}
                        >
                            <div>
                                <p className="text-sm font-semibold"
                                    style={{ color: '#e8d5a3', fontFamily: 'Georgia, serif' }}>
                                    Sign Out
                                </p>
                                <p className="text-xs mt-0.5" style={{ color: '#5a4a2a' }}>
                                    Sign out of your Bibliocraft account.
                                </p>
                            </div>
                            <Link href="/login">
                                <button
                                    className="px-5 py-2 rounded-xl text-sm font-semibold"
                                    style={{
                                        border: '1px solid rgba(232,213,163,0.2)',
                                        color: '#c4aa78',
                                        fontFamily: 'Georgia, serif',
                                        transition: 'all 0.25s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(232,213,163,0.08)';
                                        e.currentTarget.style.color = '#e8d5a3';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = '#c4aa78';
                                    }}
                                >
                                    Sign Out
                                </button>
                            </Link>
                        </div>

                        {/* Delete account row */}
                        <div
                            className="flex items-center justify-between p-5 rounded-2xl"
                            style={{
                                background: 'rgba(248,113,113,0.04)',
                                border: '1px solid rgba(248,113,113,0.12)',
                            }}
                        >
                            <div>
                                <p className="text-sm font-semibold"
                                    style={{ color: '#f87171', fontFamily: 'Georgia, serif' }}>
                                    Delete Account
                                </p>
                                <p className="text-xs mt-0.5" style={{ color: '#5a4a2a' }}>
                                    Permanently delete your account and all data.
                                </p>
                            </div>
                            <button
                                className="px-5 py-2 rounded-xl text-sm font-semibold"
                                style={{
                                    background: 'rgba(248,113,113,0.1)',
                                    border: '1px solid rgba(248,113,113,0.3)',
                                    color: '#f87171',
                                    fontFamily: 'Georgia, serif',
                                    transition: 'all 0.25s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(248,113,113,0.2)';
                                    e.currentTarget.style.borderColor = 'rgba(248,113,113,0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(248,113,113,0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(248,113,113,0.3)';
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )}

                {/* ── Back link ── */}
                <div className="text-center pb-4">
                    <Link href="/books">
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
                            ← Back to All Books
                        </span>
                    </Link>
                </div>

            </div>
        </main>
    );
};

export default ProfilePage;