import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const DefaultValueOnPage = () => {
  return (
    <Card sx={{ maxWidth: '400px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://www.letoile.ru/upload/iblock/191/a590eaabbbabf7e836379e8df8935b1b.jpg"
          alt="sad cat"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={"#311b92"}>
            Sorry, guys
          </Typography>
          <Typography variant="body2" color={"#311b92"}>
            You need to add at least one todu or you will be left with a sad
            cat. Very sad cat.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
