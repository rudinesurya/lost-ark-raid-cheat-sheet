import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageList from "./pages/ImageList";
import ImageDisplay from "./pages/ImageDisplay";

import jsonData from '../template.json' assert { type: 'json' };

const App: React.FC = () => (<Router basename="/lost-ark-raid-cheat-sheet">
    <Routes>
        <Route path="/" element={<ImageList linksData={jsonData} />} />
        <Route path="/image/:id/:mode" element={<ImageDisplay linksData={jsonData} />} />
    </Routes>
</Router>);

export default App
