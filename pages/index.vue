<template>
  <div class="main ">
    <Heading />
    <div class="body__container">
      <div class="body__main">
        <!-- <Nuxt :nuxt-child-key="chamcong" /> -->
        <div class="position-relative">

          <div id="screen" ref="screen">
            <div class="screen__head">
              <div>
                <p>Chấm công</p>
              </div>
            </div>
            <div class="screen__main">
              <iframe src="http://chamcong.co/" frameborder="0"></iframe>
              <!-- <embed src="http://localhost:3002/" /> -->
            </div>
          </div>
        </div>
        <NuxtChild></NuxtChild>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script src="https://code.jquery.com/jquery-3.6.1.js">
  $('#btn-chamcong').click(function () {
    console.log('chamcong')
    // $.ajax({
    //     url: "getinfo.asp",
    //     data: {
    //         txtsearch: $('#appendedInputButton').val()
    //     },
    //     type: "GET",
    //     dataType: "html",
    //     success: function (data) {
    //         var result = $('<div />').append(data).find('#showresults').html();
    //         $('#showresults').html(result);
    //     },
    //     error: function (xhr, status) {
    //         alert("Sorry, there was a problem!");
    //     },
    //     complete: function (xhr, status) {
    //         //$('#showresults').slideDown('slow')
    //     }
    // });
});
</script>
<script>
export default {
    name: "IndexPage",
    methods: {
      moveDiv () {
        const div = this.$refs.screen
        div.style.position = "absolute";
        div.style.left = "0px";
        div.style.top = "0px";
        div.style.width = "100%";
        div.style.height = "60vh";
        div.style.color = "blue";
        console.log(div)
        var mousePosition;
        var offset = [0,0];
        var isDown = false;
        div.addEventListener('mousedown', function(e) {
            isDown = true;
            offset = [
                div.offsetLeft - e.clientX,
                div.offsetTop - e.clientY
            ];
        }, true);

        document.addEventListener('mouseup', function() {
            isDown = false;
        }, true);

        document.addEventListener('mousemove', function(event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {
                    x : event.clientX,
                    y : event.clientY

                };
                div.style.left = (mousePosition.x + offset[0]) + 'px';
                div.style.top  = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);
      },
    },
    mounted () {
      this.moveDiv()
    }
}
</script>

<style>
  body {
    font-family: 'Inter';
    width: 100%;
    background-image: url('@/assets/img/Image.png');
    overflow: hidden;
    height: 100vh;
  }
  .body__container {
    position: absolute;
    padding: 0px 20%;
    top: 150px ;
    height: 65vh;
    width: 100%;
  }
  .body__main {
    height: 60vh;
    /* background: rgba(255, 255, 255, 0.3); */
  }
  .screen__head {
    height: 40px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid rgba(113, 111, 111, 0.6);
  }

  iframe {
    width: 100%;
    height: 60vh;
    box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
  }
</style>