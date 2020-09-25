import styled from "styled-components";

export const Navbar = styled.nav`
  min-height: 8vh;
  max-height: 10vh;
  width: 100%;
  margin: auto;
  position: fixed;
  z-index: 10;
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  background-color: white;

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      font-weight: 700;

      a {
        text-decoration: none;
      }
    }
  }

  @media all and (max-width: 995px) {
    grid-template-columns: 3fr 9fr;
  }
`;

export const NavbarLeft = styled.ul`
  display: flex;
  justify-content: center;

  li {
    font-size: 5rem;

    a {
      color: #588a72;
    }
  }
`;

export const NavbarCenter = styled.ul`
  justify-content: space-evenly;
  align-items: center;

  li {
    font-size: 2rem;

    a {
      color: black;
    }
  }

  @media all and (max-width: 995px) {
    li {
      display: ${(props) => (props.open ? "none" : "none")};
    }
  }
`;

export const NavbarRight = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  li {
    font-size: 2rem;
    margin-left: 1.5rem;
    color: black;

    a {
      color: black;
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

    li {
      display: ${(props) => (props.open ? "flex" : "none")};
    }
  }
`;

export const NavbarRightHamburger = styled.section`
  display: none;

  @media all and (max-width: 995px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    div {
      width: 3rem;
      font-weight: bolder;
      padding: 0;
      margin: 0;
      height: 4px;
      background: #2b1700;
      border-radius: 3px;
      margin-top: 7px;
      margin-right: 30px;
    }

    :first-child {
      transform: ${(props) =>
        props.open ? "rotate(45deg) translate(7.5px, 7.5px)" : ""};
    }
    :nth-child(2n) {
      width: 2.5rem;
      display: ${(props) => (props.open ? "none" : "flex")};
    }
    :nth-child(3n) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "")};
    }
  }
`;

export const Container = styled.article`
  width: 100%;
`;
