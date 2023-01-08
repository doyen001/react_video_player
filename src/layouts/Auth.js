import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box } from "@mui/system";

export default function Auth({ children }) {
  return (
    <>
      <Box mt={8} />
      <LazyLoadImage
        src="./assets/logo-netOne-primary.svg"
        alt="Logo"
        width={223}
        height={71}
      />
      <Box mt={8} />

      {children}
    </>
  );
}
