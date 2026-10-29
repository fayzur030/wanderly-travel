import { betterAuth } from 'better-auth'
import { MongoClient } from 'mongodb'
import { mongodbAdapter } from '@better-auth/mongo-adapter'
import { jwt } from 'better-auth/plugins'

const client = new MongoClient(process.env.MONGODB_URI as string)
const db = client.db('wanderly-travel')

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
  plugins: [jwt()],
  session: {
    cookieCache: {
      enabled: true,
      strategy: 'jwt', //Todo: use jwt
      maxAge: 3600, //Todo: expire date in second
    },
  },
})
