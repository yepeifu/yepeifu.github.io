const topNav = [
    {
        label: "react ant", key: "/home",
        
    },
    {
        label: "react 组件传值", key: "/byValue",
       
    }
]
const leftNavAll = [
    {
        label: "ant-design",
        key: "/home",
        parentId: "/home",
        children: [
            { label: "ant-form", key: "/home/form", },
            { label: "ant-table", key: "/home/table" },
          
        ]
    },
    {
        label: "组件传值",
        key: "/byValue",
        parentId: "/byValue",
        children: [
            { label: "组件传值", key: "/byValue/components" },
          
        ]
    },
]

export { topNav, leftNavAll }