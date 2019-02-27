module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    service_name: DataTypes.STRING,
    review: DataTypes.TEXT,
    reading_level: {
      type: DataTypes.ENUM('not_read', 'read_q', 'read_nq'),
      values: ['not_read', 'read_q', 'read_nq'],
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  }, {});

  return Experience;
};
