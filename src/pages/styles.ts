import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  font-family: "Inter", sans-serif;
  height: 100vh;
  color: #333;
  /* margin-top: 200px; */
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  /* justify-content: center; */
  /* height: 200px; */
  /* background-color: #6789; */
`;

export const Week = styled.div<{ painted?: boolean }>`
  width: 7px;
  height: 5px;
  border: 1px solid black;
  margin: 2px;
  background-color: ${({ painted }) => (painted ? "black" : "#fff")};
`;

export const Title = styled.div`
  margin-top: 200px;
  font-size: 96px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

export const BirthDayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const BirthDayInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #333;
  border-radius: 5px;
  margin-right: 10px;
`;
export const BirthDayInput = styled.input`
  border: none;
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  /* Opcional: Remover a seta no seletor de data */
  &::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
  }
`;

export const CalendarComponent = styled.div`
  position: absolute;
  margin-left: 177px;
  margin-top: 20px;
`;
