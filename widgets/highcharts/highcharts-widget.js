class CustomHighchartsWidgetCtrl {
    constructor($rootScope, $timeout, $scope) {
        this.$rootScope = $rootScope
        this.$timeout = $timeout
        this.$scope = $scope
    }

    $onInit() {
        Highcharts.chart('highcharts',
            {
                chart: {
                    type: 'heatmap',
                    marginTop: 40,
                    marginBottom: 80,
                    plotBorderWidth: 1
                },

                title: {
                    text: ''
                },

                xAxis: {
                    categories: ["Executive General and Administration","Inventory Management","Manufacturing","Quality Assurance","Sales and Marketing","Research and Development"]
                },

                yAxis: {
                    categories: ['Actual', 'Budget', 'Last Year'],
                    title: null,
                    reversed: true
                },

                colorAxis: {
                    minColor: '#010000',
                    maxColor: '#FF0000'
                },

                exporting: {
                    enabled: false
                },

                legend: {
                    enabled: false
                },

                series: [{
                    name: ' ',
                    borderWidth: 1,
                    data: [[0, 0, -214569.02804853008], [0, 1, -105928.24112864747], [0, 2, 6825.64149834103], [1, 0, -4314.147215432423], [1, 1, 866378.2837408222], [1, 2, -204590.33887112237], [2, 0, -352171.14227059274], [2, 1, -98795.9712060611], [2, 2, 238.1234837768164], [3, 0, 238.1234837768164], [3, 1, 1512416.8967751563], [3, 2, -202891.60255816544], [4, 0, -309116.6502055696], [4, 1, -124991.3211540927], [4, 2, 7183.136080128785], [5, 0, -4540.101692374503], [5, 1, -525266.1946542066], [5, 2, -244072.0727683794]],
                    dataLabels: {
                        enabled: true,
                        color: '#000000'
                    }
                }],

            });
    }
}

CustomHighchartsWidgetCtrl.$inject = ['$rootScope', '$timeout', '$scope']

angular.module('DemoApp').component('customHighchartsWidget', {
    templateUrl: 'widgets/highcharts/highcharts-widget.html',
    controller: CustomHighchartsWidgetCtrl,
    bindings: {
    }
})
