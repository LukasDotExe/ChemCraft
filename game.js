$(function() {
        function addImage(u, c, t) {
            /***
            Input: URL, Class, Target Object
            Output: jQuery Object of IMG element
            ***/
            if (u == undefined) {
                u = "https://bricksplayground.webs.com/brick.PNG";
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
                height: "100px"
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
            makeDrag(addImage("https://png.pngtree.com/png_detail/20181008/red-brick-wall-png-clipart_1564742.png", "foo"));
        });
    });