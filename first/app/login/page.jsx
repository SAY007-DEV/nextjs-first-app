"use client"

import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
        
        <h1 className="text-3xl font-semibold text-neutral-100">
          Welcome Back
        </h1>
        <p className="mt-2 text-sm text-neutral-400">
          Login to your account
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm text-neutral-400">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-sm text-neutral-100 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="text-sm text-neutral-400">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-sm text-neutral-100 outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white py-3 text-sm font-medium text-black hover:bg-neutral-200 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-white hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
