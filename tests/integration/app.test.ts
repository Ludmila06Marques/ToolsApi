import { prisma } from "../../src/dbStrategy/db";
import supertest from "supertest";
import index from "../../src/index.js"
import {toolFactory, toolFactoryWrong} from "./factories/toolFactory";



beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE tools`;
  });
  
  afterAll(async () => {
    await prisma.$disconnect();
  });
  
  const server= supertest(index)


  describe('Testa POST /tools ', () => {
    it('Deve retornar 201, se cadastrado um item no formato correto', async () => {
      const tool = await toolFactory();
  
      const result = await server.post('/tools').send(tool);
  
      expect(result.status).toBe(201);
    });
    
    it('Deve retornar 409, ao tentar cadastrar um item que exista', async () => {
        const tool = await toolFactory();
    
        await server.post('/tools').send(tool);
        const result = await server.post('/tools').send(tool);
    
        expect(result.status).toBe(409);
      });
  
      it('Deve retornar 422, ao tentar cadastrar um item em formato errado', async () => {
        const tool = await toolFactoryWrong();
    
    
        const result = await server.post('/tools').send(tool);

      
    
        expect(result.status).toBe(422);
 
  
    });
    
  });

  describe('Testa GET /tools ', () => {
    it('Deve retornar status 200 e o body no formato de Array', async () => {
      const tool = await toolFactory();
      await server.post('/tools').send(tool);
  
      const result = await server.get('/tools');
  
      const countData = result.body.length;
  
      expect(result.status).toBe(200);
      expect(result.body).toBeInstanceOf(Array);
      expect(countData).toBeGreaterThan(0);
    });
});

  describe('Testa DELETE /tools/:id ', () => {
        it('Deve retornar status 200 e deletar a tool', async () => {
            const tool = await toolFactory();
            const createdItem = await server.post('/tools').send(tool);

            const { body: newItem } = createdItem;
           
          
        
            const result = await server.delete(`/tools/${newItem.id}`);

           const checkItsDeleted= await server.get('/tools')
           
        
            expect(result.status).toBe(200);
            expect(checkItsDeleted.status).toBe(404);
           
          });
        it('Deve retornar status 404 caso não exista tools com esse id', async () => {
          const result = await server.get(`/items/99999999`);
      
          expect(result.status).toBe(404);
        });
      


  });
  


