import React from "react";
import styled from "@emotion/styled";
import { SearchIcon } from "../Svg";

const SearchInputBox = styled.div`
  width: 100%;
  padding: 10px 16px;
  background: ${({ theme }) => theme.palette.text_colors.neutral_0};
  border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_275};
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  svg {
    margin-right: 8px;
  }
`;

const InputField = styled.input`
  flex-grow: 1;
  border: none;
  font-family: "Lato";
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  caret-color: ${({ theme }) => theme.palette.text_colors.primary_550};
  ::placeholder {
    color: ${({ theme }) => theme.palette.text_colors.neutral_500};
    font-family: "Lato";
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
    line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  }
  &:focus {
    outline: none;
    // border-color: ${({ theme }) => theme.palette.border_colors.primary_350};
  }
`;

function SearchInput({
  className,
  onChange,
  style,
  placeholder,
  value,
  ...rest
}) {
  return (
    <SearchInputBox>
      <SearchIcon />
      <InputField
        {...rest}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </SearchInputBox>
  );
}

export default SearchInput;
