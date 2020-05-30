import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const ColChart = (props) => {
    const data = [
        {
          type: '3',
          sales: 38,
        },
        {
          type: '4',
          sales: 52,
        },
        {
          type: '5',
          sales: 61,
        },
        {
          type: '6',
          sales: 29,
        },
        {
          type: '7',
          sales: 41,
        },
        {
          type: '8',
          sales: 33,
        },
      ];
      const config = {
        title: {
          visible: true,
          text: 'Tiến độ công việc trong các tháng',
        },
        description: {
          visible: true,
          text:
            'Số lượng công việc hoàn thành trong từng tháng',
        },
        forceFit: true,
        data,
        padding: 'auto',
        xField: 'type',
        yField: 'sales',
        meta: {
          type: { alias: '' },
          sales: { alias: 'Công việc' },
        },
        label: {
          visible: true,
          position: 'middle',
        },
      };
      return <Column {...config} />;
};

export default ColChart;
