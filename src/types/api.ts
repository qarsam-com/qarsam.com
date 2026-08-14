export type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiSuccessResponse<T> {
  data: T;
  message?: string;
  meta?: Record<string, unknown>;
}

export interface ApiErrorResponse {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}

export interface FetchState<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export interface FetchOptions extends RequestInit {
  immediate?: boolean;
}
