import React, { FC } from "react";
import { Controller, FieldErrors, UseFormMethods } from "react-hook-form";
import Dropzone from "react-dropzone";

type FileInputProps = React.DetailedHTMLProps<any, any> & Partial<UseFormMethods> & {
    name: string;
    setFiles: (files: object[]) => void;
    disabled?: boolean;
    register: () => any;
    errors: FieldErrors<any>;
  };

  const dropzoneStyles = {
    border: "dashed 3px",
    borderColor: "#eee",
    borderRadius: "5px",
    paddingTop: "30px",
    textAlign: "center" as "center",
    height: "200px",
  };
  
  const dropzoneActive = {
    borderColor: "green",
  };

const FileInput: FC<FileInputProps> = ({ name, control }) => (

  <div className="field">
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ onChange, onBlur, value }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ isDragActive, getRootProps, getInputProps }) => (
              <div {...getRootProps()} style={isDragActive ? { ...dropzoneStyles, ...dropzoneActive } : dropzoneStyles}>
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </div>
            )}
          </Dropzone>
          <div>
            {value.map((f: any, index: number) => (
              <div key={index}>
                <span>{f.name}</span>
                <span>{" "}</span>
                <span>{f.size}</span>
              </div>
            ))}
          </div>
        </>
      )}
    />
  </div>
);

export { FileInput };
