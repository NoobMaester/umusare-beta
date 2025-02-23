import { useParams } from "react-router-dom";
import { fetchUsersByEmail } from "./../services/api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useQuery } from "@tanstack/react-query";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  DOB: string;
  picture: {
    large: string;
  };
}

const UserDetail = () => {
  const { email } = useParams<{ email: string }>();

  const { data, isLoading, isError, error } = useQuery<User, Error>({
    queryKey: ["user", email],
    queryFn: () => {
      if (!email) throw new Error("Email is required");
      return fetchUsersByEmail(email);
    },
  });

  const user = data || null;

  if (isLoading) {
    return <div className="text-center font-bold">Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container my-8">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="140"
            image={user.picture.large}
            alt="green iguana"
          /> */}
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="div">
                  {user.name.first} {user.name.last}
                </Typography> */}
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default UserDetail;
