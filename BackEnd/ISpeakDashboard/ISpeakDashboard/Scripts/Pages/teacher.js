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

    var toDate = dateToString(today);

    var typeReport = window.localStorage.typeReport;
    var fromDate;

    switch (typeReport) {
        case '0': {
            fromDate = yyyy + '-' + mm + '-01';
            break;
        }
        case '1': {
            var pre_6_week = today.setDate(today.getDate() - 42); //6 week
            fromDate = dateToString(pre_6_week)
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
    var chartOption_16 = columnOption;

    $.ajax({
        url: '/Home/Chart_16',
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

            chartOption_16.xaxis.categories = [];

            response.forEach(function (element) {
                serie_1.data.push(parseInt(element.result));
                serie_2.data.push(parseInt(element.target));
                chartOption_16.xaxis.categories.push(element.categories);
            });
            chartOption_16.series = [serie_1, serie_2];

            var chart_16 = new ApexCharts(
                document.querySelector("#chart_16"),
                chartOption_16
            );

            chart_16.render();
        },
        error: function (error) {
            console.log(error);
        }
    });


    //=============================================================================================================================================================
    //=============================================================================================================================================================

    var chartOption_17 = pieOption;

    $.ajax({
        url: '/Home/Chart_17',
        type: "GET",
        data: dataReqChart,
        success: function (response) {
            chartOption_17.labels = [];
            chartOption_17.series = [];

            for (var i = 0; i < response.length; i++) {
                chartOption_17.labels.push(response[i].col_1);
                chartOption_17.series.push(parseInt(response[i].col_2))
            }

            var chart_17 = new ApexCharts(
                document.querySelector("#chart_17"),
                chartOption_17
            );
            chart_17.render();
        },
        error: function (error) {
            console.log(error);
        }
    });

    //=============================================================================================================================================================
    //=============================================================================================================================================================

    $.ajax({
        url: '/Home/Chart_18',
        type: "GET",
        data: dataReqChart,
        success: function(response) {

            var dataSet = [];
            for (var i = 0; i < response.length; i++) {
                item = [response[i].col_0, response[i].col_1, response[i].col_2, response[i].col_3, response[i].col_4];
                dataSet.push(item);
            }

            $('#zero-configuration').DataTable({
                data: dataSet,
                order: [[1, "desc"]],
                columns: [
                    { title: "Teacher" },
                    { title: "Done" },
                    { title: "Student absent" },
                    { title: "Teacher absent" },
                    { title: "Canceled by Student" }
                ]
            });
        },
        error: function(error) {
            console.log(error);
        }
    });
});