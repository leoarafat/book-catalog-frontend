/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books/latest-book",
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery } = bookApi;
