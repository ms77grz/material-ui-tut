import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import { green, yellow, pink, blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  test: {
    border: ({ category }) => {
      if (category === 'work') return '1px solid red';
    },
    // minHeight: 350,
    // '&:hover': {
    //   background: '#f4f4f4',
    // },
  },
  avatar: {
    background: ({ category }) => {
      if (category === 'work') return yellow[700];
      if (category === 'money') return green[500];
      if (category === 'todos') return pink[700];
      return blue[500];
    },
  },
});

export default function NoteCard({
  id,
  title,
  details,
  category,
  handleDelete,
}) {
  const classes = useStyles({ category });

  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {category.charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={title}
          subheader={category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
