import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { YourActivityType } from '@crema/models/dashboards/HealthCare';

type ActivityGraphProps = {
  data: YourActivityType[];
};

const ActivityGraph: React.FC<ActivityGraphProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={143}>
      <BarChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        barSize={8}
      >
        <Tooltip labelStyle={{ color: 'black' }} />
        <Bar dataKey="visits" fill="#0A8FDC33" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityGraph;
