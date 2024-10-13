
import Carousel from "react-bootstrap/Carousel";
import GridExample from "./GridExample";

const List = () => {
  return (
    <>
      <Carousel >
        <Carousel.Item>
          <GridExample />
        </Carousel.Item>
        <Carousel.Item>
          <GridExample />
        </Carousel.Item>
        <Carousel.Item>
          <GridExample />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default List;
