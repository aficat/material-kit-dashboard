
import React, { Component } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
// core components
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Header from "../components/Header/Header.js";
import CustomDropdown from "../components/CustomDropdown/CustomDropdown.js";
import Button from "../components/CustomButtons/Button.js";

import styles from "../assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";

const classes = makeStyles(styles);
export default class Navigation extends Component {
  render() {

    return (
      <Header
      brand="Menu"
      color="primary"
      leftLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Link
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Link
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              navDropdown
              buttonText="Dropdown"
              dropdownHeader="Dropdown Header"
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              dropdownList={[
                "Action",
                "Another action",
                "Something else here",
                { divider: true },
                "Separated link",
                { divider: true },
                "One more separated link"
              ]}
            />
          </ListItem>
        </List>
        }
      />
    )
  }
}