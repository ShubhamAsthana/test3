module.exports = {
    "rsid": "vmwareglobal",
    "globalFilters": [
        {
            "type": "dateRange",
            "dateRange": "2019-01-26T00:00:00.000/2019-04-27T00:00:00.000"
        }
    ],
    "metricContainer": {
        "metrics": [
            {
                "columnId": "0",
                "id": "metrics/visits",
                "filters": [
                    "0"
                ]
            },
            {
                "columnId": "1",
                "id": "metrics/visitors",
                "filters": [
                    "1"
                ]
            },
            {
                "columnId": "2",
                "id": "metrics/bouncerate",
                "filters": [
                    "2"
                ]
            },
            {
                "columnId": "3",
                "id": "metrics/pageviews",
                "filters": [
                    "3"
                ]
            },
            {
                "columnId": "4",
                "id": "cm300006522_557f626ee4b0b02bd412443c",
                "filters": [
                    "4"
                ]
            },
            {
                "columnId": "5",
                "id": "cm300006522_568ce5b5e4b00bd22a9175d0",
                "filters": [
                    "5"
                ]
            },
            {
                "columnId": "6",
                "id": "metrics/timespentvisit",
                "filters": [
                    "6"
                ]
            },
            {
                "columnId": "7",
                "id": "metrics/singlepagevisits",
                "filters": [
                    "7"
                ]
            }
        ],
        "metricFilters": [
            {
                "id": "0",
                "type": "segment",
                "segmentId": "s300006522_5ca27686ab8d62040442e925"
            },
            {
                "id": "1",
                "type": "segment",
                "segmentId": "s300006522_5ca27686ab8d62040442e925"
            },
            {
                "id": "2",
                "type": "segment",
                "segmentId": "s300006522_5ca27686ab8d62040442e925"
            },
            {
                "id": "3",
                "type": "segment",
                "segmentId": "s300006522_5ca27686ab8d62040442e925"
            },
            {
                "id": "4",
                "type": "segment",
                "segmentId": "s300006522_5ca27686ab8d62040442e925"
            },
            {
                "id": "5",
                "type": "segment",
                "segmentId": "s300006522_5ca27686ab8d62040442e925"
            },
            {
                "id": "6",
                "type": "segment",
                "segmentId": "s300006522_5ca27686ab8d62040442e925"
            },
            {
                "id": "7",
                "type": "segment",
                "segmentId": "s300006522_5ca27686ab8d62040442e925"
            }
        ]
    },
    "dimension": "variables/daterangeweek",
    "settings": {
        "countRepeatInstances": true,
        "limit": 400,
        "page": 0,
        "dimensionSort": "asc"
    },
    "statistics": {
        "functions": [
            "col-max",
            "col-min"
        ]
    }
}
