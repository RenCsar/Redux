import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Lista } from "./page/Lista";
import { PaginaPadrao } from "./page/PaginaPadrao/PaginaPadrao";
import { Store } from "./store/Store";

function router() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Home />} />
            <Route path='/lista' element={<Lista />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default router;