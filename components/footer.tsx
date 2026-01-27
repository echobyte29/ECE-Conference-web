import Link from "next/link";
import { FiMail, FiMapPin, FiCalendar } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-conference-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-light mb-6 tracking-tight">ROCV-AI 2026</h3>
            <p className="text-sm font-light leading-relaxed text-white/80 mb-4">
              International Conference on Emerging Trends in Robotics, Communication, VLSI,
              and Artificial Intelligence
            </p>
            <div className="space-y-3 text-sm">
              <p className="flex items-center text-white/80">
                <FiCalendar className="mr-3" />
                May 15-16, 2026
              </p>
              <p className="flex items-center text-white/80">
                <FiMapPin className="mr-3" />
                KLEF Bowrampet Campus, Hyderabad, India
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-conference-accent transition-colors font-light text-white/80">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-conference-accent transition-colors font-light text-white/80">
                  About
                </Link>
              </li>
              <li>
                <Link href="/call-for-papers" className="hover:text-conference-accent transition-colors font-light text-white/80">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link href="/important-dates" className="hover:text-conference-accent transition-colors font-light text-white/80">
                  Important Dates
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-conference-accent transition-colors font-light text-white/80">
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-light mb-6 tracking-tight">Contact</h3>
            <div className="space-y-3 text-sm text-white/80 font-light leading-relaxed">
              <p>
                Department of Electronics and Communication Engineering,<br />
                KLEF Bowrampet Campus,<br />
                Hyderabad
              </p>
              <p className="flex items-center">
                <FiMail className="mr-3" />
                dr.kirankumar@klh.edu.in
              </p>
              <p>Mobile: +91-9703332849</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-center text-white/70 font-light leading-relaxed">
            &copy; {new Date().getFullYear()} ROCV-AI 2026. All rights reserved.<br />
            Organized by Department of Electronics and Communication Engineering, KLEF Bowrampet Campus
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
