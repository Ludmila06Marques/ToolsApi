

let toolsData=[
    {
    id: 1,
    title: "Notion",
    link: "https://notion.so",
    description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    tags: [
    "organization",
    "planning",
    "collaboration",
    "writing",
    "calendar"
    ]
    },
    {
    id: 2,
    title: "json-server",
    link: "https://github.com/typicode/json-server",
    description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding cha",
    tags: [
    "api",
    "json",
    "schema",
    "node",
    "github",
    "rest"
    ]
    },
    {
    id: 3,
    title: "fastify",
    link: "https://www.fastify.io/",
    description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
    tags: [
    "web",
    "framework",
    "node",
    "http2",
    "https",
    "localhost"
    ]
    }
    ]

    import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const firstTool = await prisma.tools.create({data:{
    title: "Notion",
    link: "https://notion.so",
    description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    tags: [
    "organization",
    "planning",
    "collaboration",
    "writing",
    "calendar"
    ]
  }})
  const secondTool = await prisma.tools.create({data:{
    title: "json-server",
    link: "https://github.com/typicode/json-server",
    description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding cha",
    tags: [
    "api",
    "json",
    "schema",
    "node",
    "github",
    "rest"
    ]
  }})
  const thirdTool = await prisma.tools.create({data:{
    title: "fastify",
    link: "https://www.fastify.io/",
    description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
    tags: [
    "web",
    "framework",
    "node",
    "http2",
    "https",
    "localhost"
    ]
  }})
  console.log({ firstTool,secondTool, thirdTool })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })