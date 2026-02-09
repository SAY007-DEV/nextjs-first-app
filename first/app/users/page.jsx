const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
  },
  {
    id: "3",
    name: "Alex Brown",
    email: "alex@example.com",
    role: "Editor",
  },
]

import Link from "next/link"

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        
        <h1 className="text-4xl font-bold mb-10">Users</h1>

        <div className="grid gap-6">
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:bg-neutral-800 transition"
            >
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-neutral-400">{user.email}</p>
              <span className="mt-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs">
                {user.role}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
