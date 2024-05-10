import { gql } from "@apollo/client";
export const USERS_QUERY = gql`
  query GetAllUsers {
    getAllUsers {
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
export const AuthUser_QUERY = gql`
  query GetAuthUser {
    getAuthUser {
      id
      imageUrl

      phoneNumber
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
export const ORDERS_QUERY = gql`
  query GetAllOrders {
    getAllOrders {
      id
      user {
        id
        fullName
      }
      products {
        id
        title
      }
    }
  }
`;
export const HISTORY_QUERY = gql`
  query getAllOrderHistory {
    getAllOrderHistory {
      id
      totalPrice
      paidAt
    }
  }
`;
