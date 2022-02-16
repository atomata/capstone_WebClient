import { useEffect, useState, forwardRef } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

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