import { CourseItem } from "../../components";
const Education = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        margin: 10,
      }}
    >
      <CourseItem
        title="Documento"
        subtitle="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh."
        img="this"
      />
    </div>
  );
};

export default Education;
