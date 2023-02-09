import React from "react";
import { Icon, Table } from "semantic-ui-react";

const Courses = () => {
  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="3">Courses</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name="folder" /> Reactjs
          </Table.Cell>
          <Table.Cell>Front End Developer</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            3 hours
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name="folder" /> Javascript
          </Table.Cell>
          <Table.Cell>Front End Developer</Table.Cell>
          <Table.Cell textAlign="right">4 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name="folder" /> Html
          </Table.Cell>
          <Table.Cell>Front End Developer</Table.Cell>
          <Table.Cell textAlign="right">2 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name="folder" /> Css
          </Table.Cell>
          <Table.Cell>Front End Developer</Table.Cell>
          <Table.Cell textAlign="right">1 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name="folder" /> Nodejs
          </Table.Cell>
          <Table.Cell>Back End Developer</Table.Cell>
          <Table.Cell textAlign="right">9 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name="folder" /> SQL
          </Table.Cell>
          <Table.Cell>Back End Developer</Table.Cell>
          <Table.Cell textAlign="right">8 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Icon name="folder" /> Python
          </Table.Cell>
          <Table.Cell>Back End Developer</Table.Cell>
          <Table.Cell textAlign="right">7 hours</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default Courses;
