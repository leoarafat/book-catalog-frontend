/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { BookData, IBooks } from "../../../types/globalTypes";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLatestBooks: builder.query({
      query: () => "/books/latest-book",
    }),

    getBooks: builder.query({
      query: (params) => `/books${params ? `?${params}` : ""}`,
      providesTags: ["post", "deletepost"],
    }),
    createBook: builder.mutation<BookData, Partial<BookData>>({
      query: (bookData: IBooks) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["post"],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["update"],
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getComment: builder.query({
      query: (id) => `/books/comment/${id}`,
      providesTags: ["comments"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["update"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deletepost"],
    }),
  }),
});

export const {
  useGetLatestBooksQuery,
  useGetBooksQuery,
  useSingleBookQuery,
  usePostCommentMutation,
  useGetCommentQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useCreateBookMutation,
} = bookApi;
