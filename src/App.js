import React from "react";
import { Layout, Menu, Icon } from "antd";
import Home from "./component/home";
import Danhsach from "./component/products";
import AddProduct from "./component/addproducts";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Header, Footer, Sider } = Layout;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Router>
          <Sider breakpoint="md" collapsedWidth="0">
            <div className="logo">Admin</div>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="home" theme="filled" />
                  <span>Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/products">
                  <span>
                    <Icon type="area-chart" />
                    Products
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="idcard" theme="filled" />
                <span>Users</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}></Header>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Danhsach} />
            <Route exact path="/createproducts" component={AddProduct} />
            {/* <Route path="/products/:id" component={Edit}/> */}

            <Footer style={{ textAlign: "center" }}>
              SnickShop-Admin ©2019 Created by Me
            </Footer>
          </Layout>
        </Router>
      </Layout>
    );
  }
}
