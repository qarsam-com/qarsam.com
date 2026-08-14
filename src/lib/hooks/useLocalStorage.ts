"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored !== null) {
        setValue(JSON.parse(stored) as T);
      }
    } catch {
      setValue(initialValue);
    }
  }, [initialValue, key]);

  const updateValue = (nextValue: T | ((currentValue: T) => T)) => {
    setValue((current) => {
      const resolved = nextValue instanceof Function ? nextValue(current) : nextValue;
      window.localStorage.setItem(key, JSON.stringify(resolved));
      return resolved;
    });
  };

  return [value, updateValue] as const;
}
