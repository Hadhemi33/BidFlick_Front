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
      address
    }
  }
`;

export const DELETE_Auction_MUTATION_ADMIN = gql`
  mutation DeleteSpeciaProductAdmin($id: String!) {
    deleteSpeciaProductAdmin(id: $id) {
      title
    }
  }
`;
export const DELETE_PRODUCT_ADMIN = gql`
  mutation DeleteProductAdmin($id: String!) {
    deleteProductAdmin(id: $id) {
      id
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;
export const PAYMENT_MUTATION = gql`
  mutation CreatePaymentIntent(
    $orderId: ID!
    $amount: Float!
    $currency: String!
  ) {
    createPaymentIntent(orderId: $orderId, amount: $amount, currency: $currency)
  }
`;
export const DELETE_NOTIF = gql`
  mutation DeleteNotification($id: String!) {
    deleteNotification(id: $id)
  }
`;

export const SET_BID = gql`
  mutation CreateSpecialProductPrice(
    $createSpecialProductPriceInput: CreateSpecialProductPriceInput!
  ) {
    createSpecialProductPrice(
      createSpecialProductPriceInput: $createSpecialProductPriceInput
    ) {
      price
    }
  }
`;
export const REQ_PASS_RESET = gql`
  mutation RequestPasswordReset($username: String!) {
    requestPasswordReset(username: $username)
  }
`;
export const VERIF_RESET_CODE = gql`
  mutation VerifyResetCode($username: String!, $code: String!) {
    verifyResetCode(username: $username, code: $code)
  }
`;
export const RESET_PASS = gql`
  mutation ResetPassword(
    $username: String!
    $code: String!
    $newPassword: String!
  ) {
    resetPassword(username: $username, code: $code, newPassword: $newPassword)
  }
`;
// export const ADD_PRODUCT_ORDER = gql`
//   # mutation AddProductToOrder($productId: String!) {
//   mutation AddProductToOrder($productId: String!, $orderId: String) {
//     addProductToOrder(productId: $productId)
//     # addProductToOrder(productId: $productId, orderId: $orderId)
//   }
// `;
export const ADD_PRODUCT_ORDER = gql`
  mutation AddProductToOrder($productId: String!, $orderId: String) {
    addProductToOrder(productId: $productId, orderId: $orderId) {
      id
      totalPrice
      products {
        id
        title
      }
    }
  }
`;
export const VALIDATE_ORDER = gql`
  mutation ValidateOrder($orderId: String!) {
    validateOrder(orderId: $orderId)
  }
`;

export const DELETE_ORDER = gql`
  mutation DeleteOrder($orderId: String!) {
    deleteOrder(orderId: $orderId)
  }
`;
