import React, { useEffect, useState } from "react";
import SiderCard from "../../components/SiderCard/SiderCard";
import useFetchData from "../../Utils/FetchHook";
import { DistrictName, InputStyled, SiderStyled } from "./Sider.styled";
import NumberFormat from "react-number-format";
import { Scrollbars } from "react-custom-scrollbars";

const Sider = () => {
  const [family, setFamily] = useState([]);
  const [linkId, setLinkId] = useState("");
  const { data, isLoading, error } = useFetchData(
    `apartment/input/${linkId.length === 1 ? linkId : "00"}`
  );
  useEffect(() => {
    setFamily(data);
  }, [data]);

  const handleChange = (e) => {
    const inputText = e.target.value.split(" ")[1];

    if (inputText !== undefined) {
      if (inputText.length === 1) {
        setLinkId(inputText);
      }
      setFamily(
        data.filter((element) =>
          element.familyId.toString().includes(inputText)
        )
      );
    } else {
      setFamily([]);
    }
  };

  return (
    <SiderStyled width={340}>
      <Scrollbars autoHide>
        <DistrictName>Франківський район</DistrictName>
        <NumberFormat
          onChange={handleChange}
          prefix={"№ "}
          placeholder="Введіть реєстровий номер сім'ї"
          customInput={InputStyled}
        />
        {isLoading ? (
          <div />
        ) : error === null ? (
          family.slice(0, 6).map((element) => {
            if (element.surname !== null) {
              return (
                <SiderCard key={element.familyId.toString()} family={element} />
              );
            }
            return null;
          })
        ) : (
          <p>
            <br />
            No connection to server
            <br /> Please try again later
          </p>
        )}
      </Scrollbars>
    </SiderStyled>
  );
};

export default Sider;
