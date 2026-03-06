import { parseAsInteger, parseAsString, parseAsStringEnum } from "nuqs/server";
import { createLoader } from "nuqs/server";

import { DEFUAULT_PAGE } from "@/constants";
import { MeetingStatus } from "../meetings/types";

export const filtersSearchParams = {
  search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
  page: parseAsInteger
    .withDefault(DEFUAULT_PAGE)
    .withOptions({ clearOnDefault: true }),
  status: parseAsStringEnum(Object.values(MeetingStatus)),
  agenId: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
};

export const loadSearchParams = createLoader(filtersSearchParams);
