"use client";
import { useState, useEffect } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

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
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" gap={3} mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Generate Word Document
        </Typography>
        {/* Form component */}
        <Box component="form" onSubmit={handleSubmit} width="100%" display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            Generate
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
