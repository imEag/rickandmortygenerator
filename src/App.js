import { useQuery, gql } from '@apollo/client';

import { Character } from './components/Character';

export default function App() {
  return (
    <div>
      <h1>Rick And Morty Generator</h1>
      <Character />
    </div>
  );
}