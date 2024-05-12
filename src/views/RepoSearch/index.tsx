import React, { useEffect, useState } from "react";

import {
  Input,
  Dropdown,
  RepoCardList,
  Loader,
  Button,
} from "../../components";
import { useDebounce, useFetch } from "../../hooks";
import { Container, FilterWrapper, Header } from "./style";
import { sortTypeOptions, orderTypeOptions } from "../../constants";

const RepoSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [sortType, setSortType] = useState<string>("");
  const [orderType, setOrderType] = useState<string>("");

  const [isFilterActive, setFilterActive] = useState<boolean>(false);

  const debounce = useDebounce(setQuery);

  const [fetchData, { isLoading, error, data }] = useFetch(
    process.env.REACT_GITHUB_API,
    {
      queryParams: ["q", "sort", "order"],
      timeoutDelay: 10,
      enableRetry: true,
    }
  );

  const handleFilterStatus = (status: boolean) => (event: React.MouseEvent) => {
    if (!status) {
      setSortType("");
      setOrderType("");
    }
    setFilterActive(status);
  };

  useEffect(() => {
    fetchData({
      q: query,
      ...(isFilterActive && { sort: sortType, order: orderType }),
    });
  }, [query, isFilterActive]);

  return (
    <Container>
      <Header>
        <Input
          type="search"
          label="Search Respositories"
          placeholder="Enter to search"
          onChange={debounce}
        />

        <FilterWrapper>
          <FilterWrapper $align="flex-end">
            <Dropdown
              label="Select Type"
              onSelect={setSortType}
              options={sortTypeOptions}
              selected={sortType}
            />
            <Dropdown
              label="Select Order"
              onSelect={setOrderType}
              options={orderTypeOptions}
              selected={orderType}
            />
            <FilterWrapper>
              <Button onClick={handleFilterStatus(true)}>Apply</Button>
              <Button onClick={handleFilterStatus(false)}>Reset</Button>
            </FilterWrapper>
          </FilterWrapper>
        </FilterWrapper>
      </Header>
      <RepoCardList data={data}>
        {!!error && <div>{error}</div>}
        {isLoading && <Loader />}
      </RepoCardList>
    </Container>
  );
};

export default RepoSearch;
