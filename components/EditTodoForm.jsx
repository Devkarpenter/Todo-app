"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTodocForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className=" px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <textarea
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="px-8 py-2"
        placeholder="Topic Description"
        rows="4" // Adjust the number of rows as needed
        cols="50" // Optional: Adjust the width of the textarea
      ></textarea>


      <button className="bg-green-600 font-bold text-white px-8 py-2 w-fit">
        Update Todo
      </button>
    </form>
  );
}