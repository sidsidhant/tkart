import styled, { css } from "styled-components";

export const TestSeries = styled.div`
  border-radius: 5px;
  border: 1px solid rgb(132 128 127 / 60%);
  margin-top: 20px;
  filter: drop-shadow(3px 2px 6px rgba(237, 125, 57, 0.3));
  &:hover {
    transition: 0.2s;
    border-color: #ef7f4d;
  }
`;

export const Poster = styled.div`
  border-bottom: 1px solid rgb(132 128 127 / 60%);
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export const Meta = styled.div`
  padding: 10px;
  background: linear-gradient(
    180deg,
    rgba(237, 125, 57, 0.3) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  hr {
    margin: auto;
  }
`;

export const Vednor = styled.div`
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 20px;
    border: 1px solid #7a6960;
  }
  h3 {
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    // color: white;
    letter-spacing: 1px;
  }

  h4 {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.05em;
    // color: white;
  }
`;
export const SeriesName = styled.h3`
  padding-top: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  // color: white;
`;

export const Stats = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 200%;
  text-align: center;
`;
export const Total = styled.span`
  // color: white;
`;
export const Divider = styled.span`
  // color: white;
  padding: 0px 10px;
`;
export const Free = styled.span`
  // color: white;
`;

export const Students = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 200%;
  align-items: center;
  text-align: center;
  // color: white;
`;
export const ViewButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 6px 40px;
  border-radius: 3px;
  border: 1px solid #ed7d39;
  transition: 0.5s;
  color: #ed7d39;
  background: #ffffff;
  width: 100%;
  &:hover {
    color: #fff;
    background: #ed7d39;
  }
`;
export const BuyNow = styled.div`
  padding: 0.8em 0rem;
  input {
    width: 50%;
    margin: 0px;
    padding: 5px 5px;
    height: 42px;
    font-size:20px;
    line-height:30px;
    font-weight:500;
  }
  button {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 6px 40px;
    border-radius: 0px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid #ed7d39;
    transition: 0.5s;
    width: 50%;
    color: #fff;
    background: #ed7d39;
    height: 42px;
  }
  button:hover {
    background: #d65403;
  }
`;
