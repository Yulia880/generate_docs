import { useState } from "react";
import { Box, TextField, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TextLabel from "@/components/TextLabel";


export default function ProjectInformation() {
    const [ isOpen, setIsOpen ] = useState(true)

    const accordionOnClick = () => {
        return setIsOpen(!isOpen)
    }
    return(
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Project Information</Typography>
                <IconButton onClick={accordionOnClick} sx={{ padding: "0px"}}>{isOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}</IconButton>
            </Box>

            {isOpen && (
            <Box gap={1.5} sx={{ display: "flex", flexDirection: "column", width: "100%", paddingLeft: "12px", paddingBottom: "12px"}}>
                <TextLabel textLabel={"Project Name"}>
                <TextField name="projectName" />
                </TextLabel>
                <Box gap={3} sx={{ display: "flex", width: "100%"}} >
                <TextLabel textLabel={"Street/Ave"}>
                    <TextField name="pjStreetAve" sx={{ marginLeft: "20px"}} />
                </TextLabel>
                <TextLabel textLabel={"City"}>
                    <TextField name="pjCity" />
                </TextLabel>
                <TextLabel textLabel={"Province"}>
                    <TextField name="pjProvince" />
                </TextLabel>
                </Box>
            </Box>
            )}
        </>
    )
}
