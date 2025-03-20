import { AppBar, Typography, Toolbar, Box } from "@mui/material";

export default function PageAppBar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column"}}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ fontWeight: "bold"}}>Code Report Generator</Typography>
      </Toolbar>
    </AppBar>
    </Box>
  );
}
