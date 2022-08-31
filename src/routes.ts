import React from "react";

const PhoneInput = React.lazy(() =>
  import("./pages").then(({ PhoneInput }) => ({ default: PhoneInput }))
);
const ProductImage = React.lazy(() =>
  import("./pages").then(({ ProductImage }) => ({ default: ProductImage }))
);
const OtpBox = React.lazy(() =>
  import("./pages").then(({ OtpBox }) => ({ default: OtpBox }))
);
const AutoComplete = React.lazy(() =>
  import("./pages").then(({ AutoComplete }) => ({ default: AutoComplete }))
);

const EditableTable = React.lazy(() =>
  import("./pages").then(({ EditableTable }) => ({ default: EditableTable }))
);

const Map = React.lazy(() =>
  import("./pages").then(({ Maps }) => ({ default: Maps }))
);

const FileUpload = React.lazy(() =>
  import("./pages").then(({ FileUpload }) => ({ default: FileUpload }))
);
interface IRouteChildItems {
  name: string;
  path: string;
}

interface IRouteItems {
  path: string;
  navbar: string;
  child?: IRouteChildItems[];
  component: any;
}

export const routes: IRouteItems[] = [
  {
    // enabled: true,
    path: "/map/*",
    component: Map,
    navbar: "Map",
    child: [
      {
        name: "Basic Map",
        path: "/map",
      },
      {
        name: "Custom Map",
        path: "map/custom-style",
      },
    ],
  },
  {
    // enabled: true,
    path: "/phone-input",
    component: PhoneInput,
    navbar: "Phone Input",
  },
  {
    // enabled: true,
    path: "/product-image",
    component: ProductImage,
    navbar: "Product Image",
  },
  {
    // enabled: true,
    path: "/otp-box",
    component: OtpBox,
    navbar: "Otp Box",
  },
  {
    // enabled: true,
    path: "/auto-complete",
    component: AutoComplete,
    navbar: "Auto Complete",
  },
  {
    // enabled: true,
    path: "/editable-table",
    component: EditableTable,
    navbar: "Editable Table",
  },
  {
    // enabled: true,
    path: "/file-upload",
    component: FileUpload,
    navbar: "File Upload",
  },
];
