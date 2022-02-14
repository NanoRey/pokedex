import React, { ReactElement } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './Card.styles';
import { CardProps } from './Card.props';

export const MediaCard = (props: CardProps): ReactElement => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={props.image} title="PokemonImg" />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        #{props.id}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    {props.type.map((value, index) => (
                        <Typography key={`type-${index}`} variant="body2" color="textSecondary" component="p">
                            {value}
                        </Typography>
                    ))}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
