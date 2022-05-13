import { styled } from "@stitches/react";
import Buttons from "./Buttons";
import Logo from "./Logo";

const HeaderWrapper = styled("header", {
  display: "flex",
  alignItems: "center",
  background: "#FFFFFF",
  height: "60px",
  justifyContent: "space-between",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "justify",
});

type HeaderProps = {
  initial: string;
  name: string;
};

function Header({ initial, name }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Logo initial={initial} name={name} />
      <Buttons />
    </HeaderWrapper>
  );
}

export default Header;
