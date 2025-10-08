import { Router } from "express";
import { HealthService } from "../service/health.service.js";
import { ok } from "../utils/response.js";

const router = Router();
const healthService = new HealthService();

router.get("/", async (req, res) => {
    const data = await healthService.getHealth();
    return ok(res, "Service is healthy", data);
});

export default router;
