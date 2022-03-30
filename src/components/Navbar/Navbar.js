import React from "react";
import { FaBattleNet } from "react-icons/fa";
import { Container, LogoContainer, Wrapper, Menu, MenuItem,MenuItemLink } from "./Navbar-elements";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {

    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <FaBattleNet />
                    <p> MENDO</p>

                    <p> HARD</p>
                </LogoContainer>

            <CartWidget />

                <Menu>
                    <MenuItem>
                        <MenuItemLink>
                            HOME
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            PC
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            CELULARES
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            ACCESORIOS
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            REPARACIONES
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </Wrapper>


        </Container>
    )
}

export default Navbar; 