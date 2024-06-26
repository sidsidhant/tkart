import styled, { css } from "styled-components";

export const Exam = styled.div`
  display: flex;
  padding: 8px 15px;
  margin: 5px;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  color: #ed7d39;
  border: 1px solid #ed7d39;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #ed7d39;
    color: #fff;
  }
  p {
    margin: 0;
  }
`;
