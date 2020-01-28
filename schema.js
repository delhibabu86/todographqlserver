const { gql } = require('apollo-server');

/* query{
  getTodos{
    text
    completed
    _id
  }
}

mutation {
  addTodo(text:"Test2", completed: false){
    text,
    completed
  }
}

mutation {
  removeTodo(id:5e2b5f3dd37cabd7d0c07ae2){
    _id
  }
}
}



*/
const typeDefs = gql`
  type Todo {
    id: ID!
    text: String
    completed: Boolean
  }
  type Query {
    getTodos: [Todo]!
  }
  type Mutation {
    addTodo(text: String!, completed: Boolean!):Todo,
    removeTodo(id: ID!):Todo
  }
`;
module.exports = typeDefs;