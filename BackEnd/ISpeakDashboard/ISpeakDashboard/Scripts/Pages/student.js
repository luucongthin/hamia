$(window).on("load", function () {

    var $primary = '#7367F0',
        $success = '#28C76F',
        $danger = '#EA5455',
        $warning = '#FF9F43',
        $info = '#00cfe8',
        $label_color_light = '#dae1e7';

    var themeColors = [$success, $warning, $danger, $info, $primary, $label_color_light];

//=============================================================================================================================================================
//=============================================================================================================================================================
    var chartOption_1 = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        colors: themeColors,
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Result',
            data: [47, 54, 64, 59, 70, 61]
        }, {
            name: 'Target',
            data: [60, 55, 60, 60, 65, 60]
        }],
        legend: {
            offsetY: -10
        },
        xaxis: {
            categories: ['-5', '-4', '-3', '-2', '-1', 'This week'],
        },
        fill: {
            opacity: 1
        }
    }
    var chart_1 = new ApexCharts(
        document.querySelector("#chart_1"),
        chartOption_1
    );

    chart_1.render();


//=============================================================================================================================================================
//=============================================================================================================================================================

    var chartOption_2 = {
        chart: {
            type: 'pie',
            height: 350
        },
        colors: themeColors,
        labels: ['< 10 yo', '10 - 15 yo', '>15 yo'],
        series: [6, 30, 25],
        legend: {
            itemMargin: {
                horizontal: 2
            }
        },
        dataLabels: {
            formatter: function (val, opts) {
                return opts.w.config.series[opts.seriesIndex]
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 350
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart_2 = new ApexCharts(
        document.querySelector("#chart_2"),
        chartOption_2
    );
    chart_2.render();




//=============================================================================================================================================================
//=============================================================================================================================================================
    var chartOption_1 = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        colors: themeColors,
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Result',
            data: [40, 45, 67, 50, 63, 61]
        }, {
            name: 'Target',
            data: [60, 55, 60, 60, 65, 60]
        }],
        legend: {
            offsetY: -10
        },
        xaxis: {
            categories: ['-5', '-4', '-3', '-2', '-1', 'This week'],
        },
        fill: {
            opacity: 1
        }
    }

    var chart_3 = new ApexCharts(
        document.querySelector("#chart_3"),
        chartOption_1
    );
    chart_3.render();

//=============================================================================================================================================================
//=============================================================================================================================================================
    var chartOption_4 = {
        chart: {
            type: 'pie',
            height: 350
        },
        colors: themeColors,
        labels: ['< 10 yo', '10 - 15 yo', '>15 yo'],
        series: [34, 65, 10],
        legend: {
            itemMargin: {
                horizontal: 2
            }
        },
        dataLabels: {
            formatter: function (val, opts) {
                return opts.w.config.series[opts.seriesIndex]
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 350
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    var chart_4 = new ApexCharts(
        document.querySelector("#chart_4"),
        chartOption_4
    );
    chart_4.render();

    //=============================================================================================================================================================
    //=============================================================================================================================================================

    var chartOption_5 = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        colors: themeColors,
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Result',
            data: [40, 45, 67, 50, 63, 61]
        }, {
            name: 'Target',
            data: [60, 55, 60, 60, 65, 60]
        }],
        legend: {
            offsetY: -10
        },
        xaxis: {
            categories: ['-5', '-4', '-3', '-2', '-1', 'This week'],
        },
        fill: {
            opacity: 1
        }
    }

    var chart_5 = new ApexCharts(
        document.querySelector("#chart_5"),
        chartOption_5
    );
    chart_5.render();

    //=============================================================================================================================================================
    //=============================================================================================================================================================

    var chartOption_3 = {
        chart: {
            type: 'pie',
            height: 350
        },
        colors: themeColors,
        labels: ['< 10 yo', '10 - 15 yo', '>15 yo'],
        series: [34, 65, 10],
        legend: {
            itemMargin: {
                horizontal: 2
            },
            position: "bottom"
        },
        dataLabels: {
            formatter: function (val, opts) {
                return opts.w.config.series[opts.seriesIndex]
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 350
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    var chart_6 = new ApexCharts(
        document.querySelector("#chart_6"),
        chartOption_3
    );
    chart_6.render();

    //=============================================================================================================================================================
    //=============================================================================================================================================================
    var chart_7 = new ApexCharts(
        document.querySelector("#chart_7"),
        chartOption_3
    );
    chart_7.render();

    //=============================================================================================================================================================
    //=============================================================================================================================================================
    var chart_8 = new ApexCharts(
        document.querySelector("#chart_8"),
        chartOption_3
    );
    chart_8.render();

    //=============================================================================================================================================================
    //=============================================================================================================================================================
    var chart_9 = new ApexCharts(
        document.querySelector("#chart_9"),
        chartOption_1
    );
    chart_9.render();

    //=============================================================================================================================================================
    //=============================================================================================================================================================
    var chart_10 = new ApexCharts(
        document.querySelector("#chart_10"),
        chartOption_3
    );
    chart_10.render();

    //=============================================================================================================================================================
    //=============================================================================================================================================================
    var chart_11 = new ApexCharts(
        document.querySelector("#chart_11"),
        chartOption_3
    );
    chart_11.render();
});