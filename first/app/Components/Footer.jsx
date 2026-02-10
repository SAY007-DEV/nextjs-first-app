export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">
              MyApp
            </h3>
            <p className="text-sm leading-relaxed">
              Building modern, scalable, and user-focused digital products
              designed to make an impact.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium text-neutral-200 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="hover:text-neutral-100 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-neutral-100 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-neutral-100 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-neutral-200 mb-4">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/blog" className="hover:text-neutral-100 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-neutral-100 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-neutral-100 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-medium text-neutral-200 mb-4">
              Let’s talk
            </h4>
            <p className="text-sm mb-4">
              Have a project in mind or want to collaborate?
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-white px-5 py-2 text-xs font-medium text-black hover:bg-neutral-200 transition"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 md:flex-row">
          <p className="text-xs">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-neutral-100 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-neutral-100 transition">
              GitHub
            </a>
            <a href="#" className="hover:text-neutral-100 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
