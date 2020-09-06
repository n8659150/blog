import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, Breadcrumb } from "antd";
import {
    CalendarOutlined,
    FolderOutlined,
    FireOutlined,
} from "@ant-design/icons";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import "../static/style/pages/detail.css";

const Detail = () => {
    return (
        <>
            <Head>
                <title>博客详情页</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col
                    className="comm-left"
                    xs={24}
                    sm={24}
                    md={16}
                    lg={18}
                    xl={14}
                >
                    <div>
                        <div className="breadcrumb-div">
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <a href="/">首页</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <div className="detail-title">
                                React实战视频教程-技术胖Blog开发(更新08集)
                            </div>

                            <div className="list-icon center">
                                <span>
                                    <CalendarOutlined /> 2019-06-28
                                </span>
                                <span>
                                    <FolderOutlined /> 视频教程
                                </span>
                                <span>
                                    <FireOutlined /> 5498人
                                </span>
                            </div>

                            <div className="detail-content">
                                详细内容，下节课编写
                            </div>
                        </div>
                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Profile />
                </Col>
            </Row>
            <Footer />
        </>
    );
};

export default Detail;
