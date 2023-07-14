/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBooks } from "../../../types/globalTypes";

const initialState: IBooks = {
  title: "",
  author: "",
  genre: "",
  publicationDate: "",
  reviews: [],
};
const booksSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getAllBook: (state) => {
      console.log(state);
    },
  },
});
export const { getAllBook } = booksSlice.actions;
export default booksSlice.reducer;
