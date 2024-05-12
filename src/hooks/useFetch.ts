import { useCallback, useEffect, useRef, useState } from "react";

import { urlBuilder } from "../utils/fetchUtils";

interface Options {
  readonly queryParams?: string[];
  readonly retryLimit?: number;
}

export const useFetch = (url: string, options?: Options): any => {
  const { queryParams = [], retryLimit = 1 } = options || {};

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<any>([]);

  const fetchTimeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  function fetchData(params: any, retryLimit: number) {
    const requUrl = urlBuilder(url, queryParams, params);

    fetch(requUrl)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
        clearTimeout(fetchTimeoutId.current as ReturnType<typeof setTimeout>);
      })
      .catch((err) => {
        if (retryLimit > 0) {
          fetchData(params, retryLimit - 1);
        } else {
          setIsLoading(false);
          setError("Failed to fetch!");
          clearTimeout(fetchTimeoutId.current as ReturnType<typeof setTimeout>);
        }
      });
  }

  const getLazyQuery = useCallback(
    ({ ...args }) => {
      setIsLoading(true);
      fetchData(args, retryLimit);
    },
    [url, options]
  );

  useEffect(() => {
    if (!isLoading) {
      clearTimeout(fetchTimeoutId.current);
    }
  }, [isLoading]);

  return [getLazyQuery, { isLoading, error, data }];
};
