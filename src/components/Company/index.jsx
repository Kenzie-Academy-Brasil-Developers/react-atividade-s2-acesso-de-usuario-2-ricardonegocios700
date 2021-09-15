import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Customer = ({ members }) => {
  const params = useParams();
  const member = members.find((item) => item.id === params.id);
  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
