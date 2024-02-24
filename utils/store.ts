import { atom } from "jotai";
import { PlayerInformation } from "./functions";

export const playerInformationAtom = atom<PlayerInformation | undefined>(
  undefined
);
