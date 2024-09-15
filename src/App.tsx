import { router } from "@/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  localStorage.setItem(
    "accessToken",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQcm9maWxlSWQiOiIyNDI2NDAiLCJDYW1wYWlnbklkIjoiMTEiLCJHYW1lQWNjb3VudElkIjoiMTExNCIsIm5iZiI6MTcyNjIwODY4MywiZXhwIjoxNzI4ODAwNjgzLCJpYXQiOjE3MjYyMDg2ODN9.NtAWQt6xDE2RUhHkDA-BiciJw0nmnvhbKC3fwLZNTTQ"
  );
  return <RouterProvider router={router} />;
}

export default App;
