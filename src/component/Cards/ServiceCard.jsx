import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CodeIcon from "@mui/icons-material/Code";
import { Button } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ServiceCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {/* {props.subWord} */}
            <CodeIcon />
          </Avatar>
        }
        title={props.title}
        titleTypographyProps={{
          fontSize: 30,
          color: blue[600],
          fontFamily: ['"Montserrat"', "Open Sans"],
          fontWeight: 700,
        }}
        subheader={props.subheader}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.img}
        alt="Paella dish"
      />
      {/* <video autoPlay loop muted poster={props.img}>
        <source src={props.videos} type="video/mp4" />
      </video> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.paragrap1}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button>Read </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.pHead}</Typography>
          <Typography paragraph>{props.paragrap2}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
