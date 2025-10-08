export class HealthRepository {
    async getHealth() {
        return {
            status: "ok",
            timestamp: new Date().toISOString()
        };
    }
}


