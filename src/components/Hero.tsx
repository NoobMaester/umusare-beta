import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Hero = () => {
  return (
    <div className="m-4 p-4 flex justify-between flex-wrap
    ">
      <Card className="m-4" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height=""
          image="/profile1.png"
          alt="profile image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            John Doe
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Umusare is a community-focused, online platform that connects
            individuals with their local community.
          </Typography>

          <div className="mt-4">
            <Button variant="contained" color="secondary">
              Learn More...
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="m-4" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height=""
          image="/profile1.png"
          alt="profile image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            John Doe
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Umusare is a community-focused, online platform that connects
            individuals with their local community.
          </Typography>

          <div className="mt-4">
            <Button variant="contained" color="secondary">
              Learn More...
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="m-4" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height=""
          image="/profile1.png"
          alt="profile image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            John Doe
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Umusare is a community-focused, online platform that connects
            individuals with their local community.
          </Typography>

          <div className="mt-4">
            <Button variant="contained" color="secondary">
              Learn More...
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="m-4" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height=""
          image="/profile1.png"
          alt="profile image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            John Doe
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Umusare is a community-focused, online platform that connects
            individuals with their local community.
          </Typography>
          <div className="mt-4">
            <Button variant="contained" color="secondary">
              Learn More...
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
