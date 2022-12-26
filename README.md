# ToolsApi
PASSO A PASSO PARA RODAR O PROJETO

+ Substituir o .env example com as suas credenciais 
+ Baxar o projeto com npm i
+ Rodar o comando npm run build para criar o banco de dados e o seed
+ Rodar o comando npm run dev para subir o servidor 
+ Caso queira pode rodar o comando npx prisma studio para ter uma interface da sua DB



# API Blueprint


## Tools [/tools]
As rotas se iniciarao por /tools

## Receber todas as tools cadastradas [GET]
  Esta rota pega todas as tools cadastradas no banco de dados ,este codigo tem uma seed plantada onde voce precisa receber 3 tools ja cadastradas no banco de dados

`Recebendo  as 3 tools cadastradas corretamente `

+ Response 200 

      [{"id": 1,
      "title": "Notion",
      "link": "https://notion.so","description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
      "tags": ["organization","planning","collaboration","writing","calendar"]},

      {"id": 2,"title": "json-server",
      "link": "https://github.com/typicode/json-server","description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding cha",
      "tags": ["api","json","schema","node","github",
      "rest"]},

      {"id": 3,
      "title": "fastify",
      "link": "https://www.fastify.io/",
      "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
      "tags": [  "web",  "framework",  "node",  "http2",  "https",  "localhost"]}]

`Caso nao exista nenhuma tool cadastrada`
+ Response 404 message: Tools not found 

## Criar uma nova tool [POST]
`Criar uma nova tool com o formato correto `

+ Request (body)

      {
          "title": 'vs code',
          "link": 'https://www.fastify.io/',
          "description": 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
          "tags": [ 'web', 'framework', 'node', 'http2', 'https', 'localhost' ]
        }

+ Response 201 Created

`Criar uma nova tool com o formato incorreto (tags>8 ou title repetido) `

+ Request (body)

      { "title": "fastify",
        "link": "https://www.fastify.io/",
        "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        "tags": [ 'web', 'framework', 'node', 'http2', 'https', 'localhost' , 'test','test','test']
        }

+ Response 422 message: Wrong schema

## Deletar uma tool [DELETE]
`Deletar uma tools pelo id corretamente`

+ Request ( /tools/:id)

+ Response 200  { }

`Deletar uma tools pelo id , inserindo id em formato errado (numero nao inteiro)`

+ Request ( /tools/:id , onde id é 'oi')

+ Response 400  message: Bad request

`Deletar uma tools pelo id  , onde esse id nao existe`

+ Request ( /tools/:id)

+ Response 404  message: Tool not found
