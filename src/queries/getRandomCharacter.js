import { gql } from '@apollo/client';

export const GET_RANDOM_CHARACTER = gql`
query randomCharacter{
    randomCharacter {
      id,
      name,
      species,
      status,
      type,
      gender,
      origin {
        id,
        name,
        type,
        dimension,
        created
      },
      location {
        id,
        name,
        type,
        dimension,
        created
      },
      image,
      episode {
        id,
        name,
        air_date,
        episode,
        created
      },
      created
    }
  }
`;