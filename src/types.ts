type S1Race = "T1" | "P1" | "Z1";
type S2Race = "T2" | "P2" | "Z2";

export type Race = S1Race | S2Race;

interface Player {
  name: string;
}

export type GameSet =
  | {
      raceA?: Race;
      raceB?: Race;
      winner?: "A" | "B";
    }
  | undefined;

export type GameMatch =
  | {
      playerA?: Player;
      playerB?: Player;
      winner?: "A" | "B";
      sets?: GameSet[];
    }
  | undefined;

export interface TournamentData {
  players: Player[];
  upper: {
    4: [GameMatch, GameMatch];
    8: [GameMatch, GameMatch, GameMatch, GameMatch];
    16: [
      GameMatch,
      GameMatch,
      GameMatch,
      GameMatch,
      GameMatch,
      GameMatch,
      GameMatch,
      GameMatch
    ];
  };
  lower: {
    4: [GameMatch, GameMatch];
    8: [GameMatch, GameMatch, GameMatch, GameMatch];
  };
  final: GameMatch;
}
