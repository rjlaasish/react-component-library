import React, { Fragment } from "react";
type Photo = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

const PhotoComp: React.FC<{ photo: Photo }> = ({ photo }) => {
  const { urls } = photo;

  return (
    <Fragment>
      <img
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
        src={urls.regular}
        alt="search image"
      />
    </Fragment>
  );
};

export default PhotoComp;
