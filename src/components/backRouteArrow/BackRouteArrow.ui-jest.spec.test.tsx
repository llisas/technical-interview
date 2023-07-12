import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import BackRouteArrow from "./BackRouteArrow";
import router from "next/router";

jest.mock("next/router", () => ({
  useRouter: () => ({
    back: jest.fn(),
  }),
}));

describe("BackRouteArrow", () => {
    
  it("render compoment with correct data", () => {
    const { getByText, getByTestId } = render(
      <BackRouteArrow text="BACK TO HOME"></BackRouteArrow>
    );
    expect(getByText("BACK TO HOME")).toBeInTheDocument();
    expect(getByTestId("arrow-icon")).toBeInTheDocument();
  });

  it('should call router.back() when the back button is clicked', () => {
    const useRouterMock = jest.spyOn(require('next/router'), 'useRouter');
    const pushMock = jest.fn();
    useRouterMock.mockReturnValue({ back: pushMock });
    const { getByTestId } = render(<BackRouteArrow text="Go Back" />);

    const arrowIcon = getByTestId('arrow-icon');
    fireEvent.click(arrowIcon);

    expect(pushMock).toHaveBeenCalledTimes(1);

    useRouterMock.mockRestore();
  });

});

