import { parseAsInteger, parseAsString, parseAsStringEnum } from "nuqs/server";
import { createLoader } from "nuqs/server";

import { DEFAULT_PAGE } from "@/constants";
import { MeetingStatus } from "../meetings/types";

export const filtersSearchParams = {
  search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
  page: parseAsInteger
    .withDefault(DEFAULT_PAGE)
    .withOptions({ clearOnDefault: true }),
  status: parseAsStringEnum(Object.values(MeetingStatus)),
  agenId: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
};

export const loadSearchParams = createLoader(filtersSearchParams);
