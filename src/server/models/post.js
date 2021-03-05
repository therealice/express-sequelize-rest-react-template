const { sequelize, DataTypes } = require('../database/database');

const Post = sequelize.define('post', {
  title: { 
    type: DataTypes.STRING 
  },
  content: { 
    type: DataTypes.STRING 
  }
});

// Creates the table if it does not already exist
(async () => {
  await Post.sync();
})();

exports.Post = Post;