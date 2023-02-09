import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, GridColumn, GridRow, Image } from "semantic-ui-react";
import StudentImage from './assets/student.png';

const NavBar = () => {
  return (
    <Container style={{height:"65px", marginBottom:"50px",backgroundColor:"white "}}>
      <Grid>
        <GridRow>
          <GridColumn width={5}><Link to='/'>  
        <h2 className="black">Home</h2>  
          </Link></GridColumn>
          <GridColumn  width={3}><Link to='/leaderboard'><h2 className="black">Leaderboard</h2></Link></GridColumn>
          <GridColumn width={4}><Link to='/categoriesOfCourse'><h2 className="black">CategoriesOfCourses</h2></Link></GridColumn> 
          <GridColumn width={3}><Link to='/courses'><h2 className="black">Courses</h2></Link></GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
};

export default NavBar;
