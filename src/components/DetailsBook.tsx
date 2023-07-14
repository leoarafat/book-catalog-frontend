/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState, ChangeEvent } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import Swale from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/books/bookApi";
import { toast } from "react-hot-toast";

interface BookData {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
}

const DetailsBook: React.FC<BookData> = () => {
  const [comment, setComment] = useState("");
  const [reviewList, setReviewList] = useState<string[]>([]);
  const { id } = useParams();
  const {
    data: bookData,
    isLoading,
    isError,
    isSuccess,
  } = useSingleBookQuery(id);
  const formattedPublicationDate = new Date(
    bookData?.data?.publicationDate
  ).toLocaleDateString();

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleDeleteBook = () => {
    Swale.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this book!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result: any) => {
      if (result.isConfirmed) {
        // Perform delete book logic here
        console.log("Book deleted");
      }
    });
  };

  const handleEditBook = () => {
    // Implement edit book logic here
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return toast.error("Something went wrong");
  }
  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setReviewList((prevList) => [...prevList, comment]);
      setComment("");
    }
  };

  return (
    <>
      {isSuccess && (
        <div className="bg-white rounded-lg shadow-md p-6 md:w-[600px] mx-auto md:my-4 flex flex-col">
          <div className="md:flex md:justify-between md:items-center">
            <div>
              <div className="flex mb-4 justify-between">
                {" "}
                <Link to={`/details-book/${id}`}>
                  <button
                    className="mr-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm transition-colors"
                    onClick={handleEditBook}
                  >
                    <FaEdit className="inline-block mr-1" />
                    Edit Book
                  </button>
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-sm transition-colors"
                  onClick={handleDeleteBook}
                >
                  <FaTrash className="inline-block mr-1" />
                  Delete Book
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {bookData?.data?.title}
              </h2>
              <p className="text-gray-600 mb-4">{bookData?.data?.author}</p>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 text-sm mr-2">Genre:</span>
                <span className="text-gray-700 text-sm">
                  {bookData?.data?.genre}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-2">
                  Publication Date:
                </span>
                <span className="text-gray-700 text-sm">
                  {formattedPublicationDate}
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span className="bg-blue-500 text-white py-1 px-2 rounded-full text-sm">
              {bookData?.data?.reviews?.length} Reviews
            </span>
          </div>
          <textarea
            className="mt-4 p-2 border border-gray-300 rounded-md w-full h-20 resize-none"
            placeholder="Leave a comment"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm flex items-center justify-center transition-colors"
            onClick={handleCommentSubmit}
          >
            <CiLocationArrow1 className="mr-1" />
            Add Comment
          </button>
          <div className="mt-4">
            <h3 className="font-bold mb-2">Reviews:</h3>
            {reviewList.length > 0 ? (
              <ul className="list-disc list-inside">
                {reviewList.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsBook;
