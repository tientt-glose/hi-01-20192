import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const PieChart = (props) => {
    const data = [
        {
            type: 'Đang thực hiện',
            value: 20,
        },
        {
            type: 'Chờ review',
            value: 20,
        },
        {
            type: 'Hoàn thành',
            value: 20,
        },
        {
          type: 'Quá hạn',
          value: 5,
      },
    ];
    const config = {
        forceFit: true,
        title: {
            visible: true,
            text: 'Tiến độ công trình',
        },
        description: {
            visible: false,
            text:
                '',
        },
        radius: 0.8,
        data,
        angleField: 'value',
        colorField: 'type',
        label: {
            visible: false,
            type: 'outer',
        },
    };
    return <Pie {...config} />;
};

export default PieChart;
