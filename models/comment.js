module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    experience_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },

  }, {});

  Comment.associate = (models) => {
    // adding onDelete here should make it cascade
    // but apparently this is broken and has to be handled
    // inside the migration
    models.Comment.belongsTo(models.Experience, {
      //onDelete: 'cascade', // cascade also has to be present in the migration 
      foreignKey: 'experience_id',
      as: 'experience',
    });
  };

  return Comment;
};
