import { gql } from 'apollo-server-express'



//QUERIES.......   (Query like schema to set the types)
export const typeDefs=gql`

    type Post{
        id:ID
        name:String
        city:String
    }

    type Query{                       
        hello:String
        getAll:[Post]
    }

    input PostInput{
        name:String
        city:String
    }

    type Mutation{
        createPost(post: PostInput): Post
        updatePost(id:String, post:PostInput): Post
        deletePost(id:String): Post
    }
`



