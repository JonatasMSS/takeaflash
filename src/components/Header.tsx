"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import { User } from "lucide-react";
import Link from "next/link";

export function Header() {
  const UserLogo = () => {
    return (
      <div className="rounded-full border-2 border-black bg-zinc-100 p-2">
        <User />
      </div>
    );
  };

  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <div className="flex w-full items-center gap-2 border-b-2 border-zinc-700 p-2 ">
      <UserLogo />
      <p onClick={() => signIn()}>
        <Link
          href={"/api/auth/login"}
          className="underline transition-all hover:text-zinc-500"
        >
          Crie uma conta
        </Link>{" "}
        e salve seus flashcards!
      </p>
    </div>
  );
}
