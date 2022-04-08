import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./routes/Video";
import Videos from "./routes/Videos";

function Router() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/videos/:id" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
