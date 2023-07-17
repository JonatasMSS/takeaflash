import { Loader } from "../Loader";

export const Loading = () => {
  return (
    <div className="absolute flex h-full  w-full flex-col items-center justify-center  bg-sahara/50">
      <Loader />
    </div>
  );
};
