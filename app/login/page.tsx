"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 呼叫 /api/auth/login 或其他 API
    console.log("Login with:", email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black/10">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 p-6 rounded-lg shadow-md w-120 h-150 flex flex-col space-y-7"
      >
        <h1 className="text-xl font-bold text-center">登入</h1>
        <input
          type="email"
          placeholder="Email"
          className="border border-white rounded-lg px-5 py-4 outline-none bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-white rounded-lg px-5 py-4 outline-none bg-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => router.push("/")}
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          登入
        </button>
      </form>
    </div>
  );
}
