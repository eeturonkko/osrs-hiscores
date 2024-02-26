import { atom } from "jotai";
import { PlayerInformation } from "./functions";

export const nonIronmanPlayerInformationAtom = atom<
  PlayerInformation | undefined
>(undefined);

export const ironmanPlayerInformationAtom = atom<PlayerInformation | undefined>(
  undefined
);

export const ultimateIronmanPlayerInformationAtom = atom<
  PlayerInformation | undefined
>(undefined);

export const hardcoreIronmanPlayerInformationAtom = atom<
  PlayerInformation | undefined
>(undefined);
