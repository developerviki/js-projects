const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function mouseFollower() {
    window.addEventListener('mousemove', function (det) {
        console.log(det)
        // document.getElementById("mainCircle").style.transform = `translateX(${det.clientX}px) , translateY(${det.clientY}px)`;
    })
}
mouseFollower()