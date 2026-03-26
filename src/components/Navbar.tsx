'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          🫎 Mentor Moose
        </Link>

        <div className="flex gap-4 items-center">
          <Link href="/tutors" className="hover:underline">
            Find Tutors
          </Link>
          {session?.user ? (
            <>
              <Link href="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Link href="/become-tutor" className="hover:underline">
                Become Tutor
              </Link>
              <Link href="/profile" className="hover:underline">
                {session.user.name || 'Profile'}
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/api/auth/signin" className="bg-green-600 px-3 py-1 rounded hover:bg-green-700">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
