import { useDropzone } from "react-dropzone";
import { useState } from "react";

interface FileUploadProps {
  setFieldValue: (
    field: string,
    value: File[],
    shouldValidate?: boolean
  ) => void;
}

const FileUpload = ({ setFieldValue }: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setFiles([...acceptedFiles]);
    setFieldValue("documentoIdentidad", acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true, // Allow multiple files
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"], // Accept only images
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border-dashed border-2 border-gray-300 p-4 text-center"
    >
      <input {...getInputProps()} />
      {files.length > 0 ? (
        <div>
          <p>
            {files[0].name} y {files[1].name}
          </p>
        </div>
      ) : (
        <p>Arrastrar aquí o seleccionar archivo</p>
      )}
    </div>
  );
};

export default FileUpload;
