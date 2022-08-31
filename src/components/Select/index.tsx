import React, {useRef, useState} from 'react';
import {CountryFlag, DropDownListContainer, ListItem, SelectButton, SelectContainer} from "./styles";


interface ISelectProps {
    title: string;
    options: any;
}


interface ICountryInterface {
    id: number,
    name: string,
    dial_code: string,
    selected: boolean,
    code: string
}


const Select = ({title,options}: ISelectProps) => {
        const [location, setLocation] = useState<ICountryInterface[]>([
            {
                id: 1,
                name: "Afghanistan",
                dial_code: "+93",
                selected: false,
                code: "AF"
            },
            {
                id: 2,
                name: "Aland Islands",
                dial_code: "+358",
                selected: false,
                code: "AX"
            },
            {
                id: 3,
                name: "Albania",
                dial_code: "+355",
                selected: false,
                code: "AL"
            },
        ]);
        const dropdownRef = useRef();
        const [selectedOption, setSelectedOption] = useState<ICountryInterface>();
        const [isListOpen, setIsListOpen] = useState(false);
        const [headerTitle, setHeaderTitle] = useState(title);
        const toggleList = () => {
            setIsListOpen(!isListOpen)
        }

        const onBLur={}

        const selectItem = (item: ICountryInterface) => {

            setIsListOpen(false);
            setHeaderTitle(item.name);
            setSelectedOption(item);
        }

        const returnCountryFlag = (countryCode: string) => `http://www.geonames.org/flags/x/${countryCode.toLowerCase()}.gif`;


        return (
            <SelectContainer onBlur={toggleList}>
                <SelectButton
                    onClick={toggleList}
                >
                    {headerTitle}
                    {selectedOption &&
                        <CountryFlag src={returnCountryFlag(selectedOption.code)}/>}
                </SelectButton>

                {isListOpen && (
                    <DropDownListContainer onBlur={toggleList}>
                        {options.map((item: ICountryInterface) => (
                            <ListItem
                                key={item.id}
                                onClick={() => selectItem(item)}
                            >
                                {item.name}
                                {' '}
                                <CountryFlag src={returnCountryFlag(item.code)}/>
                            </ListItem>
                        ))}
                    </DropDownListContainer>
                )}
            </SelectContainer>

        );
    }
;

export default Select;