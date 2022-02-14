import React, { ReactElement } from 'react';

interface Logo {
    logo: string;
}

export const PokemonLogo = (props: Logo): ReactElement<Logo> => {
    return (
        <span>
            <img style={{ maxWidth: '100%', height: 'auto' }} src={props.logo} alt="Pokemon logo" />
        </span>
    );
};
