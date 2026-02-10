import Footer from "../Components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        {/* Hero */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-400">
            We build modern, scalable, and user-focused digital products
            designed to make an impact.
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="grid gap-12 md:grid-cols-2 mb-24">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-neutral-400 leading-relaxed">
              Our mission is to create high-quality software that solves real
              problems, delivers meaningful experiences, and empowers people
              through thoughtful design and reliable engineering.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-neutral-400 leading-relaxed">
              We envision a future where technology feels intuitive, inclusive,
              and genuinely helpful — not overwhelming. Every product we build
              moves us closer to that goal.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="text-lg font-medium mb-2">Quality First</h3>
              <p className="text-sm text-neutral-400">
                We focus on clean code, thoughtful UX, and long-term
                maintainability in everything we build.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="text-lg font-medium mb-2">User-Centered</h3>
              <p className="text-sm text-neutral-400">
                Real people use our products. Their needs guide every design
                and technical decision we make.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="text-lg font-medium mb-2">Transparency</h3>
              <p className="text-sm text-neutral-400">
                We value honesty, clarity, and open communication — with users,
                partners, and within our team.
              </p>
            </div>
          </div>
        </div>

        {/* Team / Story */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-10 mb-20">
          <h2 className="text-3xl font-semibold mb-6">
            Our Story
          </h2>
          <p className="text-neutral-400 leading-relaxed max-w-3xl">
            Founded by a team of passionate developers and designers, our
            journey started with a simple idea: build software we would
            genuinely love to use. Since then, we’ve grown into a product-driven
            company focused on delivering value through simplicity and
            performance.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Want to work with us?
          </h3>
          <p className="text-neutral-400 mb-6">
            We’re always open to new ideas, collaborations, and challenges.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-200 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Footer */}
      </div>
       <Footer/>
    </div>
  )
}
