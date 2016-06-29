var d = document;

var tabs = d.querySelectorAll('.tab');

for(i=0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', clickHandler);
}

function clickHandler(evt) {
  for(i=0; i < tabs.length; i++) {
    tabs[i].classList.remove('current');
    tabs[i].closest('li').style.border = '1px solid rgba(40,44,42,0.1)';
  }
  evt.target.classList.add('current');
  evt.target.closest('li').style.borderBottom = 'none';
  evt.target.closest('li').style.borderTop = '1px solid #2CC185';
  location.hash = evt.target.hash;
}

var data = {
  tab1: {
    title: '1',
    body: 'Tab 1 content'
  },
  tab2: {
    title: '2',
    body: 'Tab 2 content'
  },
  tab3: {
    title: '3',
    body: 'Tab 3 content'
  }
};

renderContent('tab1');

window.addEventListener("hashchange", function() {
  renderContent(window.location.hash.slice(1));
});

function renderContent(tab) {
  d.querySelector('#content h1').textContent = data[tab].title;
  d.querySelector('#content p').textContent = data[tab].body;
}
