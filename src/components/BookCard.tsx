import { FC } from "react";
import { IBooks } from "../types/globalTypes";
import { Link } from "react-router-dom";

interface TopBookCardProps {
  book: IBooks;
}

const TopBookCard: FC<TopBookCardProps> = ({ book }) => {
  const { _id, author, genre, publicationDate, title } = book;

  const formattedPublicationDate = new Date(
    publicationDate
  ).toLocaleDateString();
  return (
    <Link to={`/book-details/${_id}`}>
      <div className="max-w-md mx-auto">
        <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="space-y-12 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341069.png"
              className="w-16 mx-auto"
              width="512"
              height="512"
              alt="burger illustration"
            />
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Author: {author}
              </p>
              <p className="text-gray-600 dark:text-gray-300">Genre: {genre}</p>{" "}
              <p className="text-gray-600 dark:text-gray-300">
                Published: {formattedPublicationDate}
              </p>{" "}
              <p className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="relative w-5 h-5 text-gray-600 dark:text-white transition duration-300 group-hover:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopBookCard;
