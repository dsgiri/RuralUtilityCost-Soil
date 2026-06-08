/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SoilTestConverter } from "./pages/SoilTestConverter";
import { FertilizerCalculator } from "./pages/FertilizerCalculator";
import { NutrientRemoval } from "./pages/NutrientRemoval";
import { CostPerNutrient } from "./pages/CostPerNutrient";
import { ProductComparison } from "./pages/ProductComparison";
import { LimePlanner } from "./pages/LimePlanner";
import { Favorites } from "./pages/Favorites";
import { About } from "./pages/About";
import { Legal } from "./pages/Legal";
import { Contact, License } from "./pages/MiscPages";

export default function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="test" element={<SoilTestConverter />} />
            <Route path="recommend" element={<FertilizerCalculator />} />
            <Route path="removal" element={<NutrientRemoval />} />
            <Route path="cost" element={<CostPerNutrient />} />
            <Route path="compare" element={<ProductComparison />} />
            <Route path="lime" element={<LimePlanner />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="about" element={<About />} />
            <Route path="legal" element={<Legal />} />
            <Route path="contact" element={<Contact />} />
            <Route path="license" element={<License />} />
          </Route>
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}
