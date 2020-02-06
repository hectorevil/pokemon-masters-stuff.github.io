import React from 'react';
import { withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

function SelectedSkillList(props) {
  const { classes, isOpened, onOpenHandler, onCloseHandler, skillList } = props;

  const handleOnOpen = () =>
    typeof onOpenHandler === 'function' ? onOpenHandler() : null;

  const handleOnClose = () =>
    typeof onCloseHandler === 'function' ? onCloseHandler() : null;
  // const handleOnItemClick = (skill, index) => {
  //   console.log(skill, index);
  // };

  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpened}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
    >
      <List dense className={classes.listRoot}>
        <Typography variant="h6" className={classes.listTitle}>
          Active Skills
        </Typography>

        <Divider className={classes.listDivider} />

        {Boolean(skillList && skillList.length) &&
          skillList.map((skill, index) => (
            <ListItem key={`${index}-${skill}`}>
              <ListItemText primary={skill} />
              {/* <ListItemSecondaryAction
                onClick={() => handleOnItemClick({ skill, index })}
              >
                <IconButton edge="end" aria-label="delete">
                <CloseIcon />
              </IconButton>
              </ListItemSecondaryAction> */}
            </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
  );
}

export default withStyles(styles)(SelectedSkillList);
