import { AllBookCard } from "../components/AllBookCard";

export const AllBooks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 max-w-7xl mx-auto relative">
      <div className="col-span-1 md:col-span-1 lg:col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 lg:static h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Search book</h1>
          <div className="flex items-center space-x-2 mt-3">
            <input
              type="text"
              placeholder="Search by title, author, or genre"
              // value={searchQuery}
              // onChange={handleSearch}
              className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl uppercase">Filters book</h1>
          <div className="max-w-xl">
            <label htmlFor="year" className="text-sm font-medium text-gray-700">
              Publication Year:
            </label>
            <select
              id="year"
              // value={selectedYear}
              // onChange={handleYearChange}
              className="block px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-48"
            >
              <option value="">All Years</option>
              <option value="">All Years</option>
              <option value="">All Years</option>
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
              // value={selectedYear}
              // onChange={handleYearChange}
              className="block px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-48"
            >
              <option value="">Genre</option>
              <option value="">Genre</option>
              <option value="">Genre</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-10 pb-8 md:pb-12 lg:pb-0">
        {/* {booksData?.map((book: IBook) => (
          <AllBookCard books={book} key={book.id} />
        ))} */}
        <AllBookCard />
      </div>
    </div>
  );
};
