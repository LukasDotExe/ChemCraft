$(function() {
        function addObj(u, i, c, t, x, y) {
            /***
            Input: URL, Class, Target Object
            Output: jQuery Object of IMG element
            ***/
            var div = $("<div>", {
                id: i,
                class : "draggable " + c
            }).css({
                width: x,
                height: y
            });
            div.appendTo(t);
            initEventListener(div);
            return div;
        }

        var id1 = 0;

        function genID() {
            id1++;
            return id1
        }

        function initEventListener(elementToInit){
            elementToInit.addEventListener('mousedown', onMouseDown)
        }

        $("#btn-li").click(function() {
            addObj("img/elements/Li.png", "obj" + genID(), "li atom", "#game-window", "100px", "125px");
        });

        $("#btn-na").click(function() {
            addObj("img/elements/Na.png", "obj" + genID(), "na atom", "#game-window", "100px", "125px");
        });

        $("#btn-k").click(function() {
            addObj("img/elements/K.png", "obj" + genID(), "k atom", "#game-window", "100px", "125px");
        });

        $("#btn-cl").click(function() {
            addObj("img/elements/Cl.png", "obj" + genID(), "cl atom", "#game-window", "100px", "125px");
        });

        $("#btn-f").click(function() {
            addObj("img/elements/F.png", "obj" + genID(), "f atom", "#game-window", "100px", "125px");
        });

        $("#btn-br").click(function() {
            addObj("img/elements/Br.png", "obj" + genID(), "br atom", "#game-window", "100px", "125px");
        });

        $("#btn-i").click(function() {
            addObj("img/elements/I.png", "obj" + genID(), "i atom", "#game-window", "100px", "125px");
        });

        const container = document.getElementById('game-window');
        const obj1 = document.getElementById('obj1');
        const obj2 = document.getElementById('obj2');
        let activeElement = null;

        obj1.addEventListener('mousedown', onMouseDown);
        obj2.addEventListener('mousedown', onMouseDown);

        function onMouseDown(e) {
            activeElement = e.target;
            container.addEventListener('mousemove', onMouseMove);
            container.addEventListener('mouseup', onMouseUp);
        }

        function onMouseMove(e) {
            if (!activeElement) return;
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left - (activeElement.offsetWidth / 2);
            const y = e.clientY - rect.top - (activeElement.offsetHeight / 2);
            activeElement.style.left = `${x}px`;
            activeElement.style.top = `${y}px`;
        }

        function onMouseUp(e) {
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseup', onMouseUp);
            checkCollision();
            activeElement = null;
        }

        function checkCollision() {
            const rect1 = obj1.getBoundingClientRect();
            const rect2 = obj2.getBoundingClientRect();

            if (!(rect1.right < rect2.left ||
                  rect1.left > rect2.right ||
                  rect1.bottom < rect2.top ||
                  rect1.top > rect2.bottom)) {
                combineObjects();
            }
        }

        function combineObjects() {
            // Hier kannst du definieren, wie die Objekte kombiniert werden sollen
            obj1.style.backgroundColor = 'purple'; // Beispiel: Farbe ändern
            obj2.style.display = 'none'; // Beispiel: Zweites Objekt verstecken
        }
    });