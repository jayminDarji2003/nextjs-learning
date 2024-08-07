import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

function TopicLists() {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>

        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={"/editTopic/123"}>
            <FaEdit size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default TopicLists;
