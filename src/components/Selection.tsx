"use client";
import { Select, Option } from "@material-tailwind/react";

export function Selection() {
  return (
    <div className="flex flex-col">
      <Select
        variant="outlined"
        color="gray"
        className="border-2 border-black outline-black  focus:outline-none focus:ring-0 "
        label="Tags"
      >
        <Option className="bg-blue-500 text-red-400">Teste</Option>
        <Option>Teste</Option>
        <Option>Teste</Option>
        <Option>Teste</Option>
        <Option>Teste</Option>
        <Option>Teste</Option>
        <Option>Teste</Option>
        <Option>Teste</Option>
      </Select>
    </div>
  );
}
