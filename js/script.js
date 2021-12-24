
function alert2() {
    alert('kk')
}

function append_content() {
    var temp_html = `<div class="content">
            <div class="content-header">
                <img class="content user" src="insta-logo/ccsc.PNG">
                <p class="user_name">오일남</p>
                <div class="d3info">
                    <img class="more" src="insta-logo/more@3x.png">
                </div>
            </div>
            <img class="content-image" src="insta-logo/ccsc.PNG" alt="이러다 다 죽어">
            <div class="menu">
                <div class="dd3m">
                    <img class="d3m-heart inline" src="insta-logo/like@3x.png">
                    <img class="d3m-comment inline" src="insta-logo/comment@3x.png">
                    <img class="d3m-dm inline" src="insta-logo/dm@3x.png">
                </div>
                <div class="d1m">
                    <img class="d1m-favo" src="insta-logo/favorite@3x.png">
                </div>
            </div>
            <div class="wholikes">
                <img class="user" src="insta-logo/ccsc.PNG">
                <p class="who-text">오일남 외 100명이 좋아합니다.</p>
            </div>
            <table class="comment">
                <tr>
                    <td>오일남</td>
                    <td>다 죽어~</td>
                </tr>
            </table>
        </div>`
    $('#contents-wrapper').append(temp_html)
}

function append_story() {
    var temp_html = `<div class="story">
            <img class="story_icon" src="insta-logo/ccsc.PNG" alt="이러다 다 죽어">
            <p class="story_text">다 죽어</p>
        </div>`
    $('#story_bar').append(temp_html)
}