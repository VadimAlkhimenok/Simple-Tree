import React from 'react';
import classes from './Main.module.css';
import { Nav } from '../Nav/Nav';
import Text from '../Text/Text';

export const Main = () => {

    return (
        <div className={ classes.Main }>
            <Nav />
            <Text />
        </div>
    )
}