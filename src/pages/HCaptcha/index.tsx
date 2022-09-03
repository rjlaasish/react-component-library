import { useEffect, useRef, useState } from "react";
import { default as CHCaptcha } from "@hcaptcha/react-hcaptcha";

export default function HCaptcha() {
  const [token, setToken] = useState<any>(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    // captchaRef.current.execute();
  };

  useEffect(() => {
    if (token) console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  return (
    <form>
      <CHCaptcha
        sitekey="0cd93b89-ac4c-4365-8358-bf7370518d54"
        onLoad={onLoad}
        onVerify={setToken}
        ref={captchaRef}
      />
    </form>
  );
}
