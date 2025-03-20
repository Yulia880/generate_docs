import { useState } from "react";
import { Box, Typography, IconButton, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function BuildingDescription() {
    const [ isOpen, setIsOpen ] = useState(true)

    const accordionOnClick = () => {
        return setIsOpen(!isOpen)
    }
    return(
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Building Description</Typography>
                <IconButton onClick={accordionOnClick} sx={{ padding: "0px"}}>{isOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}</IconButton>
            </Box>

            {isOpen && (
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%", paddingLeft: "12px", paddingBottom: "12px"}}>
                <FormGroup sx={{ display: "flex", width: "100%", flexDirection: "row"}}>
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="A-1" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="A-2" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="A-3" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="A-4" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="B-1" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="B-2" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="B-3" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="C" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="D" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="E" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="F-1" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="F-2" />
                    <FormControlLabel control={<Checkbox sx={{ paddingRight: "6px"}} />} sx={{ marginRight: "30px"}} label="F-3" />
                </FormGroup>
            </Box>
            )}
        </>
    )
}
