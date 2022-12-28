import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./Routers/routers";

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
