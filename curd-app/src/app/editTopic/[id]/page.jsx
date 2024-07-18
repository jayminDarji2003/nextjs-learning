import React from "react";

function EditTopic({ params }) {
  console.log(params);
  return (
    <form className="flex flex-col gap-3 my-5  ">
      <input
        type="text"
        placeholder="add topic"
        className="px-3 border-2 border-slate-300  py-2 "
        required
      />
      <input
        type="text"
        placeholder="add topic"
        className="px-3 border-2 border-slate-300 py-2"
        required
      />

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-slate-900 p-3 text-white font-bold w-fit "
        >
          Edit Topic
        </button>
      </div>
    </form>
  );
}

export default EditTopic;
