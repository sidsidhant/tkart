import styled, { css } from "styled-components";

export const BlogCardContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 0 0 40px 0;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(237, 125, 57, 0.3);
  border-radius: 5px;
  border-bottom: 3px solid;
  border-color: #ef7f4d;
  img {
    width: 150px;
    margin-right: 20px;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  h3 {
    font-weight: 700;
    font-size: 16px;
    color: #596780;
    cursor: pointer;
  }
  h4 {
    font-weight: 600;
    font-size: 12px;
    color: #ed7d39;
  }
  h5 {
    font-weight: 600;
    font-size: 12px;
    color: #25cd71;
    cursor: pointer;
  }
  p {
    margin: 0px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    color: #596780;
  }
`;
