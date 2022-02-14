import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
    return {
        margin: {
            margin: theme.spacing(1),
            '&>div': {
                display: 'flex',
                spacing: 1,
                alignItems: 'flex-end',
            },
        },
    };
});
