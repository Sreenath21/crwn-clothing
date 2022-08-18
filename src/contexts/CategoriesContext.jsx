import { useState, useEffect, createContext } from "react";

import {
  addCollectionAndDocuments,
  getCategoriesAndDocument,
} from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocument();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
