import { useMediaQuery } from "react-responsive";

const Item = ({ organizationName, organizationURL, organizationImage }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <a href={organizationURL}>
      <img
        alt={organizationName}
        src={organizationImage}
        className="organizationImage"
        width={isMobile ? 250 : 150}
      />
    </a>
  );
};

export default Item;
