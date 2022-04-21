import './DrawChart.css'
import React from 'react';
import { ReactChartJs } from '@cubetiq/react-chart-js';

const DrawChart = (props) => {
    const estimatedAllTime = [];
    const actualAllTime = [];
    const taskAllName = [];

    if (!props.isStarting) {
        props.events.forEach((eventInstance, index) =>
            estimatedAllTime.push(eventInstance.estimatedTime)
        );

        props.events.forEach((eventInstance, index) =>
            actualAllTime.push(eventInstance.time)
        );

        props.events.forEach((eventInstance, index) =>
            taskAllName.push(eventInstance.name)
        );
    }

    return (
            <ReactChartJs
            chartConfig={{
                type: 'line',
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Estimated and Actual Time Cost for Tasks'
                        }
                    }
                },
                data: {
                    datasets: [
                        {
                            label: 'Estimated Task Time',
                            data: estimatedAllTime,
                            fill: false,
                            borderColor: '#ff6384',
                        },
                        {
                            label: 'Actual Task Time',
                            data: actualAllTime,
                            fill: false,
                            borderColor: '#36a2eb',
                        },
                    ],
                    labels: taskAllName,
                },
            }}
        />
    );
}


// As always, we must export so others can import!
export default DrawChart;