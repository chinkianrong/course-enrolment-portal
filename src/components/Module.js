import { useParams } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  const { dipId, moduleId } = useParams();

  const { name, desc, lecturer } = getModule({ dipId, moduleId });

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{lecturer.name}</h4>
      <h5>{lecturer.title}</h5>
    </>
  );
}
