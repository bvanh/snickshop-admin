import React, { useEffect } from "react";
import { Table, Divider, Popconfirm, Icon, Button} from "antd";
import { Link } from "react-router-dom";
import fetch from "isomorphic-unfetch";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/index";

function mapStateToProps(state) {
  return {
    db: state.allproducts
  };
}
// dùng mapDisptach để mapping action fetchProducts vào props của components
function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: data => dispatch(fetchProducts(data))
  };
}
function Allproduct(props) {
  const { db } = props;
  useEffect(() => {
    fetch("https://data-shoes.herokuapp.com/tatcasanpham")
      .then(res => res.json())
      .then(data => props.fetchProducts(data));
  }, []);
  const columns = [
    {
      title: "Avatar",
      dataIndex: "src",
      key: "avatar",
      render: text => (
        <img
          className="avatar"
          src={text}
          alt="anh demo"
          style={{ height: "50px" }}
        />
      )
    },
    {
      title: "Name",
      dataIndex: "ten",
      key: "name"
    },
    {
      title: "Price",
      dataIndex: "gia",
      render: price => <span>{price.toLocaleString()} đ</span>
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) =>
        db.length >= 1 ? (
          <span>
            <Link to={`/products/${record.id}`}>Edit</Link>
            <Divider type="vertical" />
            <Popconfirm
              title="Sure to delete?"
              // onConfirm={handleDelete(record.id)}
            >
              <a>Delete</a>
            </Popconfirm>
            <Divider type="vertical" />
            <a className="ant-dropdown-link">
              Detail <Icon type="down" />
            </a>
          </span>
        ) : null
    }
  ];
  // const handleDelete = id => {
  //   this.db
  //     .collection("documents")
  //     .doc(id)
  //     .delete()
  //     .then(function() {
  //       console.log("Document successfully deleted!");
  //     })
  //     .catch(function(error) {
  //       console.error("Error removing document: ", error);
  //     });
  const columns2 = columns.map(col => {
    return col;
  });
  return (
    <>
      <Table rowKey={record => record.id} columns={columns2} dataSource={db} />
    </>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Allproduct);
