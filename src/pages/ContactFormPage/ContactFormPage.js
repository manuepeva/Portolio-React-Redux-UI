import React from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { sendFormData } from "../../Redux/SendFormAction";

import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Stack,
} from "@mui/material";

const Form = () => {
  const dispatch = useDispatch();

  // React Hook Form
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      date: "",
      comments: "",
    },
  });

 const onSubmit = async (data) => {
  const result = await dispatch(sendFormData(data));
  
  if (result) {
    console.log("Mensaje enviado con éxito:", result);
    reset();
  } else {
    console.log("Error al enviar mensaje");
  }
};


  return (
    <Box m={4} mx={0}>
<Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Please Enter Your Information
      </Typography>

      <Stack spacing={2}>
        {/* First Name */}
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "First name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          )}
        />

        {/* Last Name */}
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "Last name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          type="email"
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        {/* Date */}
        <Controller
          name="date"
          control={control}
          rules={{ required: "Date is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              type="date"
              label="Date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={!!errors.date}
              helperText={errors.date?.message}
            />
          )}
        />

        {/* Comments */}
        <Controller
          name="comments"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Comments"
              fullWidth
              multiline
              rows={4}
            />
          )}
        />
      </Stack>

      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>

      {isSubmitSuccessful && (
        <Alert severity="success">Your message was successfully sent!</Alert>
      )}
    </Box>
      </Box>
  );
};

export default Form;
