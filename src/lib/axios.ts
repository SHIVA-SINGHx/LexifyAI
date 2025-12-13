import axios from "axios";

// Ensure axios sends cookies by default (required for Clerk auth cookies)
axios.defaults.withCredentials = true;

export default axios;
