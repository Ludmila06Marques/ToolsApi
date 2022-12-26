
export  async function toolFactory() {
  return {
    title: 'vs code',
    link: 'https://www.fastify.io/',
    description: 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
    tags: [ 'web', 'framework', 'node', 'http2', 'https', 'localhost' ]
  }
}
export  async function toolFactoryWrong() {
    return {
      title: 'vs code',
      link: 'https://www.fastify.io/',
      description: 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
      tags: [ 'web', 'framework', 'node', 'http2', 'https', 'localhost' , 'test','test','test']
    }
  }