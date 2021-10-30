module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        lowercase: true,
        validate:{
          isEmail : true
        }
      },
      mobile: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
      },
      age: {
        type: Sequelize.INTEGER
      },
      introduction: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.INTEGER
      },
      achievement: {
        type: Sequelize.STRING
      }

    });  
    return User;
  };
  