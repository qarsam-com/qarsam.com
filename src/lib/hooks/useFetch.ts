"use client";

import { useCallback, useEffect, useState } from "react";
import type { FetchOptions, FetchState } from "@/types/api";

export function useFetch<T>(input: RequestInfo | URL, options: FetchOptions = {}) {
  const { immediate = true, ...requestInit } = options;
  const [state, setState] = useState<FetchState<T>>({ data: null, error: null, isLoading: immediate });

  const execute = useCallback(async () => {
    setState((current) => ({ ...current, isLoading: true, error: null }));

    try {
      const response = await fetch(input, requestInit);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = (await response.json()) as T;
      setState({ data, error: null, isLoading: false });
      return data;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setState({ data: null, error: message, isLoading: false });
      return null;
    }
  }, [input, requestInit]);

  useEffect(() => {
    if (immediate) {
      void execute();
    }
  }, [execute, immediate]);

  return { ...state, execute };
}
