"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { Form } from "./Form";

export function FormDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog.Root defaultOpen>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 flex h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 flex-col rounded-md border-2 border-black bg-sahara p-5">
          <Dialog.Title className="font-alt text-2xl ">
            Novo flashcard
          </Dialog.Title>

          <Form />

          <div className="flex w-full">
            <Dialog.Close asChild>
              <button className="">Confirmar</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
