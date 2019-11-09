AFRAME.registerComponent('my-event', {

    init: function () {
        let fish = document.querySelector('#fish');
        fish.setAttribute('position', '-.5 2 -4');
        fish.setAttribute('rotation', '0 -90 0');
        fish.setAttribute('scale', '.013 .013 .013');
        fish.setAttribute('material', 'src: ../models/fish.jpg');
    }

});
