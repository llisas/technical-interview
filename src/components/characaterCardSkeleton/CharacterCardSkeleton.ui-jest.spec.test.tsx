import React from 'react';
import { render } from '@testing-library/react';
import CharacterCardSkeleton from './CharacterCardSkeleton';

describe('CharacterCardSkeleton', () => {
  test('each SkeletonComponent contains SkeletonImage, SkeletonName, and SkeletonName', () => {
    const { container } = render(<CharacterCardSkeleton />);
    const skeletonComponents = container.querySelectorAll('[data-testid="skeleton-component"]');

    skeletonComponents.forEach((component) => {
      const imageWrapper = component.querySelector('[data-testid="skeleton-image-wrapper"]');
      const skeletonImage = component.querySelector('[data-testid="skeleton-image"]');
      const skeletonNames = component.querySelectorAll('[data-testid="skeleton-name"]');

      expect(imageWrapper).toBeInTheDocument();
      expect(skeletonImage).toBeInTheDocument();
      expect(skeletonNames.length).toBe(2);
    });
  });
});