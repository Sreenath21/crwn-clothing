import React from "react";

import DirectoryItem from "../directory-item/DirectoryItem";
import { DirectoryContainer } from "./Directory.styles.jsx";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
