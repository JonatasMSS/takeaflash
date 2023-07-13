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

  return (
    <div className="flex w-full items-center gap-2 border-b-2 border-zinc-700 p-2 ">
      <UserLogo />
      <p>
        <Link
          href={""}
          className="underline transition-all hover:text-zinc-500"
        >
          Crie uma conta
        </Link>{" "}
        e salve seus flashcards!
      </p>
    </div>
  );
}
