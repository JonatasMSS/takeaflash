export function Form() {
  return (
    <form className="my-1 flex w-full flex-col gap-4">
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
              <option value={"Tag 1"} />
              <option value={"Tag 2"} />
              <option value={"Tag 3"} />
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

      <div className="flex flex-col">
        <span className="font-bold">Conteúdo - Reposta</span>
        <input
          type="text"
          className="rounded-md p-1 outline-none transition-all focus:border-2 focus:border-black"
          name="content"
          id="content"
        />
      </div>
    </form>
  );
}
