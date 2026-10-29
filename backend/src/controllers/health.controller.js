import { getHealthStatus } from "../services/health.service.js";

export async function getHealth(_request, response) {
  const health = await getHealthStatus();
  response.status(health.database === "up" ? 200 : 503).json(health);
}
