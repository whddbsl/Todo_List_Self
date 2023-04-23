const addBtn = document.querySelector('#addBtn'); // 추가 버튼 선택

function keyCodeCheck () { // 엔터키로 추가(비어있지 않을 때)
	if(window.event.keyCode === 13 && todoInput.value !== ''){
        createTodo();
    }
}

addBtn.addEventListener('click', () => { // + 버튼으로 추가
    if(todoInput.value !== ''){ // 빈 값 입력 방지
        createTodo();
    }
})

function createTodo () { // 할 일 추가 기능
	const todoList = document.querySelector('#todoList');
	const newLi = document.createElement('li'); // li 생성
    const newBtn = document.createElement('button'); // button 생성
	const newSpan = document.createElement('span'); // span 생성
	const todoInput = document.querySelector('#todoInput');
      
    newLi.appendChild(newBtn); // li안에 button 담기
	newLi.appendChild(newSpan); // li안에 span 담기
      
	newSpan.textContent = todoInput.value; // span 안에 value값 담기
      
	todoList.appendChild(newLi);
      
	todoInput.value = ''; // value 값에 빈 문자열 담기

    newBtn.addEventListener('click', ()=>{ // 체크박스 클릭시 완료 표시
        newLi.classList.toggle('complete'); // newLi에 complete라는 클래스명이 있으면 떼고 없으면 붙임.
    });

    newLi.addEventListener('dblclick', ()=>{ // 더블클릭시 할 일 삭제
        newLi.remove()
    })
}

function deleteAll(){
    const liList = document.querySelectorAll('#todoList li');
    for(i = 0; i < liList.length; i++){
        liList[i].remove();
    }
}