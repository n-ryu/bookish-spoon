import styled from "@emotion/styled";
import { GameSet, Race } from "../types";
import { Select } from "./Select";
import { WinnerChecker } from "./WinnerChecker";
import { useEffect } from "react";

const Container = styled.div<{ disabled?: boolean }>(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "max-content",
    paddingInline: 8,
    gap: 4,
  },
  ({ disabled }) =>
    disabled && {
      opacity: 0.5,
      pointerEvents: "none",
    }
);

interface Props {
  set: GameSet;
  onChange?: (set: GameSet) => void;
  disabled?: boolean;
}

export const SetBox = ({ set, onChange, disabled }: Props) => {
  useEffect(() => {
    if (disabled && set?.winner !== undefined) {
      onChange?.({ ...set, winner: undefined });
    }
  }, [set, onChange, disabled]);

  return (
    <Container disabled={disabled}>
      <WinnerChecker
        value={set?.winner === "A"}
        onChange={(value: boolean) =>
          onChange?.({ ...set, winner: value ? "A" : undefined })
        }
      />
      <Select
        value={set?.raceA}
        options={["T1", "P1", "Z1", "T2", "P2", "Z2"]}
        onChange={(option: string) =>
          onChange?.({ ...set, raceA: option as Race })
        }
        placeholder="종족"
      />
      <span>x</span>
      <Select
        value={set?.raceB}
        options={["T1", "P1", "Z1", "T2", "P2", "Z2"]}
        onChange={(option: string) => {
          onChange?.({ ...set, raceB: option as Race });
        }}
        placeholder="종족"
      />
      <WinnerChecker
        value={set?.winner === "B"}
        onChange={(value: boolean) =>
          onChange?.({ ...set, winner: value ? "B" : undefined })
        }
      />
    </Container>
  );
};
