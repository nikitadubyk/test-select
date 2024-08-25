import { Search } from "lucide-react";
import styled from "styled-components";

export const Container = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

export const IconSearch = styled(Search)`
  margin-left: 12px;
  path {
    fill: "#130817E5";
  }
`;
