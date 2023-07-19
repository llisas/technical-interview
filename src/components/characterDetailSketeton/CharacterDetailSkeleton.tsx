import {
  ContainerSkeleton,
  TitleSkeleton,
  ImageSkeleton,
  DescriptionSkeleton,
  NavContainerSkeleton,
} from "./CharacterDetailSkeleton.styles";

const DetailSkeleton = () => {
  return (
    <>
      <ContainerSkeleton data-testid="container-skeleton">
        <TitleSkeleton data-testid="title-skeleton" />
        <ImageSkeleton data-testid="image-skeleton" />
        <DescriptionSkeleton data-testid="description-skeleton" />
        <DescriptionSkeleton data-testid="description-skeleton" />
        <DescriptionSkeleton data-testid="description-skeleton" />
        <DescriptionSkeleton data-testid="description-skeleton" />
        <DescriptionSkeleton data-testid="description-skeleton" />
      </ContainerSkeleton>
      <NavContainerSkeleton data-testid="nav-container-skeleton" />
    </>
  );
};

export default DetailSkeleton;
