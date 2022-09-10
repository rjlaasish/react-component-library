import React, { useEffect, useState } from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {
  AdBlockWrapper,
  AdText,
  Container,
  Content,
  ContentWrapper,
  Icon,
} from "./styles";

function AdBlocker() {
  const ads = document.getElementById("detect")!;
  let adClasses = [
    "ad",
    "ads",
    "adsbox",
    "doubleclick",
    "ad-placement",
    "ad-placeholder",
    "adbadge",
    "BannerAd",
  ];
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    for (let item of adClasses) {
      ads?.classList.add(item);
    }
    let getProperty = window.getComputedStyle(ads).getPropertyValue("display");
    getProperty === "none" ? setShow(true) : setShow(false);
  });

  return show && show ? (
    <Container>
      <AdBlockWrapper>
        <ContentWrapper>
          <Content>
            <Icon icon={faLock} />
          </Content>
          <AdText>Adblock Detected</AdText>
        </ContentWrapper>
      </AdBlockWrapper>
    </Container>
  ) : (
    <p>Refresh, the site after changing adblocker setting!!!</p>
  );
}

export default AdBlocker;
