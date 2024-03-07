import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
`;

const Box = styled.div`
  padding: 0 7rem 0 7rem;
  background-color: #bc1e4a;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  color: white;
`;

const Plan = styled.h2`
  color: white;
`;

const Header = () => {
  return (
    <Container>
      <Box>
        <Title>Your current plan:</Title>
        <Plan>Starter Trial • 500MAUs</Plan>
      </Box>
    </Container>
  );
};

export default Header;
