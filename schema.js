/**
 * @author: WuWenbin <eqielb> <bin2302@gmail.com>
 * @license: MIT
 * @copyright: Meili-inc.
 */
 import {
   GraphQLObjectType,
   GraphQLSchema,
   GraphQLInt
 } from 'graphql';

 let count = 0;

 let schema = new GraphQLSchema({
   query: new GraphQLObjectType({
     name: 'RootQueryType',
     fields: {
       count: {
         type: GraphQLInt,
         resolve: function() {
           return count;
         }
       }
     }
   })
 });

 export default schema;
