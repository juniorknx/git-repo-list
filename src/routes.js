import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/404"
import { Home } from "./pages/Main"
import { Repositorio } from "./pages/Repositorio"

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/repositorio/:repositorio" element={<Repositorio />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}