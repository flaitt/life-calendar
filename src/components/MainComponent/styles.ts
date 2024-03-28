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
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
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
  margin-top: 100px;
  font-size: 96px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
  @media screen and (max-width: 1200px) {
    font-size: 24px;
    margin-top: 10px;
  }
`;

export const BirthDayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const BirthDayInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #333;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
`;
export const BirthDayInput = styled.input`
  border: none;
  &::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
  outline: 0;
`;
