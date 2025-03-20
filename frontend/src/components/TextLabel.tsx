import { Box, Typography } from "@mui/material";

const TextLabel= ({ textLabel, children}) => {
    return (
          <Box gap={1} sx={{display: "flex", alignItems: "center"}}>
            <Typography>{textLabel}</Typography>
            {children}
          </Box>
    )
}

export default TextLabel;