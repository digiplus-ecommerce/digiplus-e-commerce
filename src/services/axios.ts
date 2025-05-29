// This lets other parts of your project import and use this
// preconfigured Axios instance instead of setting it up every time.

import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// For authentication

// REQUEST INTERCEPTOR
Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Set up interceptors for auth or error handling
// RESPONSE INTERCEPTOR
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Example: handle 401 unauthorized
      if (error.response.status === 401) {
        console.warn("Unauthorized, redirecting to login...");
        // e.g., window.location.href = "/login";
      }

      // Example: log specific errors
      console.error(
        "API Error:",
        error.response.data?.message || error.message
      );
    } else {
      console.error("Network error or server not responding");
    }

    return Promise.reject(error);
  }
);

export default Axios;
