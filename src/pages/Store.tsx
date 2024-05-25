import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <col key={item.idnot}>{JSON.stringify(item)}</col>
        ))}
      </Row>
    </>
  );
};

export default Store;
