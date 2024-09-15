/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-db_owner:VqpTy63EDMCK@ep-empty-shape-a50hyh2c.us-east-2.aws.neon.tech/AI-db?sslmode=require',
    }
  };