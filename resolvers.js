const { Todo } = require('./models');
const resolvers = {
    Query: {
      getTodos: () =>  Todo.find({}),
    },
    Mutation: {
      addTodo: async(parent, args, context, info) => {
        try{
            return (new Todo({text: args.text, completed: args.completed}).save());
        }catch(e){
            return e.message;
        }
      },
       removeTodo: (parent, args, context, info) => {
       return Todo.findOneAndDelete({_id:args.id});
      }
    }
  };

  module.exports = resolvers;