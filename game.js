$(function() {
        const container = document.getElementById('game-window');
        const elements = document.querySelectorAll(".atom");
        let activeElement = null;
        let molecules = [];
        var posx;
        var posy;
        function posx(){

        }
        function posy(){
            
        }

        elements.forEach(element => {
            element.addEventListener('click', () => {
                const clone = element.cloneNode(true);
                clone.classList.add('draggable');
                clone.style.position = 'absolute';
                clone.style.top = '5vh';
                clone.style.left = '5vw';
                container.appendChild(clone);
                initDrag(clone);
            });
        });

        function initDrag(elementToInit){
            elementToInit.addEventListener('mousedown', onMouseDown)
        }

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
            const elements = container.querySelectorAll('.draggable');
            elements.forEach(element => {
                if (element === activeElement) return;
                const rect1 = activeElement.getBoundingClientRect();
                const rect2 = element.getBoundingClientRect();
                if (!(rect1.right < rect2.left ||
                      rect1.left > rect2.right ||
                      rect1.bottom < rect2.top ||
                      rect1.top > rect2.bottom)) {
                    combineElements(activeElement, element);
                }
            });
        }

        function combineElements(el1, el2) {
            const combinations = {
                'ClNa': 'NaCl',
                'NaCl': 'NaCl',
                'KBr': 'KBr',
                'BrK': 'KBr'
            };
            const key = el1.textContent + el2.textContent;
            const combination = combinations[key];
            if (combination) {
                const molecule = document.createElement('div');
                molecule.classList.add('draggable');
                molecule.textContent = combination;
                molecule.style.position = 'absolute';
                molecule.style.left = `${(parseInt(el1.style.left) + parseInt(el2.style.left)) / 2}px`;
                molecule.style.top = `${(parseInt(el1.style.top) + parseInt(el2.style.top)) / 2}px`;
                molecule.style.backgroundColor = 'orange';
                container.appendChild(molecule);
                container.removeChild(el1);
                container.removeChild(el2);
                enableDrag(molecule);
                molecules.push(molecule);
            }
        }
    });