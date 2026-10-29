import { checkDatabaseConnection } from "../config/database.js";

export async function getHealthStatus() {
  try {
    await checkDatabaseConnection();
    return { application: "up", database: "up" };
  } catch {
    return { application: "up", database: "down" };
  }
}
