import styled from "styled-components";

export const BarWrapper = styled.div`
  position: absolute;
  width: 300px;
  box-sizing: border-box;
  padding: 0 8px;
  border: 1px solid #ddd;
  border-radius: 24px;
  cursor: pointer;
  ${(props) => props.theme.mixin.boxShadowActive};


  .search-bar {
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;
