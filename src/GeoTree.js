import { CarryOutOutlined, CheckOutlined, FormOutlined } from '@ant-design/icons';
import { Select, Switch, Tree } from 'antd';
import { useState } from 'react';
import treeDataApi from './GeoTreeData.json';
import Antd2 from './Antd2';
import Antd from './Antd';

let formContent= [{}];

let form11;
const GeoTree = (props) => {
 // console.log(hello)
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);
  //const [antdForm,setAntdForm] = useState(false)
  const onSelect = (selectedKeys, info) => {
   // console.log(info.node.geoName);
    
   formContent= info.node;
   props.setAntdForm(true)

   // setAntdForm(true);
  };
  const handleLeafIconChange = (value) => {
    if (value === 'custom') {
      return setShowLeafIcon(<CheckOutlined />);
    }
    if (value === 'true') {
      return setShowLeafIcon(true);
    }
    return setShowLeafIcon(false);
  };
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        showLine: <Switch checked={!!showLine} onChange={setShowLine} />
        <br />
        <br />
        showIcon: <Switch checked={showIcon} onChange={setShowIcon} />
        <br />
        <br />
        showLeafIcon:{' '}
        <Select defaultValue="true" onChange={handleLeafIconChange}>
          <Select.Option value="true">True</Select.Option>
          <Select.Option value="false">False</Select.Option>
          <Select.Option value="custom">Custom icon</Select.Option>
        </Select>
      </div>
      <Tree
        showLine={
          showLine
            ? {
                showLeafIcon,
              }
            : false
        }
        showIcon={showIcon}
        onSelect={onSelect}
        treeData={treeDataApi.data}
        fieldNames={{title: "geoName", children: "subGeo", key:"geoParentCode"}}
        
      />
    </div>
  );
};
export default GeoTree;
export {formContent};