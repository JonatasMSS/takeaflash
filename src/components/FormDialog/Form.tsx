"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Session } from "next-auth";
import { SelectorItem } from "../Selector";
import { ChangeEvent, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ErrorShow } from "./ErrorShow";
import { useLocalStorage } from "@/lib/LocalStorage";

interface FormProps {}

export function Form({
  tags,
  session,
}: {
  tags: SelectorItem;
  session: Session | null;
}) {
  const { setLocalFlashcards, setLocalTags } = useLocalStorage();

  const validationSchema = yup.object({
    tag: yup.string().required("Tag requerida!"),
    color: yup.string(),
    title: yup.string().required("Title requerida!"),
    content: yup.string().required("Content requerido!"),
  });

  const formik = useFormik({
    initialValues: {
      tag: "",
      color: "#000000",
      title: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({ title, color, tag, content }) => {
      setLocalTags([
        {
          tagColor: color,
          text: tag,
          value: tag.toLocaleLowerCase(),
        },
      ]);
      setLocalFlashcards({
        title,
        content,
        tag,
        tagColor: color,
      });
      alert("Flashcard criado com sucesso!");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="my-1 flex w-full flex-col gap-4"
    >
      {/* Tag and title */}
      <div className="flex w-full items-center gap-5">
        {/* Tag and color */}
        <div className="flex flex-col">
          <span className="font-bold">Tag e cor</span>
          <div className="flex items-center gap-1  ">
            <input
              className="rounded-md p-1 text-start outline-none transition-all  focus:border-2 focus:border-black"
              list="tags"
              {...formik.getFieldProps("tag")}
              id="tag"
            />
            <datalist id="tags">
              {tags.map((tag, i) => (
                <option key={i} value={tag.value} />
              ))}
            </datalist>

            <input
              type="color"
              id="color"
              {...formik.getFieldProps("color")}
              className="rounded-md"
            />
          </div>
          {formik.touched.tag && formik.errors.tag && (
            <ErrorShow text={formik.errors.tag} />
          )}
        </div>

        {/*Title*/}
        <div className="flex w-full flex-col">
          <span className="font-bold">Título</span>
          <input
            type="text"
            className="rounded-md p-1 outline-none transition-all focus:border-2 focus:border-black"
            {...formik.getFieldProps("title")}
            id="title"
          />
          {formik.touched.title && formik.errors.title && (
            <ErrorShow text={formik.errors.title} />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <span className="font-bold">Conteúdo - Reposta</span>
        <input
          type="text"
          className="rounded-md p-1 outline-none transition-all focus:border-2 focus:border-black"
          {...formik.getFieldProps("content")}
          id="content"
        />
        {formik.touched.content && formik.errors.content && (
          <ErrorShow text={formik.errors.content} />
        )}
      </div>

      {/* Action buttons */}
      <div className="flex w-full gap-2">
        <button
          type="submit"
          className="my-2 rounded-md bg-green-400 p-1 transition-all hover:bg-green-300"
        >
          Confirmar
        </button>
        <Dialog.Close asChild>
          <button
            type="button"
            className="my-2 rounded-md bg-red-400 p-1 transition-all hover:bg-red-300"
          >
            Cancelar
          </button>
        </Dialog.Close>
      </div>
    </form>
  );
}
