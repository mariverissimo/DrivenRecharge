// src/utils/errorUtils.ts

export function conflictError(message: string) {
  return {
    type: "conflict",
    message
  };
}

export function notFoundError(message: string) {
  return {
    type: "not_found",
    message
  };
}
