/**
 * Created by Tadashi on 21/11/2015.
 */
var scrollBar = function (ele, direction) {
    ele = document.getElementById(ele);
    var obj = {};

    function constructor() {
        ele.className = direction;
        createSB();
    }

    function createSB() {
        obj.domNode = document.createElement("span");
        obj.domNode.className = "sbCtntCtnr";
        ele.insertBefore(obj.domNode, ele.childNodes[0]);

        obj.middleCtnr = document.createElement("div");
        obj.domNode.appendChild(obj.middleCtnr);
        obj.middleBtnCtnr = document.createElement("span");
        obj.middleBtnCtnr.className = "middle";
        obj.middleCtnr.appendChild(obj.middleBtnCtnr);
        obj.scrollBtn = document.createElement("span");
        obj.scrollBtn.className = "scrollBtn";
        obj.middleBtnCtnr.appendChild(obj.scrollBtn);
        obj.scrollBtn.style.left = 0;
        obj.scrollBtn.style.top = 0;
        obj.scrollBtn.onmousedown = handleDrag;

        handleDrag();

        function handleDrag() {
            var args = arguments;
            console.log(args);

            if (args.length) {
                obj.xScroll = parseInt(obj.scrollBtn.style.left);
                obj.yScroll = parseInt(obj.scrollBtn.style.top);
                switch (args[0].target.className) {
                    case "scrollBtn":
                        startDrag(args[0]);
                        break;
                }
            } else {
                var info = getScrollArea();
                obj.scrollBtn.style.height = info.H / obj.scrollBtn.parentNode.offsetHeight + "px";
                obj.scrollBtn.style.width = info.W / obj.scrollBtn.parentNode.offsetWidth + "px";

            }
        }

    }

    function startDrag() {
        obj.xStart = arguments[0].clientX;
        obj.yStart = arguments[0].clientY;
        document.addEventListener("mousemove", doDrag, false);
        document.addEventListener("mouseup", endDrag, false);
    }

    function doDrag(event) {
        event.preventDefault();
        obj.xCurr = event.clientX;
        obj.yCurr = event.clientY;
        //updatePosition();
        handleMove();
        return false;
    }

    function endDrag(event) {
        event.preventDefault()
        document.removeEventListener("mousemove", doDrag);
        document.removeEventListener("mouseup", endDrag);
        console.log(event);
        return false;
    }

    function handleMove(amount) {
        var differences = amount ? {
            x: obj.xScroll + (amount.x || 0),
            y: obj.yScroll + (amount.y || 0)
        } : {
            x: obj.xCurr - obj.xStart + obj.xScroll,
            y: obj.yCurr - obj.yStart + obj.yScroll
        };

        switch (direction) {
            case "vertical":
                if (differences.y < 0) {
                    differences.y = 0;
                } else if (differences.y > (obj.middleCtnr.offsetHeight - obj.scrollBtn.offsetHeight)) {
                    differences.y = (obj.middleCtnr.offsetHeight - obj.scrollBtn.offsetHeight);
                }
                obj.scrollBtn.style.top = parseInt(differences.y) + "px";
                break;
        }
        scroll();
    }

    function scroll() {
        switch (direction) {
            case "vertical":
                ele.childNodes[1].style.marginTop = (-parseInt(obj.scrollBtn.style.top) / ele.offsetHeight) * 100 + "%";
                break;
        }
    }

    function getScrollArea() {
        var tempObj = {
            W: 0,
            H: 0
        };
        for (var node in ele.childNodes) {
            if (ele.childNodes[node].offsetHeight) {
                tempObj.H += ele.childNodes[node].offsetHeight;
                tempObj.W = obj.W > ele.childNodes[node].offsetWidth ? tempObj.W : ele.childNodes[node].offsetWidth;
            }
        }
        return tempObj;
    }

    function updatePosition() {
        document.getElementById("xstart").innerHTML = obj.xStart;
        document.getElementById("ystart").innerHTML = obj.yStart;
        document.getElementById("xcurr").innerHTML = obj.xCurr;
        document.getElementById("ycurr").innerHTML = obj.yCurr;
        document.getElementById("top").innerHTML = obj.scrollBtn.style.top;
        document.getElementById("left").innerHTML = obj.scrollBtn.style.left;
    }

    constructor();
    return obj;
}