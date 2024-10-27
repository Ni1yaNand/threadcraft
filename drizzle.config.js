export default {
    dialect: "postgresql",
    schema: "./utils/db/schema.ts",
    out: "./drizzle",

    dbCredentials: {
        url: "postgresql://neondb_owner:HMyU4gR7bPdF@ep-purple-pond-a5abr8r7.us-east-2.aws.neon.tech/threadcraftai?sslmode=require",
        connectionString: "postgresql://neondb_owner:HMyU4gR7bPdF@ep-purple-pond-a5abr8r7.us-east-2.aws.neon.tech/threadcraftai?sslmode=require"
    }
}