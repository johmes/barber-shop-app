import styled, { css } from 'styled-components';

export const Frame = styled.div`
  margin 0 auto;
  padding: 25px;
  width: 600px;
  height: 670px;
  min-width: 500px;
  min-height: 500px;
  border: 1px solid var(--unnamed-color-707070);
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 8px;
`;

export const MonthYear = styled.div`
  float: left;
  margin: 8px;
`;

export const Line = styled.div`
  float: left;
  width: 550px;
  height: 1px;
  background: #707070 0% 0% no-repeat padding-box;
  margin: 8px auto;
`;

export const Header = styled.div`
  position: relative;
  text-align: left;
  font: normal normal bold 28px/37px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px;
`;

export const Button = styled.div`
  float: left;
  width: 40px;
  height: 40px;
  border: 2px solid #707070;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 6px;
`;

export const Prev = styled.div`
  border: solid #707070;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin: 6px 12px;
`;

export const Next = styled.div`
  border: solid #707070;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin: 6px 9px;

`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 px;
`;

export const Day = styled.div`
  width: 14.2%;
  height: auto;
  position: relative;
  display: inline-block;
  text-align: center;
  align-items: center;
  padding-top: 6px;
  margin-bottom: ${({dayNumber}) => dayNumber ? "45px" : "10px"};
  letter-spacing: 0px;
  font: ${({dayNumber}) => dayNumber ? "normal normal 600 28px/37px Segoe UI" : "normal normal normal 28px/37px Segoe UI"};
  color: ${({dayNumber}) => dayNumber ? "#17181D" : "#3D3D3D"};
  cursor: ${({dayNumber}) => dayNumber ? "pointer" : "default"};

  &:nth-child(7) {
    margin-right: 0px;
  }

  ${(props) =>
    props.isToday &&
    css`
    width: 55px;
    height: 55px;
    margin-right: calc(14.2% - 55px);
    margin-bottom: calc(14.2% - 55px);
    border-radius: 28px;
    border: 2px solid #707070;

    `}

  ${(props) =>
    props.isSelected &&
    css`
      width: 55px;
      height: 55px;
      margin-right: calc(14.2% - 55px);
      margin-bottom: calc(14.2% - 55px);
      border-radius: 28px;
      background-color: #4594E0;
    `}
`;