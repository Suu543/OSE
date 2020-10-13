import styled from "styled-components";

export const Navbar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
  display: flex;
  height: 90px;
  width: 100%;

  @media all and (max-width: 767px) {
    height: 80px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 90px;
    background-color: #fff;
    box-shadow: 0 12px 24px -4px rgba(0, 0, 0, 0.08);
    opacity: ${({ axisy }) =>
      axisy < 10
        ? 0
        : axisy < 20
        ? 0.2
        : axisy < 30
        ? 0.3
        : axisy < 40
        ? 0.5
        : axisy < 50
        ? 0.6
        : axisy < 60
        ? 0.7
        : axisy < 70
        ? 0.8
        : axisy < 90
        ? 0.9
        : 1};
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    background-color: #fff;
    box-shadow: 0 12px 24px -4px rgba(0, 0, 0, 0.08);
    opacity: ${({ axisy }) =>
      axisy < 30
        ? 0
        : axisy < 50
        ? 0.2
        : axisy < 60
        ? 0.3
        : axisy < 70
        ? 0.5
        : axisy < 80
        ? 0.6
        : axisy < 90
        ? 0.7
        : axisy < 100
        ? 0.8
        : axisy < 110
        ? 0.9
        : 1};
  }
`;

export const NavbarWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  display: relative;
  z-index: 999;

  @media all and (max-width: 1250px) {
    width: 100%;
  }
  
  @media all and (max-width: 999px) {
    justify-content: space-around;
  }
`;

export const NavbarLogoWrapper = styled.div`
  flex: 1 1 2rem;
  display: relative;

  h1 {
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    a {
      display: inline-block;

      height: 90px;
      width: 20vh;
      text-decoration: none;
      color: #588a72;
      background: url("https://ose.s3.ap-northeast-2.amazonaws.com/static/%EB%A1%9C%EA%B3%A0-%EA%B2%B0%EC%A0%95.png")
        no-repeat;
      background-size: contain;
      background-position: center;
    }
  }

  @media all and (max-width: 999px) {
    flex: 1 1 auto;
  }
`;

export const NavbarLinksWrapper = styled.div`
  flex: 5 1 2rem;

  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;

  button {
    border: none;
    background: none;
    font-size: 2rem;
    text-decoration: none;
    color: #083741;
    font-weight: 500;
    cursor: pointer;
  }

  li {
    font-size: 2rem;

    a {
      text-decoration: none;
      color: #083741;
      font-size: 2rem;
      font-weight: 500;
      cursor: pointer;
    }
  }

  li:nth-child(6) {
    background: #efa618;
    padding: 1.5rem;
    border-radius: 30px;

    a {
      color: #ffffff;
    }
  }

  @media all and (max-width: 1250px) {
    flex: 8 1 2rem;
  }

  @media all and (max-width: 1000px){
    flex: 1 1 auto;
    display: ${(props) => (props.open ? "flex" : "none")};
    position: absolute;
    flex-direction: column;
    top: 9vh;
    width: 100%;
    height: 91vh;
    background-color: white;
    animation: ${(props) => (props.open ? "rightToLeft 0.6s ease-in-out" : "")};

    @keyframes rightToLeft {
      from {
        left: 500px;
      }

      to {
        left: 0;
      }
    }
  }

`;

export const NavbarLinksHamburger = styled.div`
  display: none;

  @media all and (max-width: 999px) {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    align-items: flex-end;
    justify-content: center;
    margin-right: 3rem;

    span {
      display: block;
      width: 3rem;
      font-weight: bolder;
      height: 4px;
      background: #2b1700;
      border-radius: 3px;
      margin-top: 7px;
      transition: all ease 0.5s;
    }

    span:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(360deg)" : "")};
    }

    span:nth-child(2) {
      transition: ${(props) => (props.open ? "width" : "")};
      width: ${(props) => (props.open ? "2rem" : "3rem")};
      transform: ${(props) => (props.open ? "translateX(0.6rem)" : "")};
    }
  }

`

export const Container = styled.article`
  width: 100%;
`;

// export const NavbarWrapper = styled.section``

// export const Navbar = styled.nav`
/* opacity: ${({ axisy }) =>
    axisy < 10
      ? 0
      : axisy < 20
      ? 0.2
      : axisy < 30
      ? 0.3
      : axisy < 40
      ? 0.5
      : axisy < 50
      ? 0.6
      : axisy < 60
      ? 0.7
      : axisy < 70
      ? 0.8
      : axisy < 90
      ? 0.9
      : 1}; */

//   width: 100%;
//   margin: auto;
//   position: sticky;
//   top: 0;
//   z-index: 9999;
//   display: grid;
//   grid-template-columns: 3fr 6fr 3fr;
//   background-color: white;
//   box-shadow: 2px 12px 6px -6px #777;
//   display: none;

//   @media all and (max-width: 995px) {
//     grid-template-columns: 12fr;
//   }
// `;

// export const NavbarLeft = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   list-style: none;

//   h1 {
//     font-size: 5rem;
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     a {
//       display: inline-block;
//       /* width: 7rem;
//       height: 7rem; */
//       height: 9vh;
//       width: 20vh;
//       text-decoration: none;
//       color: #588a72;
//       background: url("https://ose.s3.ap-northeast-2.amazonaws.com/static/%EB%A1%9C%EA%B3%A0-%EA%B2%B0%EC%A0%95.png")
//         no-repeat;
//       background-size: contain;
//       background-position: center;
//     }
//   }

//   @media all and (max-width: 995px) {
//     display: grid;
//     grid-template-columns: 6fr 6fr;
//   }
// `;

// export const NavbarCenter = styled.section`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   list-style: none;

//   li {
//     font-size: 2rem;

//     a {
//       text-decoration: none;
//       color: black;
//     }
//   }

//   @media all and (max-width: 995px) {
//     display: ${(props) => (props.open ? "flex" : "none")};
//     flex-direction: column;
//     margin-top: 1rem;
//     position: absolute;
//     left: 0;
//     top: 7vh;
//     z-index: 100;
//     width: 100%;
//     /* background: white; */
//     animation: ${(props) => (props.open ? "rightToLeft 0.6s ease-in-out" : "")};

//     li {
//       width: 100%;
//       padding: 1rem;
//       font-size: 1.5rem;
//     }

//     @keyframes rightToLeft {
//       from {
//         left: 500px;
//       }

//       to {
//         left: 0;
//       }
//     }
//   }
// `;

// export const NavbarRight = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   list-style: none;

//   li {
//     font-size: 2rem;
//     margin-left: 1.5rem;
//     color: black;

//     a {
//       color: black;
//       text-decoration: none;
//     }
//   }

//   li:nth-child(2),
//   button {
//     display: inline-block;
//     background: #588a72;
//     color: white;
//     padding: 1rem;
//     font-size: 1.5rem;
//     color: white;
//     border: none;
//     margin-left: 1rem;
//   }

//   @media all and (max-width: 995px) {
//     display: ${(props) => (props.open ? "flex" : "none")};
//     flex-direction: column;
//     position: absolute;
//     z-index: 100;
//     left: 0;
//     top: 27.5vh;
//     background: white;
//     width: 100%;
//     animation: ${(props) => (props.open ? "leftToRight 0.6s ease-in-out" : "")};

//     li {
//       width: 100%;
//       padding: 1rem;
//       font-size: 1.5rem;
//     }

//     li:nth-child(2),
//     button {
//       width: 90%;
//       margin: 1rem auto;
//       text-align: center;
//     }

//     @keyframes leftToRight {
//       from {
//         left: -500px;
//       }

//       to {
//         left: 0;
//       }
//     }
//   }
// `;

// export const NavbarRightHamburger = styled.section`
//   display: none;

//   @media all and (max-width: 995px) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     span {
//       display: block;
//       width: 3rem;
//       font-weight: bolder;
//       height: 4px;
//       background: #2b1700;
//       border-radius: 3px;
//       margin-top: 7px;
//       transition: all ease 0.5s;
//     }

//     span:nth-child(1) {
//       transform: ${(props) => (props.open ? "rotate(360deg)" : "")};
//     }

//     span:nth-child(2) {
//       transition: ${(props) => (props.open ? "width" : "")};
//       width: ${(props) => (props.open ? "2rem" : "3rem")};
//       transform: ${(props) => (props.open ? "translateX(0.6rem)" : "")};
//     }
//   }
// `;

// export const Container = styled.article`
//   width: 100%;
// `;
