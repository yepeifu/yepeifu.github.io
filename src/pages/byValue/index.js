import { useState } from 'react';
import ChildA from "./childA"
import ChildB from "./childB"
const ByValue = () => {
    const [childData, setChildData] = useState()
    const [childAValue, setChildAValue] = useState()
    const getMes = () => {
        console.log("我是父组件的函数");
    }
    const getSon = (val) => {
        console.log("我是子组件传递过来的值", val);
        setChildData(val)
    }
    const GetchildAValue = (val) => {
        setChildAValue(val)
    }
    return (
        <div className='login-box'>
            <ChildA msg={'我是父组件传过来的'} getMes={getMes} childrenClick={(val) => GetchildAValue(val)} />
            <p>我是子组件B传递过来的值:{childData}</p>
            <ChildB childrenClick={(val) => getSon(val)} childAValue={childAValue} />
        </div>

    )
}
export default ByValue