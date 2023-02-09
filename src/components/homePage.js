import React from 'react'
import {
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Image,
  } from "semantic-ui-react";
  import CssImage from "./assets/Css.png";
  import HtmlImage from "./assets/html.png";
  import JsImage from "./assets/javascript.png";
  import ReactImage from "./assets/Reactjs.png";

const HomePage = () => {
  return (
      <Container >
      <Grid>
        <GridRow style={{marginBottom:"20px"}}>
          <GridColumn width={9}>
            <Image src={ReactImage} size="large" circulr />
          </GridColumn>
          <GridColumn width={5} style={{marginLeft: '5%', marginTop:"8%"}}>
            <Header as="h2">Reactjs Full Course</Header>
          </GridColumn>
        </GridRow>
        <GridRow style={{marginBottom:"20px"}}>
          <GridColumn width={9}>
            <Image src={HtmlImage} size="large" circulr />
          </GridColumn>
          <GridColumn width={5} style={{marginLeft: '5%', marginTop:"8%"}}>
            <Header as="h2">HTML Full Course</Header>
          </GridColumn>
        </GridRow>
        <GridRow style={{marginBottom:"20px"}}>
          <GridColumn width={9}>
            <Image src={JsImage} size="large" circulr />
          </GridColumn>
          <GridColumn width={5} style={{marginLeft: '5%', marginTop:"8%"}}>
            <Header as="h2">Javascript Full Course</Header>
          </GridColumn>
        </GridRow>
        <GridRow style={{marginBottom:"20px"}}>
          <GridColumn width={9}>
            <Image src={CssImage} size="large" circulr />
          </GridColumn>
          <GridColumn width={5} style={{marginLeft: '5%', marginTop:"12%"}}>
            <Header as="h2">Css Full Course</Header>
          </GridColumn>
        </GridRow>
      </Grid>
      
    </Container>
  )
}

export default HomePage
