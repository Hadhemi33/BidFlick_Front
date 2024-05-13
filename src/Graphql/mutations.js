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
export const CREATE_AUCTION_MUTATION = gql`
  mutation CreateSpecialProduct(
    $createSpecialProductInput: CreateSpecialProductInput!
  ) {
    createSpecialProduct(
      createSpecialProductInput: $createSpecialProductInput
    ) {
      id
      createdAt
      nbrLike
      endingIn
      user {
        id
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
        specialProducts {
          id
        }
      }
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
export const DELETE_CATEGORY_MUTATION = gql`
  mutation DeleteCategory($name: String!) {
    deleteCategory(name: $name)
  }
`;

export const UPLOAD_FILE_MUTATION = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;
export const CHANGE_ROLE_MUTATION = gql`
  mutation UpdateUserRole($updateUserInput: UpdateUserInput!, $id: String!) {
    updateUserRole(updateUserInput: $updateUserInput, id: $id) {
      id
      imageUrl
      username
      fullName
      roles
      likedProducts {
        id
      }
      products {
        id
      }
      specialProducts {
        id
      }
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      username
      fullName
      phoneNumber
    }
  }
`;
export const DELETE_ORDER_MUTATION = gql`
  mutation DeleteOrder($id: String!) {
    deleteOrder(id: $id)
  }
`;
export const DELETE_Auction_MUTATION_ADMIN = gql`
  mutation DeleteSpeciaProductAdmin($id: String!) {
    deleteSpeciaProductAdmin(id: $id) {
      title
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;
