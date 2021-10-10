import "./CourseItem.css";

const CourseItem = ({ title, subtitle, description, img }) => {
  return (
    <div className="course-card">
      <div className="course-card__banner"></div>
      <div className="course-card__info">
        <span className="course-card__title">{title} </span>
        <span className="course-card__subtitle">{subtitle} </span>
        <p className="course-card__description"> {description} </p>
      </div>
    </div>
  );
};

export default CourseItem;
