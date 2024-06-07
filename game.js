$(function() {
        function addImage(u, i, c, t, x, y) {
            /***
            Input: URL, Class, Target Object
            Output: jQuery Object of IMG element
            ***/
            if (u == undefined) {
                u = "img/Chemcraft.png";
            }
            if (c == undefined) {
                c == "";
            }
            if (t == undefined) {
                t = $("#game-window");
            }
            if (x == undefined) {
                x = "100px"
            }
            if (y == undefined) {
                y = "125px"
            }
            var img = $("<img>", {
                src: u,
                class: c,
                id: i
            }).css({
                width: x,
                height: y
            });
            img.appendTo(t);
            return img;
        }

        function makeDrag(o) {
            /***
            Input: jQuery Object
            Output: null
            ***/
            o.draggable({
                containment: "parent",
                cursor: "grabbing"
            });
            o.droppable({
                drop: function() {
                    $(this).remove();
                }
            });
        }

        var id1 = 0;

        function genID() {
            id1++;
            return id1
        }

        $("#btn-li").click(function() {
            makeDrag(addImage("img/elements/Li.png", genID(), "li atom", "#game-window", "100px", "125px"));
        });

        $("#btn-na").click(function() {
            makeDrag(addImage("img/elements/Na.png", genID(), "na atom", "#game-window", "100px", "125px"));
        });

        $("#btn-k").click(function() {
            makeDrag(addImage("img/elements/K.png", genID(), "k atom", "#game-window", "100px", "125px"));
        });

        $("#btn-cl").click(function() {
            makeDrag(addImage("img/elements/Cl.png", genID(), "cl atom", "#game-window", "100px", "125px"));
        });

        $("#btn-f").click(function() {
            makeDrag(addImage("img/elements/F.png", genID(), "f atom", "#game-window", "100px", "125px"));
        });

        $("#btn-br").click(function() {
            makeDrag(addImage("img/elements/Br.png", genID(), "br atom", "#game-window", "100px", "125px"));
        });

        $("#btn-i").click(function() {
            makeDrag(addImage("img/elements/I.png", genID(), "i atom", "#game-window", "100px", "125px"));
        });
    });