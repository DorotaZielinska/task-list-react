import { NavigationItem, NavigationList, StyledNavLink } from "./styled"

export default () => {
    return (
        <nav>
            <NavigationList>
                <NavigationItem>
                    <StyledNavLink to="/zadania">
                        Zadania
                    </StyledNavLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledNavLink to="/autor">
                        O autorze
                    </StyledNavLink>
                </NavigationItem>
            </NavigationList>
        </nav>
    )
}