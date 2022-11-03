import Post from "../models/post.js"

// //RESOLVERS.........      (Resolver side print statement)
export const resolvers={

//data get to be use Query formet............
    Query:{
        hello:()=>{

            return "hello world"
        },
        getAll:async()=>{

            return await Post.find()
        },
    },

//data post to be use in Mutation formet............
Mutation: {
    createPost : async (parent, args, context, info) => {
      const { name, city } = args.post;
      const post = await new Post({ name, city }).save();
      return post;
    },

    updatePost : async (parent, args, context, info) => {
        const {id}= args
        const { name, city } = args.post;
        const post = await  Post.findByIdAndUpdate(id,{ name, city },{

            new:true
        })
        return post;
      },

      deletePost : async (parent, args, context, info) => {
        const {id}= args
        
         await  Post.findByIdAndDelete(id)
        return "delete user";
      }
}
}




