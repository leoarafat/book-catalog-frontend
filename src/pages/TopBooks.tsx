import { TopBookCard } from "../components/TopBookCard";

export const TopBooks = () => {
  let booksData: [];
  return (
    <div>
      <div className="py-16">
        <div className="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20">
          <div>
            <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              top 10 recently added books <br className="sm:block" hidden />
              and finance
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
            {/* {booksData?.map((book) => (
              <TopBookCard book={book} />
            ))} */}
            <TopBookCard />
          </div>
        </div>
      </div>
    </div>
  );
};
