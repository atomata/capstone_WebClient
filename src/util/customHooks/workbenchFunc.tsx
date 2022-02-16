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



const useDeleteDialog = () => {
    const [delOpen, setDelOpen] = useState(false);
    const [delIndex, setDelIndex] = useState(0);
    const [delExpName, setDelExpName] = useState("");

    const handleDeleteDialogOpen = (index, expName) => {
        setDelIndex(index);
        setDelExpName(expName);
        setDelOpen(true);
    };
    
    const handleDeleteDialogClose = () => {
        setDelOpen(false);   
    };

    return { delOpen, delIndex, delExpName, handleDeleteDialogOpen, handleDeleteDialogClose };
};

export { useWorkbench, useDeleteDialog };