import { DEFUAULT_PAGE } from "@/constants";
import {
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
  useQueryStates,
} from "nuqs";
import { MeetingStatus } from "../types";

export const useMeetingsFilters = () => {
  return useQueryStates({
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    page: parseAsInteger
      .withDefault(DEFUAULT_PAGE)
      .withOptions({ clearOnDefault: true }),
    status: parseAsStringEnum(Object.values(MeetingStatus)),
    agenId: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
  });
};
