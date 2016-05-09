import React, {StyleSheet, Dimensions} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "margin-top-1": {
        "marginTop": "10px !important"
    },
    "margin-bottom-1": {
        "marginBottom": "10px !important"
    },
    "padding-top-1": {
        "paddingTop": "10px !important"
    },
    "padding-bottom-1": {
        "paddingBottom": "10px !important"
    },
    "margin-top-2": {
        "marginTop": "20px !important"
    },
    "margin-bottom-2": {
        "marginBottom": "20px !important"
    },
    "padding-top-2": {
        "paddingTop": "20px !important"
    },
    "padding-bottom-2": {
        "paddingBottom": "20px !important"
    },
    "margin-top-3": {
        "marginTop": "30px !important"
    },
    "margin-bottom-3": {
        "marginBottom": "30px !important"
    },
    "padding-top-3": {
        "paddingTop": "30px !important"
    },
    "padding-bottom-3": {
        "paddingBottom": "30px !important"
    },
    "margin-top-4": {
        "marginTop": "40px !important"
    },
    "margin-bottom-4": {
        "marginBottom": "40px !important"
    },
    "padding-top-4": {
        "paddingTop": "40px !important"
    },
    "padding-bottom-4": {
        "paddingBottom": "40px !important"
    },
    "margin-top-5": {
        "marginTop": "50px !important"
    },
    "margin-bottom-5": {
        "marginBottom": "50px !important"
    },
    "padding-top-5": {
        "paddingTop": "50px !important"
    },
    "padding-bottom-5": {
        "paddingBottom": "50px !important"
    },
    "margin-top-6": {
        "marginTop": "60px !important"
    },
    "margin-bottom-6": {
        "marginBottom": "60px !important"
    },
    "padding-top-6": {
        "paddingTop": "60px !important"
    },
    "padding-bottom-6": {
        "paddingBottom": "60px !important"
    },
    "margin-top-7": {
        "marginTop": "70px !important"
    },
    "margin-bottom-7": {
        "marginBottom": "70px !important"
    },
    "padding-top-7": {
        "paddingTop": "70px !important"
    },
    "padding-bottom-7": {
        "paddingBottom": "70px !important"
    },
    "margin-top-8": {
        "marginTop": "80px !important"
    },
    "margin-bottom-8": {
        "marginBottom": "80px !important"
    },
    "padding-top-8": {
        "paddingTop": "80px !important"
    },
    "padding-bottom-8": {
        "paddingBottom": "80px !important"
    },
    "margin-top-9": {
        "marginTop": "90px !important"
    },
    "margin-bottom-9": {
        "marginBottom": "90px !important"
    },
    "padding-top-9": {
        "paddingTop": "90px !important"
    },
    "padding-bottom-9": {
        "paddingBottom": "90px !important"
    },
    "margin-top-10": {
        "marginTop": "100px !important"
    },
    "margin-bottom-10": {
        "marginBottom": "100px !important"
    },
    "padding-top-10": {
        "paddingTop": "100px !important"
    },
    "padding-bottom-10": {
        "paddingBottom": "100px !important"
    },
    "font_type_nav": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 16,
        "lineHeight": 1.4,
        "color": "#333333"
    },
    "navbar-default navbar-nav > li > a": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 16,
        "lineHeight": 1.4,
        "color": "#333333",
        "paddingTop": 30
    },
    "navbar-default navbar-nav > li > form": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 16,
        "lineHeight": 1.4,
        "color": "#333333",
        "paddingTop": 18
    },
    "font_type_home": {
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 16,
        "color": "#999999"
    },
    "body": {
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 16,
        "color": "#999999"
    },
    "footer ul li > a": {
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 16,
        "color": "#999999",
        "lineHeight": 1.9
    },
    "font_type_section_title": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 20,
        "color": "#333333"
    },
    "section-title": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 20,
        "color": "#333333",
        "marginTop": 40
    },
    "font_type_section_title a": {
        "fontFamily": "OpenSans",
        "fontSize": 16,
        "lineHeight": 1.8,
        "color": "#00c7ab"
    },
    "section-title a": {
        "fontFamily": "OpenSans",
        "fontSize": 16,
        "lineHeight": 1.8,
        "color": "#00c7ab"
    },
    "font_type_footer_title": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 20,
        "color": "#333333"
    },
    "footer title": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 20,
        "color": "#333333",
        "paddingLeft": 70
    },
    "body container-fluid": {
        "maxWidth": 1250
    },
    "a": {
        "color": "#00c7ab"
    },
    "a:hover": {
        "color": "#00c7ab !important",
        "textDecoration": "none !important"
    },
    "input:focus": {
        "borderColor": "#00c7ab !important"
    },
    "btn:focus": {
        "outline": "none !important"
    },
    "btn:active": {
        "outline": "none !important"
    },
    "button-primary": {
        "borderRadius": 30,
        "backgroundColor": "#00c7ab",
        "border": "solid 1px #00c7ab"
    },
    "button-primary span": {
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 20,
        "fontWeight": "lighter",
        "lineHeight": 1.2,
        "color": "#ffffff",
        "marginLeft": 10
    },
    "button-primary:hover": {
        "opacity": 0.8
    },
    "button-selector": {
        "height": 74,
        "textAlign": "center",
        "backgroundColor": "#ffffff",
        "border": "solid 1px #f0f0f0",
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 16,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "button-selector div": {
        "marginTop": 28
    },
    "button-selector:hover": {
        "opacity": 0.7,
        "cursor": "pointer"
    },
    "button-selectoractive": {
        "border": "solid 1px #00c7ab"
    },
    "section-title marker": {
        "display": "inline-block",
        "marginRight": 8,
        "width": 2,
        "height": 19,
        "backgroundColor": "#ec111a"
    },
    "jumbotron": {
        "height": 160,
        "backgroundColor": "#eeeeee",
        "borderBottom": "solid 3px #e72b22",
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 40,
        "lineHeight": 1.5,
        "color": "#333333"
    },
    "content section": {
        "backgroundColor": "#00c7ab",
        "marginBottom": 20,
        "height": 750
    },
    "nav-top dropdown button": {
        "border": 0,
        "marginRight": 15,
        "fontSize": 14,
        "color": "#999999"
    },
    "navbar-default": {
        "height": 80,
        "backgroundColor": "#ffffff",
        "borderBottom": 0
    },
    "navbar-default navbar-nav > li > form input": {
        "width": 161,
        "height": "27.9px",
        "borderRadius": 30,
        "backgroundColor": "#dddddd",
        "color": "#666666 !important"
    },
    "navbar-default form-control::-webkit-input-placeholder": {
        "color": "#ffffff"
    },
    "navbar-default form-control:-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbar-default form-control::-moz-placeholder": {
        "color": "#ffffff"
    },
    "navbar-default form-control:-ms-input-placeholder": {
        "color": "#ffffff"
    },
    "sidebar affix-top": {
        "position": "static"
    },
    "sidebar affix": {
        "position": "static"
    },
    "sidebar li": {
        "marginBottom": 20
    },
    "sidebar li a": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 20,
        "lineHeight": 1.4,
        "color": "#333333"
    },
    "sidebar li a:hover": {
        "backgroundColor": "#ffffff"
    },
    "sidebar liactive": {
        "borderLeft": "3px #ec111a solid"
    },
    "footer": {},
    "footer ul": {
        "listStyle": "none",
        "marginLeft": "-40px"
    },
    "footerfooter-bottom": {
        "height": "auto",
        "maxWidth": 1480,
        "backgroundColor": "#333333"
    },
    "footerfooter-bottom social": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 30,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footerfooter-bottom text a": {
        "marginRight": 30,
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 14,
        "lineHeight": 1.7,
        "color": "#999999"
    },
    "footerfooter-bottom dropdown button": {
        "backgroundColor": "#333333",
        "border": 0,
        "color": "#ffffff",
        "marginRight": 15
    },
    "footerfooter-bottom gob": {
        "marginTop": 0,
        "marginRight": "-15px",
        "marginBottom": 0,
        "marginLeft": 0
    },
    "carousel carousel-indicators li": {
        "borderColor": "#00c7ab"
    },
    "carousel carousel-indicators liactive": {
        "backgroundColor": "#00c7ab"
    },
    "carousel carousel-caption title": {
        "fontFamily": "\"gibsonlight\"",
        "fontSize": 60,
        "lineHeight": 1.1,
        "color": "#333333",
        "textShadow": "initial"
    },
    "carousel carousel-caption p": {
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 20,
        "lineHeight": 1.6,
        "color": "#333333",
        "textShadow": "initial !important"
    },
    "carousel carousel-caption p a": {
        "color": "#00c7ab"
    },
    "carousel carousel-caption p button": {
        "marginTop": 40,
        "width": 290,
        "height": 60
    },
    "carousel carousel-captionresearch": {
        "paddingBottom": 141
    },
    "carousel carousel-captiondownload": {
        "paddingBottom": 90
    },
    "carousel carousel-captiondevelopment": {
        "paddingBottom": 60
    },
    "carousel carousel-captionoutreach": {
        "paddingBottom": 70
    },
    "search-form": {
        "marginTop": 10
    },
    "search-form form": {
        "maxWidth": 900
    },
    "search-form form form-control::-webkit-input-placeholder": {
        "color": "#cccccc"
    },
    "search-form form form-control:-moz-placeholder": {
        "color": "#cccccc"
    },
    "search-form form form-control::-moz-placeholder": {
        "color": "#cccccc"
    },
    "search-form form form-control:-ms-input-placeholder": {
        "color": "#cccccc"
    },
    "search-form form input": {
        "height": 60,
        "border": "solid 1px #cccccc",
        "borderRight": 0,
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 20,
        "lineHeight": 1.5
    },
    "search-form form input-group-btn": {
        "outline": "initial"
    },
    "search-form form button": {
        "zIndex": 99999,
        "width": 170,
        "height": 60,
        "borderRadius": 30,
        "backgroundColor": "#ffffff",
        "border": "solid 1px #00c7ab",
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 20,
        "lineHeight": 1.4,
        "color": "#00c7ab"
    },
    "search-form form button:hover": {
        "opacity": 0.8,
        "borderRadius": 30,
        "backgroundColor": "#ffffff",
        "border": "solid 1px #00c7ab",
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 20,
        "lineHeight": 1.4,
        "color": "#00c7ab"
    },
    "search-form form button:focus": {
        "borderRadius": 30,
        "backgroundColor": "#ffffff",
        "border": "solid 1px #00c7ab",
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 20,
        "lineHeight": 1.4,
        "color": "#00c7ab"
    },
    "search-form form button img": {
        "marginRight": 10
    },
    "news title": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "news title a": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 16,
        "lineHeight": 1.6,
        "color": "#00c7ab"
    },
    "news subtitle": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "news date": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 14,
        "lineHeight": 1.6
    },
    "news footnote": {
        "fontSize": 16
    },
    "events schedule": {
        "paddingRight": "0px !important",
        "backgroundColor": "#f8f8f8",
        "border": "solid 1px #f0f0f0"
    },
    "events schedule schedule-head": {
        "backgroundColor": "#f0f0f0",
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": "-15px"
    },
    "events schedule schedule-head title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 15,
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 16,
        "lineHeight": 1.6,
        "color": "#00c7ab"
    },
    "events schedule schedule-head date": {
        "marginLeft": 15,
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 14,
        "lineHeight": 1.5,
        "color": "#333333"
    },
    "events schedule ul": {
        "listStyle": "none",
        "marginLeft": "-40px"
    },
    "events schedule ul li": {
        "marginBottom": 25
    },
    "events schedule ul li title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 16,
        "lineHeight": 1.6,
        "color": "#666666"
    },
    "events schedule ul li date": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 14,
        "lineHeight": 1.5,
        "color": "#999999"
    },
    "events detail": {
        "paddingLeft": "0px !important"
    },
    "events detail title": {
        "paddingTop": 25,
        "paddingLeft": 15,
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 20,
        "lineHeight": 1.1,
        "color": "#999999"
    },
    "events detail subtitle": {
        "paddingTop": 25,
        "paddingLeft": 15,
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "events detail detail-link a": {
        "paddingTop": 15,
        "paddingLeft": 15,
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 16,
        "lineHeight": 1.8,
        "color": "#00c7ab"
    },
    "scientific-report": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "height": 70,
        "border": "solid 1px #f0f0f0"
    },
    "facilities title": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "facilities subtitle": {
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 16,
        "lineHeight": 1.5,
        "color": "#333333"
    },
    "facilities general-info": {
        "border": "solid 1px #f0f0f0"
    },
    "facilities general-info title:nth-of-type(1)": {
        "marginTop": 15
    },
    "facilities general-info fax": {
        "marginTop": 15
    },
    "facilities individual-info": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": "5%",
        "border": "solid 1px #f0f0f0"
    },
    "facilities dropdown button": {
        "height": 50,
        "width": "107%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "left",
        "backgroundColor": "#ffffff",
        "border": 0,
        "position": "relative",
        "right": 15,
        "borderBottom": "solid 1px #f0f0f0"
    },
    "facilities dropdown button caret": {
        "color": "#cccccc",
        "borderTop": "8px solid",
        "borderRight": "8px solid transparent",
        "borderLeft": "8px solid transparent",
        "marginRight": 10
    },
    "facilities dropdown button text": {
        "position": "relative",
        "left": 15
    },
    "facilities info": {
        "display": "inline-flex",
        "marginTop": 25
    },
    "facilities info extension": {
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "facilities info phone": {
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "departments subtitle": {
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#333333",
        "textAlign": "center",
        "width": "103.5%",
        "height": 75,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "solid 1px #f0f0f0"
    },
    "departments dep1 img": {
        "borderBottom": "3px solid #c08de0"
    },
    "departments dep2 img": {
        "borderBottom": "3px solid #7cbaf3"
    },
    "departments dep3 img": {
        "borderBottom": "3px solid #b6d017"
    },
    "departments dep4 img": {
        "borderBottom": "3px solid #e27c72"
    },
    "departments dep5 img": {
        "borderBottom": "3px solid #f8b835"
    },
    "service-item": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "height": 70,
        "border": "solid 1px #f0f0f0",
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "service-item:hover": {
        "backgroundColor": "#e6f9f6"
    },
    "calendar-dates": {
        "overflowY": "scroll",
        "height": 397,
        "backgroundColor": "#f8f8f8",
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "calendar-dates title": {
        "paddingLeft": 15,
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 20,
        "lineHeight": 1,
        "color": "#333333"
    },
    "calendar-dates subtitle": {
        "marginTop": 20,
        "paddingLeft": 15,
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 16,
        "lineHeight": 1.6,
        "color": "#666666"
    },
    "calendar-dates subtitle date": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 14,
        "lineHeight": 1.5,
        "color": "#999999"
    },
    "calendar-dates subtitleactive": {
        "backgroundColor": "#f0f0f0",
        "color": "#00c7ab"
    },
    "calendar-dates subtitleactive date": {
        "color": "#333333"
    },
    "calendar-detail left date": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 20,
        "lineHeight": 1.4,
        "color": "#333333"
    },
    "calendar-detail left title": {
        "fontFamily": "\"gibsonregular\"",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "calendar-detail left subtitle": {
        "fontFamily": "\"OpenSans, sans-serif\"",
        "fontSize": 16,
        "color": "#333333"
    },
    "calendar-detail left contact": {
        "fontFamily": "OpenSans",
        "fontSize": 16,
        "color": "#00c7ab"
    }
});