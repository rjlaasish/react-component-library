import { PhotoComponent } from "components";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { createApi } from "unsplash-js";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AutoComplete: React.FC = () => {
  const [data, setPhotosResponse] = useState<any>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const api = createApi({
    accessKey: "nyiAJtSncbiwRY-7cd63yYq23qW6fImQJ090-8CwOac",
  });

  const [{ label, ...rest }, setValue] = useState<{ [x: string]: any }>({});
  const GOOGLE_PLACES_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;

  useEffect(() => {
    if (label) {
      setLoaded(true);
      api.search
        .getPhotos({ query: label })
        .then((result) => {
          setPhotosResponse(result);
          setLoaded(false);
        })
        .catch(() => {
          console.log("something went wrong!");
        });
    }
  }, [label]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ width: "500px", zIndex: "999" }}>
        <GooglePlacesAutocomplete
          apiKey={GOOGLE_PLACES_API_KEY}
          selectProps={{
            value: {
              label: "Select Places...",
              value: "Select ...",
            },
            onChange: setValue,
          }}
          onLoadFailed={(error) => {
            console.error("Google API auto complete failed");
          }}
        />

        <div
          style={{ display: "flex", marginTop: "20px", alignItems: "center" }}
        >
          <div style={{ fontWeight: "bold" }}>
            {label && <span> You Searched:</span>}
          </div>
          <p style={{ marginLeft: "15px" }}>{label}</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
          gap: "15px",
        }}
      >
        {data &&
          data.response.results.map((photo: any) => (
            <div style={{ display: "flex" }}>
              <PhotoComponent photo={photo} />
            </div>
          ))}

        {!label && (
          <img src="https://imgs.search.brave.com/6j7rv97jqXsk6vIs42Qrdd7TE8QsiqBYsB_4KpibuPY/rs:fit:480:270:1/g:ce/aHR0cHM6Ly9tZWRp/YTIuZ2lwaHkuY29t/L21lZGlhLzNvRnpt/cTZLajR5WFpVVkht/RS9naXBoeS5naWY.gif" />
        )}
        {label &&
          !loaded &&
          !data &&
          [1, 2, 3, 4, 5, 6].map((i) => <Skeleton width={300} height={300} />)}
      </div>
    </div>
  );
};

export default AutoComplete;
