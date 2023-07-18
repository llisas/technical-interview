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
 
  
import NombreDeLaClase from './nombreDeLaClase';

// Mockear la clase
jest.mock('./nombreDeLaClase');

// Acceder a la implementación de la clase mockeada
const ClaseMockeada = NombreDeLaClase as jest.MockedClass<typeof NombreDeLaClase>;

// Ejemplo de uso en una prueba
test('nombre de la prueba', () => {
  // Crear una instancia de la clase mockeada
  const instanciaMockeada = new ClaseMockeada();

  // Configurar el comportamiento de los métodos mockeados
  instanciaMockeada.metodo.mockImplementation(() => {
    // Implementación personalizada para la prueba
  });

  // Realizar las aserciones necesarias
});





*/

import searchService from './searchService';
import { getSearchTerm } from '../../infra/http/api';
import PaginationAdapter from '../adapters/PaginationAdapter';
import {responseMock} from './__mockData__/responseMockData'


