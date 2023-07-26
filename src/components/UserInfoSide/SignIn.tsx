"use client";
import { User } from "lucide-react";
import { signIn } from "next-auth/react";

export function SignIn() {
  const UserLogo = () => {
    return (
      <div className="rounded-full border-2 border-black bg-zinc-100 p-2">
        <User />
      </div>
    );
  };

  return (
    <div className="flex w-full items-center gap-2 border-b-2 border-zinc-700 p-2 ">
      <UserLogo />
      <p>
        <button
          onClick={() => signIn("google").then((resp) => console.log(resp))}
          className="underline transition-all hover:text-zinc-500"
        >
          Crie uma conta
        </button>{" "}
        e salve seus flashcards!
      </p>
    </div>
  );
}
