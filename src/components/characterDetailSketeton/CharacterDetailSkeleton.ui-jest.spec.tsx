import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetailSkeleton from './CharacterDetailSkeleton';

describe('CharacterDetailSkeleton', () => {
  test('renders all skeleton elements', () => {
    const { container } = render(<CharacterDetailSkeleton />);

    const containerSkeleton = container.querySelector('[data-testid="container-skeleton"]');
    expect(containerSkeleton).toBeInTheDocument();

    const titleSkeleton = container.querySelector('[data-testid="title-skeleton"]');
    expect(titleSkeleton).toBeInTheDocument();

    const imageSkeleton = container.querySelector('[data-testid="image-skeleton"]');
    expect(imageSkeleton).toBeInTheDocument();

    const descriptionSkeletons = container.querySelectorAll('[data-testid="description-skeleton"]');
    expect(descriptionSkeletons.length).toBe(5);

    const navContainerSkeleton = container.querySelector('[data-testid="nav-container-skeleton"]');
    expect(navContainerSkeleton).toBeInTheDocument();
  });
});
