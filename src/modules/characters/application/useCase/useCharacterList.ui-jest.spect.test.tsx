/*
import { renderHook, act } from '@testing-library/react-hooks';
import { characterListUseCase } from './useCharacterList';

describe('characterListUseCase', () => {
  it('should initialize with correct initial state', () => {
    const { result } = renderHook(() => characterListUseCase({ characters: [] }));

    expect(result.current.isModalOpen).toBe(false);
    expect(result.current.selectedCharacter).toBe(null);
    expect(result.current.characters).toEqual([]);
  });

  it('should open modal with selected character', () => {
    const characters = [
      { id: 1, name: 'Rick' },
      { id: 2, name: 'Morty' },
    ];
    const { result } = renderHook(() => characterListUseCase({ characters }));

    act(() => {
      result.current.handleOpenModal(characters[0]);
    });

    expect(result.current.isModalOpen).toBe(true);
    expect(result.current.selectedCharacter).toBe(characters[0]);
  });

  it('should close modal', () => {
    const { result } = renderHook(() => characterListUseCase({ characters: [] }));

    act(() => {
      result.current.handleCloseModal();
    });

    expect(result.current.isModalOpen).toBe(false);
    expect(result.current.selectedCharacter).toBe(null);
  });
});*/
