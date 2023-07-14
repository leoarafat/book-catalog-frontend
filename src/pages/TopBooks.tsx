/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { toast } from "react-hot-toast";
import TopBookCard from "../components/BookCard";
import { useGetLatestBooksQuery } from "../redux/features/books/bookApi";
import { IBooks } from "../types/globalTypes";

const TopBooks = () => {
  const { data, isLoading, isError, isSuccess } = useGetLatestBooksQuery(null);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    toast.error("Something went wrong");
  }
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="lg:w-1/4 lg:h-screen bg-gray-200 dark:bg-gray-800">
        {/* Sidebar content */}
        {/* ... */}
      </div>
      <div className="flex-1">
        {isSuccess && (
          <div className="py-16">
            <div className="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20">
              <div>
                <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                  Top 10 recently added books <br className="sm:block" hidden />
                  and finance
                </h2>
              </div>
              <div className="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
                {data?.data.map((book: IBooks) => (
                  <TopBookCard book={book} key={book._id} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBooks;
