import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import Header from "./layouts/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movie from "./routes/Movie";
import Search from "./routes/Search";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route index element={<Home />} />
            <Route path="peliculas" element={<Movies />} />
            <Route path="peliculas/:id" element={<Movie />} />
            <Route path="buscar" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
