import React from "react";
import {
  SkeletonCardContainer,
  SkeletonImageWrapper,
  SkeletonImage,
  SkeletonName,
  SkeletonContainer,
} from "./CharacterCardSkeleton.styles";

const SkeletonComponent = () => {
  return (
    <SkeletonCardContainer data-testid="skeleton-component">
      <SkeletonImageWrapper data-testid="skeleton-image-wrapper">
        <SkeletonImage data-testid="skeleton-image" />
      </SkeletonImageWrapper>
      <SkeletonName data-testid="skeleton-name" />
      <SkeletonName data-testid="skeleton-name" />
    </SkeletonCardContainer>
  );
};

const SkeletonGrid = () => {
  return (
    <SkeletonContainer>
      {[...Array(20)].map((_, index) => (
        <SkeletonComponent key={index} />
      ))}
    </SkeletonContainer>
  );
};

export default SkeletonGrid;
