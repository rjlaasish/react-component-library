import React, {useState} from 'react';
import {OtpInput} from "./styles";

function OtpBox() {
    const [otp, setOtp] = useState(new Array(4).fill(""));


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (isNaN(parseInt(e.target.value))) return false
        setOtp([...otp.map((d, idx) => (idx === index ? e.target.value : d))])
        //Focus next input
        if (e.target.nextSibling) {
            //@ts-expect-error
            e.target.nextSibling.focus();
        }
    }

    return (
        <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
            <div>
                {otp.map((data, index) => {
                    return (
                        <OtpInput
                            className="otp-field"
                            type="text"
                            name="otp"
                            maxLength={1}
                            key={index}
                            value={data}
                            onChange={e => handleInputChange(e, index)}
                            onFocus={e => e.target.select()}
                        />
                    );
                })}
            </div>
            <span>You Entered : </span>
            <p>{otp.join("")}</p>
        </div>
    );
}

export default OtpBox;