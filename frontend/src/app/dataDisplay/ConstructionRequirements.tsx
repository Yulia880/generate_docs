import { useState } from "react";
import { Box, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Autocomplete, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function ConstructionRequirements() {
    const [ isOpen, setIsOpen ] = useState(true)

    const accordionOnClick = () => {
        return setIsOpen(!isOpen)
    }

    const occupancyList = ["A-1", "A-2", "A-3", "A-4", "B-1", "B-2", "B-3", "C", "D", "E", "F-1", "F-2", "F-3"]
    
    return(
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Construction Requirements</Typography>
                <IconButton onClick={accordionOnClick} sx={{ padding: "0px"}}>{isOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}</IconButton>
            </Box>

            {isOpen && (
                <Box sx={{ padding: "0px 12px 12px 12px"}}>
                    <TableContainer sx={{ minWidth: 650, border: "1px double rgba(0, 0, 0, 0.3)", backgroundColor: "#fefefe" }} >
                        <Table aria-label="simple table" sx={{ display: "flex", }}>
                        <TableHead>
                            <TableRow sx={{ display: "flex", flexDirection: "column", borderRight: "1px solid rgba(0, 0, 0, 0.3)"}}>
                            <TableCell>Building Use</TableCell>
                            <TableCell>Occupancy</TableCell>
                            <TableCell>Building Area (㎡)</TableCell>
                            <TableCell>Building Height (storeys)</TableCell>
                            <TableCell>Sprinklered</TableCell>
                            <TableCell>Construction Article</TableCell>
                            <TableCell>Type of Construction</TableCell>
                            <TableCell>Building Area (㎡)</TableCell>
                            <TableCell>Floor Assembly FRR</TableCell>
                            <TableCell>Mezzanine FRR</TableCell>
                            <TableCell>Roof FRR (Occupied / Unoccupied)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ display: "flex", flexDirection: "column", borderRight: "1px solid rgba(0, 0, 0, 0.3)"}}>
                                <TableCell><TextField /></TableCell>
                                <TableCell><Autocomplete options={occupancyList} renderInput={(params) => <TextField {...params} />} /></TableCell>
                                <TableCell><TextField /></TableCell>
                                <TableCell><TextField /></TableCell>
                                <TableCell>
                                    <RadioGroup sx={{ flexDirection: "row"}}>
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </TableCell>
                                <TableCell><Autocomplete options={occupancyList} renderInput={(params) => <TextField {...params} />} /></TableCell>
                                <TableCell>
                                    <RadioGroup sx={{ flexDirection: "row"}}>
                                        <FormControlLabel value="NC" control={<Radio />} label="NC" />
                                        <FormControlLabel value="C" control={<Radio />} label="C" />
                                    </RadioGroup>
                                </TableCell>
                                <TableCell><TextField /></TableCell>
                                <TableCell><TextField /></TableCell>
                                <TableCell><TextField /></TableCell>
                                <TableCell><TextField /></TableCell>
                            </TableRow>
                        </TableBody>
                        </Table>
                    </TableContainer>           
                </Box>
            )}
        </>
    )
}
