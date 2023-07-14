/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { toast } from "react-hot-toast";
import TopBookCard from "../components/TopBookCard";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { IBooks } from "../types/globalTypes";

export const TopBooks = () => {
  const { data, isLoading, isError, isSuccess } = useGetBooksQuery(null);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return toast.error("Something went wrong");
  }
  return (
    <div>
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
                <TopBookCard book={book} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
