import { makeStyles } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

// TODO: "direction" tiene que ir de tipo ANY porque flexDirection tiene un tipado especial.
// Más info aqui: https://github.com/cssinjs/jss/issues/1344

const flexDisplay = (direction: any, justifyContent: string, alignItems: string): CSSProperties => {
    return {
        display: 'flex',
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
    };
};

export const useStyles = makeStyles(() => {
    return {
        gridContainer: {
            ...flexDisplay('column', 'center', 'center'),
            gridTemplate: '100px auto / auto',

            '&>div:nth-child(1)': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '1rem',
                // '@media (min-width: 320px)': {
                //     wight: '15px',
                //     whiteSpace: 'nowrap',
                //     overflow: 'hidden',
                //     textOverflow: 'ellipsis',
                // },
            },

            '&>div:last-child': {
                marginTop: '1.5rem',
                marginBottom: '1rem',
            },
        },
    };
});
