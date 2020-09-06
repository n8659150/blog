import React from "react";
import "../static/style/components/header.css";
import { Row, Col, Menu } from "antd";

const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">校长不读书</span>
                <span className="header-txt">记录日常</span>
            </Col>

            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">首页</Menu.Item>
                    <Menu.Item key="tech">技术</Menu.Item>
                    <Menu.Item key="life">生活</Menu.Item>
                    <Menu.Item key="about">关于</Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
);

export default Header;
