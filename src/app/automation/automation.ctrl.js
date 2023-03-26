app.controller('automationCtrl', [
    '$rootScope',
    function($rootScope) {
        $rootScope.instances = [];

        $rootScope.instances.push(
            {
                name: "Instance 1",
                lastRecord: new Date(),
                data: {
                    temp: [
                        {time: new Date(), temp1: 12.1, temp2: 12.25},
                        {time: new Date() + 1000, temp1: 12.2, temp2: 12.15},
                        {time: new Date() + 2000, temp1: 12.15, temp2: 12.2}
                    ],
                    fan: [
                        {time: new Date() + 1000, status: 1, temp: 12.5},
                        {time: new Date() + 2000, status: 1, temp: 12.7},
                        {time: new Date() + 3000, status: 1, temp: 12.6},
                        {time: new Date() + 4000, status: 1, temp: 12.35},
                        {time: new Date() + 5000, status: 1, temp: 12.1},
                        {time: new Date() + 6000, status: 0, temp: 11.9},
                        {time: new Date() + 7000, status: 0, temp: 11.8},
                        {time: new Date() + 8000, status: 0, temp: 11.75}
                    ]
                }
            }
        )
    }
])