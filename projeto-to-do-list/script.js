function buttonClick() {
  const text = document.querySelector('#texto-tarefa').value; //Pega valor do campo input

  const newListItem = document.createElement('li'); // cria um elemento de lista, adiciona classe e insere o texto do input nele.
  newListItem.className = 'listItem';
  newListItem.innerHTML = text;

  const list = document.querySelector('#lista-tarefas'); //Append esse item de lista no <ol>, como filho.
  list.appendChild(newListItem);

  document.querySelector('#texto-tarefa').value = ''; //limpa o input.
  document.querySelector('#texto-tarefa').focus(); //retoma o foco pro input
}

function changeColor(item) {
  const selectedItems = document.querySelectorAll('.listItem'); //recebe a o elemento das linhas da lista.

  for (let i = 0; i < selectedItems.length; i++) {
    //abre um contador para percorrer os itens da lista e remover a formatação dele( apenas um pode ter.).
    console.log(selectedItems.classList);
    selectedItems[i].classList.remove('selected');
  }
  item.target.classList.add('selected'); //adiciona a formatação no que clicamos.
}

function strikethroughItem(item) {
  const selectedItems = document.querySelectorAll('.listItem');

  if (item.target.classList.contains('completed')) {
    item.target.classList.remove('completed');
  } else {
    item.target.classList.add('completed');
  }
}

function deleteListItems() {

  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = '';
}

function deleteCompletedItems(){
  const listItems = document.querySelectorAll('.listItem');

  for(let i=0; i<listItems.length; i++){
    if(listItems[i].classList.contains('completed')){
      listItems[i].remove();
    }
  }

}

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', buttonClick);

const listItem = document.querySelector('#lista-tarefas');
document
  .querySelector('#lista-tarefas')
  .addEventListener('dblclick', strikethroughItem);
listItem.addEventListener('click', changeColor);

const deleteButton = document.getElementById('apaga-tudo');
deleteButton.addEventListener('click', deleteListItems);

const deleteCompleted = document.getElementById('remover-finalizados');
deleteCompleted.addEventListener('click', deleteCompletedItems);