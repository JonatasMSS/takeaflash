import Image from "next/image";

interface UserInfoProps {
  img: string | null | undefined;
  username: string | null | undefined;
}

import { signOut, useSession } from "next-auth/react";
import { Loader } from "./Loader";

export function UserInfo({ img, username }: UserInfoProps) {
  const handleSignOut = () => {
    signOut();
  };

  const { status } = useSession();

  if (status === "loading") {
    <div className="flex w-full items-center justify-center">
      Carregando...
    </div>;
  }

  return (
    <div className="flex w-full items-center justify-between gap-2 border-b-2 border-zinc-700 p-2 ">
      <div className="flex items-center gap-2">
        <Image
          alt="User Image"
          width={32}
          height={32}
          className="rounded-full border-2 border-black"
          src={img as string}
        />
        <p>
          Bem vindo <span className="font-bold">{username}</span>
        </p>
      </div>

      <button
        onClick={() => handleSignOut()}
        className="underline transition-colors hover:text-black/40"
      >
        Logout
      </button>
    </div>
  );
}
