// brings in the authentication error from appolo server express
const { AuthenticationError } = require('apollo-server-express');
// import user model
const { Book, User } = require('../models');
// bring in signToken function from auth file
const { signToken } = require('../utils/auth.js');

// QUERIES
// getSingleUser; get single user by id or username
// MUTATIONS
// createUser; create a user, sign a token, sent it back
// login; login user
// saveBook; save a book to users savedBooks
// deleteBook; remove a bood from savedBooks

// (reference Unit 21: Activity 26 for syntax context)

const resolvers = {

  Query: {

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedBooks');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  },

  Mutation: {

    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('Login email or password is incorrect!');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Login email or password is incorrect!');
        }

        const token = signToken(user);

        return { token, user };
    },


    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, data, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: data } },
          { new: true, runValidators: true }
        );
      } 
        throw new AuthenticationError('You need to be logged in!');
    },

    removeBook: async ( parent, { bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user_id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
      }
        throw new AuthenticationError('You need to be logged in!');
    }

  },
};

module.exports = resolvers;
