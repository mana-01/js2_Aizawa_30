$('#cover').click(function() {
    $('#cover').fadeOut(500);
    $('#main').fadeIn(30);
})
    


$(function(){
    // 質問と回答が並列され＝const list
    // function renderでどう質問・回答を表示させるかを記載
    // 

    let count = 0;
    let point = 0;
    const list = [
        {
            'title':'あなたの首の長さは？',
            'answer':[
                '短め、もしくは長いと感じたことはなく筋などは目立たない',
                '長め、もしくは短いと感じたことはなく薄っすら筋が見える',
                '短め、もしくは長いと感じたことはなく筋などが目立つ'
            ]
        },
        {
            'title':'鎖骨の印象で一番近いのは？',
            'answer':[
                '鎖骨がうっすら出ているがそこまで目立たず、むくんだり体重が増えると見えなくなる。',
                '鎖骨は出ているが骨は細めで少し体重が増えてもなくならない。',
                '鎖骨ははっきり出ていて骨が太く感じる。体重が増えても印象は変わらない。'
            ]
        },
        {
            'title':'肩の印象で一番近いのは？',
            'answer':[
                '肩はあまり骨感を感じず、少し丸みを感じる',
                '肩周りの骨感は感じられるが太くはない。',
                '肩周りはがっちりした印象で骨感があり、四角いような印象。'
            ]
        },
        {
            'title':'胸の印象で一番近いのは？',
            'answer':[
                '横から見た時、胸が厚い。もしくは鳩胸といわれたことがある。',
                '胸は薄く、鎖骨から胸までの距離が長くそげているような印象。',
                '胸周りに肉感は感じされないが薄くはなく骨の印象が強い。鎖骨から胸までの距離が長い。'
            ]
        },
        {
            'title':'肋骨から腰（ウエストライン）の印象で一番近いのは？',
            'answer':[
                '腰と肋骨の位置が近い。',
                'ウエストラインがなだらかなラインを描くような印象。',
                '腰とウエストの位置はA・Bの中間で四角い印象。腰骨が目立つ。'
            ]
        },
        {
            'title':'自分の手を表現するのに一番近いのはどれ？',
            'answer':[
                '手のサイズは小さいもしくは身長相応。手首に骨感をほとんど感じず厚い。手を回すと丸い印象',
                '手のサイズは身長相応で手の甲の筋などは感じにくい。手首に手を回すと楕円形。',
                '手のサイズは身長に対して大きいもしくは身長相応。手首や手の甲、指の骨感が強く、手首は四角い印象。'
            ]
        },
        {
            'title':'自分の足を表現するのに一番近いのはどれ？',
            'answer':[
                '足のサイズは小さいもしくは身長相応。足首に骨感をほとんど感じない。膝下から足がまっすぐ',
                '足のサイズは身長相応で薄い。くるぶしなどに骨などは出ているがうっすら感じる程度。',
                '足のサイズは身長に対して大きいもしくは身長相応。足首は骨が大きく出ていて、足の甲の骨もはっきり見える。'
            ]
        }
    ];

    function render(count){
        $('li').remove();
        $('h1').text(list[count]['title']);
        // list[count]['img'].forEach(function(img){
        // const p = `<p>${img}</p>`;
        // $('p').append(p)
        // });

            // function()の（）は（）の中の役割・機能を決めるよという意味。
            // ここではtextの役割を決めるよといっていて、constでliの中の｛｝がtextであるとしてる。
    

        list[count]['answer'].forEach(function(text){
        // function()の（）は（）の中の役割・機能を決めるよという意味。
        // ここではtextの役割を決めるよといっていて、constでliの中の｛｝がtextであるとしてる。

        const li = `<li>${text}</li>`;
        $('ul').append(li)
        });
    }
    
//     var img = new Array();

//     img[0] = new Image();
//     img[0].src = "img/kokkaku 0.png";
//     img[1] = new Image();
//     img[1].src = "img/kokkaku 1.png";
//     img[2] = new Image();
//     img[2].src=  "img/kokkaku 2.png";
//     img[3] = new Image();
//     img[3].src=  "img/kokkaku 3.png";
//     img[4] = new Image();
//     img[4].src=  "img/kokkaku 4.png";
//     img[5] = new Image();
//     img[5].src=  "img/kokkaku 5.png";
//     img[6] = new Image();
//     img[6].src=  "img/kokkaku 6.png";

//     function changeIMG(){
//     document.getElementById("img").src=img[count].src;
// };

    render(0);

    function pointGet (li_index) {
        switch (li_index){
              case 0:
              return 1;
              break;
              case 1:
              return -1;
              break;
              case 2:
              return 0;
              break;
          }
    };

    


    $('body').on('click', 'li', function(){
         const li_index = $('li').index(this);
         point += pointGet(li_index);
         console.log(point);

        //  kokkaku_pointという変数がSwitch構文で返される数値になっている。
        // kokkaku_pointという変数が出てくるたびに足し算をしていく関数を入れたい。
        if( count < list.length-1){
            count++;
            render(count);
        }else{
            console.log('last');
            $('ul,h1').hide();
            $('.result').fadeIn();
            $('.btn').fadeIn();
        };

        const x ="骨格ポイント";
        localStorage.setItem(x,point);
        localStorage.getItem(point);
        // ローカルストレージに保存して加算された数値をpointで返す。


        var elem = document.getElementById("result");
        
        if (point<0){
            elem.innerHTML="ウェーブ";
            }else if(point<3){
            elem.innerHTML="ナチュラル";
            console.log('natural')
            }else if(point>=3){
            elem.innerHTML="ストレート";}  
            
        $("#btn").on("click",function(){
            localStorage.clear();
            document.location.reload();}
        );

    });




    

});