import { Button, ButtonGroup } from "@mui/material";

const TextLabel= ({ textLabel, children}) => {

    return (
        <ButtonGroup>
            <Button sx={{ width: "80px", backgroundColor: "#fefefe"}}>Yes</Button>
            <Button sx={{ width: "80px", backgroundColor: "#fefefe"}}>No</Button>
        </ButtonGroup>
)
}

export default TextLabel;