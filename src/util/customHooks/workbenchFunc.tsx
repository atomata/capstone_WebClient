import { useState } from "react";

const useWorkbench = () => {
    const [expErr, setExpErr] = useState('');

    const handleExperienceCreate = (event, expName) => {
        let createError = false;

        // Check if name and pass are not empty
        if (expName === undefined || expName.trim() === '') {
            setExpErr("Experience name cannot be empty");
            createError = true;
        }
        else
            setExpErr("");
       
        // No errors, go and log in
        if (createError) event.preventDefault();
    };

    return { handleExperienceCreate, expErr };
};

export { useWorkbench };