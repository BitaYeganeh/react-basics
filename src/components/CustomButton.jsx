import Button from "@mui/material";

const CustomButton = ({ ...props }) => {
  return <Button {...props} sx={{ margin: 5 }} />;
};
export default CustomButton;
