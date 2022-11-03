import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import { typeDefs } from './routes/type.js'
import { resolvers } from './routes/resolver.js'

//MONGODB URL SET......
//Database Connection
const URL =
  "mongodb+srv://cloud1:cloud1@cluster0.5lyglxk.mongodb.net/cloud1?retryWrites=true&w=majority";

mongoose.connect(
  URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("DB CONNECTED")
);



//START THE APOLLO-SERVER PLAYGROUND
const startServer= async()=>{
    const app=express()

    const apolloServer= new ApolloServer({

        typeDefs,resolvers          //typedef and resolvers to use write a all type query and schema
    })
    await apolloServer.start()
    
    apolloServer.applyMiddleware({app:app})   //its's a graphql apolloServer

    app.listen(4000)

    console.log("server on");
}

startServer()           // calling the server to run