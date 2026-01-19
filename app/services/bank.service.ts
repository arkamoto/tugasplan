import { fetchAPI } from "../lib/api";
import { Bank } from "../types/index";

export const getAllBanks = async (): Promise<Bank[]> => {
  return await fetchAPI<Bank[]>("/banks");
};
