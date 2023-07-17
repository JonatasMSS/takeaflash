"use client";
import { useSession } from "next-auth/react";
import { UserInfo } from "../UserInfo";
import { SignIn } from "./SignIn";
import { Loading } from "./Loading";

export function Header() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>
      {session ? (
        <UserInfo img={session.user!.image} username={session.user!.name} />
      ) : (
        <SignIn />
      )}
    </>
  );
}
