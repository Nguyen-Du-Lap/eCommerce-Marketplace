'use client';

import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    username: z.string().min(2, "Username must be at least 2 characters").max(100, "Username must not exceed 100 characters"),
    email: z.string().email("Invalid email format"),
    channel: z.string().min(2, "Channel must be at least 2 characters").max(100, "Channel must not exceed 100 characters"),
});

type FormValues = {
    username: string;
    email: string;
    channel: string;
}

export default function MuiForm(){
    const form = useForm<FormValues>({
        defaultValues: {
            username: '',
            email: '',
            channel: ''
        },
        resolver: zodResolver(schema)
    })
    const { handleSubmit, register, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <form noValidate autoComplete="off" style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }} onSubmit={handleSubmit(onSubmit)}>
            <TextField label="Username" variant="outlined" fullWidth margin="normal" {...register("username")} error={!!errors.username} helperText={errors.username?.message} />
            <TextField label="Email" variant="outlined" fullWidth margin="normal" {...register("email")} error={!!errors.email} helperText={errors.email?.message} />
            <TextField label="Channel" variant="outlined" fullWidth margin="normal" {...register("channel")} error={!!errors.channel} helperText={errors.channel?.message} />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
            </Button>
        </form>
    );
};