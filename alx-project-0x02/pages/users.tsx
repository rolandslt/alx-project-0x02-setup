// pages/users.tsx
import React from 'react'
import { UserProps } from '@/interfaces'
import UserCard from '@/components/common/UserCard'

interface UsersPageProps {
  users: UserProps[]
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </main>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}

export default UsersPage

