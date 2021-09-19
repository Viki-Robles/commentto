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
        label: 'Customer reviews for Socks',
        data: customerReviewsData?.map((item) => item.stars),
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
      },
    ],
  })

  return (
    <Box>
      <Bar
        data={chartData}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
    </Box>
  )
}
