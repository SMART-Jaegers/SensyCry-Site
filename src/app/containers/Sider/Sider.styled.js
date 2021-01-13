import styled from "styled-components";
import { Layout, Input } from "antd";

const { Sider } = Layout;

export const SiderStyled = styled(Sider)`
  background: #79a3ad;
  box-shadow: 4px 0px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  .ant-layout-sider-children {
    width: 100%;
  }
`;

export const DistrictName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.06em;
  color: #ffffff;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 20px;
`;

export const InputStyled = styled(Input)`
  display: block;
  background: #ffffff;
  border-radius: 20px;
  width: 290px;
  height: 40px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #939393;
  text-align: center;

  margin: auto;
`;
