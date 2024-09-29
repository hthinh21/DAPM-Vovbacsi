import Carousel from "react-bootstrap/Carousel";
import GridBenh from "./GridBenh";

const ListBenh = () => {
    return (
        <>
            <Carousel >
        <Carousel.Item>
          <GridBenh />
        </Carousel.Item>
        <Carousel.Item>
          <GridBenh />
        </Carousel.Item>
        <Carousel.Item>
          <GridBenh />
        </Carousel.Item>
      </Carousel>
        </>
    )
}
export default ListBenh;