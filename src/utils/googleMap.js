import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyD1muzlyRRzpdyNnbE22fGNWnqjG9667gQ",
  version: "weekly",
  libraries: ["places"],
});
export default loader;
