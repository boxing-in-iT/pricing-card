import React, { useState } from "react";
import styled from "styled-components";
import Switch from "../Switch/Switch";
import Card from "../Cards/Card";

const Section = styled.section`
  min-width: 100vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: white;
`;

const SwitchWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.h2`
  color: white;
  font-size: 16px;
`;

const CardsWrapper = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 25px;
`;

const Plans = () => {
  const [value, setValue] = useState(false);

  const plans = [
    {
      title: "Stater",
      price: "$19",
      benefits: [
        "500MAUs",
        "3 projects",
        "Unlimited flows",
        "Unlimited branded themes",
        "Email support",
      ],
      buttonText: "Choose plan",
    },
    {
      title: "Pro",
      price: "$99/month",
      benefits: [
        "All starter features, plus:",
        "Unlimited projects",
        "Unlimited fully customizable themes",
        "A dedicated Customer Success Manager",
      ],
      buttonText: "Choose plan",
    },
    {
      title: "Enterprise",
      price: "Let’s Talk!",
      benefits: [
        "All Pro features",
        "Unlimited MAUs",
        "Dedicated environment",
        "Enterprise account administration",
        "Premium support and services",
      ],
      buttonText: "Contact us",
    },
  ];

  return (
    <Section>
      <Container>
        <Title>Choose a plan</Title>
        <SwitchWrapper>
          <SubTitle>Billed monthly</SubTitle>
          <Switch
            isOn={value}
            onColor="#EF476F"
            handleToggle={() => setValue(!value)}
          />
          <SubTitle>Billed anually</SubTitle>
        </SwitchWrapper>
        <CardsWrapper>
          {plans.map((data, i) => (
            <Card plan={data} />
          ))}
        </CardsWrapper>
      </Container>
    </Section>
  );
};

export default Plans;
