// Charts
var claimsTotal = {},
    claimsOpen = {},
    claimsClosed = {},
    claimsByMonth = {},
    claimsAndCost = {};

Vue.http.headers.common = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

var app = new Vue({
    el: '#app',
    delimiters: ["//", "//"],
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    data: {
        baseURL: 'https://gcm-dev.insitesapi.io',
        showFilterOptions: false,
        claimTypes: [],
        claimsList: [],
        // Filter options
        filterClients: [],
        filterInsurers: [],
        filterClaimTypes: [],
        filterClaimExecutives: [],
        filterIndustries: [],
        // Charts data
        overviewTotalClaims: [],
        overviewOpenClaims: [],
        overviewClosedClaims: [],
        overviewMonthlyClaims: [],
        overviewMonthlyClaimsXData: [],
        overviewMonthlyClaimsYData: []
    },
    methods: {
        getClaimsList: function (pageNumber, pageSize) {
            // GET /someUrl
            this.$http.get(this.baseURL + '/claims/list?page[number]=' + pageNumber + '&page[size]=' + pageSize + '', null
            ).then(response => {
                var claimsReturn = JSON.parse(response.bodyText);
                this.claimsList = claimsReturn.data.attributes;
            }, response => {
                // error callback
                alert('Error!');
            });
        },
        getClaimTypes: function () {
            this.$http.get(this.baseURL + '/overview-claim-type', null
            ).then(response => {
                this.claimTypes = JSON.parse(response.bodyText);
                console.log('Claim Types: ', JSON.parse(response.bodyText));
            }, response => {
                alert('Error!');
            });
        },
        getClaimsCount: function () {
            this.$http.get(this.baseURL + '/overview/claims?filter=this_month&start-date=&end-date=&client=&insurer=&claim_type=&claim_executive=&industry=', null
            ).then(response => {
                var overviewClaims = JSON.parse(response.bodyText);
                
                this.overviewTotalClaims = overviewClaims.data.attributes.total_claims;
                this.overviewOpenClaims = overviewClaims.data.attributes.open_claims;
                this.overviewClosedClaims = overviewClaims.data.attributes.closed_claims;
                this.overviewMonthlyClaims = overviewClaims.data.attributes.monthly_graph;

                this.createClaimsTotal();
                this.createClaimsOpen();
                this.createClaimsClosed();
                this.createClaimsByMonth();
                this.createClaimsAndCost();

                console.log('Claims: ', JSON.parse(response.bodyText));
                console.log('Open: ', overviewClaims.data.attributes.open_claims);
                console.log('Closed: ', overviewClaims.data.attributes.closed_claims);
                console.log('Total Claims: ', overviewClaims.data.attributes.total_claims);

            }, response => {
                alert('Error');
            });
        },
        getFilterClients: function () {
            this.$http.get(this.baseURL + '/overview-client'
            ).then((response) => {
                this.filterClients = JSON.parse(response.bodyText);
                console.log('Clients: ', JSON.parse(response.bodyText));
            }, response => {
                alert('Error!');
            });
        },
        getFilterInsurers: function () {
            this.$http.get(this.baseURL + '/overview-insurer', null
            ).then(response => {
                this.filterInsurers = JSON.parse(response.bodyText);
                console.log('Insurers: ', JSON.parse(response.bodyText));
            }, response => {
                alert('Error!');
            });
        },
        getFilterClaimTypes: function () {
            this.$http.get(this.baseURL + '/overview-claim-type', null
            ).then(response => {
                this.filterClaimTypes = JSON.parse(response.bodyText);
                console.log('Claim Types: ', this.filterClaimTypes);
            }, response => {
                alert('Error!');
            });
        },
        getFilterClaimExecutives: function () {
            this.$http.get(this.baseURL + '/overview-claim-executive', null
            ).then(response => {
                this.filterClaimExecutives = JSON.parse(response.bodyText);
                console.log('Executives: ', JSON.parse(response.bodyText));
            }, response => {
                alert('Error!');
            });
        },
        getFilterIndustries: function () {
            this.$http.get(this.baseURL + '/overview-industry', null
            ).then(response => {
                this.filterIndustries = JSON.parse(response.bodyText);
                console.log('Industries: ', JSON.parse(response.bodyText));
            }, response => {
                alert('Error!');
            });
        },
        createClaimsTotal: function () {
            claimsTotal = new Highcharts.chart('claims-total', {
                chart: {
                    type: 'spline',
                    backgroundColor: null
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    gridLineWidth: 0,
                    minorGridLineWidth: 0,
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    labels: {
                        enabled: false
                    },
                    minorTickLength: 0,
                    tickLength: 0,
                    categories: [
                        this.overviewTotalClaims.data[0].date,
                        this.overviewTotalClaims.data[1].date,
                        this.overviewTotalClaims.data[2].date,
                        this.overviewTotalClaims.data[3].date,
                        this.overviewTotalClaims.data[4].date,
                        this.overviewTotalClaims.data[5].date,
                        this.overviewTotalClaims.data[6].date,
                        this.overviewTotalClaims.data[7].date,
                        this.overviewTotalClaims.data[8].date,
                        this.overviewTotalClaims.data[9].date,
                        this.overviewTotalClaims.data[10].date,
                        this.overviewTotalClaims.data[11].date,
                        this.overviewTotalClaims.data[12].date,
                        this.overviewTotalClaims.data[13].date,
                        this.overviewTotalClaims.data[14].date,
                        this.overviewTotalClaims.data[15].date,
                        this.overviewTotalClaims.data[16].date,
                        this.overviewTotalClaims.data[17].date,
                        this.overviewTotalClaims.data[18].date,
                        this.overviewTotalClaims.data[19].date,
                        this.overviewTotalClaims.data[20].date,
                        this.overviewTotalClaims.data[21].date,
                        this.overviewTotalClaims.data[22].date,
                        this.overviewTotalClaims.data[23].date
                    ]
                },
                yAxis: {
                    gridLineWidth: 0,
                    minorGridLineWidth: 0,
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    labels: {
                        enabled: false
                    },
                    minorTickLength: 0,
                    tickLength: 0,
                    title: {
                        text: ''
                    }
                },
                plotOptions: {
                    line: {
                        enableMouseTracking: true
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Claims',
                    showInLegend: false,
                    data: [
                        this.overviewTotalClaims.data[0].count,
                        this.overviewTotalClaims.data[1].count,
                        this.overviewTotalClaims.data[2].count,
                        this.overviewTotalClaims.data[3].count,
                        this.overviewTotalClaims.data[4].count,
                        this.overviewTotalClaims.data[5].count,
                        this.overviewTotalClaims.data[6].count,
                        this.overviewTotalClaims.data[7].count,
                        this.overviewTotalClaims.data[8].count,
                        this.overviewTotalClaims.data[9].count,
                        this.overviewTotalClaims.data[10].count,
                        this.overviewTotalClaims.data[11].count
                    ],
                    color: '#1e86e3'
                }]
            });
        },
        createClaimsOpen: function () {
            claimsOpen = new Highcharts.chart('claims-open', {
                chart: {
                    type: 'spline',
                    backgroundColor: null
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    gridLineWidth: 0,
                    minorGridLineWidth: 0,
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    labels: {
                        enabled: false
                    },
                    minorTickLength: 0,
                    tickLength: 0,
                    categories: [
                        this.overviewOpenClaims.data[0].date,
                        this.overviewOpenClaims.data[1].date,
                        this.overviewOpenClaims.data[2].date,
                        this.overviewOpenClaims.data[3].date,
                        this.overviewOpenClaims.data[4].date,
                        this.overviewOpenClaims.data[5].date,
                        this.overviewOpenClaims.data[6].date,
                        this.overviewOpenClaims.data[7].date,
                        this.overviewOpenClaims.data[8].date,
                        this.overviewOpenClaims.data[9].date,
                        this.overviewOpenClaims.data[10].date,
                        this.overviewOpenClaims.data[11].date
                    ]
                },
                yAxis: {
                    gridLineWidth: 0,
                    minorGridLineWidth: 0,
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    labels: {
                        enabled: false
                    },
                    minorTickLength: 0,
                    tickLength: 0,
                    title: {
                        text: ''
                    }
                },
                plotOptions: {
                    line: {
                        enableMouseTracking: true
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Claims',
                    showInLegend: false,
                    data: [
                        this.overviewOpenClaims.data[0].count,
                        this.overviewOpenClaims.data[1].count,
                        this.overviewOpenClaims.data[2].count,
                        this.overviewOpenClaims.data[3].count,
                        this.overviewOpenClaims.data[4].count,
                        this.overviewOpenClaims.data[5].count,
                        this.overviewOpenClaims.data[6].count,
                        this.overviewOpenClaims.data[7].count,
                        this.overviewOpenClaims.data[8].count,
                        this.overviewOpenClaims.data[9].count,
                        this.overviewOpenClaims.data[10].count,
                        this.overviewOpenClaims.data[11].count
                    ],
                    color: '#1e86e3'
                }]
            });
        },
        createClaimsClosed: function () {
            claimsClosed = new Highcharts.chart('claims-closed', {
                chart: {
                    type: 'spline',
                    backgroundColor: null
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    gridLineWidth: 0,
                    minorGridLineWidth: 0,
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    labels: {
                        enabled: false
                    },
                    minorTickLength: 0,
                    tickLength: 0,
                    categories: [
                        this.overviewClosedClaims.data[0].date,
                        this.overviewClosedClaims.data[1].date,
                        this.overviewClosedClaims.data[2].date,
                        this.overviewClosedClaims.data[3].date,
                        this.overviewClosedClaims.data[4].date,
                        this.overviewClosedClaims.data[5].date,
                        this.overviewClosedClaims.data[6].date,
                        this.overviewClosedClaims.data[7].date,
                        this.overviewClosedClaims.data[8].date,
                        this.overviewClosedClaims.data[9].date,
                        this.overviewClosedClaims.data[10].date,
                        this.overviewClosedClaims.data[11].date,
                        this.overviewClosedClaims.data[12].date,
                        this.overviewClosedClaims.data[13].date,
                        this.overviewClosedClaims.data[14].date,
                        this.overviewClosedClaims.data[15].date,
                        this.overviewClosedClaims.data[16].date,
                        this.overviewClosedClaims.data[17].date,
                        this.overviewClosedClaims.data[18].date,
                        this.overviewClosedClaims.data[19].date,
                        this.overviewClosedClaims.data[20].date,
                        this.overviewClosedClaims.data[21].date,
                        this.overviewClosedClaims.data[22].date,
                        this.overviewClosedClaims.data[23].date
                    ]
                },
                yAxis: {
                    gridLineWidth: 0,
                    minorGridLineWidth: 0,
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    labels: {
                        enabled: false
                    },
                    minorTickLength: 0,
                    tickLength: 0,
                    title: {
                        text: ''
                    }
                },
                plotOptions: {
                    line: {
                        enableMouseTracking: true
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Claims',
                    showInLegend: false,
                    data: [
                        this.overviewClosedClaims.data[0].count,
                        this.overviewClosedClaims.data[1].count,
                        this.overviewClosedClaims.data[2].count,
                        this.overviewClosedClaims.data[3].count,
                        this.overviewClosedClaims.data[4].count,
                        this.overviewClosedClaims.data[5].count,
                        this.overviewClosedClaims.data[6].count,
                        this.overviewClosedClaims.data[7].count,
                        this.overviewClosedClaims.data[8].count,
                        this.overviewClosedClaims.data[9].count,
                        this.overviewClosedClaims.data[10].count,
                        this.overviewClosedClaims.data[11].count,
                        this.overviewClosedClaims.data[12].count,
                        this.overviewClosedClaims.data[13].count,
                        this.overviewClosedClaims.data[14].count,
                        this.overviewClosedClaims.data[15].count,
                        this.overviewClosedClaims.data[16].count,
                        this.overviewClosedClaims.data[17].count,
                        this.overviewClosedClaims.data[18].count,
                        this.overviewClosedClaims.data[19].count,
                        this.overviewClosedClaims.data[20].count,
                        this.overviewClosedClaims.data[21].count,
                        this.overviewClosedClaims.data[22].count,
                        this.overviewClosedClaims.data[23].count
                    ],
                    color: '#1e86e3'
                }]
            });
        },
        createClaimsByMonth: function () {
            claimsByMonth = new Highcharts.chart('claims-by-month-graph', {
                chart: {
                    type: 'line',
                    backgroundColor: null
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    tickLength: 0,
                    categories: [
                        this.overviewMonthlyClaims[0].date,
                        this.overviewMonthlyClaims[1].date,
                        this.overviewMonthlyClaims[2].date,
                        this.overviewMonthlyClaims[3].date,
                        this.overviewMonthlyClaims[4].date,
                        this.overviewMonthlyClaims[5].date,
                        this.overviewMonthlyClaims[6].date,
                        this.overviewMonthlyClaims[7].date,
                        this.overviewMonthlyClaims[8].date,
                        this.overviewMonthlyClaims[9].date,
                        this.overviewMonthlyClaims[10].date,
                        this.overviewMonthlyClaims[11].date
                    ]
                },
                yAxis: {
                    title: {
                        text: ''
                    }
                },
                plotOptions: {
                    line: {
                        enableMouseTracking: true
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Claims',
                    showInLegend: false,
                    data: [
                        this.overviewMonthlyClaims[0].claims,
                        this.overviewMonthlyClaims[1].claims,
                        this.overviewMonthlyClaims[2].claims,
                        this.overviewMonthlyClaims[3].claims,
                        this.overviewMonthlyClaims[4].claims,
                        this.overviewMonthlyClaims[5].claims,
                        this.overviewMonthlyClaims[6].claims,
                        this.overviewMonthlyClaims[7].claims,
                        this.overviewMonthlyClaims[8].claims,
                        this.overviewMonthlyClaims[9].claims,
                        this.overviewMonthlyClaims[10].claims,
                        this.overviewMonthlyClaims[11].claims
                    ],
                    color: '#1e86e3'
                }]
            });
        },
        createClaimsAndCost: function () {
            claimsAndCost = new Highcharts.chart('claims-and-cost', {
                chart: {
                    zoomType: 'xy',
                    backgroundColor: null
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: [{
                    tickLength: 0,
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    crosshair: true
                }],
                yAxis: [{ // Primary yAxis
                    labels: {
                        format: '{value}',
                        style: {
                            color: '#323D53'
                        }
                    },
                    title: {
                        text: '',
                        style: {
                            color: '#323D53'
                        }
                    },
                    opposite: true

                }, { // Secondary yAxis
                    gridLineWidth: 0,
                    title: {
                        text: '',
                        style: {
                            color: '#323D53'
                        }
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: '#323D53'
                        }
                    }

                }, { // Tertiary yAxis
                    gridLineWidth: 0,
                    title: {
                        text: '',
                        style: {
                            color: '#323D53'
                        }
                    },
                    labels: {
                        enabled: false,
                        format: '',
                        style: {
                            color: '#323D53'
                        }
                    },
                    opposite: true
                }],
                tooltip: {
                    shared: true
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Claims',
                    type: 'column',
                    yAxis: 1,
                    data: [9, 21, 11, 19, 14, 7, 14, 18, 11, 13, 14, 8],
                    color: '#1e86e3',
                    tooltip: {
                        valueSuffix: ''
                    }

                }, {
                    name: 'Gross Cost',
                    type: 'spline',
                    yAxis: 2,
                    data: [10, 22, 12, 20, 15, 8, 15, 19, 12, 14, 15, 9],
                    marker: {
                        enabled: false
                    },
                    tooltip: {
                        valueSuffix: ''
                    },
                    color: '#f00'

                }, {
                    name: '',
                    type: 'spline',
                    data: [5, 15, 8, 17, 11, 4, 10, 12, 9, 11, 12, 4],
                    color: '#1f86f3',
                    tooltip: {
                        valueSuffix: ''
                    }
                }]
            });
        },
        pagination: function (c, m) {
            var current = c,
                last = m,
                delta = 2,
                left = current - delta,
                right = current + delta + 1,
                range = [],
                rangeWithDots = [],
                l;

            for (var i = 1; i <= last; i++) {
                if (i == 1 || i == last || i >= left && i < right) {
                    range.push(i);
                }
            }

            for (var i of range) {
                if (l) {
                    if (i - l === 2) {
                        rangeWithDots.push(l + 1);
                    } else if (i - l !== 1) {
                        rangeWithDots.push('...');
                    }
                }
                rangeWithDots.push(i);
                l = i;
            }

            return rangeWithDots;
        }
    },
    mounted() {
        this.getClaimTypes();
        this.getFilterInsurers();
        this.getFilterClaimExecutives();
        this.getFilterIndustries();
        //this.getFilterClients();

        this.getClaimsCount();
        this.createClaimsTotal();
        this.createClaimsOpen();
        this.createClaimsClosed();
        this.createClaimsByMonth();
        this.createClaimsAndCost();
    }
});