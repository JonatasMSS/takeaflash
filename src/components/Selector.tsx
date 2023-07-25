"use client";

import * as Select from "@radix-ui/react-select";
import { ReactNode, useContext, useEffect } from "react";
import { Dot } from "lucide-react";
import { useLocalStorage } from "@/lib/LocalStorage";
import { filterContext } from "@/context/FilterProvider";
import { UppercaseFirstLetter } from "@/utils/UppercaseFirstLetter";

interface SelectItemProps {
  children: ReactNode;
  value: string;
  tagColor: string | "#FFF";
}

const SelectItem = ({ children, value, tagColor }: SelectItemProps) => {
  return (
    <Select.Item
      value={value}
      style={{ backgroundColor: `${tagColor}` }}
      className={`relative bg-${tagColor} rounded-md p-1 outline-none  transition-all hover:scale-90 hover:cursor-pointer hover:border-2 hover:border-black `}
    >
      <Select.ItemText className="text-blue-500">{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute">
        <Dot />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

export type SelectorItem = {
  value: string;
  text: string;
  tagColor: string;
}[];
interface SelectorProps {
  itens: SelectorItem;
}

export const Selector = ({ itens }: SelectorProps) => {
  const { setFilter } = useContext(filterContext);

  const handleSetFilter = (value: string) => {
    setFilter(value.toLowerCase());
  };

  return (
    <Select.Root onValueChange={handleSetFilter}>
      <Select.Trigger className="border-martinquie flex gap-1 rounded-full border-2 border-none p-1">
        <Select.Value placeholder="Tags" />
        <Select.Icon className="scale-50 rounded-full bg-zinc-800 px-1 text-white" />
      </Select.Trigger>

      <Select.Portal className="my-10 max-h-32 w-32 rounded-md border-2 border-martinquier bg-white p-2 shadow-md">
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport className="flex flex-col gap-1">
            {itens.map((item, i) => {
              return (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  tagColor={item.tagColor}
                >
                  {item.text}
                </SelectItem>
              );
            })}

            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
