import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ProjectData from "./projectsData";
import { Link } from "react-router-dom";

function MyProjectsComp() {
  return (
    <>
    <h1 style={{color:"darkgoldenrod",textAlign:"center",fontSize:"45px",fontFamily:"cursive",marginTop:"-30px"}}><b>My Projects</b></h1>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"-20px"}}>
      {ProjectData.map((item, index) => (
         <Link to={item.route} className="project-link">
        <Card sx={{ maxWidth: 275 ,margin:"20px 30px",flex: "1 0 20%"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="145"
              image={item.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
         
            <Button className="project-btn">
              View Project <img src={require(`./projects/projectImages/right arrow.png`)} alt="" style={{height:"10px",width:"12px",marginLeft:"5px"}}/>
            </Button>
           
          </CardActions>
        </Card>
         </Link>
      ))}
      </div>
    </>
  );
}

export default MyProjectsComp;
