import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [ticket_id, setTicket_id] = React.useState("");
  return (
    <>
      <form
        action={`/ticket/${ticket_id}/`}
        className="form-inline m-auto pt-2 pb-3 my-2 my-lg-0"
      >
        <input
          className="form-control mr-sm-2"
          type="number"
          id="ticket_id"
          placeholder="Search ticket ID"
          value={ticket_id}
          onChange={(event) => setTicket_id(event.target.value)}
        />
        <Link
          className="btn btn-outline-success my-2 my-sm-0"
          to={`/ticket/${ticket_id}`}
        >
          Search
        </Link>
      </form>
    </>
  );
};
export default Search;
