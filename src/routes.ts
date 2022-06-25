import React from 'react';

const PhoneInput = React.lazy(() => import('./pages').then(({PhoneInput}) => ({default: PhoneInput})),);

interface IRouteChildItems {
    name: string;
    path: string;
}

interface IRouteItems {
    path: string;
    navbar: string;
    child?: IRouteChildItems[];
    component:  any;
}

export const routes: IRouteItems[] = [
    {
        // enabled: true,
        path: "/map",
        component: PhoneInput,
        navbar: "google-map-react",
        child: [
            {
                name: "Basic Google Maps",
                path: "/map",
            },
            {
                name: "Custom Google Maps",
                path: "/map/custom-style",
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
        path: "/map",
        component: PhoneInput,
        navbar: "google-map-react",
        child: [
            {
                name: "Basic Google Maps",
                path: "/map",
            },
            {
                name: "Custom Google Maps",
                path: "/map/custom-style",
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
        path: "/map",
        component: PhoneInput,
        navbar: "google-map-react",
        child: [
            {
                name: "Basic Google Maps",
                path: "/map",
            },
            {
                name: "Custom Google Maps",
                path: "/map/custom-style",
            },
        ],
    },
    {
        // enabled: true,
        path: "/phone-input",
        component: PhoneInput,
        navbar: "Phone Input",

    },
];