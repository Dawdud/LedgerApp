
import { FC } from 'react';


export const Form: FC = () => {
    return (
        <form>
            <label htmlFor="name"></label>
            <input type="text" id="name"></input>
            <label htmlFor="SurName"></label>
            <input type="text" id="surname"></input>
            <label htmlFor="adress"></label>
            <input type="text" id="adresss"></input>
        </form>)
}