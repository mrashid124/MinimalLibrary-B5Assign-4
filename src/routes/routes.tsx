import MainLayout from "@/layout/MainLayout";
import AddBook from "@/pages/AddBook";

import AllBooks from "@/pages/AllBooks";
import Borrow from "@/pages/Borrow";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: AllBooks },
      { path: "/books", Component: AllBooks },
      {
        path: "addBook",
        Component: AddBook,
      },
      {
        path: "borrow",
        Component: Borrow,
      },
    ],
  },
]);