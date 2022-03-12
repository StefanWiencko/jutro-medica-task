import { gql } from "@apollo/client";
export const getLandingPageData = gql`
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
