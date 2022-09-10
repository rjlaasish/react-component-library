import React, { useState } from "react";
import { PhoneContainer } from "./styles";

const PhoneInput: React.FC = () => {
  const [phone, setPhone] = useState<string>();

  return (
    <div>
      {" "}
      <PhoneContainer
        enableSearch
        country={"us"}
        value={phone}
        onChange={setPhone}
      />
      <div style={{ display: "flex", marginTop: "20px", alignItems: "center" }}>
        <h4 style={{}}>You Entered: &nbsp;</h4>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default PhoneInput;
