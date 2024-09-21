import { useDropzone } from "react-dropzone";
import { useState } from "react";
import PhotoIcon from "../assets/images/photoLogo.svg";
import { Button } from "@mui/material";

interface FileUploadProps {
  setFieldValue: (
    field: string,
    value: File[],
    shouldValidate?: boolean
  ) => void;
  error?: string;
  touched?: boolean;
}

const FileUpload = ({ setFieldValue, error, touched }: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setFiles([...acceptedFiles]);
    setFieldValue("documentoIdentidad", acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
  });

  const styledDiv = "flex flex-row justify-center items-center w-full";
  const styledLine = "border-t-2 border-[#E7E7E7] w-full";
  const styledO = "px-4 text-[#6D6D6D] font-WorkSans font-[700] text-[10px]";

  return (
    <div className="file-upload-wrapper">
      <div
        {...getRootProps()}
        className={`border-dashed border-2 text-center h-[130px] flex flex-col justify-center items-center hover:border-[#2456F7] ${
          touched && error ? "border-[#d32f2f]" : "border-[#2456F7]"
        }`}
      >
        <input {...getInputProps()} />
        {files.length > 0 ? (
          <div>
            <p>{files.map((file) => file.name).join(", ")}</p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center w-[50%] lg:w-[30%]">
            <img src={PhotoIcon} alt="" className="w-[25px] h-auto" />
            <p className="font-Roboto font-[500] text-black text-[10px] mt-1">
              Arrastrar aquí
            </p>
            <div className={styledDiv}>
              <div className={styledLine}></div>
              <div className={styledO}>O</div>
              <div className={styledLine}></div>
            </div>
            <Button
              sx={{
                marginTop: "5px",
                backgroundColor: "#F2F4F7",
                fontSize: "9px",
                color: "#1D2939",
                "&:hover": { backgroundColor: "#dde0e4" },
              }}
            >
              seleccionar archivo
            </Button>
          </div>
        )}
      </div>
      {touched && error && (
        <p className="text-[#d32f2f] font-[400] text-[0.75rem] text-left mt-[3px] mx-[14px]">
          {error}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
