import React, { useEffect, useState } from 'react';
import { useRandomCharacter } from './custom_hooks/useRandomCharacter';
import _ from 'lodash';

import { History } from './components/History';
import { Character } from './components/Character';
import { Header } from './components/Header';

import styled from 'styled-components';

const StyledApp = styled.div`
    background-color: ${props => props.theme.primary || "white"};
`;

const StyledDataSection = styled.div`
    color: black;
    display: flex;
    max-width: 76rem;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    gap: 4rem;
`;

export default function App() {
  // get character data from use random character hook.
  const { error, loading, data, refetch } = useRandomCharacter();

  // history to store al generated characters
  const [history, setHistory] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const generate = () => {
    // Disables generate button
    setDisabled(true);

    // fecthes using query
    refetch();
  };

  useEffect(() => {
    if (data) {
      //store character in history
      setHistory([...history, data.randomCharacter]);

      //enables generate button
      setDisabled(false);
    }
  }, [data]);

  const showCharacter = (character) => {
    //takes the item given to the top of the array to show its information

    //gets a new array without the element given
    const new_history = _.remove(history, (element) => element.id !== character.id);

    //takes the element given to the last place
    new_history.push(character);

    //set new history
    setHistory(new_history);

  };

  if (error) return <div>An error ocurred.</div>

  return (
    <StyledApp theme={{ primary: "#520086" }}>
      <Header />
      <StyledDataSection>

        {/* checks if history is empty, if not, displays last item and history */}
        {history.length > 0
          ? <Character data={history.at(-1)} />
          : null
        }

        <button disabled={disabled} onClick={generate}>Generate!</button>

        {/* checks if history is empty, if not, displays last item and history */}
        {history.length > 0
          ? <History history={history} parent={{ showCharacter: showCharacter.bind(this) }} />
          : null
        }
      </StyledDataSection>
    </StyledApp >
  );
}