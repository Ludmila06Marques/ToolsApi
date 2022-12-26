import { jest } from "@jest/globals";
import * as  toolsRepository from "../../src/repositories/toolsRepository.js"
import * as toolsService from "../../src/services/toolsService.js"



describe("Tools service", () => {
  it("Conferindo se esta chamando a funcao de getToolById", async () => {
 
    const fakeId= 999999

  
    jest
    .spyOn(toolsRepository, 'getToolById')
    .mockImplementationOnce((): any => {
      return {
        id:fakeId,
        title: 'vs code',
        link: 'https://www.fastify.io/',
        description: 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
        tags: [ 'web', 'framework', 'node', 'http2', 'https', 'localhost' ]
      };
    });

    const promise = toolsService.deleteTool(
      fakeId
      );
  
      expect(promise).rejects.toEqual({
        type :"not_found",
        message: '"Tool not found"'
      });


    expect(toolsRepository.getToolById).toBeCalled();
  });
  it("Conferindo se reconhece o valor nulo da funcao getToolById", async () => {
 
    const fakeId= 999999

  
    jest
    .spyOn(toolsRepository, 'getToolById')
    .mockImplementationOnce((): any => {
      return null
    });

    const promise = toolsService.deleteTool(
      fakeId
      );
  
      expect(promise).rejects.toEqual({
        type :"not_found",
        message: "Tool not found"
      });


    expect(toolsRepository.getToolById).toBeCalled();
 
  });
  

 


});