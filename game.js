$(function() {
        function addImage(u, c, t, x, y) {
            /***
            Input: URL, Class, Target Object
            Output: jQuery Object of IMG element
            ***/
            if (u == undefined) {
                u = "Chemcraft.png";
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
                y = "37px"
            }
            var img = $("<img>", {
                src: u,
                class: c,
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
    
        $("#btn-c").click(function() {
            makeDrag(addImage("Chemcraft.png", "c atom", "#game-window", "100px", "37px"));
        });

        $("#btn-h").click(function() {
            makeDrag(addImage("Chemcraft.png", "h atom", "#game-window", "100px", "37px"));
        });

        $("#btn-o").click(function() {
            makeDrag(addImage("Chemcraft.png", "o atom", "#game-window", "100px", "37px"));
        });

        $("#btn-br").click(function() {
            makeDrag(addImage("Chemcraft.png", "br atom", "#game-window", "100px", "37px"));
        });

        $("#btn-f").click(function() {
            makeDrag(addImage("Chemcraft.png", "f atom", "#game-window", "100px", "37px"));
        });

    });