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
    models.Comment.belongsTo(models.Experience, {
      onDelete: 'CASCADE',
      foreignKey: 'experience_id',
      as: 'experience',
    });
  };

  return Comment;
};
