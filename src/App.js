import React, { startTransition, useEffect, useState, useTransition } from 'react';
import { useQuery } from "@apollo/client";
import { GET_RANDOM_CHARACTER } from "./queries/getRandomCharacter";

import { History } from './components/History';
import { MainCharacter } from './components/MainCharacter';
import { DefaultMessage } from './components/DefaultMessage';


export default function App() {
  // qgraphql query, enabled: false to avoid fetching automatically
  const { loading, data, refetch } = useQuery(GET_RANDOM_CHARACTER, { enabled: false });

  // history to store al generated characters
  const [history, setHistory] = useState([]);

  const [isPending, startTransition] = useTransition();
  const generate = () => {

    startTransition(() => {
      // fecthes using query
      refetch()
      // saves data when load is completed
      const characterData = data?.randomCharacter;

      //store character in history
      setHistory([...history, characterData]);
    })
  };


  return (
    <div>
      <button onClick={generate}>Generate!</button>

      {/* checks if history is empty, if not, displays last item and history */}
      {history.length > 0
        ? <>
          <MainCharacter data={history.at(-1)} />
          <History history={history} />
        </>
        :
        <DefaultMessage />
      }
    </div>
  );
}