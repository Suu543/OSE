import styled from "styled-components";

export const Navbar = styled.nav`
  height: 8vh;
  width: 100%;
  margin: auto;
  position: fixed;
  z-index: 10;
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  background-color: white;

  @media all and (max-width: 995px) {
    grid-template-columns: 12fr;
  }
`;

export const NavbarLeft = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  h1 {
    font-size: 5rem;
    text-align: center;

    a {
      text-decoration: none;
      color: #588a72;
    }
  }

  @media all and (max-width: 995px) {
    display: grid;
    grid-template-columns: 6fr 6fr;
  }
`;

export const NavbarCenter = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;

  li {
    font-size: 2rem;

    a {
      text-decoration: none;
      color: black;
    }
  }

  @media all and (max-width: 995px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    margin-top: 1rem;
    position: absolute;
    left: 0;
    top: 6.5vh;
    z-index: 100;
    width: 100%;
    background: white;
    animation: ${(props) => (props.open ? "fromLeft 0.6s ease-in-out" : "")};

    li {
      width: 100%;
      padding: 1rem;
      font-size: 1.5rem;
    }

    @keyframes fromLeft {
      from {
        left: 500px;
      }

      to {
        left: 0;
      }
    }
  }
`;

export const NavbarRight = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;

  li {
    font-size: 2rem;
    margin-left: 1.5rem;
    color: black;

    a {
      color: black;
      text-decoration: none;
    }
  }

  li:nth-child(2),
  button {
    background: #588a72;
    color: white;
    padding: 1rem;
    border-radius: 10%;
  }

  button {
    font-size: 1.5rem;
    color: white;
    border: none;
    display: inline-block;
    margin-left: 1rem;
  }

  @media all and (max-width: 995px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    z-index: 100;
    left: 0;
    top: 28vh;
    background: white;
    width: 100%;
    animation: ${(props) => (props.open ? "fromLeft 0.6s ease-in-out" : "")};

    li {
      width: 100%;
      padding: 1rem;
      text-align: center;
      font-size: 1.5rem;
    }

    button {
      width: 50%;
    }

    @keyframes fromLeft {
      from {
        left: -500px;
      }

      to {
        left: 0;
      }
    }
  }
`;

export const NavbarRightHamburger = styled.section`
  display: none;

  @media all and (max-width: 995px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
`;

export const Container = styled.article`
  width: 100%;
`;
