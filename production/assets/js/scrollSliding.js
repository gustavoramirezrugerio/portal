!function t(e,i,r){function n(o,a){if(!i[o]){if(!e[o]){var c="function"==typeof require&&require;if(!a&&c)return c(o,!0);if(s)return s(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=i[o]={exports:{}};e[o][0].call(f.exports,function(t){var i=e[o][1][t];return n(i?i:t)},f,f.exports,t,e,i,r)}return i[o].exports}for(var s="function"==typeof require&&require,o=0;o<r.length;o++)n(r[o]);return n}({1:[function(t,e,i){$(function(){var t=function(){var t,e,i=$("#ss-container > div.ss-row"),r=$("#ss-links > a"),n=$(window),s={},o=!1,a=2e3,c="easeInOutExpo",f=!1,d=f&&Modernizr.csstransforms3d,l=function(){p(),v(),u(),h(),d&&i.css({"-webkit-perspective":600,"-webkit-perspective-origin":"50% 0%"}),t.find("a.ss-circle").addClass("ss-circle-deco"),g()},u=function(){$.extend($.expr[":"],{inviewport:function(t){return $(t).offset().top<s.height?!0:!1}})},h=function(){t=i.filter(":inviewport"),e=i.not(t)},p=function(){s.width=n.width(),s.height=n.height()},v=function(){r.on("click.Scrolling",function(t){return $("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top},a,c),!1}),$(window).on({"resize.Scrolling":function(e){p(),h(),i.find("a.ss-circle").removeClass("ss-circle-deco"),t.each(function(){$(this).find("div.ss-left").css({left:"0%"}).end().find("div.ss-right").css({right:"0%"}).end().find("a.ss-circle").addClass("ss-circle-deco")})},"scroll.Scrolling":function(t){return o?!1:(o=!0,void setTimeout(function(){g(),o=!1},10))}})},g=function(){var t=n.scrollTop(),i=s.height/2+t;e.each(function(e){var r=$(this),n=r.find("div.ss-left"),o=r.find("div.ss-right"),a=r.offset().top;if(a>s.height+t)d?(n.css({"-webkit-transform":"translate3d(-75%, 0, 0) rotateY(-90deg) translate3d(-75%, 0, 0)",opacity:0}),o.css({"-webkit-transform":"translate3d(75%, 0, 0) rotateY(90deg) translate3d(75%, 0, 0)",opacity:0})):(n.css({left:"-50%"}),o.css({right:"-50%"}));else{var c=r.height(),f=(a+c/2-i)/(s.height/2+c/2),l=Math.max(50*f,0);if(0>=l?r.data("pointer")||(r.data("pointer",!0),r.find(".ss-circle").addClass("ss-circle-deco")):r.data("pointer")&&(r.data("pointer",!1),r.find(".ss-circle").removeClass("ss-circle-deco")),d){var u=Math.max(75*f,0),h=Math.max(90*f,0),p=Math.min(Math.abs(f-1),1);n.css({"-webkit-transform":"translate3d(-"+u+"%, 0, 0) rotateY(-"+h+"deg) translate3d(-"+u+"%, 0, 0)",opacity:p}),o.css({"-webkit-transform":"translate3d("+u+"%, 0, 0) rotateY("+h+"deg) translate3d("+u+"%, 0, 0)",opacity:p})}else n.css({left:-l+"%"}),o.css({right:-l+"%"})}})};return{init:l}}();t.init()})},{}]},{},[1]);