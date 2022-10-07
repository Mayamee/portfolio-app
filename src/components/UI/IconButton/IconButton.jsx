import { Box, Link } from "../../styled/Block";

const IconButton = ({ to, size, icon }) => {
  return (
    <Box size={size}>
      <Link href={to} rel="noreferrer" target="_blank">
        {icon}
      </Link>
    </Box>
  );
};

export default IconButton;
