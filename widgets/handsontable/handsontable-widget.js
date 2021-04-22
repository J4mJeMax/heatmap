class CustomHandsontableWidgetCtrl {
    constructor($rootScope, $timeout, $scope) {
        this.$rootScope = $rootScope
        this.$timeout = $timeout
        this.$scope = $scope
    }

    $onInit() {
        const container = document.getElementById('hsHeatmap');
        let hot;

        //I am not sure, can i use any library to generate colors for heatmap
        //So i did own function above :)
        const heatmapValuesRange = {
            min: Math.min(...[-214569.02804853008,-105928.24112864747,6825.64149834103,-4314.147215432423,866378.2837408222,-204590.33887112237 ,-352171.14227059274,-98795.9712060611,238.1234837768164,238.1234837768164,1512416.8967751563,-202891.60255816544 ,-309116.6502055696,-124991.3211540927,7183.136080128785,-4540.101692374503,-525266.1946542066,-244072.0727683794]),
            max: Math.max(...[-214569.02804853008,-105928.24112864747,6825.64149834103,-4314.147215432423,866378.2837408222,-204590.33887112237 ,-352171.14227059274,-98795.9712060611,238.1234837768164,238.1234837768164,1512416.8967751563,-202891.60255816544 ,-309116.6502055696,-124991.3211540927,7183.136080128785,-4540.101692374503,-525266.1946542066,-244072.0727683794])
        }
        let heatmapValuesSum = Math.abs(heatmapValuesRange.min) + Math.abs(heatmapValuesRange.max);

        //I am calculating color and opacity by dividing column value by heatmap values (min and max) sum, and getting percent of color intensity by this
        const getHeatMapColor = (value) => {
            let intensityPercentage = heatmapValuesSum - Math.abs(value);
            let redRgbValue = Math.round(intensityPercentage/heatmapValuesSum * 255);
            //Added it for better visual effect (changes are easily visible)
            let opacityValue = (intensityPercentage/heatmapValuesSum).toFixed(2);
            return `rgba(${redRgbValue},0,0, ${opacityValue})`;
        }

        hot = new Handsontable(container,{
            data: [["Actual", -214569.02804853008,-105928.24112864747,6825.64149834103,-4314.147215432423,866378.2837408222,-204590.33887112237],["Budget",-352171.14227059274,-98795.9712060611,238.1234837768164,238.1234837768164,1512416.8967751563,-202891.60255816544],["Last Year",-309116.6502055696,-124991.3211540927,7183.136080128785,-4540.101692374503,-525266.1946542066,-244072.0727683794]],
            colHeaders: ["Version","Executive General and Administration","Inventory Management","Manufacturing","Quality Assurance","Sales and Marketing","Research and Development"],
            columns: [
                {
                    type: 'text',
                    renderer: heatmapColorRenderer
                },
                {
                    type: 'text',
                    renderer: heatmapColorRenderer
                },
                {
                    type: 'text',
                    renderer: heatmapColorRenderer
                },
                {
                    type: 'text',
                    renderer: heatmapColorRenderer
                },
                {
                    type: 'text',
                    renderer: heatmapColorRenderer
                },
                {
                    type: 'text',
                    renderer: heatmapColorRenderer
                },
                {
                    type: 'text',
                    renderer: heatmapColorRenderer
                },
            ],
        });

        function heatmapColorRenderer(instance, td, row, col, prop, value, cellProperties) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);

            if(typeof value === "number") {
                td.style.backgroundColor = getHeatMapColor(value);
            }
        }
    }
}

CustomHandsontableWidgetCtrl.$inject = ['$rootScope', '$timeout', '$scope']

angular.module('DemoApp').component('customHandsontableWidget', {
    templateUrl: 'widgets/handsontable/handsontable-widget.html',
    controller: CustomHandsontableWidgetCtrl,
    bindings: {
    }
})
