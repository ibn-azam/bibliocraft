import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 ">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Logo / About */}
          <div>
            <h2 className="text-3xl font-bold text-primary">
              BookStore
            </h2>

            <p className="mt-4 text-gray-500 leading-7">
              Discover your next favorite book from our wide
              collection of technology, science, fiction, and
              educational books.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/books" className="hover:text-primary">
                  Books
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-gray-500">
              Email: support@bookstore.com
            </p>

            <p className="text-gray-500 mt-2">
              Phone: +1 234 567 890
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                className="btn btn-circle btn-outline"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                className="btn btn-circle btn-outline"
              >
                <FaTwitter />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="btn btn-circle btn-outline"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="btn btn-circle btn-outline"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-base-300 mt-10 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} BookStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;