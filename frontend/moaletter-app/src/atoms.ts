import { atom } from "jotai";

const userInit = {
  userId: "",
  userName: "",
  profileUrl: "",
};

export const userAtom = atom(userInit);
