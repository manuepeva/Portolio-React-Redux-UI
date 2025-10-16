import React from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { sendFormData } from "../../Redux/SendFormAction";

import { Box, Button, TextField, Typography, Alert, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const Form = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // React Hook Form
  const {
    handleSubmit,
    control,
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
    await dispatch(sendFormData(data));
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
          {t("form.title")}
        </Typography>

        <Stack spacing={2}>
          {/* First Name */}
          <Controller
            name="firstName"
            control={control}
            rules={{ required: t("form.firstNameRequired") }}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("form.name")}
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
            rules={{ required: t("form.lastNameRequired") }}
            render={({ field }) => (
              <TextField
                {...field}
                label={t("form.lastName")}
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
            rules={{ required: t("form.emailRequired") }}
            type="email"
            render={({ field }) => (
              <TextField
                {...field}
                label={t("form.email")}
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
            rules={{ required: t("form.dateRequired") }}
            render={({ field }) => (
              <TextField
                {...field}
                type="date"
                label={t("form.date")}
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
              <TextField {...field} label={t("form.comments")} fullWidth multiline rows={4} />
            )}
          />
        </Stack>

        <Button type="submit" variant="contained" color="primary">
          {t("form.send")}
        </Button>

        {isSubmitSuccessful && <Alert severity="success">{t("form.success")}</Alert>}
      </Box>
    </Box>
  );
};

export default Form;
