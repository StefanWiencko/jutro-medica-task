import { gql } from "@apollo/client";
export const getLandingPageData = gql`
  {
    countries {
      name
      code
      continent {
        name
      }
    }
    continents {
      name
    }
  }
`;
