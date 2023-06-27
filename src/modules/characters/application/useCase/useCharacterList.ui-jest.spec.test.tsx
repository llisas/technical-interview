import  {useCharacterList} from './useCharacterList';
import { renderHook } from '@testing-library/react';
import {characters } from './__mockData__/charactersMockData'

describe('characterListUseCase', () => {
    it('should initialize with correct initial state', () => {
      const { result } = renderHook(() => useCharacterList({ characters }));
      expect(result.current.isModalOpen).toBe(false);
      expect(result.current.selectedCharacter).toBeNull();
      expect(typeof result.current.handleOpenModal).toBe('function');
      expect(typeof result.current.handleCloseModal).toBe('function');
      expect(result.current.characters).toEqual(characters);
    });
  });