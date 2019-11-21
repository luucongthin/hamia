$(document).ready(function () {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var toDate = yyyy + '-' + mm + '-' + dd;

    var typeReport = window.localStorage.typeReport;
    var fromDate;

    switch (typeReport) {
        case '0': {
            fromDate = yyyy + '-' + mm + '-01';
            break;
        }
        case '1': {
            fromDate = yyyy + '-' + mm + '-01';
            break;
        }
        case '2': {
            fromDate = yyyy + '-01-01';
            break;
        }
        default: {
            fromDate = yyyy + '-01-01';
            break;
        }
    }

    var dataReqChart = {
        type: typeReport ? typeReport : 2,
        fromDate: fromDate,
        toDate: toDate,
    }
    
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

    $.ajax({
        url: '/Home/Chart_1',
        type: "GET",
        data: dataReqChart,
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

    $.ajax({
        url: '/Home/Chart_2',
        type: "GET",
        data: dataReqChart,
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


    $.ajax({
        url: '/Home/Chart_3',
        type: "GET",
        data: dataReqChart,
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

    $.ajax({
        url: '/Home/Chart_4',
        type: "GET",
        data: dataReqChart,
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

    $.ajax({
        url: '/Home/Chart_5',
        type: "GET",
        data: dataReqChart,
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

    $.ajax({
        url: '/Home/Chart_6',
        type: "GET",
        data: dataReqChart,
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


    $.ajax({
        url: '/Home/Chart_7',
        type: "GET",
        data: dataReqChart,
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

    $.ajax({
        url: '/Home/Chart_8',
        type: "GET",
        data: dataReqChart,
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

    $.ajax({
        url: '/Home/Chart_9',
        type: "GET",
        data: dataReqChart,
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

    $.ajax({
        url: '/Home/Chart_10',
        type: "GET",
        data: dataReqChart,
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

    $.ajax({
        url: '/Home/Chart_12',
        type: "GET",
        data: dataReqChart,
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

    $.ajax({
        url: '/Home/Chart_13',
        type: "GET",
        data: dataReqChart,
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


    $.ajax({
        url: '/Home/Chart_14',
        type: "GET",
        data: dataReqChart,
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

    $.ajax({
        url: '/Home/Chart_15',
        type: "GET",
        data: dataReqChart,
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