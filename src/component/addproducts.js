import React from "react";
import {
  Layout,
  Breadcrumb,
  Button,
  Upload,
  Input,
  Form,
  Select,
  Checkbox,
  Row,
  Col,
  Icon,
  Modal
} from "antd";
import app from "firebase/app";
import storage from "./firebase";
const { Content } = Layout;
const { Option } = Select;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.storage = app.storage();
    this.handleChange = this.handleChange.bind(this);
    // this.addImg = this.addImg.bind(this);
    this.state = {
      ten: "",
      gia: 0,
      quantity: 0,
      img: null,
      showbtn: true,
      category: [],
      size: [],
      previewVisible: false,
      previewImage: "",
      fileList: [],
      fileListDirect: [],
      avatar: null,
      url: []
    };
  }
  handleCancel = () => this.setState({ previewVisible: false });
  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      img: file.originFileObj
    });
  };
  handleCheckImg = async ({ fileList, file }) => {
    const { category, ten } = this.state;
    await this.setState({
      fileList
    });
    for (let i = 0; i < category.length; i++) {
      let uploadTask = this.storage
        .ref(`${category[i]}/${ten}/${file.originFileObj.name}`)
        .put(file.originFileObj);
      uploadTask.on("state_changed", () => {
        this.storage
          .ref(`${category[i]}/${ten}/`)
          .child(file.originFileObj.name)
          .getDownloadURL()
          .then(url => {
            let newUrl = this.state.url;
            newUrl.push(url);
            this.setState({
              url: newUrl.filter(
                (demo, index) => newUrl.indexOf(demo) === index
              )
            });
            // this.db
            //   .collection("documents")
            //   .doc(id)
            //   .set({
            //     ten: ten,
            //     vitri: vitri,
            //     gia: Number(gia),
            //     danhgia: Number(danhgia),
            //     src: url,
            //     id: id
            //   })
            //   .then(function() {
            //     console.log("Document successfully update!");
            //   })
            //   .catch(function(error) {
            //     console.error("Error writing document: ", error);
            //   });
          })
          .then(console.log(this.state.url));
      });
    }
  };
  handleChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.quantity);
  };
  chooseSize = async e => {
    if (e.target.checked === true) {
      let newSize = this.state.size;
      await newSize.push(e.target.value);
      await this.setState({
        size: newSize.filter((demo, i) => newSize.indexOf(demo) === i)
      });
    }
    console.log(this.state.size);
  };
  chooseCategory = e => {
    this.setState({
      category: e
    });
  };
  uploadDirect = file => {
    // let uploadTask = this.storage
    //   .ref(`${this.state.category[0]}/${this.state.ten}`)
    //   .put(file)
    //   .then(demo => console.log("ok roi"));
    //   let b = e.fileList.map(demo => demo.originFileObj);
    //   await this.setState({
    //     fileListDirect: b
    //   });
    console.log(file);
    // };
  };
  creatProducts = () => {
    const {
      ten,
      vitri,
      gia,
      quantity,
      img,
      fileListDirect,
      avatar,
      category
    } = this.state;
    for (let i = 0; i <= category.length; i++) {
      let uploadTask = this.storage.ref(`${category[i]}/${ten}`);
      for (let j = 0; j <= fileListDirect.length; j++) {
        uploadTask.put(fileListDirect[j]).then(demo => console.log("ok roi"));
      }
      // console.log(category[i])
    }
  };
  render() {
    const {
      showbtn,
      ten,
      gia,
      quantity,
      img,
      fileList,
      previewVisible,
      previewImage
    } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { getFieldDecorator } = this.props.form;
    const printCheckbox = [];
    for (let i = 40; i <= 45; i++) {
      printCheckbox.push(
        <Col span={8} key={i}>
          <Checkbox value={i} onChange={this.chooseSize}>
            {i}
          </Checkbox>
        </Col>
      );
    }
    return (
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Thêm mới</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <Form layout="horizontal">
            <Form.Item label="Loại sản phẩm">
              <Select
                defaultValue="phukien"
                style={{ width: 120 }}
                // onChange={handleChange}
              >
                <Option value="sanphammoi">Sản phẩm mới</Option>
                <Option value="phukien">Phụ kiện</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Tên">
              <Input
                placeholder="Nhập tên sản phẩm"
                name="ten"
                value={ten}
                onChange={this.handleChange}
                required
              />
            </Form.Item>
            <Form.Item label="Giá">
              <Input
                placeholder="Nhập giá sản phẩm"
                name="gia"
                value={gia}
                onChange={this.handleChange}
                required
              />
            </Form.Item>
            <Form.Item label="Số lượng">
              <Input
                placeholder="Nhập số lượng sản phẩm"
                name="quantity"
                value={quantity}
                onChange={this.handleChange}
                required
              />
            </Form.Item>
            <Form.Item label="Size">
              {getFieldDecorator("checkbox-group")(
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row>{printCheckbox}</Row>
                </Checkbox.Group>
              )}
            </Form.Item>
            <Form.Item label="Avatar">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleCheckImg}
                // customRequest={this.uploadImage}
              >
                {fileList.length >= 3 ? null : uploadButton}
              </Upload>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                directory
                onChange={this.uploadDirect}
              >
                <Button>
                  <Icon type="upload" /> Chọn thư mục
                </Button>
              </Upload>
              <Modal
                visible={previewVisible}
                footer={null}
                onCancel={this.handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.creatProducts}
                // disabled={showbtn}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    );
  }
}
const AddProduct = Form.create({ name: "validate_other" })(Demo);
export default AddProduct;
