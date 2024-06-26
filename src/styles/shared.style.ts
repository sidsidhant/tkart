import styled, { css } from "styled-components";

// style Button

interface ButtonType {
  primary?: any;
  color?: any;
  background?: any;
  padding?: string;
  radius?: number;
  border?: [number, string];
  hover?: [string, string];
  width?: string;
}

export const Button = styled.button<ButtonType>`
  font-weight: 400;
  background: #ed7d39;
  box-shadow: 0 4px 15px 0 #ed7d3970;
  color: #fff;
  padding: 3px 15px;
  margin-left: 10px;
  border-radius: 3px;
  border: 1px solid #ed7d39;
   &:hover {
     color: #ffffff;
     background: #ee7843;
   }
  ${(props: any) =>
    props.primary &&
    css`
      background: #ed7d39;
      color: #ffffff;
      &:hover {
        color: #ed7d39;
        background: #ffffff;
      }
    `}
  ${(props: any) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props: any) =>
    props.background &&
    css`
      background: ${props.background};
    `}
  ${(props: any) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${(props: any) =>
    props.radius &&
    css`
      border-radius: ${props.radius}px;
    `}
  ${(props: any) =>
    props.border &&
    css`
      border: ${props.border[0]}px solid ${props.border[1]};
    `}
  ${(props: any) =>
    props.hover &&
    css`
      &:hover {
        color: ${props.hover[0]};
        background: ${props.hover[1]};
      }
    `}
`;

// Section title

interface SectionTitleType {
  color?: any;
  align?: string;
  weight?: number;
  size?: [number, string];
}

export const Title = styled.h2<SectionTitleType>`
  text-align: start;
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 0;
  margin-bottom: 5px;
  color: #4e4039;
  ${(props: any) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props: any) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
  ${(props: any) =>
    props.weight &&
    css`
      font-weight: ${props.weight};
    `}
  ${(props: any) =>
    props.size &&
    css`
      font-size: ${props.size};
    `}
`;

// Section title

interface SubTextType {
  color?: any;
  align?: string;
  weight?: number;
  size?: [number, string];
}

export const SubText = styled.h4<SubTextType>`
  text-align: start;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #596780;
  margin: 0;
  margin-bottom: 10px;
  ${(props: any) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props: any) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
  ${(props: any) =>
    props.weight &&
    css`
      font-weight: ${props.weight};
    `}
  ${(props: any) =>
    props.size &&
    css`
      font-size: ${props.size};
    `}
`;
