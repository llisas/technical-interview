/*import searchService from "./searchService";
import { getSearchTerm } from "../../infra/http/api";
import PaginationAdapter from "../adapters/PaginationAdapter";

const setIsSearchingMock = jest.fn();

jest.mock(".../../infra/http/api", () =>({
getSearchTerm:jest.fn()
 }));

 
jest.mock("../adapters/PaginationAdapter", ()=>{
    return jest.fn().mockImplementation(()=>({
        updatePaginator: jest.fn(),
        setPaginationData : jest.fn()
    }))
})

const paginationAdapterMock = new PaginationAdapter()

describe('searchService ', () => {
    it('should handle searchService', async () => {
        // await endled
        //expetc setissearchinngmock tohavebeencalledwith false or true
    });
  });
 
  
*/