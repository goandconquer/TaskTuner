import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useState } from "react";

export default function Moodle() {
    const [mood, setMood] = useState('');

    const handleChange = (event) => {
        setMood(event.target.value);
    };

    return (
        <Box sx={{ midWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Mood</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={mood}
                    label="Mood"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Motivated</MenuItem>
                    <MenuItem value={2}>Tired</MenuItem>
                    <MenuItem value={3}>Content</MenuItem>                
                </Select>
            </FormControl>
        </Box>
    )
}