import React, { useState } from 'react'
import { ThemeUIStyleObject, Box } from 'theme-ui'
import { customerReviewsData } from '../../data/customerReviewsTestData'
import { Bar } from 'react-chartjs-2'

export interface ChartProps {
  sx?: ThemeUIStyleObject
}

export const Chart = ({ sx }: ChartProps): JSX.Element => {
  const [chartData, setChartData] = useState({
    labels: ['Happy', 'Not Happy'],
    datasets: [
      {
        label: 'Customer Experience',
        data: customerReviewsData?.map((item) => item.stars),
        backgroundColor: ['#FFA384', '#EFE7BC'],
      },
    ],
  })

  return (
    <Box sx={{ ...sx }}>
      <Bar
        data={chartData}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
    </Box>
  )
}
