import { gql } from "@apollo/client";

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      id
      title
      description
      price
      status
      createdAt
      imageUrl
    }
  }
`;
