import styled, { css } from "styled-components";

export const TestimonialConatiner = styled.div`
  padding: 20px;
  position: relative;
  overflow: hidden;
  margin: 0 0 40px 0;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(237, 125, 57, 0.3);
  border-radius: 5px;
  border-bottom: 3px solid;
  border-color: #ef7f4d;
`;
export const Student = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
  }
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #596780;
  }
  h4 {
    font-weight: 600;
    font-size: 10px;
    line-height: 150%;
    color: #ed7d39;
  }
  h5 {
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    color: #25cd71;
  }
`;

export const Testimonial = styled.p`
  margin: 0px;
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: start;
  color: #596780;
`;
