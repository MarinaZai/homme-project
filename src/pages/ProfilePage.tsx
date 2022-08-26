import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Header from "../components/Header/Header";
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Container } from "@mui/system";
import { useState } from "react";

export const ProfilePage = () => {

  return (
    <div className="ProfilePage">
      <Header />
      <Box>
        <Card sx={{ maxWidth: "20%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              image="https://st.europaplus.ru/mf/p/81168/news/303/030393/first-news-desktop/b2223aef02b8e5e8285f6ac82fbd7f37.jpg"
              alt="avatar"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"#311b92"}
              >
                Sad Cat
              </Typography>
              <Typography variant="body2" color={"#311b92"}>
              Count friends 0
              </Typography>
              <Typography variant="body2" color={"#311b92"}>
              Social Network:
              <Container>
              <TelegramIcon sx={{ color: "#311b92", paddingRight: "10px"}}/>
              <LinkedInIcon sx={{ color: "#311b92", paddingRight: "10px"}}/>
              <GitHubIcon sx={{ color: "#311b92"}}/>
              </Container>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};
