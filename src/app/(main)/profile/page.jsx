"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import EditProfileModal from "@/components/profile/EditProfileModal";
import { toast } from "react-toastify";

const tabs = [
  { key: "profile", label: "👤 Profile" },
  { key: "password", label: "🔒 Password" },
  { key: "danger", label: "⚠ Account" },
];

const inputStyle = {
  background: "rgba(232,213,163,0.05)",
  border: "1px solid rgba(232,213,163,0.15)",
  color: "#e8d5a3",
  fontFamily: "Georgia, serif",
};

const labelStyle = {
  color: "#a07840",
  fontFamily: "Georgia, serif",
};

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending, refetch } = authClient.useSession();
  const [activeTab, setActiveTab] = useState("profile");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  if (isPending) {
    return (
      <main
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg, #0f0c07 0%, #1a1508 40%, #0f0c07 100%)",
        }}
      >
        <p style={{ color: "#c4a05a", fontFamily: "Georgia, serif" }}>
          Loading profile...
        </p>
      </main>
    );
  }

  if (!session?.user) {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{
          background:
            "linear-gradient(180deg, #0f0c07 0%, #1a1508 40%, #0f0c07 100%)",
        }}
      >
        <p style={{ color: "#c4a05a", fontFamily: "Georgia, serif" }}>
          You need to be signed in to view this page.
        </p>
        <Link href="/login">
          <button
            className="px-6 py-2 rounded-xl text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, #e8d5a3, #c4a05a)",
              color: "#0f0c07",
            }}
          >
            Go to Login
          </button>
        </Link>
      </main>
    );
  }

  const user = {
    name: session.user.name || "Unnamed Reader",
    email: session.user.email || "",
    photoURL:
      session.user.image ||
      `https://api.dicebear.com/7.x/lorelei/svg?seed=${session.user.email}`,
    phone: session.user.phone || "",
    bio: session.user.bio || "",
    joinDate: session.user.createdAt
      ? new Date(session.user.createdAt).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })
      : "—",
  };

  return (
    <main
      className="min-h-screen relative"
      style={{
        background:
          "linear-gradient(180deg, #0f0c07 0%, #1a1508 40%, #0f0c07 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #e8d5a3, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-[120px]"
        style={{ background: "#a07840" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 py-20 space-y-8">
        <div className="text-center">
          <p
            className="text-xs uppercase tracking-[0.4em] mb-2"
            style={{ color: "#a07840", fontFamily: "Georgia, serif" }}
          >
            Account
          </p>
          <h1
            className="text-4xl font-bold"
            style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
          >
            My Profile
          </h1>
          <div
            className="mx-auto mt-3 h-px w-20"
            style={{
              background:
                "linear-gradient(90deg, transparent, #e8d5a3, transparent)",
            }}
          />
        </div>

        <div
          className="rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)",
            border: "1px solid rgba(232,213,163,0.12)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 opacity-10 blur-3xl"
            style={{
              background: "radial-gradient(circle, #e8d5a3, transparent)",
            }}
          />

          <div className="relative flex-shrink-0">
            <div
              className="w-24 h-24 rounded-2xl overflow-hidden"
              style={{ border: "2px solid rgba(232,213,163,0.25)" }}
            >
              <img
                src={user.photoURL}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full"
              style={{ background: "#4ade80", border: "2px solid #16120a" }}
            />
          </div>

          <div className="text-center sm:text-left flex-1 space-y-1">
            <h2
              className="text-2xl font-bold"
              style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
            >
              {user.name}
            </h2>
            <p className="text-sm" style={{ color: "#7a6a4a" }}>
              {user.email}
            </p>
            {user.bio && (
              <p
                className="text-xs italic"
                style={{ color: "#5a4a2a", fontFamily: "Georgia, serif" }}
              >
                "{user.bio}"
              </p>
            )}
            <p className="text-xs" style={{ color: "#3a3020" }}>
              Member since{" "}
              <span style={{ color: "#5a4a2a" }}>{user.joinDate}</span>
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="flex-shrink-0 self-start px-5 py-2 rounded-xl text-sm font-semibold"
            style={{
              border: "1px solid rgba(232,213,163,0.2)",
              color: "#c4aa78",
              fontFamily: "Georgia, serif",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(232,213,163,0.08)";
              e.currentTarget.style.borderColor = "rgba(232,213,163,0.35)";
              e.currentTarget.style.color = "#e8d5a3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(232,213,163,0.2)";
              e.currentTarget.style.color = "#c4aa78";
            }}
          >
            ✎ Edit
          </button>
        </div>

        <div
          className="flex gap-1 p-1 rounded-2xl"
          style={{
            background: "rgba(232,213,163,0.04)",
            border: "1px solid rgba(232,213,163,0.08)",
          }}
        >
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className="flex-1 py-2.5 rounded-xl text-xs font-medium"
              style={{
                fontFamily: "Georgia, serif",
                transition: "all 0.25s ease",
                background:
                  activeTab === key
                    ? "linear-gradient(135deg, #e8d5a3, #c4a05a)"
                    : "transparent",
                color: activeTab === key ? "#0f0c07" : "#7a6a4a",
                boxShadow:
                  activeTab === key
                    ? "0 2px 12px rgba(232,213,163,0.2)"
                    : "none",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === "profile" && (
          <div
            className="rounded-3xl p-8 space-y-6"
            style={{
              background: "linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)",
              border: "1px solid rgba(232,213,163,0.1)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={labelStyle}
                >
                  Personal Info
                </p>
                <h3
                  className="text-lg font-bold mt-0.5"
                  style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
                >
                  Your Details
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs px-4 py-2 rounded-xl font-semibold"
                style={{
                  background: "linear-gradient(135deg, #e8d5a3, #c4a05a)",
                  color: "#0f0c07",
                }}
              >
                Edit Profile
              </button>
            </div>

            <div className="space-y-5">
              {[
                { label: "Full Name", value: user.name },
                { label: "Email Address", value: user.email },
                { label: "Phone Number", value: user.phone || "—" },
                { label: "Bio", value: user.bio || "—" },
              ].map(({ label, value }) => (
                <div key={label} className="space-y-2">
                  <label
                    className="text-xs uppercase tracking-widest"
                    style={labelStyle}
                  >
                    {label}
                  </label>
                  <div
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={inputStyle}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "password" && (
          <div
            className="rounded-3xl p-8 space-y-6"
            style={{
              background: "linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)",
              border: "1px solid rgba(232,213,163,0.1)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
            }}
          >
            <div>
              <p
                className="text-xs uppercase tracking-widest"
                style={labelStyle}
              >
                Security
              </p>
              <h3
                className="text-lg font-bold mt-0.5"
                style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
              >
                Change Password
              </h3>
            </div>

            <div className="space-y-5">
              {[
                {
                  label: "Current Password",
                  placeholder: "Enter current password",
                },
                { label: "New Password", placeholder: "Enter new password" },
                {
                  label: "Confirm Password",
                  placeholder: "Confirm new password",
                },
              ].map(({ label, placeholder }) => (
                <div key={label} className="space-y-2">
                  <label
                    className="text-xs uppercase tracking-widest"
                    style={labelStyle}
                  >
                    {label}
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder={placeholder}
                      className="w-full px-4 pr-12 py-3 rounded-xl text-sm outline-none"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(232,213,163,0.45)";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px rgba(160,120,64,0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(232,213,163,0.15)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs"
                      style={{ color: "#5a4a2a" }}
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
                background: "linear-gradient(135deg, #e8d5a3, #c4a05a)",
                color: "#0f0c07",
                fontFamily: "Georgia, serif",
                boxShadow: "0 4px 20px rgba(232,213,163,0.2)",
                transition: "all 0.25s",
              }}
            >
              Update Password →
            </button>
          </div>
        )}

        {activeTab === "danger" && (
          <div
            className="rounded-3xl p-8 space-y-5"
            style={{
              background: "linear-gradient(135deg, #1e1a0e 0%, #16120a 100%)",
              border: "1px solid rgba(248,113,113,0.15)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
            }}
          >
            <div>
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "#f87171" }}
              >
                Danger Zone
              </p>
              <h3
                className="text-lg font-bold mt-0.5"
                style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
              >
                Account Actions
              </h3>
            </div>

            <div
              className="flex items-center justify-between p-5 rounded-2xl"
              style={{
                background: "rgba(232,213,163,0.03)",
                border: "1px solid rgba(232,213,163,0.08)",
              }}
            >
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#e8d5a3", fontFamily: "Georgia, serif" }}
                >
                  Sign Out
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#5a4a2a" }}>
                  Sign out of your Bibliocraft account.
                </p>
              </div>
              <button
                onClick={handleSignOut}
                className="px-5 py-2 rounded-xl text-sm font-semibold"
                style={{
                  border: "1px solid rgba(232,213,163,0.2)",
                  color: "#c4aa78",
                  fontFamily: "Georgia, serif",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(232,213,163,0.08)";
                  e.currentTarget.style.color = "#e8d5a3";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#c4aa78";
                }}
              >
                Sign Out
              </button>
            </div>

            <div
              className="flex items-center justify-between p-5 rounded-2xl"
              style={{
                background: "rgba(248,113,113,0.04)",
                border: "1px solid rgba(248,113,113,0.12)",
              }}
            >
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#f87171", fontFamily: "Georgia, serif" }}
                >
                  Delete Account
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#5a4a2a" }}>
                  Permanently delete your account and all data.
                </p>
              </div>
              <button
                className="px-5 py-2 rounded-xl text-sm font-semibold"
                style={{
                  background: "rgba(248,113,113,0.1)",
                  border: "1px solid rgba(248,113,113,0.3)",
                  color: "#f87171",
                  fontFamily: "Georgia, serif",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(248,113,113,0.2)";
                  e.currentTarget.style.borderColor = "rgba(248,113,113,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(248,113,113,0.1)";
                  e.currentTarget.style.borderColor = "rgba(248,113,113,0.3)";
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )}

        <div className="text-center pb-4">
          <Link href="/books">
            <span
              className="text-xs cursor-pointer"
              style={{
                color: "#5a4a2a",
                transition: "color 0.2s",
                fontFamily: "Georgia, serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d5a3")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5a4a2a")}
            >
              ← Back to All Books
            </span>
          </Link>
        </div>
      </div>

      <EditProfileModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        user={user}
        onSuccess={() => {
          refetch();
          setModalOpen(false);
          toast.success("Profile updated successfully!");
        }}
      />
    </main>
  );
};

export default ProfilePage;
