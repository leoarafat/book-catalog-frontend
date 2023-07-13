import React, { useState, ChangeEvent } from "react";
import { CiLocationArrow1 } from "react-icons/ci";

interface BookData {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
}

const BookCard: React.FC = () => {
  const bookData: BookData = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    publicationDate: "July 11, 1960",
    reviews: [],
  };

  const [comment, setComment] = useState("");
  const [reviewList, setReviewList] = useState<string[]>([]);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    setReviewList((prevList) => [...prevList, comment]);
    setComment("");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:w-64 mx-auto md:my-4">
      <h2 className="text-xl font-bold mb-2">{bookData.title}</h2>
      <p className="text-gray-600 mb-4">Author: {bookData.author}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-sm">Genre: {bookData.genre}</span>
        <span className="text-gray-500 text-sm">
          {bookData.publicationDate}
        </span>
      </div>
      <div className="mb-4">
        <span className="bg-blue-500 text-white py-1 px-2 rounded-full text-sm">
          {bookData.reviews.length} Reviews
        </span>
      </div>
      <textarea
        className="mt-4 p-2 border border-gray-300 rounded-md w-full h-20 resize-none"
        placeholder="Leave a comment"
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <button
        className="mt-2 bg-blue-500 text-white py-1 px-2 rounded-full text-sm flex items-center"
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
  );
};

export default BookCard;
