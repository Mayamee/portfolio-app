import { Box, Link, SVGLink } from "../../styled/Block";

const IconButton = ({ to, size, icon }) => {
  return (
    <Box size={size}>
      <SVGLink href={to} rel="noreferrer" target="_blank">
        {icon}
      </SVGLink>
    </Box>
  );
};

export default IconButton;
