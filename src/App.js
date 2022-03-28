import "./App.css";
//components
import Layout from "./ui/Layout";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import TVPopular from "./pages/TVPopular";
import TVOnTheAir from "./pages/TVOnTheAir";
import TVTopRated from "./pages/TVTopRated";
//router
import { Route, Routes } from "react-router-dom";
//styled components
import { ThemeProvider } from "styled-components";
import { theme } from "./ui/theme";
import GlobalStyles from "./ui/Global";

function App() {
  //first loaded content
  let content = (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1 style={{ fontWeight: "bold" }}>Welcome to Movie Data Base</h1>
      <h4>Please choose your category from above</h4>
    </div>
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={content} />

          <Route path="/popular" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/tv-toprated" element={<TVTopRated />} />
          <Route path="/tv-popular" element={<TVPopular />} />
          <Route path="/tv-on-air" element={<TVOnTheAir />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
