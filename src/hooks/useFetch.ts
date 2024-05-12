import { useCallback, useEffect, useRef, useState } from "react";

import { urlBuilder } from "../utils/fetchUtils";

interface FetchProps {
  readonly url: string;
}

interface Options {
  readonly enableRetry?: boolean;
  readonly retryLimit?: number;
  readonly queryParams?: string[];
  readonly timeoutDelay?: number;
}

export const useFetch = (url: string, options?: Options): any => {
  const {
    enableRetry = false,
    retryLimit = 2,
    queryParams = [],
    timeoutDelay = 5,
  } = options || {};

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<any>([]);

  const fetchTimeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  // const fetchAbortController = useRef<AbortController>(new AbortController());

  function fetchData(params: any) {
    const requUrl = urlBuilder(url, queryParams, params);

    fetch(requUrl)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
        clearTimeout(fetchTimeoutId.current as ReturnType<typeof setTimeout>);
      })
      .catch((err) => {
        setIsLoading(false);
        setError("Failed to fetch!");
        clearTimeout(fetchTimeoutId.current as ReturnType<typeof setTimeout>);
      });
  }

  const getLazyQuery = useCallback(
    ({ ...args }) => {
      setIsLoading(true);
      fetchData(args);
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
