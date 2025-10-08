const send = (res, httpStatus, payload) => res.status(httpStatus).json(payload);

export const ok = (res, message, data = null) =>
    send(res, 200, { success: true, message, data});

export const created = (res, message, data = null) =>
    send(res, 201, { success: true, message, data});

export const badRequest = (res, message, error = {}) =>
    send(res, 400, { success: false, message, error });

export const unauthorized = (res, message, error = {}) =>
    send(res, 401, { success: false, message, error });

export const forbidden = (res, message, error = {}) =>
    send(res, 403, { success: false, message, error });

export const notFound = (res, message, error = {}) =>
    send(res, 404, { success: false, message, error });

export const conflict = (res, message, error = {}) =>
    send(res, 409, { success: false, message, error });

export const serverError = (res, message, error = {}) =>
    send(res, 500, { success: false, message, error });


