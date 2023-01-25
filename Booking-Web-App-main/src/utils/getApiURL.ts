import { API } from "./Constants";

/*
 * The endpoint should only contain /endpoint
 */
export default function getApiURL(endpoint: string | undefined): string {
  return `http://localhost:3001/api${endpoint}`;
}
