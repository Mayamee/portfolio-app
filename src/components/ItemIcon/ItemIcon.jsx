import { IconBlock } from "../styled/Block";

const ItemIcon = ({ icon, children }) => {
  return (
    <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
      <IconBlock size="24px">{icon}</IconBlock>
      <span>{children}</span>
    </div>
  );
};

export default ItemIcon;
