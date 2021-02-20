import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginTop: 100,
    backgroundColor: 'lightblue',
  },
}));

export default function ProfileCard({ userData }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={userData[0].avatar} aria-label="avatar" className={classes.avatar} />
        }
        title={`${userData[0].title} ${userData[0].firstName} ${userData[0].lastName}`}
        subheader={userData[0].email}
      />
      <CardContent>
        <Typography variant='subtitle1' component="p">
          {`Favorite Quote: ${userData[0].favQuote}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
