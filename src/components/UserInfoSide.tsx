"use client";
import { SignIn } from "./Header";
import { useSession } from "next-auth/react";
import { BigIntroFlashcard } from "./BigIntroFlashcard";
import { UserInfo } from "./UserInfo";
import { Loader } from "./Loader";

export function UserInfoSide() {
  function MetricSection() {
    return (
      <div className="flex w-full flex-col p-2">
        <span className="w-full border-b-2 border-zinc-700 text-2xl font-bold">
          Suas métricas
        </span>
      </div>
    );
  }

  const { data: session, status } = useSession();

  const Loading = () => {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center border-r-2 border-zinc-800 bg-sahara">
        <Loader />
      </div>
    );
  };

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="flex h-full w-full flex-col items-center border-r-2 border-zinc-800 bg-sahara ">
      {/* Header */}
      {session ? (
        <UserInfo img={session.user!.image} username={session.user!.name} />
      ) : (
        <SignIn />
      )}

      <BigIntroFlashcard />

      {/* Data Section */}
      <MetricSection />
    </div>
  );
}
