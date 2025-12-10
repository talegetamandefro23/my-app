import { getAllUsers } from '@/server/query/users';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React from 'react';
import Dashboard from '@/components/dashboard';

const Page = async () => {
  const response = await getAllUsers(`/posts`);
console.log(response);
  return (
    <Dashboard breadcrumb="User">
<Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Open Dialog</button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Dialog Title</DialogTitle>
        <p>This is a modern dialog using ShadCN UI.</p>
      </DialogContent>
    </Dialog>
    </Dashboard>
  );
};

export default Page;