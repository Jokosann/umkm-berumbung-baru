import { User } from '@prisma/client';
import Image from 'next/image';

import { FaUserPlus } from 'react-icons/fa';

export default function DashboardUsers({ users }: { users: User[] }) {
  console.log(users);
  return (
    <div>
      <h1 className="mb-2 text-xl md:text-2xl font-semibold">Users</h1>
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Profile Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          {users.length > 0 ? (
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image width={50} height={50} src={user.image} alt={user.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin ? 'Admin' : 'Member'}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <p className="mt-2 italic">Tidak ada users</p>
          )}
        </table>
      </div>
    </div>
  );
}
