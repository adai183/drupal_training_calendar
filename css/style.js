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
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 16,
        "lineHeight": 1.4,
        "color": "#333333"
    },
    "navbar-default navbar-nav > li > a": {
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 16,
        "lineHeight": 1.4,
        "color": "#333333",
        "paddingTop": 30
    },
    "navbar-default navbar-nav > li > form": {
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 16,
        "lineHeight": 1.4,
        "color": "#333333",
        "paddingTop": 18
    },
    "font_type_home": {
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "color": "#999999"
    },
    "body": {
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "color": "#999999"
    },
    "footer ul li > a": {
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "color": "#999999",
        "lineHeight": 1.9
    },
    "font_type_section_title": {
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 20,
        "color": "#333333"
    },
    "section-title": {
        "fontFamily": "\"Roboto Slab\", serif",
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
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 20,
        "color": "#333333"
    },
    "footer title": {
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 20,
        "color": "#333333",
        "paddingLeft": 70
    },
    "body container-fluid": {
        "maxWidth": 1250
    },
    "body container-fluidfullwidth": {
        "maxWidth": "100%"
    },
    "body container-fluid-carousel": {
        "maxWidth": 1250
    },
    "a": {
        "color": "#00c7ab"
    },
    "a:hover": {
        "color": "#00c7ab !important",
        "textDecoration": "none !important"
    },
    "p": {
        "textAlign": "justify"
    },
    "top-link a": {
        "color": "#999999"
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
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 20,
        "fontWeight": "lighter",
        "lineHeight": 1.2,
        "color": "#ffffff",
        "marginLeft": 10
    },
    "button-primary:hover": {
        "opacity": 0.8
    },
    "button-secondary": {
        "width": 140,
        "height": 60,
        "borderRadius": "30px !important",
        "backgroundColor": "#ffffff",
        "border": "solid 1px #00c7ab",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontWeight": "bolder",
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#00c7ab"
    },
    "button-secondary:hover": {
        "color": "#00c7ab",
        "backgroundColor": "#ffffff",
        "border": "solid 1px #00c7ab",
        "opacity": 0.8
    },
    "button-selector": {
        "height": 74,
        "textAlign": "center",
        "backgroundColor": "#ffffff",
        "border": "solid 1px #f0f0f0",
        "fontFamily": "\"Open Sans\", sans-serif",
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
    "button-facebook": {
        "paddingTop": 8,
        "textAlign": "center",
        "width": 241,
        "height": 44,
        "borderRadius": 100,
        "border": "solid 1px #435fa0",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "color": "#435fa0"
    },
    "button-twitter": {
        "paddingTop": 8,
        "textAlign": "center",
        "width": 222,
        "height": 44,
        "borderRadius": 100,
        "border": "solid 1px #38a5ea",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "color": "#38a5ea"
    },
    "marker": {
        "display": "inline-block",
        "marginRight": 8,
        "width": 2,
        "height": 19,
        "backgroundColor": "#ec111a"
    },
    "jumbotron": {
        "height": 160,
        "borderBottom": "solid 3px #e72b22",
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 40,
        "lineHeight": 1.5,
        "color": "#333333"
    },
    "jumbotrondep1": {
        "backgroundImage": "url(\"../img/i-l-u.png\")",
        "borderBottom": "solid 3px #bd8de3"
    },
    "jumbotronabout": {
        "backgroundImage": "url(\"../img/aboutus.png\")",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "color": "#ffffff"
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
        "marginBottom": 30,
        "paddingTop": 12,
        "backgroundColor": "#ffffff",
        "borderBottom": 0
    },
    "navbar-default navbar-nav mcib-img": {
        "paddingTop": 25
    },
    "navbar-default navbar-nav mcib-img img": {
        "height": 27
    },
    "navbar-default navbar-nav > li > form input": {
        "width": 161,
        "height": "27.9px",
        "borderRadius": 30,
        "color": "#666666 !important",
        "background": "url(\"../img/lupa_white.svg\") no-repeat 125px 7px",
        "backgroundColor": "#dddddd"
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
        "marginBottom": 20,
        "borderBottom": "solid 1px #f0f0f0"
    },
    "sidebar li a": {
        "fontFamily": "\"Roboto Slab\", serif",
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
        "fontFamily": "\"Open Sans\", sans-serif",
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
    "footer-bottom-small": {
        "height": "auto",
        "maxWidth": 1480,
        "textAlign": "center",
        "backgroundColor": "#333333"
    },
    "footer-bottom-small social": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 30,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer-bottom-small a": {
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 14,
        "lineHeight": 1.7,
        "color": "#999999"
    },
    "footer-bottom-small dropdown button": {
        "backgroundColor": "#333333",
        "border": 0,
        "color": "#ffffff",
        "marginRight": 15
    },
    "footer-bottom-small gob": {
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
        "fontFamily": "\"Roboto Slab\", serif",
        "fontWeight": 300,
        "fontSize": 60,
        "lineHeight": 1.1,
        "color": "#333333",
        "textShadow": "initial"
    },
    "carousel carousel-caption p": {
        "textAlign": "center",
        "fontFamily": "\"Open Sans\", sans-serif",
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
        "paddingBottom": 90
    },
    "carousel carousel-captiondownload": {
        "paddingBottom": 50
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
        "fontFamily": "\"Open Sans\", sans-serif",
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
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 20,
        "lineHeight": 1.4,
        "color": "#00c7ab"
    },
    "search-form form button:hover": {
        "opacity": 0.8,
        "borderRadius": 30,
        "backgroundColor": "#ffffff",
        "border": "solid 1px #00c7ab",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 20,
        "lineHeight": 1.4,
        "color": "#00c7ab"
    },
    "search-form form button:focus": {
        "borderRadius": 30,
        "backgroundColor": "#ffffff",
        "border": "solid 1px #00c7ab",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 20,
        "lineHeight": 1.4,
        "color": "#00c7ab"
    },
    "search-form form button img": {
        "marginRight": 10
    },
    "search-form-filter": {
        "marginTop": 10
    },
    "search-form-filter form": {
        "maxWidth": 900
    },
    "search-form-filter form form-control::-webkit-input-placeholder": {
        "color": "#cccccc"
    },
    "search-form-filter form form-control:-moz-placeholder": {
        "color": "#cccccc"
    },
    "search-form-filter form form-control::-moz-placeholder": {
        "color": "#cccccc"
    },
    "search-form-filter form form-control:-ms-input-placeholder": {
        "color": "#cccccc"
    },
    "search-form-filter form input": {
        "height": 60,
        "border": "solid 1px #cccccc",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 20,
        "lineHeight": 1.5,
        "background": "url(\"../img/lupa.svg\") no-repeat scroll 95% 20px"
    },
    "search-form-filter form input-group": {
        "width": "100%"
    },
    "ui-widget": {
        "backgroundColor": "#ffffff",
        "listStyle": "none",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 14,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "ui-widget li:first-child": {
        "paddingTop": 10
    },
    "ui-widget li": {
        "paddingBottom": 10,
        "paddingLeft": "-30px !important"
    },
    "news title": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "news title a": {
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 16,
        "lineHeight": 1.6,
        "color": "#00c7ab"
    },
    "news subtitle": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "news date": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6
    },
    "news footnote": {
        "fontSize": 16
    },
    "events schedule schedule-head": {
        "backgroundColor": "#f0f0f0"
    },
    "events schedule schedule-head title": {
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "lineHeight": 1.6,
        "color": "#00c7ab"
    },
    "events schedule schedule-head date": {
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.5,
        "color": "#333333"
    },
    "events schedule ul": {
        "height": 410,
        "listStyle": "none",
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0,
        "width": "117%",
        "backgroundColor": "#f8f8f8",
        "border": "solid 1px #f0f0f0"
    },
    "events schedule ul li": {
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "cursor": "pointer",
        "marginBottom": 25
    },
    "events schedule ul li title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "lineHeight": 1.6,
        "color": "#666666"
    },
    "events schedule ul li date": {
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.5,
        "color": "#999999"
    },
    "events detail": {
        "paddingLeft": "0px !important",
        "height": 410,
        "borderRight": "solid 1px #f0f0f0",
        "borderBottom": "solid 1px #f0f0f0",
        "borderTop": "solid 1px #f0f0f0"
    },
    "events detail img": {
        "width": "106%"
    },
    "events detail title": {
        "paddingTop": 15,
        "paddingLeft": 15,
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 20,
        "lineHeight": 1.1,
        "color": "#999999"
    },
    "events detail subtitle": {
        "paddingTop": 15,
        "paddingLeft": 15,
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontWeight": 600,
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "events detail detail-link": {
        "marginTop": 15
    },
    "events detail detail-link a": {
        "paddingLeft": 15,
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "lineHeight": 1.8,
        "color": "#00c7ab"
    },
    "events calendar ui-state-active": {
        "color": "#00c7ab !important",
        "border": 0,
        "backgroundColor": "#ffffff"
    },
    "events calendar ui-state-active a": {
        "color": "#333333 !important",
        "borderBottom": "3px solid #00c7ab"
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
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "facilities subtitle": {
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "lineHeight": 1.5,
        "color": "#333333"
    },
    "facilities general-info": {
        "border": "solid 1px #f0f0f0",
        "paddingBottom": 23
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
    "dropdownopen > dropdown-menu": {
        "width": "107%",
        "left": "-4%"
    },
    "map map-img-small": {
        "display": "none"
    },
    "map map-img-medium": {
        "display": "none"
    },
    "map map-window": {
        "position": "absolute",
        "bottom": "7%",
        "left": "3%",
        "height": "80%",
        "width": "25%",
        "paddingTop": "1%",
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "1%",
        "backgroundColor": "#333333",
        "color": "#ffffff",
        "fontFamily": "\"Open Sans\", sans-serif"
    },
    "map map-window title": {
        "fontSize": 20,
        "fontFamily": "\"Roboto Slab\", serif"
    },
    "map map-window address": {
        "fontSize": 16
    },
    "map map-window address-2": {
        "fontSize": 16,
        "marginBottom": "8%"
    },
    "map map-window direction": {
        "fontSize": 16,
        "fontFamily": "\"Roboto Slab\", serif",
        "borderBottom": "1px solid #ffffff",
        "borderTop": "1px solid #ffffff",
        "paddingTop": "4%",
        "paddingRight": 0,
        "paddingBottom": "4%",
        "paddingLeft": 0,
        "marginBottom": "8%",
        "cursor": "pointer"
    },
    "map map-window direction direction-marker": {
        "float": "right",
        "marginRight": 20
    },
    "map map-window phone": {
        "fontSize": 16,
        "fontFamily": "\"Roboto Slab\", serif"
    },
    "map map-window fax": {
        "marginTop": 5,
        "fontSize": 16,
        "fontFamily": "\"Roboto Slab\", serif"
    },
    "map map-window number": {
        "float": "right",
        "paddingRight": 8
    },
    "map map-windowdirection-window": {
        "display": "none",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "lineHeight": 1.5
    },
    "map map-windowdirection-window title-direction direction-marker": {
        "float": "right",
        "marginRight": 20
    },
    "map map-windowdirection-window autobus": {
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "map map-windowdirection-window metro": {
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "map map-windowdirection-window back": {
        "color": "#00c7ab",
        "cursor": "pointer"
    },
    "departments subtitle": {
        "fontFamily": "\"Open Sans\", sans-serif",
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
    "departments subtitle a": {
        "color": "#333333"
    },
    "departments dep1 img": {
        "borderBottom": "3px solid  #7cbaf3"
    },
    "departments dep2 img": {
        "borderBottom": "3px solid  #C1C1C1"
    },
    "departments dep3 img": {
        "borderBottom": "3px solid   #b6d017"
    },
    "departments dep4 img": {
        "borderBottom": "3px solid #e27c72"
    },
    "departments dep5 img": {
        "borderBottom": "3px solid #f8b835"
    },
    "members boss": {
        "display": "-webkit-box"
    },
    "members boss title": {
        "marginLeft": 5,
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "members boss subtitle": {
        "marginLeft": 5,
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "color": "#333333"
    },
    "staff title": {
        "marginBottom": 15,
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "staff ul": {
        "paddingLeft": 0
    },
    "staff ul > li": {
        "paddingBottom": 15,
        "listStyle": "none",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "publication": {
        "display": "-webkit-box",
        "paddingLeft": 13
    },
    "funding ul": {
        "paddingLeft": 13
    },
    "groups p": {
        "paddingLeft": 14,
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "service-item": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "height": 70,
        "border": "solid 1px #f0f0f0",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "service-item:hover": {
        "backgroundColor": "#e6f9f6"
    },
    "cib-patents": {
        "border": "solid 1px #f0f0f0",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "info-title": {
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "cib-survey": {
        "border": "solid 1px #f0f0f0",
        "paddingTop": 13,
        "paddingRight": 0,
        "paddingBottom": 13,
        "paddingLeft": 10
    },
    "service-request-list li": {
        "marginTop": 15
    },
    "service-contact": {
        "border": "solid 1px #f0f0f0"
    },
    "service-contact title": {
        "marginTop": 20,
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "service-contact subtitle": {
        "marginBottom": 10,
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "lineHeight": 1.5,
        "color": "#333333"
    },
    "opening-hours": {
        "border": "solid 1px #f0f0f0"
    },
    "opening-hours title": {
        "marginBottom": 10,
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "opening-hours subtitle": {
        "marginTop": 20,
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "lineHeight": 1.5,
        "color": "#333333"
    },
    "service-links": {
        "marginTop": 30,
        "listStyle": "none",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16
    },
    "service-links li": {
        "marginBottom": 15
    },
    "service-links span": {
        "marginLeft": 10
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
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 20,
        "lineHeight": 1,
        "color": "#333333"
    },
    "calendar-dates subtitle": {
        "marginTop": 20,
        "paddingLeft": 15,
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "lineHeight": 1.6,
        "color": "#666666"
    },
    "calendar-dates subtitle date": {
        "fontFamily": "\"Roboto Slab\", serif",
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
    "calendar-detail": {
        "marginTop": 20
    },
    "calendar-detail left": {
        "border": "solid 1px #f0f0f0",
        "height": 330
    },
    "calendar-detail left date": {
        "marginTop": 15,
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 20,
        "lineHeight": 1.4,
        "color": "#333333"
    },
    "calendar-detail left title": {
        "marginTop": 30,
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "calendar-detail left subtitle": {
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "color": "#333333"
    },
    "calendar-detail left contact": {
        "fontFamily": "OpenSans",
        "fontSize": 16,
        "color": "#00c7ab"
    },
    "calendar-detail right": {
        "backgroundColor": "#f8f8f8",
        "border": "solid 1px #f0f0f0",
        "height": 330
    },
    "calendar-detail right topic": {
        "marginTop": 15,
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "calendar-detail right title": {
        "marginTop": 30,
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "calendar-detail right subtitle": {
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "color": "#333333"
    },
    "calendar-detail right departments": {
        "fontFamily": "OpenSans",
        "fontSize": 16,
        "color": "#00c7ab"
    },
    "custom-pager": {
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 18,
        "lineHeight": 1.2
    },
    "custom-pager li": {
        "paddingRight": 10
    },
    "custom-pager li a": {
        "color": "#cccccc",
        "borderRadius": 30,
        "border": "solid 1px #cccccc"
    },
    "custom-pager li a:hover": {
        "backgroundColor": "#00c7ab",
        "color": "#ffffff !important"
    },
    "news-details title": {
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 20,
        "lineHeight": 1.2,
        "color": "#333333"
    },
    "news-details img-sub": {
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#999999"
    },
    "news-related": {
        "display": "-webkit-box"
    },
    "news-related img": {
        "maxWidth": 129,
        "maxHeight": "102.7px"
    },
    "news-related title": {
        "marginLeft": 15,
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 14,
        "lineHeight": 1.9,
        "color": "#00c7ab"
    },
    "news-related subtitle": {
        "maxWidth": 259,
        "marginLeft": 15,
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "color": "#4c5056"
    },
    "ui-widget-header": {
        "border": 0
    },
    "ui-widget-header ui-icon": {
        "backgroundImage": "url(\"../img/ui-icons_444444_256x240.png\") !important"
    },
    "ui-datepicker": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "height": "auto",
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 16,
        "color": "#666666"
    },
    "ui-datepicker ui-widget-header": {
        "backgroundColor": "#ffffff",
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 20,
        "color": "#333333"
    },
    "ui-datepicker ui-state-default": {
        "border": 0,
        "backgroundColor": "#ffffff"
    },
    "ui-datepicker ui-state-highlight": {
        "color": "#00c7ab"
    },
    "ui-datepicker ui-datepicker-calendar tbody": {
        "lineHeight": 2.2
    },
    "ui-datepicker tdactive": {
        "borderBottom": "3px solid #00c7ab"
    }
});
