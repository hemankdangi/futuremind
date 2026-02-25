import { parseAsInteger, parseAsString} from "nuqs/server";
import { createLoader } from "nuqs/server";


import { DEFUAULT_PAGE } from "@/constants";

export const filtersSearchParams = {
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    page: parseAsInteger
      .withDefault(DEFUAULT_PAGE)
      .withOptions({ clearOnDefault: true }),
}

export const loadSearchParams = createLoader(filtersSearchParams)