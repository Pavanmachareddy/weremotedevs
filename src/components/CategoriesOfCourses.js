import React from "react";
import { Grid } from "semantic-ui-react";

const CategoriesOfCourses = () => {
  return (
    <Grid>
      <Grid.Column>
        <Grid.Column>
          <Grid>
            <Grid.Row style={{ marginBottom: "100px", marginTop: "50px" }}>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={4}>
                <a href={"https://www.w3schools.com/html/default.asp"}>HTML</a>
              </Grid.Column>
              <Grid.Column width={4}>
                <a href={"https://www.w3schools.com/css/default.asp"}>CSS</a>
              </Grid.Column>
              <Grid.Column width={4}>
                <a href={"https://www.w3schools.com/js/default.asp"}>
                  JAVASCRIPT
                </a>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={4}>
                <a href={"https://reactjs.org/docs/getting-started.html"}>
                  REACTJS
                </a>
              </Grid.Column>
              <Grid.Column width={4}>
                <a href={"https://www.w3schools.com/sql/default.asp"}>SQL</a>
              </Grid.Column>
              <Grid.Column width={4}>
                <a
                  as="h1"
                  href={"https://www.w3schools.com/python/default.asp"}
                >
                  PYTHON
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Column>
    </Grid>
  );
};

export default CategoriesOfCourses;
