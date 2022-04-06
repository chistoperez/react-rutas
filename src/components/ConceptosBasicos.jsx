import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import MenuConceptos from "../pages/MenuConceptos";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <MenuConceptos />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/usuario/:username/" element={<Usuario />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/acerca" element={<Navigate to="/about" />} />
        <Route path="/contacto" element={<Navigate to="/contact" />} />
        <Route path="/react/*" element={<ReactTopics />} />
        <Route path="/login/" element={<Login />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          {/* <Route path="/dashboard" element={<Dashboard />} />  ALTERNATIVA*/}
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default ConceptosBasicos;
