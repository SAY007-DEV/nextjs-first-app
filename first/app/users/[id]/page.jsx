const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    bio: "Leads the platform and manages system architecture.",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    bio: "Active user and product tester.",
  },
  {
    id: "3",
    name: "Alex Brown",
    email: "alex@example.com",
    role: "Editor",
    bio: "Manages content and editorial workflow.",
  },
]

export default function UserPage({ params }) {
  const user = users.find((u) => u.id === params.id)

  if (!user) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        User not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
        
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-neutral-400 mb-6">{user.email}</p>

        <div className="space-y-4 text-sm">
          <div>
            <span className="text-neutral-500">Role</span>
            <p>{user.role}</p>
          </div>

          <div>
            <span className="text-neutral-500">Bio</span>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
