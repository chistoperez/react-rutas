import { Link, Route, useParams, Routes } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corporis,
        error debitis aspernatur iure sint et vero saepe adipisci nulla, ab in
        perspiciatis molestias? Alias laboriosam pariatur error quas tempore!
      </p>
    </div>
  );
};

const ReactTopics = () => {
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="estado">Estado</Link>
        </li>
        <li>
          <Link to="componentes">Componentes</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":topic" element={<Topic />} />
      </Routes>
    </div>
  );
};

export default ReactTopics;
