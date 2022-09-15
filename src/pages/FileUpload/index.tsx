import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { imageUpload } from "assets/images";
import { BasicTable } from "pages";
import {
  FilePickerContainer,
  FilePickerImage,
  PreviewImage,
  Tr,
  Wrapper,
  Container,
} from "./styles";

interface Row {
  path: string;
  size: string;
  preview: any;
}

const FileUpload = () => {
  const [dataToShow, setData] = useState<any[]>([]);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        setData([
          ...dataToShow,
          ...acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          ),
        ]);
      },
    });

  interface ITableProps extends Record<string, any> {
    headerText: string;
    columnName: string;
    sortable: boolean;
    searchable: boolean;
    exportable: boolean;
  }

  const columnHeaders = ["File Name", "Size", "Preview"];

  const columns: ITableProps[] = [];

  columnHeaders.forEach((columnHeader) => {
    columns.push({
      headerText: columnHeader,
      columnName: columnHeader.toLowerCase().replace(/\s/g, ""),
      sortable: true,
      searchable: true,
      exportable: true,
    });
  });

  const getAmount = (amount: number): string => {
    if (amount < 0) {
      return "0B";
    }
    if (amount < 1024) {
      return `${amount}B`;
    }
    if (amount < 1048576) {
      return `${Math.round(amount / 1024)}KB`;
    }
    if (amount < 1073741824) {
      return `${Math.round(amount / 1048576)}MB`;
    }
    return `${Math.round(amount / 1073741824)}GB`;
  };

  const tableDataMap = (row: Row, index: number): React.ReactChild => {
    return (
      <Tr key={index}>
        <td>{row.path}</td>
        <td>{getAmount(parseInt(row.size))}</td>
        <td>
          <PreviewImage
            src={row.preview}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(row.preview);
            }}
          />
        </td>
      </Tr>
    );
  };

  return (
    <Wrapper>
      <Container
        {...getRootProps({ isFocused, isDragAccept, isDragReject })}
        onClick={(e) => e.stopPropagation()}
      >
        <FilePickerContainer {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <FilePickerImage src={imageUpload} alt="drag file zone" />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </FilePickerContainer>
      </Container>
      <div>
        {dataToShow.length > 0 && (
          <BasicTable
            columns={columns}
            data={dataToShow}
            tableDataMap={tableDataMap}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default FileUpload;
