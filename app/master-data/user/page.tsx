import { getAllUsers } from '@/server/query/users';
import React from 'react';

// Define as an async Server Component
debugger;
const Page = async () => {
  const response = await getAllUsers(`/posts`);
console.log(response);
  return (

    <div>
      <h1>All Users</h1>
      <ul>
        {response.map((user: any) => (
          <li key={user.id}>{user.title}</li>  // Adjust properties based on your data structure
        ))}
      </ul>
    </div>
  );
};

export default Page;