import { renderHook, act } from '@testing-library/react';
import useHome from './useCharacterModal';
import {character} from '../__mockData__/characterMockData';
describe('useHome', () => {
  it('should initialize with correct initial state', () => {
    const { result } = renderHook(() => useHome());

    expect(result.current.isModalOpen).toBe(false);
    expect(result.current.selectedCharacter).toBe(null);
    expect(typeof result.current.handleOpenModal).toBe('function');
    expect(typeof result.current.handleCloseModal).toBe('function');
  });

  it('should open and close modal with selected character', () => {
    const { result } = renderHook(() => useHome());    
    act(() => {
      result.current.handleOpenModal(character);
    });

    expect(result.current.isModalOpen).toBe(true);
    expect(result.current.selectedCharacter).toBe(character);

    act(() => {
      result.current.handleCloseModal();
    });

    expect(result.current.isModalOpen).toBe(false);
  });
});
