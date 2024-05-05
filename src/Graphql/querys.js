import { gql } from "@apollo/client";

export const Categories_QUERY = gql`
  query GetAllCategories {
    getAllCategories {
      id
      name
      products {
        id
      }
      specialProducts {
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
      category {
        id
        name
      }
      user {
        id
        fullName
      }
    }
  }
`;

export const SpecialProducts_QUERY = gql`
  query GetAllSpecialProducts {
    getAllSpecialProducts {
      id
      createdAt
      nbrLike
      endingIn
      user {
        id
        fullName
      }
      likedBy {
        id
      }
      title
      price
      description
      discount
      category {
        id
      }
      imageUrl
    }
  }
`;
