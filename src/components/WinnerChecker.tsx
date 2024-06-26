import { ReactComponent as WinnerMedal } from "../assets/winner_medal.svg";
import { ReactComponent as DefaultMedal } from "../assets/default_medal.svg";
import styled from "@emotion/styled";

const Container = styled.div({
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

interface Props {
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export const WinnerChecker = ({ value, onChange }: Props) => {
  return (
    <Container onClick={() => onChange?.(!value)}>
      {value ? (
        <WinnerMedal width="20" height="20" />
      ) : (
        <DefaultMedal width="20" height="20" />
      )}
    </Container>
  );
};
