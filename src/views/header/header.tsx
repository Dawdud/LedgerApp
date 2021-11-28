import { FC } from 'react';
import { Navbar } from '../../components/layout/navigation/navbar/navbar'

export const Header: FC = () => {
    return (
        <header className="header">
            <Navbar text="some text"></Navbar>
        </header>)
}
