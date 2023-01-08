import Auth from "../../layouts/Auth";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Divider,
  Fab,
  Typography,
} from "@mui/material";
import LoginForm from "../../sections/@auth/LoginForm";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";

export default function Login() {
  return (
    <Auth>
      <Card
        elevation={0}
        sx={{
          maxWidth: 450,
          margin: "auto",
          borderRadius: 5,
          boxShadow: `2px 4px 35px 6px rgba(0, 0, 0, 0.1)`,
          position: "relative",
        }}
      >
        <Fab size="small" sx={{ bgcolor: "#ea7317 !important", color: "white !important", position: "absolute", top: 30, right: 30 }}>
          <Close />
        </Fab>
        <CardContent sx={{ p: `40px !important` }}>
          <Typography sx={{ fontWeight: 600, fontSize: "24px", mb: 3 }}>
            {"Log In"}
          </Typography>

          <LoginForm />

          <Stack justifyContent={"center"} spacing={4} mt={5}>
            <Stack
              direction={"row"}
              spacing={0.3}
              justifyContent="center"
              sx={{
                alignItems: "center",
              }}
            >
              <Divider sx={{ minWidth: 50, bgcolor: "#000" }} />
              <Typography
                variant="subtitle2"
                color={"black"}
                sx={{ fontWeight: "bold" }}
              >
                {"OR"}
              </Typography>
              <Divider sx={{ minWidth: 50, bgcolor: "#000" }} />
            </Stack>

            {/* <Stack
              direction={"row"}
              spacing={1}
              justifyContent="center"
              alignItems={"center"}
            ></Stack> */}

            <Stack
              direction={"row"}
              spacing={1}
              justifyContent="center"
              alignItems={"center"}
            >
              <Box display={"flex"}>
                <Checkbox sx={{ mr: 1 }} />
                <Typography
                  variant="subtitle2"
                  sx={{ textAlign: "left", maxWidth: 280 }}
                >
                  {
                    "By continuing with Google or Facebook, you are agreeing to our "
                  }
                  <Link
                    to="/"
                    style={{
                      textDecoration: "unset",
                      color: "GrayText",
                    }}
                  >
                    {"Terms + Conditions"}
                  </Link>
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction={"row"}
              spacing={1}
              justifyContent="center"
              alignItems={"center"}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {"Don't Have An Account?"}
                <Link
                  to="/register"
                  style={{
                    textDecoration: "unset",
                    color: "#ea7317",
                    marginLeft: 5,
                  }}
                >
                  {"Sign Up"}
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Auth>
  );
}
