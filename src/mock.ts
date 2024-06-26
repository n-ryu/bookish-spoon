import { TournamentData } from "./types";

export const mockData = {
  players: new Array(16).fill("선수").map((str, i) => ({
    name: str + (i + 1),
  })),
  upper: {
    4: new Array(2).fill(undefined),
    8: new Array(4).fill(undefined),
    16: new Array(8).fill(undefined),
  },
  lower: {
    4: new Array(2).fill(undefined),
    8: new Array(4).fill(undefined),
  },
  final: undefined,
} as TournamentData;
