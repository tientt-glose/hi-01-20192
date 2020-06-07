import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import { EnvironmentOutlined, FieldTimeOutlined, TeamOutlined } from '@ant-design/icons';

class ConstructionList extends Component {
  render() {
    console.log(this.props.projects)
    const allProjects = this.props.projects.map(project => {
      console.log(project)
      return (
        <Col span={8} style={{ marginTop: 16 }}>
          <Link to={`/gantt`}>
            <Card hoverable
              title={project.title} bordered={false}
              cover={<img alt="example" src={project.imgSrc} />}
            >
              <p><EnvironmentOutlined /> {project.address}</p>
              <p><FieldTimeOutlined /> {project.time}</p>
              <p><TeamOutlined /> {project.member} </p>
            </Card>
          </Link>
        </Col>
      )}
    )
    return (
      <Row gutter={16}>
        {allProjects}
      </Row>
    );
  }
}

export default ConstructionList;