import React, { useState } from "react";
import { Layout, Radio,Button } from "antd";
import { Link } from "react-router-dom";
import Allproducts from "./products/allproducts";
import Newproducts from "./products/newproducts";
import Accessories from "./products/accessories";
import Saleoff from "./products/saleoff";
const { Content } = Layout;

function Danhsach() {
  const [categoty, setCategory] = useState("all");
  const isCategoty = ele => setCategory(ele);
  return (
    <Content style={{ margin: "0 16px" }}>
      <Radio.Group
        defaultValue="a"
        buttonStyle="solid"
        style={{ padding: ".5rem 0" }}
      >
        <Radio.Button value="a" onClick={isCategoty.bind(null, "all")}>
          Tất cả sản phẩm
        </Radio.Button>
        <Radio.Button value="b" onClick={isCategoty.bind(null, "new")}>
          Sản phẩm mới
        </Radio.Button>
        <Radio.Button value="c" onClick={isCategoty.bind(null, "acc")}>
          Phụ kiện
        </Radio.Button>
        <Radio.Button value="d" onClick={isCategoty.bind(null, "saleoff")}>
          Khuyến mãi
        </Radio.Button>
      </Radio.Group>
      <Link to="/create-products">
        <Button style={{ margin: "0 8px" }} type="primary">
          Thêm mới
        </Button>
      </Link>
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        {categoty === "all" && <Allproducts />}
        {categoty === "new" && <Newproducts />}
        {categoty === "acc" && <Accessories />}
        {categoty === "saleoff" && <Saleoff />}
      </div>
    </Content>
  );
}
export default Danhsach;
