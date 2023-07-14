"use client";

import * as Select from "@radix-ui/react-select";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Dot } from "lucide-react";
import { debug } from "console";

const SelectItem = ({
  children,
  value,
  tagColor,
}: {
  children: ReactNode;
  value: string;
  tagColor: string | "#FFF";
}) => {
  return (
    <Select.Item
      value={value}
      style={{ backgroundColor: `${tagColor}` }}
      className={`relative bg-${tagColor} rounded-md p-1  outline-none transition-all hover:scale-90 hover:border-2 hover:border-black `}
    >
      <Select.ItemText className="text-blue-500">{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute">
        <Dot />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

export const Selector = () => {
  return (
    <Select.Root>
      <Select.Trigger className="border-martinquie flex gap-1 rounded-full border-2 border-none p-1">
        <Select.Value placeholder="Tags" />
        <Select.Icon className="scale-50 rounded-full bg-zinc-800 px-1 text-white" />
      </Select.Trigger>

      <Select.Portal className="my-10 max-h-32 w-32 rounded-md border-2 border-martinquier bg-white p-2 shadow-md">
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <SelectItem value="A" tagColor="#73ff00">
              Arquivo A
            </SelectItem>

            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
