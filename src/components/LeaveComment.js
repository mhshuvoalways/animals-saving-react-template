import React from "react";

const LeaveComment = () => {
  return (
    <div className="w-10/12 m-auto mt-20">
      <p className="text-4xl mb-10">Leave a comment</p>
      <form className="bg-gray-200 p-10 w-full md:w-6/12 space-y-5">
        <div>
          <label className="text-xl text-gray-600">Name *</label>
          <br />
          <input
            type="text"
            className="w-full py-3 px-2 mt-2 border border-gray-400 outline-none"
          />
        </div>
        <div>
          <label className="text-xl text-gray-600">Email *</label>
          <br />
          <input
            type="email"
            className="w-full py-3 px-2 mt-2 border border-gray-400 outline-none"
          />
        </div>
        <div>
          <label className="text-xl text-gray-600">Email *</label>
          <br />
          <textarea className="w-full h-40 p-2 mt-2 border border-gray-400 outline-none" />
        </div>
        <p className="bg-red-600 p-3 w-full md:w-40 text-center text-white cursor-pointer font-semibold hover:bg-gray-600">Post Comment</p>
      </form>
    </div>
  );
};

export default LeaveComment;
