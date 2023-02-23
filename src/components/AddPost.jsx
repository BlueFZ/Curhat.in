import styled from "@emotion/styled";
import {
  Add,
  EmojiEmotions,
  Image,
  PersonAddAlt1,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";

const Modals = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const AddPost = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "50%", sm: "50%", md: "50%", lg: "30px", xl: "30px" },
          transform: {
            xs: "translate(-50%)",
            sm: "translate(-50%)",
            md: "translate(-50%)",
            lg: "none",
            xl: "none",
          },
          minWidth: '56px'
        }}
      >
        <Fab
          onClick={() => {
            handleClick();
          }}
          color="primary"
          aria-label="add"
        >
          <Add />
        </Fab>
      </Tooltip>

      <Modals
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          maxHeight="100vh"
          bgcolor={'background.default'}
          p={3}
          borderRadius={5}
          color={'text.primary'}
        >
          <Typography variant="h5" color={grey} textAlign="center">
            Create Post
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              my: "10px",
            }}
          >
            <Avatar
              sx={{
                width: 30,
                height: 30,
                backgroundColor: "magenta",
              }}
            >
              D
            </Avatar>
            <Typography variant="span" fontWeight={500} color={grey}>
              Daniswari Yurin
            </Typography>
          </Box>
          <TextField
            id="filled-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            fullWidth
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotions />
            <Image />
            <VideoCameraBack />
            <PersonAddAlt1 />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button onClick={() => {handleClose()}} color="error">Cancel</Button>
          </ButtonGroup>
        </Box>
      </Modals>
    </>
  );
};

export default AddPost;
