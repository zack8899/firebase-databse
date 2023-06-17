


window.addEventListener('load', () => {
  if (localStorage.getItem('reg') == 'true') {
    document.querySelector('.reg-data-form').classList.add('hide');
  }
});

document.querySelector('.reg-data-form form').addEventListener('submit', (e) => {
  e.preventDefault();

  let name = document.querySelector('.reg-data-form input').value;
  localStorage.setItem('Name', name);

  document.querySelector('.reg-data-form').classList.add('hide');
  localStorage.setItem('reg', true);
});

const addPost = document.querySelector('.add-post'),
addForm = document.querySelector('.post-data-form'),
closeBtn = document.querySelector('.post-data-form .close')

addPost.onclick = ()=>{
  addForm.classList.toggle('hide');
}
closeBtn.onclick = ()=>{
  addForm.classList.toggle('hide');
}


