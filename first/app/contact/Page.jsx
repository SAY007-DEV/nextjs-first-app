"use client"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Have a question, a project idea, or just want to say hi?
            Fill out the form or reach us through the details below.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Contact Form */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="text-sm text-neutral-400">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-sm outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-sm text-neutral-400">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-sm outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-sm text-neutral-400">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your idea..."
                  className="mt-2 w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-sm outline-none focus:border-white"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-white py-3 text-sm font-medium text-black hover:bg-neutral-200 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>

              <ul className="space-y-4 text-sm text-neutral-300">
                <li>
                  <span className="block text-neutral-500">Email</span>
                  support@myapp.com
                </li>

                <li>
                  <span className="block text-neutral-500">Phone</span>
                  +1 (555) 123-4567
                </li>

                <li>
                  <span className="block text-neutral-500">Address</span>
                  123 Modern Street, Tech City, USA
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-neutral-400 mb-4">
                Follow Us
              </h3>

              <div className="flex gap-4">
                <a href="#" className="social-btn">Twitter</a>
                <a href="#" className="social-btn">GitHub</a>
                <a href="#" className="social-btn">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-16 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
      </div>
    </div>
  )
}
