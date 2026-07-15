"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "All Books" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f0c07 0%, #080603 100%)",
      }}
    >
      {/* Top decorative border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #e8d5a3, transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-10 blur-[100px]"
        style={{ background: "#a07840" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 pt-16 pb-8">
        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <h2
                className="text-3xl font-bold"
                style={{
                  fontFamily: "Georgia, serif",
                  background: "linear-gradient(135deg, #e8d5a3, #a07840)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Bibliocraft
              </h2>
              <div
                className="mt-2 h-px w-12"
                style={{
                  background: "linear-gradient(90deg, #e8d5a3, transparent)",
                }}
              />
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#7a6a4a", fontFamily: "Georgia, serif" }}
            >
              Discover your next favourite book from our curated collection
              spanning fiction, science, history, and beyond. Your digital
              library, always open.
            </p>

            {/* Newsletter mini */}
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "#a07840" }}
              >
                Stay in the loop
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 text-sm px-4 py-2 rounded-lg outline-none"
                  style={{
                    background: "rgba(232,213,163,0.06)",
                    border: "1px solid rgba(232,213,163,0.15)",
                    color: "#e8d5a3",
                  }}
                />
                <button
                  className="px-4 py-2 rounded-lg text-xs font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #e8d5a3, #c4a05a)",
                    color: "#0f0c07",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: "#a07840", fontFamily: "Georgia, serif" }}
            >
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>
                    <span
                      className="group flex items-center gap-2 text-sm transition-colors duration-200"
                      style={{ color: "#7a6a4a", fontFamily: "Georgia, serif" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#e8d5a3")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#7a6a4a")
                      }
                    >
                      <span
                        className="inline-block w-4 h-px transition-all duration-200 group-hover:w-6"
                        style={{ background: "#a07840" }}
                      />
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Socials */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: "#a07840", fontFamily: "Georgia, serif" }}
            >
              Get In Touch
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <span style={{ color: "#a07840" }}>✉</span>
                <span className="text-sm" style={{ color: "#7a6a4a" }}>
                  support@bibliocraft.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ color: "#a07840" }}>☎</span>
                <span className="text-sm" style={{ color: "#7a6a4a" }}>
                  +1 234 567 890
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ color: "#a07840" }}>◎</span>
                <span className="text-sm" style={{ color: "#7a6a4a" }}>
                  New York, NY 10001
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#5a4a2a" }}
            >
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm transition-all duration-250"
                  style={{
                    background: "rgba(232,213,163,0.06)",
                    border: "1px solid rgba(232,213,163,0.12)",
                    color: "#7a6a4a",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(232,213,163,0.12)";
                    e.currentTarget.style.borderColor =
                      "rgba(232,213,163,0.35)";
                    e.currentTarget.style.color = "#e8d5a3";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(232,213,163,0.06)";
                    e.currentTarget.style.borderColor =
                      "rgba(232,213,163,0.12)";
                    e.currentTarget.style.color = "#7a6a4a";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(232,213,163,0.08)" }}
        >
          <p className="text-xs" style={{ color: "#3a3020" }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#5a4a2a" }}>Bibliocraft</span>. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <Link key={item} href="#">
                <span
                  className="text-xs transition-colors duration-200"
                  style={{ color: "#3a3020" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#7a6a4a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#3a3020")
                  }
                >
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
