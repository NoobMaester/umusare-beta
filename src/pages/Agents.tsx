
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./../services/api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const UserList = () => {
  
  const {data, isLoading, error} = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  })

  const users = data?.results || [];

  if (isLoading) {return <div>Loading...</div>;}
  if (error) {return <div>Error: {(error as Error).message}</div>;}

  return (
    <div className="container my-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        User List
      </h2>
      <ul className="flex flex-wrap justify-center items-center gap-4">
        {users.map((user: User) => (
              <Card key={user.email} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={user.picture.large}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.name.first} {user.name.last}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
              </CardActionArea>
              </Card>
            ))}
      </ul>
    </div>
  );
};

export default UserList;
