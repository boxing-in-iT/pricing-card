import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: #22262c;
  padding: 10% 15%;
  border-radius: 10px;
  color: #fff;
  text-align: center;

  ul {
    padding: 0;
  }

  p {
    font-size: 22px;
  }

  h3 {
    font-size: 44px;
    margin: 20px 0 40px;
    font-weight: 500;
  }

  h3 span {
    font-size: 16px;
  }
`;

const Benefits = styled.ul`
  text-align: left;
  margin: 20px 0;
  color: #ddd;
  list-style: none;
`;

const BenefitItem = styled.li`
  margin: 15px 0;

  &::before {
    content: "·";
    color: #bc1e4a;
    font-weight: bold;
    margin-right: 8px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 0;
  background: transparent;
  color: #fff;
  font-size: 15px;
  border: 0.25px solid #bc1e4a;
  border-radius: 6px;
  margin-top: 30px;
  cursor: pointer;
  transition: background 0.5s;

  &:hover {
    background: #bc1e4a;
  }
`;

const Card = ({ plan }) => {
  const { title, price, benefits, buttonText } = plan;
  const isMonthly = price.includes("/month");

  return (
    <CardWrapper>
      <div>
        <p>{title}</p>
        <h3>
          {isMonthly ? (
            <>
              {price.split("/")[0]}
              <span>/ month</span>
            </>
          ) : (
            price
          )}
        </h3>
      </div>
      <Benefits>
        {benefits?.map((data, i) => (
          <BenefitItem key={i}>{data}</BenefitItem>
        ))}
      </Benefits>
      <Button>{buttonText}</Button>
    </CardWrapper>
  );
};

export default Card;
