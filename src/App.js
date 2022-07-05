import Home from "./routes/home.component";

import { Routes, Route, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h2>I am Navigation component.</h2>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return <h1>I am a shop component</h1>;
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
