import { FileUploadOutput } from "../model/FileUpload.entity";
import { FileUploader } from "../model/FileUpload.entity";
import { RequestHandler } from "express";

export const createFileUpload: RequestHandler = async (
  req,
  res
): Promise<any> => {
  //   const fileUploader = await FileUploader.create(_sampleData);
  if (req.file) {
    const file = {
      name: req.file?.filename,
      size: req.file?.size,
      path: req.file?.path,
      url: `http://localhost:3000/${req.file?.filename}`,
      destination: req.file?.destination,
    };
    console.log("============================");
    console.log(file);
    console.log("============================");
    const fileUploader = await FileUploader.create(file);
    return res.status(201).send(fileUploader);
  }
};

export const getFilesByID: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const _res = await FileUploader.findOne({ where: { id: id } });
  if(!_res){
    return res.status(404).json({message:"File Not Found!", success: false})
  }
  return res.status(200).json({message:"Fetching Data", success: true ,data: _res});
};

export const getFiles: RequestHandler = async (req, res) => {
  const _res = await FileUploader.findAll();
  return res.status(200).json(_res);
};
