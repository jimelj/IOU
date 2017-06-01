<<<<<<< Updated upstream
/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  let Project = sequelize.define('Projects', {
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    //investigate DATE
    due_date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    start_time: {
      type: DataTypes.STRING,

    },
    end_time: {
      type: DataTypes.STRING,

    },
    hourly_rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    client_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    client_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    client_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    client_phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });
return Project;
};
=======
// module.exports = function(sequelize, DataTypes) {
//   var IOU_DB = sequelize.define("project", {
//     id: {
//        type: DataTypes.INT,
//        allowNull: false
//        },
//
//    project_name: {
//       type: DataTypes.STRING,
//       allowNull: false
//       },
//
//     project_description: {
//       type: DataTypes.STRING,
//       allowNull: false
//       },
//
//   });
//   return burger;
// };
//
// -- CREATE TABLE projects
// -- (
// -- 	id int NOT NULL AUTO_INCREMENT,
// -- 	project_name VARCHAR(255) NOT NULL,
// --   project_description VARCHAR(255) NOT NULL,
// -- 	pay_rate INT(255) NOT NULL,
// -- 	allocated_time INT(255),
// --   deadline TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// -- 	notes TEXT(255),
// -- 	PRIMARY KEY (id)
// -- );
>>>>>>> Stashed changes
