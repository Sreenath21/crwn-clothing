import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import { checkUserSession } from "./store/user/userAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
