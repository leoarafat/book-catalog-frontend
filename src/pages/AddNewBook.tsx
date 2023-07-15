/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BookData, FormValues, IBooks } from "../types/globalTypes";
import { useCreateBookMutation } from "../redux/features/books/bookApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export const AddNewBook = () => {
  const { user } = useAppSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createBook, createBookOptions] = useCreateBookMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    const bookData: BookData = { ...data, userEmail: user?.email };
    const result = await createBook(bookData);
    if ("data" in result) {
      reset();
      navigate("/all-books/");
      toast.success("Book created successfully!");
    } else {
      toast.error("Error creating book");
    }
    setIsSubmitting(false);
  };

  // Handle success or error messages after book creation
  if (createBookOptions.isSuccess) {
    toast.success("Book created successfully!");
  } else if (createBookOptions.isError) {
    toast.error("Error creating book");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block mb-2 text-lg font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: true })}
          className={`w-full px-4 py-2 border rounded-lg ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.title && (
          <span className="text-red-500">Title is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="author"
          className="block mb-2 text-lg font-medium text-gray-700"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          {...register("author", { required: true })}
          className={`w-full px-4 py-2 border rounded-lg ${
            errors.author ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.author && (
          <span className="text-red-500">Author is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="genre"
          className="block mb-2 text-lg font-medium text-gray-700"
        >
          Genre
        </label>
        <input
          type="text"
          id="genre"
          {...register("genre", { required: true })}
          className={`w-full px-4 py-2 border rounded-lg ${
            errors.genre ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.genre && (
          <span className="text-red-500">Genre is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="publicationDate"
          className="block mb-2 text-lg font-medium text-gray-700"
        >
          Publication Date
        </label>
        <input
          type="text"
          id="publicationDate"
          {...register("publicationDate", { required: true })}
          className={`w-full px-4 py-2 border rounded-lg ${
            errors.publicationDate ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.publicationDate && (
          <span className="text-red-500">Publication Date is required</span>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg focus:outline-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};
