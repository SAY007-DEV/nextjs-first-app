import Spline from '@splinetool/react-spline';



export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">

        {/* Hero Section */}

<section className="relative h-screen w-full overflow-hidden isolate flex items-center justify-center">

  {/* Spline Background */}
  <div className="absolute inset-0 -z-10">
    <Spline scene="https://prod.spline.design/5hxRFILpgii8YAMq/scene.splinecode" />
  </div>

  {/* Overlay for contrast */}
  <div className="absolute inset-0 bg-neutral-950/70 -z-10" />

  {/* Content */}
  <div className="relative text-center">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
      Build Modern Apps <br className="hidden md:block" />
      With Confidence
    </h1>

    <p className="mt-6 max-w-2xl mx-auto text-neutral-400">
      A modern Next.js application built for performance, scalability,
      and great user experience.
    </p>

    <div className="mt-10 flex justify-center gap-4">
      <a
        href="/contact"
        className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-200 transition"
      >
        Get Started
      </a>

      <a
        href="/about"
        className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-900 transition"
      >
        Learn More
      </a>
    </div>
  </div>
</section>

      <div className="mx-auto max-w-7xl px-6">

{/* testing */}

{/* <section className="py-32 grid md:grid-cols-2 gap-12 items-center">

  <div>
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
      Build Modern Apps <br className="hidden md:block" />
      With Confidence
    </h1>

    <p className="mt-6 max-w-xl text-neutral-400">
      A modern Next.js application built for performance, scalability,
      and great user experience.
    </p>
  </div>

  <div className="h-[400px] md:h-[500px]">
    <Spline scene="https://prod.spline.design/5hxRFILpgii8YAMq/scene.splinecode" />
  </div>

</section> */}


        {/* Features */}
        <section className="py-24">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Why Choose Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="feature-card">
              <h3 className="text-lg font-medium mb-2">Fast Performance</h3>
              <p className="text-sm text-neutral-400">
                Optimized rendering, minimal JS, and blazing-fast load times
                powered by Next.js.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-medium mb-2">Modern Stack</h3>
              <p className="text-sm text-neutral-400">
                Built with the latest tools and best practices for long-term
                scalability.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-medium mb-2">User Focused</h3>
              <p className="text-sm text-neutral-400">
                Designed with real users in mind — clean UI, intuitive UX,
                and accessibility first.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 border-t border-neutral-800">
          <div className="grid gap-10 md:grid-cols-3 text-center">
            <div>
              <h3 className="text-4xl font-bold">10k+</h3>
              <p className="mt-2 text-sm text-neutral-400">Active Users</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">99.9%</h3>
              <p className="mt-2 text-sm text-neutral-400">Uptime</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="mt-2 text-sm text-neutral-400">Support</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to get started?
          </h2>

          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Join thousands of developers building modern web applications
            with our platform.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-4 text-sm font-medium text-black hover:bg-neutral-200 transition"
          >
            Contact Us
          </a>
        </section>

      </div>
    </div>
  )
}
