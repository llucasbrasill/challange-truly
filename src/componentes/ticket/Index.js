import React from "react";
import useFetch from "../../providers/useFetch";
import { GlobalContext } from "../../providers/GlobalContext";
import URL, { Proxy } from "../../providers/Url";
import { ListagemArticles } from "../listagem/Index";
import { useParams } from "react-router-dom";

export default function Ticket() {
  const { Token, status } = React.useContext(GlobalContext);
  const [articles, setArticles] = React.useState(null);
  const { data, loading, error, request } = useFetch();
  let { ticketId } = useParams();

  React.useEffect(() => {
    if (!articles) {
      fetch(`${Proxy}${URL}/api/v1/ticket_articles/by_ticket/${ticketId}`, {
        headers: new Headers({
          Authorization: `${Token}`,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          setArticles(json);
        });
    }

    request(`${Proxy}${URL}api/v1/tickets/${ticketId}`, {
      headers: new Headers({
        Authorization: `${Token}`,
      }),
    });
  }, [request, Token, ticketId, articles]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;
  if (data && status && articles)
    return (
      <>
        <h3>Requested ticket #{data.number}</h3>
        <h2>{data.title}</h2>

        <ul>
          <li>Created date: {data.created_at}</li>
          <li>Status: {status[data.state_id].name}</li>
        </ul>

        {articles ? (
          <ListagemArticles articles={articles} />
        ) : (
          <p>no any message</p>
        )}
      </>
    );
  else
    return (
      <>
        <h3>Requested ticket ID: {ticketId}</h3>
        <div>Not found! :(</div>
      </>
    );
}
