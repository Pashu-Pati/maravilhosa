/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'back',
                type: 'image',
                rect: ['-14px', '-27px','366px','242px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back.png",'0px','0px']
            },
            {
                id: 'l',
                type: 'image',
                rect: ['-243px', '-57px','783px','207px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.png",'0px','0px'],
                transform: [[],[],[],['0.35','0.35']]
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-169px', '70px','530px','76px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px'],
                transform: [[],[],[],['0.52','0.52']]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['-180px', '69px','570px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                transform: [[],[],[],['0.52','0.52']]
            },
            {
                id: '_3',
                type: 'image',
                rect: ['-148px', '73px','442px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px'],
                transform: [[],[],[],['0.52','0.52']]
            },
            {
                id: '_4',
                type: 'image',
                rect: ['-200px', '73px','645px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px'],
                transform: [[],[],[],['0.52','0.52']]
            },
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['73px', '146px','171px','25px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(14,104,174,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['35px', '133px','242px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px'],
                transform: [[],[],[],['0.6','0.6']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "top", '133px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "background-position", [0,40], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '35px'],
                ["style", "clip", [0,242,37.33333206176758,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_RoundRect}": [
                ["style", "top", '146px'],
                ["style", "height", '25px'],
                ["color", "background-color", 'rgba(14,104,174,1.00)'],
                ["style", "left", '73px'],
                ["style", "width", '171px']
            ],
            "${__4}": [
                ["style", "top", '73px'],
                ["transform", "scaleY", '0.52'],
                ["transform", "scaleX", '0.52'],
                ["style", "opacity", '0'],
                ["style", "left", '-200px'],
                ["style", "clip", [0,645,72,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__3}": [
                ["style", "top", '73px'],
                ["transform", "scaleY", '0.52'],
                ["transform", "scaleX", '0.52'],
                ["style", "opacity", '0'],
                ["style", "left", '-148px'],
                ["style", "clip", [0,645,72,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__2}": [
                ["style", "top", '69px'],
                ["transform", "scaleY", '0.52'],
                ["transform", "scaleX", '0.52'],
                ["style", "opacity", '0'],
                ["style", "left", '-180px'],
                ["style", "clip", [0,645,72,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_l}": [
                ["style", "top", '-57px'],
                ["transform", "scaleY", '0.35'],
                ["style", "left", '-243px'],
                ["transform", "scaleX", '0.35']
            ],
            "${__1}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '0.52'],
                ["transform", "scaleX", '0.52'],
                ["style", "opacity", '0'],
                ["style", "left", '-169px'],
                ["style", "clip", [0,645,72,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_back}": [
                ["style", "top", '-27px'],
                ["style", "height", '242px'],
                ["style", "left", '-14px'],
                ["style", "width", '366px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13440,
            autoPlay: true,
            timeline: [
                { id: "eid22", tween: [ "style", "${_a2}", "clip", [0,242,37.33333206176758,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,242,37.33333206176758,0]}], position: 0, duration: 0, easing: "easeInOutCubic" },
                { id: "eid2", tween: [ "style", "${__4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 360, easing: "easeInOutCubic" },
                { id: "eid5", tween: [ "style", "${__4}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 360, easing: "easeInOutCubic" },
                { id: "eid10", tween: [ "style", "${__2}", "clip", [100,645,72,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,645,72,0]}], position: 9360, duration: 360, easing: "easeInOutCubic" },
                { id: "eid6", tween: [ "style", "${__4}", "clip", [100,645,72,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,645,72,0]}], position: 2640, duration: 360, easing: "easeInOutCubic" },
                { id: "eid11", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 6720, duration: 360, easing: "easeInOutCubic" },
                { id: "eid12", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '1'}], position: 9720, duration: 360, easing: "easeInOutCubic" },
                { id: "eid26", tween: [ "style", "${_a2}", "background-position", [0,3.333333333333], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,40]}], position: 0, duration: 360, easing: "easeInOutCubic" },
                { id: "eid27", tween: [ "style", "${_a2}", "background-position", [0,-36.666666666667], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,3.3333333333330017]}], position: 5500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid7", tween: [ "style", "${__3}", "clip", [100,645,72,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,645,72,0]}], position: 6000, duration: 360, easing: "easeInOutCubic" },
                { id: "eid14", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 10080, duration: 360, easing: "easeInOutCubic" },
                { id: "eid15", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 13080, duration: 360, easing: "easeInOutCubic" },
                { id: "eid13", tween: [ "style", "${__1}", "clip", [100,645,72,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,645,72,0]}], position: 12720, duration: 360, easing: "easeInOutCubic" },
                { id: "eid8", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 3360, duration: 360, easing: "easeInOutCubic" },
                { id: "eid9", tween: [ "style", "${__3}", "opacity", '0', { fromValue: '1'}], position: 6360, duration: 360, easing: "easeInOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-6963176");
