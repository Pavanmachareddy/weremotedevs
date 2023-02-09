import React from "react";
import { Grid, Header, GridColumn, Container } from "semantic-ui-react";
import HomePage from "./homePage";

const Logo = () => {
  return (
    <>
      <Grid>
        <Grid.Row style={{ marginBottom: "50px" }}>
          <Header as="h1" style={{ margin: "20px" }}>
            Want to become a professional software developer?
          </Header>
        </Grid.Row>
        <HomePage />
        <Grid.Row>
          <Container
            style={{
              height: "105px",
              marginTop: "200px",
              paddingTop: "30px",
              paddingBottom: "30px",
              backgroundColor: "#F8F8F8",
              width: "100%",
            }}
          >
            <Grid>
              <Grid.Row>
                <GridColumn width={3}>
                  <h2>About us</h2>
                </GridColumn>
                <GridColumn width={4}>
                  <h2>Contact us</h2>
                </GridColumn>
                <GridColumn width={3}>
                  <h2>jobs</h2>
                </GridColumn>
              </Grid.Row>
            </Grid>
          </Container>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Logo;
