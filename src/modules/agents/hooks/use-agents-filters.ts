import { DEFUAULT_PAGE } from "@/constants";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

export const useAgentsFilters = () => {
  return useQueryStates({
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    page: parseAsInteger
      .withDefault(DEFUAULT_PAGE)
      .withOptions({ clearOnDefault: true }),
  });
};
