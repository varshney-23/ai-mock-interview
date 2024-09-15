import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql,{schema});

export async function getData() {
  try {
    const result = await db.select().from('userAnswer'); 
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}