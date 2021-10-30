import "./styles.css";
const Item = ({ imgSrc }) => {
  return (
    <div className="coverageItem">
      <div
        className="coverageItemImg"
        style={{
          backgroundImage: `url("${imgSrc}")`,
        }}
      />
      <div className="quote">
        <span className="quote__text">
          {
            "Gestor Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..."
          }
        </span>
        <a href="#">
          <span> Ver mas >>></span>
        </a>
      </div>
    </div>
  );
};

export default Item;
