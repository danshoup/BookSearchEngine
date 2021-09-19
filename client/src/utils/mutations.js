import { gql } from '@apollo/client';

// Use Unit 21: Activity 24 for reference

// executes loginUser mutation using email and password
export const LOGIN_USER = gql `
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//  executes addUser mutation using username, email, password
export const ADD_USER = gql `
    mutation addUser
`;

//  executes saveBook mutation using bookData
export const SAVE_BOOK = gql `
    mutation saveBook
`;

//  executes removeBook mutation using bookId
export const REMOVE_BOOK = gql `
    mutation removeBook
`;

