"use client";

import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import PageAppBar from "./appBar/PageAppBar";
import TextLabel from "@/components/TextLabel";
import ProjectInformation from "./dataDisplay/ProjectInformation";
import Clientnformation from "./dataDisplay/ClientInformation";
import BuildingDescription from "./dataDisplay/BuildingDescription";
import ConstructionRequirements from "./dataDisplay/ConstructionRequirements";

export default function Home() {
  // Initialize formData with default values to prevent hydration mismatch
  const [formData, setFormData] = useState<{ name: string; date: string; comment: string }>({
    name: "",
    date: "",
    comment: "",
  });
  
  // Handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/generate-doc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "document.docx";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      console.error("Failed to generate document");
    }
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev }));
  }, []);
    

  return (
    <Box sx={{ width: "100%"}}>
      <PageAppBar />
      <Box gap={2} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginY: "15px", paddingX: "24px"}}>
        <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold"}}> Generate Word Document </Typography>
        <Typography fontSize={13}> Generate Word Document allows you to quickly create and customize professional Word documents with ease.</Typography>
        </Box>
        {/* Form component */}
        <Box component="form" display="flex" flexDirection="column" gap={1.5} sx={{ width: "100%", paddingTop: "12px"}}>

        <Box gap={3} sx={{ display: "flex", width: "100%"}} >
        <TextLabel textLabel={"Project Number"}>
            <TextField name="name" value={formData.name} onChange={handleChange}/>
          </TextLabel>
          <TextLabel textLabel={"Report Date"}>
            <TextField name="date" value={formData.date} type="date" onChange={handleChange} sx={{ marginLeft: "33px"}} />
          </TextLabel>
          </Box>

          <Box gap={3} sx={{ display: "flex", width: "100%"}} >
          <TextLabel textLabel={"Report Author"}>
            <TextField name="rptAuthor" onChange={handleChange} sx={{marginLeft: "10px"}} />
          </TextLabel>
          <TextLabel textLabel={"Report Reviewer "}>
            <TextField name="rptReviewer" onChange={handleChange} />
          </TextLabel>
          </Box>

          <Divider sx={{ width: "100%", paddingTop: "12px"}} />
          <ProjectInformation />

          <Divider sx={{ width: "100%"}} />
          <Clientnformation />

          <Divider sx={{ width: "100%"}} />
          <BuildingDescription />

          <Divider sx={{ width: "100%"}} />
          <ConstructionRequirements />
          
          <TextField
            label="Comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            multiline
            rows={4}
            sx={{ display: "none"}}
          />
        </Box>
        <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ width: "auto", paddingTop: "12px"}}>
          Generate  
        </Button>
      </Box>
    </Box>
  );
}
