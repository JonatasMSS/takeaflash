"use client";

import { getSession, useSession } from "next-auth/react";
import { Selector, SelectorItem } from "./Selector";
import { prisma } from "@/lib/prisma";
import { useEffect, useState } from "react";

const fetchTags = async ({ email }: { email: string }) => {
  const tags: SelectorItem = await fetch(`/api/tags?email=${email}`).then(
    (resp) => resp.json()
  );

  return tags;
};

export function Filter() {
  const { data: session } = useSession();
  const [selectorItem, setSelectorItem] = useState<SelectorItem>([
    { tagColor: "#30f712", text: "Crie uma!", value: "" },
  ]);
  useEffect(() => {
    if (session) {
      fetchTags({ email: session.user?.email! }).then((resp) =>
        setSelectorItem(resp)
      );
    }
  }, [session]);
  return (
    <div className="flex w-full items-center gap-2 rounded-lg border-2 border-black p-2">
      <span className="font-bold">Filtrar por</span>
      <Selector itens={selectorItem} />
    </div>
  );
}
