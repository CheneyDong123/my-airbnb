import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  font-weight: 600;

  .btns {
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: content-box;
    color: ${(props) =>
      props.theme.isAlpha ? "#fff" : props.theme.text.primary};

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      box-sizing: content-box;

      &:hover {
        background-color: ${(props) =>
          props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5"};
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    border: 1px solid #ccc;
    margin-right: 24px;
    box-sizing: border-box;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    color: ${(props) => props.theme.text.primaryColor};

    ${(props) => props.theme.mixin.boxShadowActive}

    .panel {
      width: 250px;
      position: absolute;
      right: 0;
      top: 50px;
      background-color: #fff;
      border-radius: 10px;

      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      .panel-top, .bottom {
        padding: 10px 0;

        .item {
          line-height: 40px;
          padding: 0 20px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #eee;
      }
    }
  }
`;
