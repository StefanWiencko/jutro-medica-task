import { gql } from "@apollo/client";
export const getData = gql`
  {
    countries {
      name
      code
      emoji
      languages {
        name
      }
      continent {
        name
      }
    }
    continents {
      name
    }
  }
`;
