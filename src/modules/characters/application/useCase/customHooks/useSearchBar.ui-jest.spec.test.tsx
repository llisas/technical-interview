import { renderHook, act } from "@testing-library/react";
import useSearchBar from "./useSearchBar";

describe("useSearchBar", () => {
  it("should initialize with correct initial state", () => {
    const initialSearchTerm = "initial";
    const onChange = jest.fn();

    const { result } = renderHook(() =>
      useSearchBar(initialSearchTerm, onChange)
    );

    expect(result.current.searchTerm).toBe(initialSearchTerm);
    expect(typeof result.current.handleInputChange).toBe("function");
  });

  it("should call onChange with updated search term after debounce time", async () => {
    jest.useFakeTimers();
    const initialSearchTerm = "initial";
    const onChange = jest.fn();

    const { result } = renderHook(() =>
      useSearchBar(initialSearchTerm, onChange)
    );

    const newSearchTerm = "rick";

    act(() => {
      result.current.handleInputChange({
        target: { value: newSearchTerm },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(onChange).not.toHaveBeenCalled();
    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(onChange).toHaveBeenCalledWith(newSearchTerm);
    jest.useRealTimers();
  });
});
