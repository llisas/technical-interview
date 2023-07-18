import {
  ContainerSkeleton,
  TitleSkeleton,
  ImageSkeleton,
  DescriptionSkeleton,
  NavContainerSkeleton,
} from "./CharacterDetail.styles";

const DetailSkeleton = () => {
  return (
    <>
      <ContainerSkeleton>
        <TitleSkeleton />
        <ImageSkeleton />
        <DescriptionSkeleton />
        <DescriptionSkeleton />
        <DescriptionSkeleton />
        <DescriptionSkeleton />
        <DescriptionSkeleton />
      </ContainerSkeleton>
      <NavContainerSkeleton />
    </>
  );
};

export default DetailSkeleton;
