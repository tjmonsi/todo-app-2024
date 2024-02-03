import { build } from './src/app.js';

const IS_GOOGLE_CLOUD_RUN = process.env.K_SERVICE !== undefined;
const port = parseInt(process.env.PORT || '8080');
const address = IS_GOOGLE_CLOUD_RUN ? '0.0.0.0' : undefined;

const server = await build();

// const addr = await server.listen({ port: port, address: address });
const addr = await server.listen({ port, address });
 
console.log(`Listening on ${addr}`);