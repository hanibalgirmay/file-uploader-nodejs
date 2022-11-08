import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConn from "../config/database";

interface FileUploaderAttributes {
  id: number;
  name: string;
  path: string;
  size: number;
  url: string;
  destination: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FileUploadInput
  extends Optional<FileUploaderAttributes, "id"> {}
export interface FileUploadOutput extends Required<FileUploaderAttributes> {}

export class FileUploader
  extends Model<FileUploaderAttributes, FileUploadInput>
  implements FileUploaderAttributes
{
  public id!: number;
  public name!: string;
  public path!: string;
  public size!: number;
  public url!: string;
  public destination!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

FileUploader.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
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
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConn,
    // paranoid: true,
  }
);

// FileUploader.
