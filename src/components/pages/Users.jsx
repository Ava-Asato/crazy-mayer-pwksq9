import { styled } from "styled-components";

export const Users = () => {
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SearchInput />
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
