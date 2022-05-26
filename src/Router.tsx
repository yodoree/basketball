import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Video from "./routes/Video";
import VideoContainer from "./routes/VideoContainer";
import Videos from "./routes/Videos";
import ScrollToTop from "./utils/ScrollToTop";

function Router() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:type" element={<VideoContainer />} />
        <Route path="/videos/:type/:id" element={<Videos />} />
        <Route path="/videos/:type/:id/:videoid" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
