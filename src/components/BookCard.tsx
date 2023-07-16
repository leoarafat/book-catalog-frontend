import { FC, useEffect, useState } from "react";
import { IBooks } from "../types/globalTypes";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineClockCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import {
  useCreateWishlistMutation,
  useRemoveWishlistMutation,
} from "../redux/features/books/bookApi";
import { toast } from "react-hot-toast";
import { Loader } from "./Loader";

interface TopBookCardProps {
  book: IBooks;
}

const BookCard: FC<TopBookCardProps> = ({ book }) => {
  const { _id, author, genre, publicationDate, title }: IBooks = book;
  const [createWishlist, { isLoading: createLoading }] =
    useCreateWishlistMutation();
  const [removeWishlist, { isLoading: removeLoading }] =
    useRemoveWishlistMutation();
  const formattedPublicationDate = new Date(
    publicationDate
  ).toLocaleDateString();

  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleWishlist = () => {
    if (isInWishlist) {
      // Book is already in the wishlist, perform removal logic
      removeWishlist(_id!)
        .unwrap()
        .then(() => {
          setIsInWishlist(false);
          toast("Removed from Wishlist");
          // Remove book from local storage
          const storedWishlist = localStorage.getItem("wishlist");
          if (storedWishlist) {
            const wishlist = JSON.parse(storedWishlist);
            const updatedWishlist = wishlist.filter(
              (bookId: string) => bookId !== _id
            );
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
          }
        })
        .catch(() => {
          toast.error("Error removing from Wishlist");
        });
    } else {
      // Book is not in the wishlist, perform addition logic
      createWishlist(book)
        .unwrap()
        .then(() => {
          setIsInWishlist(true);
          toast.success("Added to Wishlist");
          // Add book to local storage
          const storedWishlist = localStorage.getItem("wishlist");
          if (storedWishlist) {
            const wishlist = JSON.parse(storedWishlist);
            const updatedWishlist = [...wishlist, _id];
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
          } else {
            localStorage.setItem("wishlist", JSON.stringify([_id]));
          }
        })
        .catch(() => {
          toast.error("Error adding to Wishlist");
        });
    }
  };
  useEffect(() => {
    // Check local storage for wishlist data
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      const wishlist = JSON.parse(storedWishlist);
      setIsInWishlist(wishlist.includes(_id));
    }
  }, [_id]);

  if (createLoading || removeLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="h-[600px] p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div className="space-y-12 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341069.png"
            className="w-16 mx-auto"
            width="512"
            height="512"
            alt="book illustration"
          />
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Author: {author}</p>
            <p className="text-gray-600 dark:text-gray-300">Genre: {genre}</p>
            <p className="text-gray-600 dark:text-gray-300">
              Published: {formattedPublicationDate}
            </p>
            <div className="flex justify-center space-x-4">
              <button onClick={handleWishlist}>
                {isInWishlist ? (
                  <AiFillHeart className="text-red-500 text-2xl transition duration-300 group-hover:text-red-700" />
                ) : (
                  <AiOutlineHeart className="text-gray-600 dark:text-white text-2xl transition duration-300 group-hover:text-red-500" />
                )}
              </button>
              <AiOutlineClockCircle className="text-gray-600 dark:text-white text-2xl transition duration-300 group-hover:text-blue-500" />
              <AiOutlineCheckCircle className="text-gray-600 dark:text-white text-2xl transition duration-300 group-hover:text-green-500" />
            </div>

            <Link to={`/book-details/${_id}`}>
              <button className="inline-block px-4 py-2 mt-4 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
