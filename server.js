/**
 * @author: WuWenbin <eqielb> <bin2302@gmail.com>
 * @license: MIT
 * @copyright: Meili-inc.
 */
 import express from 'express';

 let app = express();
 let PORT = 3000;

 app.post('/graphql', (req, res) => {
   res.send('Hello!');
 });

 let server = app.listen(PORT, function() {
   let host = server.address().address;
   let port = server.address().port;

   console.log('GraphQL listening at http://%s:%s', host, port);
 });
