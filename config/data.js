// ***********************************************************
// Ye Olde Metric Configuration
//
// Here's the format:
// "m<the metric number>": {
//        "metric"        the metric number
//        "type"          Type of calculation to be performed (determines files to fetch). Options are sum, mean, and weighted.
//                            sum: r<metric>.csv
//                            mean: n<metric>.csv
//                            weighted: r<metric>.csv and d<metric>.csv
//        "category"      the category of the metric
//        "title"         metric descriptive title
//        "accuracy"      [optional] set true if metric has an accuracy file (i.e. m<metric>-accuracy.csv)
//        "label"         [optional] metric unit information
//        "decimals"      [optional] number of decimal places to display (default is 0)
//        "prefix"        [optional] prefix for the number, like '$'
//        "world_val"    [optional] override study area values for entire area via array
//                                 ex: "world_val": {"y_2013": 1234, "y_2015": 2345}
//        "suffix"        [optional] suffix for the number, like '%'
//        "raw_label"     [optional] label for raw number if available (also makes raw number visible)
// }
// ***********************************************************

let dataConfig = {
  
    "m101": {
        "metric": "101",
        "category": "Demographics",
        "label": "People",
        "title": "Population",
        "type": "sum"
    },
	 "m301": {
        "metric": "301",
        "category": "Education",
        "label": "High School Grad",
        "title": "Population over 25 where Highest Degree attained is High School Grad",
        "type": "sum"
    },
	"m202": {
        "metric": "202",
        "category": "Economics",
        "label": "People",
        "title": "People Living Below Poverty Line",
        "type": "sum"
    },
};

module.exports = dataConfig;
