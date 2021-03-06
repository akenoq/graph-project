"use strict";

import log from "./log";
import addOtr from "./addOtr";
import saveOtrMap from "./saveOtrMap";
import loadOtrMap from "./loadOtrMap";
import getWaysBetweenVertexesFull from "./getWaysBetweenVertexesFull";
import canvasMouseDownFunc from "./canvasMouseDownFunc";
import canvasMouseUpFunc from "./canvasMouseUpFunc";
import setStartFinishFunc from "./setStartFinishFunc";
import getWayQuery from "./getWayQuery";

export default function eventsControl(dictionary, canvasManager, otrArr) {
    log("Call eventsControl");

    dictionary["addOtrBtn"].onclick = () => {
        addOtr(dictionary, otrArr, canvasManager);
    };

    dictionary["saveOtrMap"].onclick = () => {
        saveOtrMap(otrArr);
    };

    dictionary["loadOtrMap"].onclick = () => {
        loadOtrMap(otrArr, canvasManager);
    };

    dictionary["getWaysBetweenVertexes"].onclick = () => {
        getWaysBetweenVertexesFull(otrArr, canvasManager, dictionary);
    };

    const mousePosObj = {
        x: 0,
        y: 0,
    };

    dictionary["can"].onmousedown = function(event) {
        canvasMouseDownFunc(event, mousePosObj);
    }

    dictionary["can"].onmouseup = function(event) {
        canvasMouseUpFunc(event, mousePosObj, dictionary);
    }

    const wwwObject = {
        waysArr: null,
        pointA: null,
        pointB: null,
    };

    dictionary["setStartAndFinishBtn"].onclick = function() {
        setStartFinishFunc(dictionary, canvasManager, otrArr, wwwObject);
    }

    dictionary["getWayQueryBtn"].onclick = function() {
        getWayQuery(wwwObject, dictionary, canvasManager, otrArr);
    }
}
