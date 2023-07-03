import { Response } from '../../../models/response'; 
import { Result } from '../../domain/result';
import { Info } from '../../domain/info';

interface IPaginationAdapter {
  setPaginationData(response: Response): void;
  updatePaginator(data: Info): void;
  updateCurrentPage(pageNumber: number): void;
}

class PaginationAdapter implements IPaginationAdapter {
  private setCharacters: (characters: Result[]) => void;
  private setNextPageUrl: (nextPageUrl: string | null) => void;
  private setPreviousPageUrl: (previousPageUrl: string | null) => void;
  private setTotalPages: (totalPages: number) => void;
  private setCurrentPage: (currentPage: number) => void;

  constructor(
    setCharacters: (characters: Result[]) => void,
    setNextPageUrl: (nextPageUrl: string | null) => void,
    setPreviousPageUrl: (previousPageUrl: string | null) => void,
    setTotalPages: (totalPages: number) => void,
    setCurrentPage: (currentPage: number) => void
  ) {
    this.setCharacters = setCharacters;
    this.setNextPageUrl = setNextPageUrl;
    this.setPreviousPageUrl = setPreviousPageUrl;
    this.setTotalPages = setTotalPages;
    this.setCurrentPage = setCurrentPage;
  }

  setPaginationData(response: Response) {
    this.setCharacters(response?.results || []);
    this.setNextPageUrl(response?.info?.next || null);
    this.setPreviousPageUrl(response?.info?.prev || null);
  }

  updatePaginator(data: Info) {
    if(data){
    this.setTotalPages(data.pages);
    this.setCurrentPage(1);}
    else{
      this.setTotalPages(0);
      this.setCurrentPage(0);
    }
  }

  updateCurrentPage(pageNumber: number) {
    this.setCurrentPage(pageNumber);
  }
}

export default PaginationAdapter;
