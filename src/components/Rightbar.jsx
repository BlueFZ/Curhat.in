import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import photos from "../data/imgList.json";

const Rightbar = () => {
  return (
    <Box
      p={2}
      flex={2}
      sx={{
        display: { xs: "none", sm: "block", height: "maxContent" },
      }}
      
    >
      <Box position="" >
        <Typography variant="h6">Online Friends</Typography>

        <Box width={300}>
          <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Srevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Revor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Krevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Frevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Zrevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Box>

        <Typography variant="h6" mt={2}>
          Latest Photos
        </Typography>
        <ImageList
          sx={{
            overflowY: "auto",
          }}
          cols={3}
          rowHeight={100}
        >
          {photos.map((foto) => {
            return (
              <Button key={foto.title} variant="text" sx={{p: "5px"}}>
                <ImageListItem key={foto.title}>
                  <img src={foto.img} />
                </ImageListItem>
              </Button>
            );
          })}
        </ImageList>

        <Typography variant="h6">Latest Conversation</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItemButton>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </ListItemButton>
          <Divider variant="inset" component="li" />
          <ListItemButton>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </ListItemButton>
          <Divider variant="inset" component="li" />
          <ListItemButton>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
