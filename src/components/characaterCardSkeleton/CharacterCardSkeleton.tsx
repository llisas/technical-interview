import {SkeletonCardContainer,SkeletonImageWrapper, SkeletonImage, SkeletonName, SkeletonContainer} from "./CharacterCardSkeleton.styles"

const SkeletonComponent = () => {
  return (
    <SkeletonCardContainer>
      <SkeletonImageWrapper>
        <SkeletonImage />
      </SkeletonImageWrapper>
      <SkeletonName />
      <SkeletonName />
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
