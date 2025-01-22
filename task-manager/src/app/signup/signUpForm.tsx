"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call your API here
  };

  return (
    <>
      <form onSubmit={handleSignup} className="space-y-4">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <label htmlFor="lastname" className="block mb-2">
          Last Name
        </label>
        <input
          type="text"
          placeholder="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <label className="block mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <label className="block mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <Button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Sign Up
        </Button>
      </form>
    </>
  );
}
