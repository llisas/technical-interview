import usePaginator from './usePaginator'
import { renderHook, act } from '@testing-library/react';
describe('usePaginator', () => {
    it('should initialize with correct initial state', () => {
      const totalPages = 10;
      const onPageChange = jest.fn();
  
      const { result } = renderHook(() => usePaginator({ totalPages, onPageChange }));
  
      expect(result.current.currentPage).toBe(1);
      expect(typeof result.current.handlePreviousClick).toBe('function');
      expect(typeof result.current.handleNextClick).toBe('function');
    });
  
    it('should update state correctly when clicking previous and next', () => {
      const totalPages = 10;
      const onPageChange = jest.fn();
      const { result } = renderHook(() => usePaginator({ totalPages, onPageChange }));
  
      // Click next
      act(() => {
        result.current.handleNextClick();
      });
  
      expect(result.current.currentPage).toBe(2);
      expect(onPageChange).toHaveBeenCalledWith(2, 'next');
  
      // Click previous
      act(() => {
        result.current.handlePreviousClick();
      });
  
      expect(result.current.currentPage).toBe(1);
      expect(onPageChange).toHaveBeenCalledWith(1, 'back');
    });
  });