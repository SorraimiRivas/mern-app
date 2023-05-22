import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(name: $name, description: $description, clientId: $clientId) {
      id
      name
      email
      phone
    }
  }
`;
