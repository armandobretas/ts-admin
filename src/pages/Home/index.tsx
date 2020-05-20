import React, { useState } from "react";
import { Card, Row, Col, Table, Tag, Space } from "antd";
import {
  DollarTwoTone,
  ShoppingTwoTone,
  RocketTwoTone,
  TagTwoTone,
} from "@ant-design/icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./styles.css";
const { Column, ColumnGroup } = Table;
const Home = () => { 

  const data = [
    {
      name: "2017",
      a: Math.random() * 10000,
      b: Math.random() * 10000,
      c: Math.random() * 10000,
    },
    {
      name: "2018",
      a: Math.random() * 10000,
      b: Math.random() * 10000,
      c: Math.random() * 10000,
    },
    {
      name: "2019",
      a: Math.random() * 10000,
      b: Math.random() * 10000,
      c: Math.random() * 10000,
    },
    {
      name: "2020",
      a: Math.random() * 10000,
      b: Math.random() * 10000,
      c: Math.random() * 10000,
    },
  ];

  const data2 = [
    {
      key: "1",
      firstName: "John",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      firstName: "Thor",
      tags: ["strong", "god"],
    },
    {
      key: "5",
      firstName: "Luffy",
      tags: ["anime", "one piece"],
    },
    {
      key: "6",
      firstName: "Goku",
      tags: ["kakaroto", "god"],
    },
  ];

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" sm={24} md={12} lg={6}>
          <Card>
            <div className="kpi">
              <div className="kpi-icon">
                <DollarTwoTone />
              </div>
              <div className="kpi-text">
                <small>First Kpi</small>
                <br />
                <span>R$ 198.421,22</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" sm={24} md={12} lg={6}>
          <Card>
            <div className="kpi">
              <div className="kpi-icon">
                <ShoppingTwoTone />
              </div>
              <div className="kpi-text">
                <small>Second Kpi</small>
                <br />
                <span>421.123</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" sm={24} md={12} lg={6}>
          <Card>
            <div className="kpi">
              <div className="kpi-icon">
                <RocketTwoTone />
              </div>
              <div className="kpi-text">
                <small>Third Kpi</small>
                <br />
                <span>983</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" sm={24} md={12} lg={6}>
          <Card>
            <div className="kpi">
              <div className="kpi-icon">
                <TagTwoTone />
              </div>
              <div className="kpi-text">
                <small>Fourth Kpi</small>
                <br />
                <span>421</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ paddingTop: 20 }}>
        <Col sm={24} md={18}>
          <Card>
            <div className="sales">
              <h3 className="title">Yearly Sales</h3>
              <ResponsiveContainer minHeight={360}>
                <LineChart data={data}>
                  <XAxis
                    dataKey="name"
                    axisLine={{ stroke: "#ccc", strokeWidth: 1 }}
                    tickLine={false}
                  />
                  <YAxis axisLine={false} tickLine={false} />
                  <CartesianGrid
                    vertical={false}
                    stroke="#ccc"
                    strokeDasharray="3 3"
                  />

                  <Tooltip
                    wrapperStyle={{
                      border: "none",
                      boxShadow: "4px 4px 40px rgba(0, 0, 0, 0.05)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="a"
                    stroke={"#d897eb"}
                    strokeWidth={3}
                    dot={{ fill: "#d897eb" }}
                    activeDot={{ r: 5, strokeWidth: 0 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="b"
                    stroke={"#f69899"}
                    strokeWidth={3}
                    dot={{ fill: "#f69899" }}
                    activeDot={{ r: 5, strokeWidth: 0 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="c"
                    stroke={"#64ea91"}
                    strokeWidth={3}
                    dot={{ fill: "#64ea91" }}
                    activeDot={{ r: 5, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
        <Col sm={24} md={6}>
          <Table dataSource={data2}>
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={(tags: Array<String>) => (
                <>
                  {tags.map((tag, i) => (
                    <Tag color="#2db7f5" key={i}>
                      {tag}
                    </Tag>
                  ))}
                </>
              )}
            />
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
