import { PseudoBox } from "@chakra-ui/core";
import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface MenuButtonProps {
  title: string;
  setState: Dispatch<SetStateAction<string>>;
  state: string;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  title,
  setState,
  state,
}) => {
  return (
    <Link
      to={`/dashboard/${title === "Home" ? "" : title}`}
      style={{ textDecoration: "none", color: "#DFDFDF" }}
    >
      <PseudoBox
        as="p"
        cursor="pointer"
        fontFamily="body"
        fontSize="xl"
        textDecoration={state === title ? "underline" : "none"}
        m="10px 0px"
        _hover={{ textDecoration: "underline" }}
        onClick={() => setState(title)}
      >
        {title}
      </PseudoBox>
    </Link>
  );
};
