const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    coach_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    place: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    start_date: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    finish_date: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    desc2: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    avaible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    mainImage: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    image1: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    image2: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    image3: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    video: {
      type: DataTypes.STRING(2000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reservation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
