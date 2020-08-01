import React from "react";
import { GlobalContext } from "../../providers/GlobalContext";
import { Link } from "react-router-dom";

const Listagem = () => {
  const { chamados, status } = React.useContext(GlobalContext);
  if (chamados && status)
    return (
      <>
        <ul className="list-group">
          {chamados.reverse().map((chamado) => (
            <li key={chamado.id} className="list-group-item">
              <Link to={`ticket/${chamado.id}`}>
                {chamado.number} {chamado.title} -{" "}
                {status[chamado.state_id].name}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  else return <p>Loading...</p>;
};
export default Listagem;

export function ListagemArticles({ articles }) {
  if (articles)
    return (
      <>
        <ul className="list-group">
          {articles.map((article) => (
            <li key={article.id} className="list-group-item">
              De: <b>{article.from}</b> ({article.sender})
              <p dangerouslySetInnerHTML={{ __html: article.body }} />
              Send at: {article.created_at}
            </li>
          ))}
        </ul>
      </>
    );
}
