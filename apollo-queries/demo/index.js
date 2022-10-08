import { ApolloProvider, gql, useQuery } from "@apollo/client";

export const LIST_STARSHIPTS = gql`
  query listStarships {
    allStarships {
      starships {
        id
        name
      }
    }
  }
`;

export const GET_STARSHIP = gql`
  query getStarship($id: ID!) {
    starship(id: $id) {
      id
      name
      model
      starshipClass
      manufacturers
      length
      crew
      costInCredits
      consumables
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;
