import { HelpCircle, Plus } from "lucide-react";

export function BigIntroFlashcard() {
  function Title() {
    return (
      <h2 className="flex flex-col font-alt text-8xl">
        Take <span className="text-grenadier">An Flash</span>
      </h2>
    );
  }

  return (
    <div className=" my-20 flex w-[90%] justify-between rounded-lg border-[1px] border-black bg-softGorse p-5  shadow-md">
      <Title />
      {/* button */}
      <div className="flex flex-col justify-evenly">
        <button className="rounded-full bg-green-500 p-1">
          <Plus size={50} strokeWidth={1.5} />
        </button>
        <button className=" rounded-full bg-gorse p-1">
          <HelpCircle size={50} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
