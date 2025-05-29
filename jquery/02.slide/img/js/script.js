$(function(){
    let current=0;
    let slides=$('.slide>li');

    /* setInterval 몇 초마다 한 번씩 바뀔거야 */

    setInterval(function(){
        let prev=slides.eq(current);
        move(prev, 0, '-100%');

    /* setInterval(function(){
        let prev=slides.eq(current);
        move(prev, '-100%', 0); */    

        //++은 1씩 증가    
        current++;

        // == 은 같다
        if(current==slides.length) current=0;
        //
        //1씩 증가되면 보이는 갯수보다 많아지면 의미가 없음

        //current는 현재 슬라이드의 인덱스를 나타내는 변수입니다.
/* slides.length는 슬라이드를 구성하는 전체 슬라이드의 개수입니다. length는 배열이나 리스트에서 아이템의 수를 반환하는 속성입니다.

if(current == slides.length)는 current가 슬라이드의 총 개수와 같다면, 즉 마지막 슬라이드에 도달했을 때를 의미합니다.

current = 0;는 마지막 슬라이드를 넘어서면 첫 번째 슬라이드로 돌아가게 한다는 뜻입니다.

즉, 이 코드는 현재 슬라이드가 마지막 슬라이드일 때, current를 0으로 설정하여 첫 번째 슬라이드로 돌아가게 만듭니다. 이 로직은 주로 슬라이드 쇼를 반복할 때 사용됩니다. */
      
    let next=slides.eq(current);
        move(next, '100%', 0)
    },1000);



        /* let next=slides.eq(current);
        move(next, 0, '100%')
    },1000);
 */
    //tg 는 target

    /* function move(tg, start, end){
        tg.css('top', start).stop().animate({top: end},500)
    } */

    //만들어 놓은 함수는 불러줘야 실행이 됨

    function move(tg, start, end){
        tg.css('right', start).stop().animate({right: end},500)
    }
});