"use client"; // ⬅️ Add this to force client-side rendering

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear()); // Ensures it updates on the client
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-4 text-center mt-10">
      <p className="text-sm">&copy; {year} My App. All rights reserved.</p>
    </footer>
  );
}
