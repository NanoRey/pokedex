import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => {
    return {
        pokemonsListGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridGap: '2rem',

            '@media (min-width: 320px)': {
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                gridGap: '1rem',
            },
            '@media (min-width: 780px)': {
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gridGap: '1rem',
            },
            '@media (min-width: 1024px)': {
                display: 'grid',
                gridTemplateColumns: 'repeat(4,1fr)',
                gridGap: '1rem',
            },
        },
    };
});
