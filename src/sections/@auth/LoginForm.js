import { useState } from "react";
import { Link } from "react-router-dom";
// @mui
import { Button, FormControl, FormHelperText, TextField } from "@mui/material";
import { Box } from "@mui/system";
// hooks
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onSubmit = (data) => {};

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl error={!!errors.email} margin="normal" fullWidth>
        <TextField
          error={!!errors.email}
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
          label={"E-mail"}
        />

        {!!errors.email && (
          <FormHelperText>{errors.email.message}</FormHelperText>
        )}
      </FormControl>
      <FormControl error={!!errors.password} margin="normal" fullWidth>
        <TextField
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          error={!!errors.password}
          type={isShowPassword ? "text" : "password"}
          label={"Password"}
          InputProps={{
            endAdornment: (
              <Button
                color="inherit"
                size="small"
                sx={{ textTransform: "uppercase", color: "grey !important" }}
                onClick={handleClickShowPassword}
              >
                {isShowPassword ? "Hide" : "Show"}
              </Button>
            ),
          }}
        />
        
        {!!errors.password && (
          <FormHelperText>{errors.password.message}</FormHelperText>
        )}
      </FormControl>

      <Box mt={2} />

      <Link
        to={"/"}
        style={{
          textDecoration: "unset",
          color: "GrayText",
          fontWeight: "bold",
        }}
      >
        {"forgot password?"}
      </Link>

      <Box mt={3} />

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        size="large"
        sx={{ px: 5 }}
      >
        {"Log In"}
      </Button>
    </form>
  );
}
