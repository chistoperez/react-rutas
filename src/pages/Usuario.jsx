import { useParams } from "react-router-dom";

const Usuario = () => {
  let params = useParams();
  console.log(params);
  //let { userName } = useParams();
  return (
    <div>
      <h3>Perfil del usuario</h3>
      <p>
        Nombre de usuario <b></b>
      </p>
    </div>
  );
};

export default Usuario;
