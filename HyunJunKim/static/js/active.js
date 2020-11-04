//period chart start
var maxChartCnt = 5;
var color = ['#f51600', '#f55f00', '#ffff00', '#008000', '#0e4bef'];
function periodChart()
{
    var labels = [];
    var datas = [];
    var cnt = 0;
    for (var key in periodData)
    {
        if (cnt == maxChartCnt)
        {
            break;
        }

        labels.push(periodData[key].name);
        datas.push(periodData[key].cnt);
        cnt++;
    }

    var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
    var pieData        = {
          labels: labels,
          datasets: [
            {
              data: datas,
              backgroundColor : color,
            }
          ]
        };
    var pieOptions     = {
      maintainAspectRatio : false,
      responsive : true,
    };
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    });
}

function componentChart()
{
    console.log(componentCount);
    var labels = [];
    var datas = [];
    var cnt = 0;
    for (var k in componentCount)
    {
        if (cnt == maxChartCnt)
        {
            break;
        }

        labels.push(k);
        datas.push(componentCount[k]);
        cnt++;
    }

    var pieChartCanvas = $('#pieChart2').get(0).getContext('2d')
    var pieData        = {
          labels: labels,
          datasets: [
            {
              data: datas,
              backgroundColor : color,
            }
          ]
        };
    var pieOptions     = {
      maintainAspectRatio : false,
      responsive : true,
    };
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    });
}

function versionChart()
{
    var labels = [];
    var datas = [];
    var cnt = 0;
    for (var k in versionCount)
    {
        if (cnt == maxChartCnt)
        {
            break;
        }

        labels.push(k);
        datas.push(versionCount[k]);
        cnt++;
    }

    var pieChartCanvas = $('#pieChart3').get(0).getContext('2d')
    var pieData        = {
          labels: labels,
          datasets: [
            {
              data: datas,
              backgroundColor : color,
            }
          ]
        };
    var pieOptions     = {
      maintainAspectRatio : false,
      responsive : true,
    };
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    });
}

function severityChart()
{
    var labels = [];
    var datas = [];
    var cnt = 0;
    for (var k in severityCount)
    {
        if (cnt == maxChartCnt)
        {
            break;
        }

        labels.push(k);
        datas.push(severityCount[k]);
        cnt++;
    }

    var pieChartCanvas = $('#pieChart4').get(0).getContext('2d')
    var pieData        = {
          labels: labels,
          datasets: [
            {
              data: datas,
              backgroundColor : color,
            }
          ]
        };
    var pieOptions     = {
      maintainAspectRatio : false,
      responsive : true,
    };
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    });
}

function statusChart()
{
    var labels = [];
    var datas = [];
    var cnt = 0;
    for (var k in statusCount)
    {
        if (cnt == maxChartCnt)
        {
            break;
        }

        labels.push(k);
        datas.push(statusCount[k]);
        cnt++;
    }

    var pieChartCanvas = $('#pieChart5').get(0).getContext('2d')
    var pieData        = {
          labels: labels,
          datasets: [
            {
              data: datas,
              backgroundColor : color,
            }
          ]
        };
    var pieOptions     = {
      maintainAspectRatio : false,
      responsive : true,
    };
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    });
}

function teamChart()
{
    var labels = [];
    var datas = [];
    var cnt = 0;
    for (var k in teamCount)
    {
        if (cnt == maxChartCnt)
        {
            break;
        }

        labels.push(k);
        datas.push(teamCount[k]);
        cnt++;
    }

    var pieChartCanvas = $('#pieChartTeam').get(0).getContext('2d')
    var pieData        = {
          labels: labels,
          datasets: [
            {
              data: datas,
              backgroundColor : color,
            }
          ]
        };
    var pieOptions     = {
      maintainAspectRatio : false,
      responsive : true,
    };
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    });
}

function load()
{
    $('.select2').select2();
    periodChart();
    componentChart();
    versionChart();
    severityChart();
    statusChart();
    teamChart();
}

$(document).ready(function(){
    $('.select2').select2();
    $('#category').change(function() {
        jQuery.ajax({
        url: '/active',
        type: 'post',
        data:JSON.stringify($(this).val()),
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        success: function (result) {
            $('#view').html(result['data']);
            load();
        }
    });
    });

    periodChart();
    componentChart();
    versionChart();
    severityChart();
    statusChart();
    teamChart();
}
)
