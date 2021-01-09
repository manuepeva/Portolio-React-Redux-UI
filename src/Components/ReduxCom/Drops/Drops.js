import React from 'react'

const Drops = () => {
    var wave = document.querySelector('.wave');

    var bottom = -170;
    // function moving(){
    //     let ct = document.getElementsByClassName("bottom");
    //     ct.addEventListener("click", move());
    // }

    const move = () => {
        var id = setInterval(frame, 2000);

        function frame() {
            if (bottom >= -120) {
                wave.style.bottom = bottom + "%";
                bottom = bottom - 25;
            } else {
                wave.style.bottom = bottom + "%";
                bottom = bottom - -15;
            }
        }
    }
    return (
        <div>
            <div className="gather">

                <div className="DropsContainer">
                    <div className="drops lightblue"></div>
                    <div className="drops lightblue"></div>
                    <div className="box">
                        <div className="wave lightblue"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drops
