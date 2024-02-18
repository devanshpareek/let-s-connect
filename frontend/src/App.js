import { Button } from "@chakra-ui/react";
import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Chats from "./Pages/Chats";

function App() {
  return (
    <div className="App">
      {/* <RouterProvider 
        router={createBrowserRouter([
          {
            path: "/",
            element: (
              <>
                <HomePage />
              </>
            ),
          },
          {
            path: "/chats",
            element: <Chats />,
          },
        ])}
      /> */}
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="chats" element={<Chats />} />
      </Routes>
    </div>
  );
}

export default App;
