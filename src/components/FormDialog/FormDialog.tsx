/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode, useEffect, useState } from "react";
import { Form } from "./Form";
import { SelectorItem } from "../Selector";
import { useSession } from "next-auth/react";
import { useLocalStorage } from "@/lib/LocalStorage";

const fetchTags = async ({ email }: { email: string }) => {
  const tags: SelectorItem = await fetch(`/api/tags?email=${email}`).then(
    (resp) => resp.json()
  );

  return tags;
};

export function FormDialog({ children }: { children: ReactNode }) {
  const [userTags, setUserTags] = useState<SelectorItem>([]);
  const { localTags, setLocalTags } = useLocalStorage();
  const { data: session } = useSession();

  const handleOpenDialog = () => {
    if (session) {
      fetchTags({ email: session?.user?.email! }).then((resp) => {
        setUserTags(resp);
      });
    } else {
      const tagsInStorage = localTags();
      setUserTags(tagsInStorage);
    }
  };

  return (
    <Dialog.Root onOpenChange={handleOpenDialog}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 flex h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 flex-col rounded-md border-2 border-black bg-sahara p-5">
          <Dialog.Title className="font-alt text-2xl ">
            Novo flashcard
          </Dialog.Title>

          <Form tags={userTags} session={session} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
