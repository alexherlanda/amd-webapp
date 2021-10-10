import { CoursesCarrousel } from "../../components";
const Education = () => {
  return (
    <>
      <CoursesCarrousel collectionTitle="Oratoria" coursesData={data} />
      <CoursesCarrousel collectionTitle="Retorica" coursesData={data} />
      <CoursesCarrousel
        collectionTitle="Tengo torneo mañana"
        coursesData={data}
      />
      <CoursesCarrousel collectionTitle="Para maratonear" coursesData={data} />
    </>
  );
};

const data = [
  {
    id: 1,
    title: "DOCUMENTO",
    subtitle: "hola",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
    img: "",
  },
  {
    id: 2,
    title: "DOCUMENTO",
    subtitle: "hola",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
    img: "",
  },
  {
    id: 3,
    title: "DOCUMENTO",
    subtitle: "hola",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
    img: "",
  },
  {
    id: 4,
    title: "DOCUMENTO",
    subtitle: "hola",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
    img: "",
  },
  {
    id: 5,
    title: "DOCUMENTO",
    subtitle: "hola",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
    img: "",
  },
  {
    id: 6,
    title: "DOCUMENTO",
    subtitle: "hola",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
    img: "",
  },
];

export default Education;
