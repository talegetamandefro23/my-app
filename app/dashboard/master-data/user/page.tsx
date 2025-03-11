import { getAllUsers } from '@/server/query/users';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React from 'react';

const Page = async () => {
  const response = await getAllUsers(`/posts`);
console.log(response);
  return (
<Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Open Dialog</button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Dialog Title</DialogTitle>
        <p>This is a modern dialog using ShadCN UI.</p>
      </DialogContent>
    </Dialog>
//     <div>
//       <h1>All Users</h1>
//       <ul>
//   {response.map((user: any) => (
//     <li key={user.id}>
//       <strong>UserId:</strong> {user.userId} <br />
//       <strong>ID:</strong> {user.id}<br />
//       <strong>Title:</strong> {user.title}<br/>
//       <strong>Body:</strong> {user.body}<br/>
//     </li>
//   ))}
// </ul>
//     </div>
  );
};

export default Page;