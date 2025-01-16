import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export const Tab = ({ tab, tag }) => {
  const router = useRouter();
  return (
    <Button
      key={tag.id}
      className={`!text-sm !px-2.5 !py-1 bg-white  !font-medium border flex items-center justify-center h-8 ${
        tab === tag.id
          ? "!text-grey-1800 !border-grey-1800"
          : "text-grey-400 border-grey-100 hover:text-grey-1800 hover:border-grey-1800"
      }`}
      size="sm"
      color="tag"
      variant="tag"
      onClick={() => {
        router.push(`?tab=${tag.id}`);
      }}
    >
      {tag.name}
    </Button>
  );
};
