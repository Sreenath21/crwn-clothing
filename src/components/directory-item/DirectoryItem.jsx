import React from "react";

import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./DirectoryItem.styles.jsx";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
