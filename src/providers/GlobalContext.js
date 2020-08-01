import React from "react";
import URL, { Proxy } from "./Url";
export const GlobalContext = React.createContext();
export const Token =
  "Bearer zB0AX1p6EOBrQO0RqqdLcS4l4Xt6tcB6XN_E72JXEYODdUVLPDi5ku8fPJf5fmab";

export const GlobalStorage = ({ children }) => {
  const [chamados, setChamados] = React.useState(null);
  const [status, setStatus] = React.useState(null);

  React.useEffect(() => {
    fetch(`${Proxy}${URL}/api/v1/tickets`, {
      headers: new Headers({
        Authorization: `${Token}`,
      }),
    })
      .then((response) => response.json())
      .then((json) => setChamados(json));

    fetch(`${Proxy}${URL}/api/v1/ticket_states/`, {
      headers: new Headers({
        Authorization: `${Token}`,
      }),
    })
      .then((response) => response.json())
      .then((json) => setStatus(json));
  }, []);

  function limparDados() {
    setChamados(null);
    setStatus(null);
  }

  return (
    <GlobalContext.Provider
      value={{
        chamados,
        setChamados,
        status,
        setStatus,
        limparDados,
        Token,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
