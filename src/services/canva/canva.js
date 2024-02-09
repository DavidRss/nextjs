import { fabric } from "fabric";
import mockup1 from '../../assets/images/mockups/mockup1.png';
import mockup2 from '../../assets/images/mockups/mockup2.png';
import mockup3 from '../../assets/images/mockups/mockup3.png';
import mockup4 from '../../assets/images/mockups/mockup4.png';
import mockup5 from '../../assets/images/mockups/mockup5.png';
import mockup6 from '../../assets/images/mockups/mockup6.png';

export const initCanvas = (container) => (
    new fabric.Canvas('canvas', {
        height: container.offsetHeight / 100 * 80,
        width: container.offsetWidth / 100 * 80,
    })
)
export const getMockupUrl = (location) => {
    const muckupId = new URLSearchParams(location.search).get('mockup');
    switch (muckupId) {
        case '2':
            return mockup2;
        case '3':
            return mockup3;
        case '4':
            return mockup4;
        case '5':
            return mockup5;
        case '6':
            return mockup6;
        default:
            return mockup1;
    }
}
export const getMockupId = (location) => {
    return new URLSearchParams(location.search).get('id');
}
export const addImg = (e, file, canvi, fileInputRef, callback) => {
    e.preventDefault();
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
            const aspectRatio = img.width / img.height;
            const desiredWidth = 150;
            const desiredHeight = desiredWidth / aspectRatio;
            const fabricImg = new fabric.Image(img, {
                scaleX: desiredWidth / img.width,
                scaleY: desiredHeight / img.height,
                left: 100,
                top: 100,
                selectable: true,
                hasControls: true,
                hasBorders: true, 
                cornerColor: 'purple',
                cornerSize: 10, 
            });
            canvi.add(fabricImg);
            canvi.renderAll();
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

export const setCanvasBackground = (mockup, canvas) => {
    fabric.Image.fromURL(mockup, (img) => {
        img.scaleToWidth(canvas.width);
        img.scaleToHeight(canvas.height);
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
          scaleX: canvas.width / img.width,
          scaleY: canvas.height / img.height,
        });
    });
}