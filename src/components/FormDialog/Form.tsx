"use client";

import { Session } from "next-auth";
import { SelectorItem } from "../Selector";
import { ChangeEvent, useState } from "react";

interface FormProps {}

export function Form({ tags }: { tags: SelectorItem }) {
  return (
    <form className="my-1 flex w-full flex-col gap-4">
      {/* Tag and title */}
      <div className="flex w-full items-center gap-5">
        {/* Tag and color */}
        <div className="flex flex-col">
          <span className="font-bold">Tag e cor</span>
          <div className="flex items-center gap-1  ">
            <input
              className="rounded-md p-1 text-start outline-none transition-all  focus:border-2 focus:border-black"
              list="tags"
              name="tag"
              id="tag"
            />

            <datalist id="tags">
              {tags.map((tag, i) => (
                <option key={i} value={tag.value} />
              ))}
            </datalist>

            <input type="color" className="rounded-md" />
          </div>
        </div>

        {/*Title*/}
        <div className="flex w-full flex-col">
          <span className="font-bold">Título</span>
          <input
            type="text"
            className="rounded-md p-1 outline-none transition-all focus:border-2 focus:border-black"
            name="title"
            id="title"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <span className="font-bold">Conteúdo - Reposta</span>
        <input
          type="text"
          className="rounded-md p-1 outline-none transition-all focus:border-2 focus:border-black"
          name="content"
          id="content"
        />
      </div>

      {/* Action buttons */}
      <div className="flex w-full gap-2">
        <button className="my-2 rounded-md bg-green-400 p-1 transition-all hover:bg-green-300">
          Confirmar
        </button>

        <button className="my-2 rounded-md bg-red-400 p-1 transition-all hover:bg-red-300">
          Cancelar
        </button>
      </div>
    </form>
  );
}
