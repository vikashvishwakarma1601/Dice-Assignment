import React from "react";
import Card from "../Card";
import Avatar from "../Avatar";

import { Container, ContentWrapper, TextWrapper } from "./style";

interface RepoCardListProps<T> {
  readonly data: T;
  children?: React.ReactNode;
}

const RepoCardList = ({ data = {}, children }: RepoCardListProps<any>) => {
  const renderCard = () => {
    if (!data?.items) return null;
    if (!data?.items?.length) return <div>No Data Found !</div>;
    return React.Children.toArray(
      data.items.map((item: any) => {
        return (
          <>
            <Card>
              <Card.Header>
                <Avatar src={item.owner.avatar_url} />
              </Card.Header>
              <Card.Content>
                <ContentWrapper>
                  <TextWrapper>
                    <strong>Repo : </strong>
                    <span>{item.name}</span>
                  </TextWrapper>
                  <TextWrapper>
                    <strong>Description :</strong>{" "}
                    <span>{item.description}</span>
                  </TextWrapper>
                  <TextWrapper>
                    <strong>Language :</strong> <span>{item.language}</span>
                  </TextWrapper>
                </ContentWrapper>
              </Card.Content>
              <Card.Footer>
                <TextWrapper>
                  <strong> Stars</strong> : <span>{item.stargazers_count}</span>
                </TextWrapper>
              </Card.Footer>
            </Card>
          </>
        );
      })
    );
  };

  return (
    <Container>
      {children}
      {renderCard()}
    </Container>
  );
};

export default RepoCardList;
