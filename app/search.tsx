"use client";

import Link from "next/link";
import { useState } from "react";

export default function Search() {
  const courseDB = fetch(`/api/db`);
  const [classroom, setClassroom] = useState("");
  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setClassroom(event.target.value);
    console.log("Searching for classrom:", event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Search Classroom" value={classroom} onChange={handleInputChange} className="p-2 rounded-lg border border-gray-300 focus:outline-none" />
      <Link href="/api/auth/signin" className="p-2 rounded-lg border border-gray-300 focus:outline-none">Sign in </Link>
    </div>
  )
}