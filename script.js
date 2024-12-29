window.addEventListener("scroll", function (event) {

    let scroll_y = this.scrollY;
    //console.log(scroll_y);
    position = scroll_y;
    if (scroll_y > 100) {
        this.document.getElementById("topNav").style.backgroundColor = '#141414';
        this.document.getElementById("nav1").style.color = '#FFFFFF';
        this.document.getElementById("nav2").style.color = '#FFFFFF';
        this.document.getElementById("nav3").style.color = '#FFFFFF';
        this.document.getElementById("nav4").style.color = '#FFFFFF';
        this.document.getElementById("nav5").style.color = '#FFFFFF';
    }
    else {
        this.document.getElementById("topNav").style.backgroundColor = '#00000000';
        this.document.getElementById("nav1").style.color = '#000000';
        this.document.getElementById("nav2").style.color = '#000000';
        this.document.getElementById("nav3").style.color = '#000000';
        this.document.getElementById("nav4").style.color = '#000000';
        this.document.getElementById("nav5").style.color = '#000000';
    }
});