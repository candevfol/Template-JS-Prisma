import { HealthRepository } from "../repository/health.repository.js";

export class HealthService {
    constructor(healthRepository = new HealthRepository()) {
        this.healthRepository = healthRepository;
    }

    async getHealth() {
        return await this.healthRepository.getHealth();
    }
}


