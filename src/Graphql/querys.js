import { gql } from "@apollo/client";

export const Categories_QUERY = gql`
  query GetAllCategories {
    getAllCategories {
      id
      name
      products {
        id
      }
    }
  }
`;
