import React from "react";
import { Grid, Header, Table } from "semantic-ui-react";

const Leaderboard = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Grid>
        <Grid.Row >
          <Grid.Column width={8}>
            <Grid>
              <Grid.Row style={{marginBottom:"100px", marginTop:"50px" }}>
              <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={4}>
                  <Header as="h2">2034</Header>
                  <Header as="h3" style={{marginTop:"-10px"}}>Assignment Points</Header>
                  
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header as="h2">557</Header>
                  <Header as="h3" style={{marginTop:"-10px"}}>Task Points</Header>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header as="h2">1500</Header>
                  <Header as="h3" style={{marginTop:"-10px"}}>Total Amount</Header>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={4}>
                  <Header as="h2">1200</Header>
                  <Header as="h3" style={{marginTop:"-10px"}}>Due Amount</Header>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header as="h2">12-01-2023</Header>
                  <Header as="h3" style={{marginTop:"-10px"}}>Due Date</Header>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header as="h2">21-02-2023</Header>
                  <Header as="h3" style={{marginTop:"-10px"}}>Placement start</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={7} style={{ backgroundColor: "red" }}>
            <Table basic="very">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Rank</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Points</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>PavanReddy</Table.Cell>
                  <Table.Cell>20000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell>Rakesh</Table.Cell>
                  <Table.Cell>19000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>3</Table.Cell>
                  <Table.Cell>Ravi</Table.Cell>
                  <Table.Cell>18000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>4</Table.Cell>
                  <Table.Cell>Veeresh</Table.Cell>
                  <Table.Cell>17000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>5</Table.Cell>
                  <Table.Cell>Guru</Table.Cell>
                  <Table.Cell>16000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>6</Table.Cell>
                  <Table.Cell>sangu</Table.Cell>
                  <Table.Cell>15000</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Leaderboard;
