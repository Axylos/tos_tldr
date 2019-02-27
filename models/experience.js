module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    service_name: DataTypes.STRING,
    review: DataTypes.TEXT,
    reading_level: {
      type: DataTypes.ENUM,
      values: ['not_read', 'read_q', 'read_nq'],
    },
  }, {});

  return Experience;
};
