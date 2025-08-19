// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-[#6B7A90] pt-12 pb-8"
      style={{
        // léger dégradé bleu -> blanc à la Lovable
        background:
          "linear-gradient(90deg, rgba(240,247,255,0.6) 0%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + tagline + socials */}
        <div>
          <img src="/logo.png" alt="Beway Labs" className="h-7 mb-5" />
          <p className="mb-5 max-w-md">
            Your way to innovation. We deliver fast, modern, and AI‑powered
            digital solutions that drive real business results.
          </p>

          <div className="flex gap-3">
            {/* Email */}
            <a
              href="mailto:contact@bewaylabs.com"
              aria-label="Email"
              className="p-2 rounded-xl bg-[#E9F3FF] text-[#2286FF] hover:bg-[#DDF0FF] transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.236l7.386 6.316a1 1 0 0 0 1.228 0L20 8.236V18H4Z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/bewaylabs/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl bg-[#E9F3FF] text-[#2286FF] hover:bg-[#DDF0FF] transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 7.5A1.94 1.94 0 1 1 5 5.56 1.94 1.94 0 0 1 6.94 7.5ZM5.5 9h2.88v9.5H5.5Zm5.09 0h2.76v1.3h.04a3.03 3.03 0 0 1 2.73-1.5c2.92 0 3.46 1.92 3.46 4.42v5.28h-2.88v-4.68c0-1.12 0-2.56-1.56-2.56s-1.8 1.22-1.8 2.48v4.76H10.6Z"/>
              </svg>
            </a>
            {/* X/Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-xl bg-[#E9F3FF] text-[#2286FF] hover:bg-[#DDF0FF] transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3l-3.5 5L7 2H2l6.5 9L2 22h3l4-6 4 6h5l-7-10L18 2Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-[#0E1B2C] mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/offers#website" className="hover:text-[#2286FF]">Websites & Landing Pages</Link></li>
            <li><Link href="/offers#copilot" className="hover:text-[#2286FF]">AI Agents & Automations</Link></li>
            <li><Link href="/offers#custom" className="hover:text-[#2286FF]">Custom App Development</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-[#0E1B2C] mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-[#2286FF]">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#2286FF]">Contact</Link></li>
            <li><a href="#top" className="hover:text-[#2286FF]">Back to Top</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-10 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Beway Labs. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[#2286FF]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#2286FF]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}