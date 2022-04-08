import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./routes/Video";
import Videos from "./routes/Videos";

// {`${process.env.PUBLIC_URL}/`}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/videos/:id" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
