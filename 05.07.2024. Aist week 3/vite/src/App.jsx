import { Button, Col, Form, Modal, Row, Select } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { getDataFromApi } from "./api";

const { Option } = Select;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carTypes, setCarTypes] = useState();
  const [selectionCarType, setSelectionCarType] = useState();
  const [selectionBred, setSelectionBred] = useState();
  const [selectionModels, setSelectionModel] = useState();
  const [filtiredData, setFiltiredData] = useState([]);
  console.log(selectionCarType);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [data, data1, data2, data3] = await Promise.all([
          getDataFromApi("car-type"),
          getDataFromApi("enums?type=OWNERSHIP_ENUM"),
          getDataFromApi("car-brands"),
          getDataFromApi("car-brand-models"),
        ]);
        setCarTypes({ data, data1, data2, data3 });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataFromApi(
          `car/filter-cars?carTypeId=${selectionCarType}&ownershipEnumId=${selectionBred}&brandModelId=${selectionModels}`
        );
        console.log(response);
        setFiltiredData(response);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectionCarType && selectionBred && selectionModels) {
      fetchData();
    }
  }, [selectionCarType, selectionBred, selectionModels]);

  console.log(carTypes);
  const showModal = () => {
    setIsModalOpen(true);l
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Maşın seçimi
      </Button>
      <Modal
        title="Maşının təyin edilməsi"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form labelAlign="top">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Form.Item
                label="Maşın növü"
                name="carType"
                labelCol={{ span: 24 }}
              >
                <Select
                  placeholder="Maşın növünü seçin"
                  onChange={(value) => setSelectionCarType(value)}
                >
                  {carTypes?.data?.map((type) => (
                    <Option key={type.id} value={type.id}>
                      {type.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Maşın qrupu"
                name="Maşın qrupu"
                labelCol={{ span: 24 }}
              >
                <Select
                  placeholder="Maşın qrupu seçin"
                  onChange={(value) => setSelectionBred(value)}
                >
                  {carTypes?.data1?.map((item) => (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Maşın markası"
                name="Maşın markası"
                labelCol={{ span: 24 }}
              >
                <Select
                  placeholder="Maşın markası seçin"
                  onChange={(value) => setSelectionModel(value)}
                >
                  {carTypes?.data2?.map((item) => (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Form.Item
                label="Maşın modeli
"
                name="Maşın modeli
"
                labelCol={{ span: 24 }}
              >
                <Select placeholder="Maşın modeli seçin">
                  {carTypes?.data3?.map((item) => (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Qeydiyyat nömrəsi"
                name="Qeydiyyat nömrəsi"
                labelCol={{ span: 24 }}
              >
                <Select>
                  {filtiredData?.map((item) => (
                    <Option key={item.id} value={item.carPlateNumber}>
                      {item.carPlateNumber}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Sürücü" name="Sürücü" labelCol={{ span: 24 }}>
                <Select>
                  {filtiredData?.map((item) => (
                    <Fragment key={item.id}>
                      {item.carDriverList.map((user) => (
                        <Option key={user.id} value={user.appUser.username}>
                          {user.appUser.username}
                        </Option>
                      ))}
                    </Fragment>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default App;
