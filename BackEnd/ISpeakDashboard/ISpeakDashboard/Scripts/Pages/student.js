$(document).ready(function () {

    var $primary = '#7367F0',
        $success = '#28C76F',
        $danger = '#EA5455',
        $warning = '#FF9F43',
        $info = '#00cfe8',
        $label_color_light = '#dae1e7';

    var themeColors = [$success, $warning, $danger, $info, $primary, $label_color_light];

    var columnOption = {
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
        fill: {
            opacity: 1
        },
        series: [],
        xaxis: {
            categories: []
        }
    }

    var pieOption = {
        chart: {
            type: 'pie',
            height: 350
        },
        colors: themeColors,
        labels: [],
        series: [],
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

//=============================================================================================================================================================
//=============================================================================================================================================================
    var chartOption_1 = columnOption;

    var dataReqChart_1 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_1',
        type: "GET",
        data: dataReqChart_1,
        success: function (response) {
            var serie_1 = {
                name: 'Result',
                data: []
            };
            var serie_2 = {
                name: 'Target',
                data: []
            };

            chartOption_1.xaxis.categories = [];
            
            response.forEach(function (element) {
                serie_1.data.push(parseInt(element.result));
                serie_2.data.push(parseInt(element.target));
                chartOption_1.xaxis.categories.push(element.categories);
            });
            chartOption_1.series = [serie_1, serie_2];

            var chart_1 = new ApexCharts(
                document.querySelector("#chart_1"),
                chartOption_1
            );

            chart_1.render();
        },
        error: function (error) {
            console.log(error);
        }
    });


//=============================================================================================================================================================
//=============================================================================================================================================================

    var chartOption_2 = pieOption;
    chartOption_2.legend.position = 'right';

    var dataReqChart_2 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_2',
        type: "GET",
        data: dataReqChart_2,
        success: function (response) {
            
            chartOption_2.labels = ['< 10 yo', '10 - 15 yo', '>15 yo'];
            chartOption_2.series = [parseInt(response.col_1), parseInt(response.col_2), parseInt(response.col_3)];

            var chart_2 = new ApexCharts(
                document.querySelector("#chart_2"),
                chartOption_2
            );
            chart_2.render();
        },
        error: function (error) {
            console.log(error);
        }
    });




//=============================================================================================================================================================
//=============================================================================================================================================================
    var chartOption_3 = columnOption;
    
    var dataReqChart_3 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_3',
        type: "GET",
        data: dataReqChart_3,
        success: function (response) {
            var serie_1 = {
                name: 'Result',
                data: []
            };
            var serie_2 = {
                name: 'Target',
                data: []
            };

            chartOption_3.xaxis.categories = [];

            response.forEach(function (element) {
                serie_1.data.push(parseInt(element.result));
                serie_2.data.push(parseInt(element.target));
                chartOption_3.xaxis.categories.push(element.categories);
            });
            chartOption_3.series = [serie_1, serie_2];

            var chart_3 = new ApexCharts(
                document.querySelector("#chart_3"),
                chartOption_3
            );

            chart_3.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

//=============================================================================================================================================================
//=============================================================================================================================================================
    var chartOption_4 = pieOption;
    chartOption_4.legend.position = 'right';

    var dataReqChart_4 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_4',
        type: "GET",
        data: dataReqChart_4,
        success: function (response) {

            chartOption_4.labels = ['% học thử', 'số học viên activated'];
            chartOption_4.series = [parseInt(response.col_1), parseInt(response.col_2)];

            var chart_4 = new ApexCharts(
                document.querySelector("#chart_4"),
                chartOption_4
            );
            chart_4.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================

    var chartOption_5 = columnOption;

    var dataReqChart_5 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_5',
        type: "GET",
        data: dataReqChart_5,
        success: function (response) {
            var serie_1 = {
                name: 'Result',
                data: []
            }

            chartOption_5.xaxis.categories = [];

            response.forEach(function (element) {
                serie_1.data.push(parseInt(element.result));
                chartOption_5.xaxis.categories.push(element.categories);
            });
            chartOption_5.series = [serie_1];

            var chart_5 = new ApexCharts(
                document.querySelector("#chart_5"),
                chartOption_5
            );
            chart_5.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================

    var chartOption_6 = pieOption;

    chartOption_6.chart.height = 350;
    chartOption_6.legend.position = 'bottom';

    var dataReqChart_6 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_6',
        type: "GET",
        data: dataReqChart_6,
        success: function (response) {

            chartOption_6.labels = ['Học viên học thử', 'Học viên mới' ];
            chartOption_6.series = [parseInt(response.col_1), parseInt(response.col_2)];

            var chart_6 = new ApexCharts(
                document.querySelector("#chart_6"),
                chartOption_6
            );
            chart_6.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================

    var chartOption_7 = pieOption;

    chartOption_7.chart.height = 350;
    chartOption_7.legend.position = 'bottom';

    var dataReqChart_7 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_7',
        type: "GET",
        data: dataReqChart_7,
        success: function (response) {

            chartOption_7.labels = ['Học viên đăng ký', 'Học viên mới'];
            chartOption_7.series = [parseInt(response.col_1), parseInt(response.col_2)];

            var chart_7 = new ApexCharts(
                document.querySelector("#chart_7"),
                chartOption_7
            );
            chart_7.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================
    var chartOption_8 = pieOption;

    chartOption_8.chart.height = 350;
    chartOption_8.legend.position = 'bottom';

    var dataReqChart_8 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_8',
        type: "GET",
        data: dataReqChart_8,
        success: function (response) {

            chartOption_8.labels = ['Học viên đăng ký', 'Học viên mới'];
            chartOption_8.series = [parseInt(response.col_1), parseInt(response.col_2)];

            var chart_8 = new ApexCharts(
                document.querySelector("#chart_8"),
                chartOption_8
            );
            chart_8.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================
    var chartOption_9 = {
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
        fill: {
            opacity: 1
        },
        series: [],
        xaxis: {
            categories: []
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return (parseFloat(val)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                }
            }
        }
    };

    var dataReqChart_9 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_9',
        type: "GET",
        data: dataReqChart_9,
        success: function (response) {
            var serie_1 = {
                name: 'Result',
                data: []
            }

            chartOption_9.xaxis.categories = [];

            response.forEach(function (element) {
                serie_1.data.push(parseInt(element.result));
                chartOption_9.xaxis.categories.push(element.categories);
            });
            chartOption_9.series = [serie_1];

            var chart_9 = new ApexCharts(
                document.querySelector("#chart_9"),
                chartOption_9
            );
            chart_9.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================

    var chartOption_10 = {
        chart: {
            type: 'pie',
            height: 350
        },
        colors: themeColors,
        labels: [],
        series: [],
        legend: {
            itemMargin: {
                horizontal: 2
            },
            position: 'bottom'
        },
        dataLabels: {
            formatter: function (val, opts) {
                return (parseFloat(opts.w.config.series[opts.seriesIndex])).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
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
    };

    var dataReqChart_10 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_10',
        type: "GET",
        data: dataReqChart_10,
        success: function (response) {

            chartOption_10.labels = ['Sales revenue', 'KPI'];
            chartOption_10.series = [parseInt(response.col_1), parseInt(response.col_2)];

            var chart_10 = new ApexCharts(
                document.querySelector("#chart_10"),
                chartOption_10
            );
            chart_10.render();

            var chart_11 = new ApexCharts(
                document.querySelector("#chart_11"),
                chartOption_10
            );
            chart_11.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================
    //var chart_11 = new ApexCharts(
    //    document.querySelector("#chart_11"),
    //    chartOption_10
    //);
    //chart_11.render();

    //=============================================================================================================================================================
    //=============================================================================================================================================================

    var chartOption_12 = columnOption;

    var dataReqChart_12 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_12',
        type: "GET",
        data: dataReqChart_12,
        success: function (response) {
            var serie_1 = {
                name: 'Result',
                data: []
            }

            chartOption_12.xaxis.categories = [];

            response.forEach(function (element) {
                serie_1.data.push(parseInt(element.result));
                chartOption_12.xaxis.categories.push(element.categories);
            });
            chartOption_12.series = [serie_1];

            var chart_12 = new ApexCharts(
                document.querySelector("#chart_12"),
                chartOption_12
            );
            chart_12.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================

    var chartOption_13 = pieOption;

    chartOption_13.chart.height = 350;
    chartOption_13.legend.position = 'bottom';

    var dataReqChart_13 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_13',
        type: "GET",
        data: dataReqChart_13,
        success: function (response) {

            chartOption_13.labels = ['Học viên học thử', 'Returned students'];
            chartOption_13.series = [parseInt(response.col_1), parseInt(response.col_2)];

            var chart_13 = new ApexCharts(
                document.querySelector("#chart_13"),
                chartOption_13
            );
            chart_13.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================

    var chartOption_14 = pieOption;

    chartOption_14.chart.height = 350;
    chartOption_14.legend.position = 'bottom';

    var dataReqChart_14 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_14',
        type: "GET",
        data: dataReqChart_14,
        success: function (response) {

            chartOption_14.labels = ['Học viên đăng ký', 'Returned students'];
            chartOption_14.series = [parseInt(response.col_1), parseInt(response.col_2)];

            var chart_14 = new ApexCharts(
                document.querySelector("#chart_14"),
                chartOption_14
            );
            chart_14.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================
    var chartOption_15 = pieOption;

    chartOption_15.chart.height = 350;
    chartOption_15.legend.position = 'bottom';

    var dataReqChart_15 = {
        type: 1,
        fromDate: '2019-01-01',
        toDate: '2019-12-01',
    }

    $.ajax({
        url: '/Home/Chart_15',
        type: "GET",
        data: dataReqChart_15,
        success: function (response) {

            chartOption_15.labels = ['Học viên mới', 'Returned students'];
            chartOption_15.series = [parseInt(response.col_1), parseInt(response.col_2)];

            var chart_15 = new ApexCharts(
                document.querySelector("#chart_15"),
                chartOption_15
            );
            chart_15.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================
});