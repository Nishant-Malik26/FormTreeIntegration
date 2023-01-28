import React,{ useState } from 'react'
import GeoTree from './GeoTree';
import Antd from './Antd';
import Antd2 from './Antd2';
function ContainerState() {
    const [antdForm,setAntdForm] = useState(false);

    return (
    <div>
        <GeoTree antdForm={antdForm} setAntdForm={setAntdForm}/>
        {antdForm?<Antd2 antdForm={antdForm} setAntdForm={setAntdForm}/>:<Antd antdForm={antdForm} setAntdForm={setAntdForm}/>}

    </div>
  )
}

export default ContainerState