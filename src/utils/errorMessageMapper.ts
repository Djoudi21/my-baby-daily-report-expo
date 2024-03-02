import { REQUEST_MESSAGES } from "./CONSTANTS.ts";

export function errorMessageMapper(message: string) {
  switch (message) {
    case "Network request failed":
      return REQUEST_MESSAGES["500"];
    default:
      return message;
  }
}
