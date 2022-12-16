import AccountMen from "../../components/Menu/Menu";
import { Outlet } from 'react-router-dom'
import { Container } from "./PaginaPadrao.styled";

export const PaginaPadrao = () => {
    return (
        <>
            <AccountMen />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}