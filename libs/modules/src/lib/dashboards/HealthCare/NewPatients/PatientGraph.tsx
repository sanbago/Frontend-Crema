import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { useThemeContext } from '@crema/context/ThemeContextProvider';
import { NewpatientsType } from '@crema/models/dashboards/HealthCare';

type PatientGraphProps = {
  data: NewpatientsType[];
};

const PatientGraph: React.FC<PatientGraphProps> = ({ data }) => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%" height={230}>
      <AreaChart data={data} margin={{ top: 50, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={theme.palette.primary.main}
              stopOpacity={0.1}
            />
            <stop
              offset="95%"
              stopColor={theme.palette.primary.main}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Tooltip labelStyle={{ color: 'black' }} />
        <CartesianGrid
          strokeDasharray="2 10"
          horizontal={false}
          vertical={false}
        />
        <Area
          type="monotone"
          dataKey="number"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PatientGraph;
