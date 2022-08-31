import React from "react";
import Input from "components/Input";
import {CSelect} from "../../components/Input/selectv2";
import {PhoneContainer} from "./styles";

interface ICountryInterface {
    id: number,
    label: string,
    dial_code: string,
    code: string
}


const PhoneInput: React.FC = () => {
    // http://www.geonames.org/flags/x/np.gif


    const location: ICountryInterface[] = [
        {
            id: 1,
            label: "Afghanistan",
            dial_code: "+93",
            code: "AF"
        },
        {
            id: 2,
            label: "Aland Islands",
            dial_code: "+358",
            code: "AX"
        },
        {
            id: 3,
            label: "Albania",
            dial_code: "+355",
            code: "AL"
        },
    ];


    return (
        <PhoneContainer>
            <CSelect
                classNamePrefix="select"
                options={location}
            />
            <Input/>

            <div></div>
        </PhoneContainer>
    );
};

export default PhoneInput;
