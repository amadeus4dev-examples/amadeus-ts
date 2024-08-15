import { ReturnedResponseSuccess } from "../../client/response";
import {
  CollectionMetaLink,
  Dictionaries,
  FlightOrder,
  Issue,
} from "../shared";

// Types used in class
export type FlightOrdersParams = {
  data: FlightOrder;
};

export type FlightOrdersResult = {
  meta: CollectionMetaLink;
  warnings?: Issue[];
  data: FlightOrder;
  dictionaries: Dictionaries;
};

export type FlightOrdersReturnType = ReturnedResponseSuccess<
  FlightOrdersResult,
  FlightOrdersResult["data"]
>;