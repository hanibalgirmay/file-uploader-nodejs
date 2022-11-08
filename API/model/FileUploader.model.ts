import { DataTypes } from "sequelize";
import sequelizeConn from "../config/database";

export const FileUploader = sequelizeConn.define(
  "files",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.NUMBER,
    },
    // createdAt: {
    //     type: DataTypes.DATE,
    //     defaultValue: Date.now(),
    // },
    // updatedAt: {
    //     type: DataTypes.DATE,
    //     defaultValue: Date.now()
    // }
  },
  {
    timestamps: true,
  }
);

FileUploader
  .sync({force:true})
  .then(() => {
    console.log("Files table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

// FileUploader.init(
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     path: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     url: {
//       type: DataTypes.STRING,
//     },
//     destination: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     size: {
//       type: DataTypes.NUMBER,
//     },
//   },
//   {
//     timestamps: true,
//     sequelize: sequelizeConn,
//     // paranoid: true,
//   }
// );
