import styled from "@emotion/styled";
import { ReactNode } from "react";

const Container = styled.div({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "black",
  color: "white",
});

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
