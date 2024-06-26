import styled, { css } from "styled-components";

export const Pills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;
export const Pill = styled.div`
  margin: 8px;
  font-weight: 400;
  padding: 5px 16px;
  border: 1px solid #596780;
  border-radius: 19px;
  width: auto;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ffffff;
    background: #596780;
  }
`;
