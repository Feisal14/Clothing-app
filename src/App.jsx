import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authintication from "./routes/auth/auth";

const Shop = () => {
  return <h1>this is the shop</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authintication />} />
      </Route>
    </Routes>
  );
}

export default App;
