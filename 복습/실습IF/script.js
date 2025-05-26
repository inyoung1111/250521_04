/*
	[진화과정은 다음과 같습니다.]
	이상해씨 - 이상해풀 - 이상해꽃
	파이리 - 리자드 - 리자몽
	꼬부기 - 어니부기 - 거북왕

	1. pokeName 변수(배열)를 생성
	2. pokeName 안에 ID값 name1, name2, name3를 가져오세요.
	- document.getElementById("id")를 사용하세요.

	3. pokeLevel 변수(배열)를 생성
	4. pokeLevel 안에 Class값 level1, level2, level3를 가져오세요.
	- document.getElementsByClassName("class")를 사용하세요.

	5. pokeImg변수(배열)를 생성
	6. pokeImg 안에 Class값 cha1, cha2, cha3를 가져오세요.
	- document.getElementsByClassName("class")를 사용하세요.

	7. 만약 레벨이 10이상이면 1번 진화 
	8. 레벨이 20 이상이면 2번 진화하게 만드세요.
	- 7번과 8번을 else if문으로 만들어주세요.

	9. 나머지 캐릭터도 동작하게 만들어주세요.

	10. 포켓몬 이미지를 클릭하면 레벨이 5씩 증가하게 만드세요.

	11. 만약 모두가 최종진화를 했다면 로고를 logo2.png로 바꾸세요.

*/

var pokeName = [
	document.getElementById('name1'),
	document.getElementById('name2'),
	document.getElementById('name3'),
];

var pokeLevel = [
	document.getElementsByClassName('level1'),
	document.getElementsByClassName('level2'),
	document.getElementsByClassName('level3'),
];
//getElementsByClassName 왜 배열로 가져와 지는가?
//배열안에 담겨서 가져와진다

var pokeImg = [
	document.getElementsByClassName('cha1'),
	document.getElementsByClassName('cha2'),
	document.getElementsByClassName('cha3'),
];


//  0번째 클릭 했을 때 
//pokeLevel 0번째 
pokeImg[0][0].addEventListener('click', function(){
	var currentLv = pokeLevel[0][0].innerHTML;
	pokeLevel[0][0].innerHTML = parseInt(currentLv) +5;

	if(parseInt(pokeLevel [0][0].innerHTML) >= 20){
		pokeImg[0][0].src = 'icon01_2.png';
		pokeName[0].innerHTML = '이상해풀';

	}else if(parseInt(pokeLevel[0][0].innerHTML)>= 20){
		pokeImg[0][0].src ='icon01_3.png';
		pokeName[0].innerHTML ='이상해꽃';
	}

});

pokeImg[1][0].addEventListener('click', function(){
	var currentLv = pokeLevel[1][0].innerHTML;
	pokeLevel[1][0].innerHTML = parseInt(currentLv) +5;

	if(parseInt(pokeLevel [1][0].innerHTML) >= 20){
		pokeImg[1][0].src = 'icon02_3.png';
		pokeName[1].innerHTML = '리자몽';

	}else if(parseInt(pokeLevel[1][0].innerHTML)>= 20){
		pokeImg[1][0].src ='icon02_2.png';
		pokeName[1].innerHTML ='리자드';
	}

});


pokeImg[2][0].addEventListener('click', function(){
	var currentLv = pokeLevel[2][0].innerHTML;
	pokeLevel[2][0].innerHTML = parseInt(currentLv) +5;

	if(parseInt(pokeLevel [2][0].innerHTML) >= 20){
		pokeImg[2][0].src = 'icon03_3.png';
		pokeName[2].innerHTML = '거북왕';

	}else if(parseInt(pokeLevel[2][0].innerHTML)>= 20){
		pokeImg[2][0].src ='icon03_2.png';
		pokeName[2].innerHTML ='어니부기';
	}

	if(
		pokeName[0].innerHTML ==  '이상해꽃' &&
		pokeName[1].innerHTML ==  '리자몽' &&
		pokeName[2].innerHTML ==  '거북왕'
	){
		document.getElementsByClassName('logo')[0].src = 'logo2.png';
		}

});
