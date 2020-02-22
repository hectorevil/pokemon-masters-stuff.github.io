import React from 'react';
import { withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

function SelectedSkillList(props) {
  const {
    classes,
    isOpened,
    onOpenHandler,
    onCloseHandler,
    skillArray
  } = props;

  const handleOnOpen = () =>
    typeof onOpenHandler === 'function' ? onOpenHandler() : null;

  const handleOnClose = () =>
    typeof onCloseHandler === 'function' ? onCloseHandler() : null;

  // turns an array into an object with value being number of duplicates. eg. [Atk+5, Atk+5] -> {Atk+5: 2}
  const filterArrayForDuplicates = arr => {
    return arr.reduce((result, current) => {
      if (!result[current]) {
        result[current] = 1;
      } else {
        result[current] += 1;
      }
      return result;
    }, {});
  };

  let skillList = Object.keys(filterArrayForDuplicates(skillArray));

  let numberOfDuplicatesArray = Object.values(
    filterArrayForDuplicates(skillArray)
  );

  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpened}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
    >
      <List dense className={classes.listRoot}>
        <Typography variant="h6" className={classes.listTitle}>
          Selected Grids
        </Typography>

        <Divider className={classes.listDivider} />

        {Boolean(skillList && skillList.length) &&
          skillList.map((skill, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={skill}
                secondary={
                  <Typography className={classes.secondary}>
                    {numberOfDuplicatesArray[index] > 1
                      ? '\u00A0 x ' + numberOfDuplicatesArray[index]
                      : null}
                  </Typography>
                }
              />
            </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
  );
}

export default withStyles(styles)(SelectedSkillList);
