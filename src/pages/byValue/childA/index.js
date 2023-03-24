import { Button } from 'antd';
const ChildA = ({ msg, getMes, childrenClick }) => {
    return (
        <div className='login-box'>
            <p>childA</p>
            <p>我是父组件传过来的msg:{msg}</p>
            <Button onClick={getMes}>触发父组件函数</Button>
            <Button onClick={() => childrenClick("我是childA子组件中的数据我将在B组件中显示")}>子组件向父组件传值</Button>
        </div>
    )
}
export default ChildA