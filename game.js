$(function() {
        function addImage(u, c, t) {
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
            var img = $("<img>", {
                src: u,
                class: c,
            }).css({
                width: "50px",
                height: "50px"
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
                containment: "parent"
            });
        }
    
        $("#button-c").click(function() {
            makeDrag(addImage());
        });
    });