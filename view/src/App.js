import "./App.css";
import { Button, Col, Row, Modal,message, Upload } from "antd";
import DataTable from "./components/DataTable";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import {useState, useEffect} from "react";
import axios from "axios";
import { UploadOutlined } from '@ant-design/icons'

const props = {
  name: 'image',
  method: 'post',
  action: `${process.env.REACT_APP_API}/api/upload`,
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getData = () => {
    axios.get(`${process.env.REACT_APP_API}/api/upload`).then((res) => {
      console.log(res.data);
      setTableData(res.data);
    }).catch(err => console.log(err))
  }

  useEffect(()  => {
    getData();
  },[]);

  return (
    <Router>
      <div className="App">
        <Row style={{ flexDirection: "column" }}>
          <Col>
            <h2>File Uploder</h2>
            <Button onClick={showModal} type="primary ghost">
              Add File
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Modal>
          </Col>

          <Col>
            <div className="section"></div>
            <DataTable key={tableData} _data={tableData} />
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;
