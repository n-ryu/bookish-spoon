import styled from "@emotion/styled";
import { GameMatch, GameSet } from "../types";
import { useEffect, useMemo } from "react";
import { SetBox } from "./SetBox";

const Container = styled.div({
  border: "1px solid white",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
});

const PlayerContainer = styled.div({
  display: "flex",
  gap: 4,
  justifyContent: "space-evenly",
});

const PlayerText = styled.div<{ win?: boolean; lose?: boolean }>(
  ({ win, lose }) => ({
    fontSize: "1.2rem",
    paddingTop: 4,
    paddingBottom: 2,
    fontWeight: "bold",
    opacity: 0.8,
    ...(win && { color: "gold", opacity: 1 }),
    ...(lose && { opacity: 0.3 }),
  })
);

const SetsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  paddingBlock: 4,
});

interface Props {
  match: GameMatch;
  matchNumber?: number;
  onChange?: (match: GameMatch) => void;
}

export const MatchBox = ({ match, matchNumber = 3, onChange }: Props) => {
  const sets = useMemo(
    () =>
      new Array(matchNumber).fill(undefined).map((_, i) => match?.sets?.[i]),
    [match, matchNumber]
  );

  const matchMakedInfo = useMemo<[number, "A" | "B" | undefined]>(() => {
    const count = { A: 0, B: 0 };
    for (let i = 0; i < matchNumber; i++) {
      if (sets[i]?.winner === "A") count.A++;
      if (sets[i]?.winner === "B") count.B++;
      if (count.A >= Math.ceil(matchNumber / 2)) return [i, "A"];
      if (count.B >= Math.ceil(matchNumber / 2)) return [i, "B"];
    }
    return [Infinity, undefined];
  }, [sets, matchNumber]);

  const setProcessIndex = useMemo(
    () => sets.findIndex((set) => !set?.winner),
    [sets]
  );

  useEffect(() => {
    if (match?.winner !== matchMakedInfo[1])
      onChange?.({
        ...match,
        winner: matchMakedInfo[1],
      });
  }, [matchMakedInfo, match, onChange]);

  return (
    <Container>
      <PlayerContainer>
        <PlayerText win={match?.winner === "A"} lose={match?.winner === "B"}>
          {match?.playerA?.name ?? "선수 A"}
        </PlayerText>
        <PlayerText win={match?.winner === "B"} lose={match?.winner === "A"}>
          {match?.playerB?.name ?? "선수 B"}
        </PlayerText>
      </PlayerContainer>
      <SetsContainer>
        {sets.map((set, i) => (
          <SetBox
            set={set}
            onChange={(value: GameSet) =>
              onChange?.({
                ...match,
                sets: [...sets].with(i, value),
              })
            }
            disabled={
              i > matchMakedInfo[0] ||
              (setProcessIndex >= 0 && i > setProcessIndex)
            }
          />
        ))}
      </SetsContainer>
    </Container>
  );
};
