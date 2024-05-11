import { useRef, useCallback } from "react";

type Callback = (...args: any) => void;

export const useDebounce = (callback: Callback, delay: number = 200) => {
  const timerIdRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const debounce = useCallback(
    (...args: any) => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
      timerIdRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback]
  );

  return debounce;
};
