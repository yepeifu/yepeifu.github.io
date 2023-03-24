import React from "react";
import { withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";
const breadcrumbNameMap = {//跟路由路径保持一致
    "/": "react ant",
    "/home": "基本使用",
    "/home/form": "form",
    "/home/table": "table",
    "/byValue/components": "组件传值"
};
const Nav = withRouter((props) => {
    let firstTitle = "react ant"
    const { location } = props;
    if (location.pathname.includes("/home")) {
        firstTitle = "react ant"
    } else if (location.pathname.includes("/byValue")) {
        firstTitle = "react 组件传值"
    }

    const pathSnippets = location.pathname.split("/").filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        return (
            {
                title: breadcrumbNameMap[url],
                key: url
            }
        );
    });
    const breadcrumbItems = [
        {
            title: firstTitle,
            key: "/"
        }
    ].concat(extraBreadcrumbItems);
    return (
        <div className="demo">
            <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItems}>
            </Breadcrumb>
        </div>
    );
});
export default Nav;

