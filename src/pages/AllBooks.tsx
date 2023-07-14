/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link, useNavigate } from "react-router-dom";
import { useState, ChangeEvent, useEffect } from "react";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import TopBookCard from "../components/BookCard";
import { IBooks } from "../types/globalTypes";
import { toast } from "react-hot-toast";
import { useAppSelector } from "../redux/hooks";

export const AllBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);
  console.log(user);
  const { data, isLoading, isError, isSuccess } = useGetBooksQuery(null);
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [navigate, user]);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQueryValue = e.target.value;
    console.log(searchQueryValue);
    setSearchQuery(searchQueryValue);
  };

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedYearValue = e.target.value;
    console.log(selectedYearValue);
    setSelectedYear(selectedYearValue);
  };

  const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedGenreValue = e.target.value;
    console.log(selectedGenreValue);
    setSelectedGenre(selectedGenreValue);
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    toast.error("Something went wrong");
  }

  return (
    <>
      {isSuccess && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 max-w-7xl mx-auto relative">
          <div className="col-span-1 md:col-span-1 lg:col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 lg:static h-[calc(100vh-80px)]">
            <div>
              <h1 className="text-2xl uppercase">Search book</h1>
              <div className="flex items-center space-x-2 mt-3">
                <input
                  type="text"
                  placeholder="Search by title, author, or genre"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl uppercase">Filters book</h1>
              <div className="max-w-xl">
                <label
                  htmlFor="year"
                  className="text-sm font-medium text-gray-700"
                >
                  Publication Year:
                </label>
                <select
                  id="year"
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="block px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-48"
                >
                  <option value="">All Years</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              <div className="max-w-xl">
                <label
                  htmlFor="genre"
                  className="text-sm font-medium text-gray-700"
                >
                  Genre:
                </label>
                <select
                  id="genre"
                  value={selectedGenre}
                  onChange={handleGenreChange}
                  className="block px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-48"
                >
                  <option value="">All Genres</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
              <div className="max-w-xl">
                {user.email ? (
                  <Link to="/add-new-book">
                    <button className="px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      Add New Book
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      Add New Book
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-10 pb-8 md:pb-12 lg:pb-0">
            {data?.data.map((book: IBooks) => (
              <TopBookCard book={book} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
