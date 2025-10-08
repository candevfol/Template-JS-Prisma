import { badRequest, serverError } from "../utils/response.js";

export function errorHandler(err, req, res, next) {
    if (err && err.name === "ValidationError") {
        return badRequest(res, "VALIDATION_ERROR", err.message || "Validation failed", { name: err.name, details: err.details ?? [] });
    }
    return serverError(res, "INTERNAL_ERROR", "Something went wrong", { name: err?.name ?? "Error", details: err?.message ?? "" });
}


