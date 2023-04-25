import React, { useState, useEffect, useRef } from "react";

function CommentsForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !emailEl) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.remove("name", name);
      localStorage.remove("email", email);
    }
  };
  return (
    <div className="bg-[#fde2e4] shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-[#f08080]/40 pb-4">
        Comments
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-1 focus:ring-[#f08080] text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-4">
        <input
          type="text"
          ref={nameEl}
          name="name"
          placeholder="Name"
          className="p-4 outline-none w-full rounded-lg focus:ring-1 focus:ring-[#f08080] text-gray-700"
        />
        <input
          type="text"
          ref={emailEl}
          name="email"
          placeholder="Email"
          className="p-4 outline-none w-full rounded-lg focus:ring-1 focus:ring-[#f08080] text-gray-700"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-gray-500 cursor-pointer ml-2"
            htmlFor="storeData"
          >
            Save my email and name for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          className="transition duration-500 ease hover:bg-orange-300 inline-block bg-[#f08080] text-md rounded-full text-white px-7 py-3 cursor-pointer"
          type="button"
          onClick={handleCommentSubmission}
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500"></span>
        )}
      </div>
    </div>
  );
}

export default CommentsForm;
//#f08080
//#fde2e4
