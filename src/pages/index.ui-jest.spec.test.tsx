import { render, screen } from "@testing-library/react";
import Main from "./index";
import {responseMock} from "./__mockData__/responseMockData";
import Paginator from "../components/paginator/Paginator";

describe("Main", () => {
  test("should render Home component", () => {
    render(<Main  response={responseMock} />);
    const homeComponent = screen.getByTestId("home-component");
    expect(homeComponent).toBeInTheDocument();
  });

  it("Should render SearchBar", () => {
    render(<Main  response={responseMock}/>);
    const searchBar = screen.getByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  });

  it("Should render CharacterList", () => {
    render(<Main  response={responseMock}/>);
    const characterList = screen.getByTestId("character-list");
    expect(characterList).toBeInTheDocument();
  });


  it("Should render Paginator", () => {
    const currentPage = 1;
    const totalPages = 10;
    const handleNext = jest.fn();
    const handlePrevious = jest.fn();
  
    render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onNextClick={handleNext}
        onPreviousClick={handlePrevious}
      />
    );
  
    const paginator = screen.getByTestId('paginator');
    expect(paginator).toBeInTheDocument();
  });

});
