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
//get Products
export const Products_QUERY = gql`
  query GetAllProducts {
    getAllProducts {
      id
      title
      description
      price
      status
      nbrLike
      createdAt
      imageUrl
    }
  }
`;
