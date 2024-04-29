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
export const CREATE_CATEGORY_MUTATION = gql`
  mutation CreateCategory(
    $createCategoryInput: CreateCategoryInput!
    $id: String!
  ) {
    createCategory(createCategoryInput: $createCategoryInput, id: $id) {
      id
      name
      user {
        id
        username
        fullName
        phoneNumber
      }
    }
  }
`;
