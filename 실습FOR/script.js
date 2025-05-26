

// var key = 185;
// // 키라는 변수 생성 값 185

// function update() {
//   var heightBox = document.getElementById('height');
//   var leg = document.getElementById('leg');
//   var face = document.getElementById('face');

//   heightBox.innerText = key + 'CM';
//   leg.style.height = key + 'px';
// 	// key + 'px' 문자열이 된다
// 	//style 바꾸고 
//   if (key <= 160) { // <= 작거나 같다 160
//     face.classList.add('cry'); 
//     face.innerText = ''; // innerText 내용을 읽거나 바꿀 때 
//   } else {
//     face.classList.remove('cry'); //cry 클라스 이름을 지움
//     face.innerText = ''; //리셋하는 역할?
//   }
// }

// update();
// // getElementById 하나의 속성 id arr-top가져옴 addEventListener 클릭하면 이벤트 실행
// document.getElementById('arr-top').addEventListener('click', function (e) {
//   e.preventDefault();
//   key += 5; //5증가
//   update();
// });

// document.getElementById('arr-bottom').addEventListener('click', function (e) {
//   e.preventDefault();
//   for (var i = 0; i < 1; i++) {
//     key -= 5;
//   }
//   update();
// });

var key = 185;

function update(){
	document.getElementById('height').innerHTML = key +'CM';
	document.getElementById('leg').style.height = key +'px';
}
if(key <= 160){
	document.getElementById('face').classList.add('cry')
}else{
	document.getElementById('face').classList.remove('cry')
}

document.getElementById('arr=top')
.addEventListener('click', function()
{
	key = key + 1;
	update()
})

document.getElementById('arr-bottom')
.addEventListener('click',function(){
	for(var i=0; i<2; i++){
		key = key -i ; // 185 - 2 183 - 3 180

	}
	update()
})

update();








/*
	

1. key 변수를 생성하고 num값 185를 넣으세요.

	2. update라는 이름의 함수를 만드세요.

	- update함수안에는 이러한 기능이 들어가야 합니다.

	#height의 text가 key의 값 + 'CM'으로 변경.
		
		Hint.
		innerText

	
	#leg의 height 값이 key 값으로 변경.

		Hint.
		style.height

	- update함수 실행하는 법 : update()



	3. if else문을 사용하여 update함수안에
	- 키가 160이하면 #face에 클래스 cry를 추가
	- 나머지는 #face에 클래스 cry를 제거

	if ( 조건문 ) {
	실행문1
	} else {
	실행문2
	}
		Hint.
		document.getElementById("아이디명").classList.add("cry")
		document.getElementById("아이디명").classList.remove("cry")



	3. #arr-top를 클릭하면 key가 1만큼 증가하는 함수를 만드세요.
		- for문 사용하지 않고 만들기

	4. #arr-bottom를 클릭하면 key가 1만큼 감소하는 함수를 만드세요.
		- 이 예제는 for문을 사용할 필요없지만 for문에 대한 이해를 하기 위하여 #arr-bottom은 아래의 for문을 사용해서 만들어봅시다.
		for (var i=0; i<2; i++){}

	5. 키가 1씩 커지는게 너무 지루하다면 3씩 증감하도록 바꿔보세요.
		- #arr-top과 #arr-bottom, 각각 for문 썼을때 안썼을 때 어떻게 바꿔야할지 생각해보세요.

	6. 키가 1씩 커지는게 너무 지루하다면 5씩 증감하도록 바꿔보세요.
		- #arr-top과 #arr-bottom, 각각 for문 썼을때 안썼을 때 어떻게 바꿔야할지 생각해보세요.

*/
