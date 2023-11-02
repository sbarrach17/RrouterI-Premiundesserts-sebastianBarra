import { Route, Routes } from "react-router-dom";
import Navigation from "./assets/components/Navigation";
import HomePage from "./assets/views/HomePage";
import ContactPage from "./assets/views/ContactPage";
import NotFound from "./assets/views/NotFound";
function App() {
    return (
        <div>
            <Navigation></Navigation>
            <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/Contact" element={<ContactPage></ContactPage>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </div>
    );
}

export default App;
