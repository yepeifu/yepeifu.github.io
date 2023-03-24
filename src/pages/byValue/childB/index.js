import { Button } from 'antd';
const ChildB = ({ childrenClick, childAValue }) => {
    return (
        <div className='login-box'>
            <p>ChildB</p>
            <p></p>
            <p>childBBBBBBBBBBBBB:{childAValue}</p>
            <Button onClick={() => childrenClick("我是childB子组件中的数据")}>子组件向父组件传值</Button>
        </div>
    )
}
export default ChildB