(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['MainViewer'];
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['MainViewer']);
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R !== undefined) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var T = s != undefined ? S['getObjective'](s, r) : S['get'](r);
                                if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    T += 0x1;
                                return T;
                            } catch (U) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, V) {
        var W = {};
        W['player'] = player;
        W['playList'] = V;
        function X(a0) {
            for (var a1 = 0x0; a1 < a0['length']; ++a1) {
                var a2 = a0[a1];
                if ('id' in a2)
                    player[a2['id']] = a2;
            }
        }
        if (W['questions']) {
            X(W['questions']);
            for (var Y = 0x0; Y < W['questions']['length']; ++Y) {
                var Z = W['questions'][Y];
                X(Z['options']);
            }
        }
        if (W['objectives']) {
            X(W['objectives']);
        }
        if (W['califications']) {
            X(W['califications']);
        }
        if (W['score']) {
            player[W['score']['id']] = W['score'];
        }
        if (W['question']) {
            player[W['question']['id']] = W['question'];
        }
        if (W['timeout']) {
            player[W['timeout']['id']] = W['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return W;
    }
    var d = {"borderRadius":0,"id":"rootPlayer","paddingTop":0,"mediaActivationMode":"window","start":"this.init()","width":"100%","borderSize":0,"paddingLeft":0,"paddingBottom":0,"desktopMipmappingEnabled":false,"scrollBarWidth":10,"class":"Player","minHeight":20,"verticalAlign":"top","definitions": [{"rotationY":0,"hideDuration":500,"rotationX":0,"showEasing":"cubic_in","rotationZ":0,"popupMaxHeight":"95%","id":"popup_95D9871A_8101_FF42_4187_D1572401A139","popupDistance":100,"class":"PopupPanoramaOverlay","hfov":2.82,"image":"this.res_9751B166_8100_13C2_41A8_8A31B75D1960","pitch":14.43,"showDuration":500,"yaw":37.66,"popupMaxWidth":"95%","hideEasing":"cubic_out"},{"thumbnailUrl":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_t.jpg","overlays":["this.overlay_94F14D43_8100_13C2_41C1_046654E12970","this.overlay_94100702_8100_3F43_41D5_55566DC44074","this.popup_95D9871A_8101_FF42_4187_D1572401A139","this.overlay_961AAE8D_8100_715E_41DC_30961EB3D49A"],"label":trans('panorama_92D82562_8100_73C3_41CC_F92BF599C1BE.label'),"id":"panorama_92D82562_8100_73C3_41CC_F92BF599C1BE","data":{"label":"20190911_180821"},"class":"Panorama","partial":true,"hfovMax":130,"hfov":150,"vfov":40.59,"frames":[{"thumbnailUrl":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_t.jpg","front":{"levels":[{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/f/0/{row}_{column}.jpg","tags":"ondemand","rowCount":6,"class":"TiledImageResourceLevel","width":3072,"height":3072,"colCount":6},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/f/1/{row}_{column}.jpg","tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","width":1536,"height":1536,"colCount":3},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/f/2/{row}_{column}.jpg","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":1024,"height":1024,"colCount":2},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/f/3/{row}_{column}.jpg","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":512,"height":512,"colCount":1},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/f/vr/0.jpg","tags":"mobilevr","rowCount":1,"class":"TiledImageResourceLevel","width":1536,"height":1536,"colCount":1}],"class":"ImageResource"},"right":{"levels":[{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/r/0/{row}_{column}.jpg","tags":"ondemand","rowCount":6,"class":"TiledImageResourceLevel","width":3072,"height":3072,"colCount":6},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/r/1/{row}_{column}.jpg","tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","width":1536,"height":1536,"colCount":3},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/r/2/{row}_{column}.jpg","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":1024,"height":1024,"colCount":2},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/r/3/{row}_{column}.jpg","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":512,"height":512,"colCount":1},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/r/vr/0.jpg","tags":"mobilevr","rowCount":1,"class":"TiledImageResourceLevel","width":1536,"height":1536,"colCount":1}],"class":"ImageResource"},"left":{"levels":[{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/l/0/{row}_{column}.jpg","tags":"ondemand","rowCount":6,"class":"TiledImageResourceLevel","width":3072,"height":3072,"colCount":6},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/l/1/{row}_{column}.jpg","tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","width":1536,"height":1536,"colCount":3},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/l/2/{row}_{column}.jpg","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":1024,"height":1024,"colCount":2},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/l/3/{row}_{column}.jpg","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":512,"height":512,"colCount":1},{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_0/l/vr/0.jpg","tags":"mobilevr","rowCount":1,"class":"TiledImageResourceLevel","width":1536,"height":1536,"colCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"pitch":4.19},{"items":[{"media":"this.panorama_92D82562_8100_73C3_41CC_F92BF599C1BE","end":"this.trigger('tourEnded')","camera":"this.panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","class":"PanoramaPlayer"},{"id":"res_9751B166_8100_13C2_41A8_8A31B75D1960","data":{"type":"popup"},"levels":[{"url":"media/res_9751B166_8100_13C2_41A8_8A31B75D1960_0.jpg","width":750,"height":500,"class":"ImageResourceLevel"},{"url":"media/res_9751B166_8100_13C2_41A8_8A31B75D1960_1.jpg","width":512,"height":341,"class":"ImageResourceLevel"}],"class":"ImageResource"},{"borderRadius":0,"subtitlesTextShadowHorizontalLength":1,"toolTipFontFamily":"Arial","id":"MainViewer","toolTipPaddingRight":6,"progressRight":0,"toolTipBorderColor":"#767676","paddingTop":0,"toolTipFontColor":"#606060","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarBorderRadius":0,"borderSize":0,"paddingLeft":0,"progressOpacity":1,"playbackBarHeadHeight":15,"subtitlesPaddingTop":5,"width":"100%","playbackBarLeft":0,"paddingBottom":0,"progressBarBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","progressBarBackgroundColorRatios":[0],"progressLeft":0,"subtitlesShadow":false,"transitionMode":"blending","class":"ViewerArea","toolTipTextShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"toolTipFontWeight":"normal","toolTipShadowColor":"#333333","playbackBarHeadBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","progressBackgroundColorDirection":"vertical","playbackBarProgressOpacity":1,"subtitlesGap":0,"shadow":false,"playbackBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBackgroundColor":"#000000","playbackBarHeadShadow":true,"height":"100%","subtitlesOpacity":1,"subtitlesFontFamily":"Arial","playbackBarHeadOpacity":1,"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","playbackBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"subtitlesHorizontalAlign":"center","playbackBarBottom":5,"paddingRight":0,"toolTipPaddingLeft":6,"progressBackgroundOpacity":1,"subtitlesVerticalAlign":"bottom","progressBarOpacity":1,"subtitlesTextShadowOpacity":1,"subtitlesTop":0,"subtitlesBorderSize":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColorDirection":"vertical","toolTipFontStyle":"normal","progressBottom":0,"vrPointerColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontColor":"#FFFFFF","toolTipShadowSpread":0,"playbackBarHeight":10,"firstTransitionDuration":0,"vrPointerSelectionTime":2000,"progressHeight":10,"playbackBarHeadWidth":6,"progressBorderSize":0,"transitionDuration":500,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipOpacity":1,"subtitlesTextShadowColor":"#000000","progressBarBorderRadius":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","progressBarBorderSize":0,"toolTipShadowVerticalLength":0,"minHeight":50,"toolTipTextShadowOpacity":0,"playbackBarProgressBorderSize":0,"subtitlesPaddingBottom":5,"minWidth":100,"playbackBarHeadShadowVerticalLength":0,"subtitlesFontSize":"3vmin","playbackBarBackgroundOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","playbackBarProgressBorderRadius":0,"playbackBarRight":0,"doubleClickAction":"toggle_fullscreen","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingBottom":4,"playbackBarHeadShadowOpacity":0.7,"toolTipBorderRadius":3,"subtitlesTextShadowVerticalLength":1,"toolTipShadowOpacity":1,"toolTipBorderSize":1,"toolTipHorizontalAlign":"center","subtitlesBottom":50,"propagateClick":false,"toolTipDisplayTime":600,"subtitlesBorderColor":"#FFFFFF","subtitlesPaddingRight":5,"toolTipTextShadowColor":"#000000","toolTipPaddingTop":4,"progressBorderRadius":0,"displayTooltipInTouchScreens":true,"subtitlesTextDecoration":"none","playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowBlurRadius":0,"progressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"}},{"initialPosition":{"yaw":0,"hfov":53,"pitch":4.19,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"initialSequence":"this.sequence_93BC6AB9_8100_7141_41D8_1D6D06D66E84","id":"panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_camera","class":"PanoramaCamera"},{"borderRadius":0,"id":"veilPopupPanorama","left":0,"paddingTop":0,"right":0,"borderSize":0,"paddingLeft":0,"backgroundColorRatios":[0],"paddingBottom":0,"class":"UIComponent","minHeight":0,"bottom":0,"top":0,"shadow":false,"backgroundColor":["#000000"],"showEffect":{"duration":350,"easing":"cubic_in_out","class":"FadeInEffect"},"minWidth":0,"toolTipHorizontalAlign":"center","propagateClick":false,"backgroundOpacity":0.55,"data":{"name":"UIComponent10089"},"visible":false,"paddingRight":0,"backgroundColorDirection":"vertical"},{"borderRadius":0,"id":"zoomImagePopupPanorama","left":0,"paddingTop":0,"right":0,"borderSize":0,"paddingLeft":0,"backgroundColorRatios":[],"paddingBottom":0,"class":"ZoomImage","minHeight":0,"bottom":0,"top":0,"shadow":false,"backgroundColor":[],"minWidth":0,"toolTipHorizontalAlign":"center","propagateClick":false,"backgroundOpacity":1,"scaleMode":"custom","data":{"name":"ZoomImage10090"},"visible":false,"paddingRight":0,"backgroundColorDirection":"vertical"},{"textDecoration":"none","iconWidth":"100%","borderRadius":0,"id":"closeButtonPopupPanorama","paddingTop":5,"fontFamily":"Arial","right":10,"borderSize":0,"paddingLeft":5,"backgroundColorRatios":[0,0.1,1],"paddingBottom":5,"shadowColor":"#000000","iconColor":"#000000","iconHeight":"100%","iconLineWidth":5,"pressedIconColor":"#888888","borderColor":"#000000","class":"CloseButton","rollOverIconColor":"#666666","minHeight":0,"verticalAlign":"middle","minWidth":0,"top":10,"shadow":false,"mode":"push","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"fontSize":"1.29vmin","showEffect":{"duration":350,"easing":"cubic_in_out","class":"FadeInEffect"},"shadowSpread":1,"layout":"horizontal","fontStyle":"normal","toolTipHorizontalAlign":"center","horizontalAlign":"center","propagateClick":false,"fontColor":"#FFFFFF","backgroundOpacity":0.3,"gap":5,"shadowBlurRadius":6,"data":{"name":"CloseButton10091"},"visible":false,"paddingRight":5,"cursor":"hand","backgroundColorDirection":"vertical","fontWeight":"normal"},{"areas":["this.HotspotPanoramaOverlayArea_974DBDC7_8100_12C2_41C5_56A853FA77DE"],"maps":[],"useHandCursor":true,"rollOverDisplay":false,"items":[{"image":"this.AnimatedImageResource_9C864363_8100_351A_41DB_FC837154C4A8","pitch":14.43,"yaw":37.66,"vfov":3.29,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Info Red 06"},"class":"HotspotPanoramaOverlayImage","distance":100,"verticalAlign":"middle","hfov":2.82}],"id":"overlay_94F14D43_8100_13C2_41C1_046654E12970","enabledInCardboard":true,"data":{"label":"Info Red 06"},"class":"HotspotPanoramaOverlay"},{"areas":["this.HotspotPanoramaOverlayArea_9463F72B_8100_3F41_41DC_273FF97B7C23"],"maps":[],"useHandCursor":true,"rollOverDisplay":true,"items":[{"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlayImage","roll":0,"distance":50,"image":{"levels":[{"url":"media/panorama_92D82562_8100_73C3_41CC_F92BF599C1BE_HS_9yz1fxlf.png","width":53,"height":307,"class":"ImageResourceLevel"}],"class":"ImageResource"},"pitch":12.5,"yaw":36.37,"hfov":2.09}],"id":"overlay_94100702_8100_3F43_41D5_55566DC44074","enabledInCardboard":true,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlay"},{"id":"overlay_961AAE8D_8100_715E_41DC_30961EB3D49A","bleachingDistance":0.72,"pitch":17,"yaw":1.5,"bleaching":0.7,"class":"LensFlarePanoramaOverlay"},{"id":"sequence_93BC6AB9_8100_7141_41D8_1D6D06D66E84","class":"PanoramaCameraSequence","movements":[{"targetYaw":2.93,"path":"shortest","yawSpeed":2.04,"easing":"cubic_in","class":"TargetPanoramaCameraMovement"},{"targetYaw":45.58,"path":"shortest","yawSpeed":2.04,"easing":"linear","class":"TargetPanoramaCameraMovement"},{"targetYaw":48.5,"path":"shortest","yawSpeed":2.04,"easing":"cubic_out","class":"TargetPanoramaCameraMovement"}],"restartMovementOnUserInteraction":false},{"click":"this.showPopupPanoramaOverlay(this.popup_95D9871A_8101_FF42_4187_D1572401A139, {'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'borderRadius':0,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedBorderColor':'#000000','iconColor':'#000000','pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconColor':'#666666','rollOverBorderSize':0,'pressedIconColor':'#888888','borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverBorderColor':'#000000','iconLineWidth':5,'paddingRight':5,'paddingBottom':5,'backgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'pressedIconLineWidth':5}, this.res_9751B166_8100_13C2_41A8_8A31B75D1960, null, null, null, false)","id":"HotspotPanoramaOverlayArea_974DBDC7_8100_12C2_41C5_56A853FA77DE","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"url":"media/res_97517165_8100_13C6_41D1_2DFCEAA3F0F6_0.png","width":400,"height":600,"class":"ImageResourceLevel"}],"frameDuration":41,"rowCount":6,"colCount":4,"frameCount":24,"id":"AnimatedImageResource_9C864363_8100_351A_41DB_FC837154C4A8","class":"AnimatedImageResource"},{"id":"HotspotPanoramaOverlayArea_9463F72B_8100_3F41_41DC_273FF97B7C23","mapColor":"image","class":"HotspotPanoramaOverlayArea"}],"minWidth":20,"contentOpaque":false,"scrollBarOpacity":0.5,"shadow":false,"gap":10,"height":"100%","layout":"absolute","mobileMipmappingEnabled":false,"downloadEnabled":false,"scrollBarVisible":"rollOver","children":["this.MainViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"scripts":{"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"unregisterKey":TDV.Tour.Script.unregisterKey,"shareSocial":TDV.Tour.Script.shareSocial,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"registerKey":TDV.Tour.Script.registerKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getOverlays":TDV.Tour.Script.getOverlays,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"mixObject":TDV.Tour.Script.mixObject,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPixels":TDV.Tour.Script.getPixels,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizFinish":TDV.Tour.Script.quizFinish,"setLocale":TDV.Tour.Script.setLocale,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setValue":TDV.Tour.Script.setValue,"init":TDV.Tour.Script.init,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"historyGoForward":TDV.Tour.Script.historyGoForward,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"initGA":TDV.Tour.Script.initGA,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showWindow":TDV.Tour.Script.showWindow,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"initQuiz":TDV.Tour.Script.initQuiz,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"quizStart":TDV.Tour.Script.quizStart,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"translate":TDV.Tour.Script.translate,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMapLocation":TDV.Tour.Script.setMapLocation,"resumePlayers":TDV.Tour.Script.resumePlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"cloneCamera":TDV.Tour.Script.cloneCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"getKey":TDV.Tour.Script.getKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"openLink":TDV.Tour.Script.openLink,"existsKey":TDV.Tour.Script.existsKey},"defaultVRPointer":"laser","toolTipHorizontalAlign":"center","backgroundPreloadEnabled":true,"propagateClick":false,"mouseWheelEnabled":true,"overflow":"hidden","horizontalAlign":"left","data":{"name":"Player2427","locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"vrPolyfillScale":0.75,"scrollBarMargin":2,"paddingRight":0,"scrollBarColor":"#000000"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.3.7.js.map
//Generated with v2020.3.7, Fri Jul 24 2020