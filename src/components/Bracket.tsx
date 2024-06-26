import styled from "@emotion/styled";
import { GameMatch, TournamentData } from "../types";
import { MatchBox } from "./MatchBox";
import { useState } from "react";
import { mockData } from "../mock";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Level = styled.div<{ gap?: number }>(({ gap }) => ({
  display: "flex",
  gap,
}));

export const Bracket = () => {
  const [data, setData] = useState<TournamentData>(mockData);

  return (
    <Container>
      <Level gap={10}>
        {data.upper[4].map((el, i) => (
          <MatchBox
            match={el}
            onChange={(match: GameMatch) =>
              setData({
                ...data,
                upper: {
                  ...data.upper,
                  4: [...data.upper[4]].with(i, match) as any,
                },
              })
            }
          />
        ))}
      </Level>
      <Level>
        {data.upper[8].map((el, i) => (
          <MatchBox
            match={el}
            onChange={(match: GameMatch) =>
              setData({
                ...data,
                upper: {
                  ...data.upper,
                  8: [...data.upper[8]].with(i, match) as any,
                },
              })
            }
          />
        ))}
      </Level>
      <Level>
        {data.upper[16].map((el, i) => (
          <MatchBox
            match={el}
            onChange={(match: GameMatch) =>
              setData({
                ...data,
                upper: {
                  ...data.upper,
                  16: [...data.upper[16]].with(i, match) as any,
                },
              })
            }
          />
        ))}
      </Level>
      <Level>
        {data.lower[8].map((el, i) => (
          <MatchBox
            match={el}
            onChange={(match: GameMatch) =>
              setData({
                ...data,
                lower: {
                  ...data.lower,
                  8: [...data.lower[8]].with(i, match) as any,
                },
              })
            }
          />
        ))}
      </Level>
      <Level>
        {data.lower[4].map((el, i) => (
          <MatchBox
            match={el}
            onChange={(match: GameMatch) =>
              setData({
                ...data,
                lower: {
                  ...data.lower,
                  4: [...data.lower[4]].with(i, match) as any,
                },
              })
            }
          />
        ))}
      </Level>
    </Container>
  );
};
