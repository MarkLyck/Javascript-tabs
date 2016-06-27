console.log('TABS!');

var d = document;
var tab1 = d.querySelector('#tab1');
tab1.addEventListener('click', goToTab.bind(null, 1));
var tab1content = d.querySelector('#tab1-content');
var tab2 = d.querySelector('#tab2');
tab2.addEventListener('click', goToTab.bind(null, 2));
var tab2content = d.querySelector('#tab2-content');
var tab3 = d.querySelector('#tab3');
tab3.addEventListener('click', goToTab.bind(null, 3));
var tab3content = d.querySelector('#tab3-content');

window.location.hash = '#tab1';
var currentHash = window.location.hash;
var tabClicked = 1;

window.addEventListener("hashchange", function() {
  if(tabClicked !== Number(window.location.hash.slice(-1))) {
    goToTab(Number(window.location.hash.slice(-1)));
  }
});

function goToTab(tab) {
  tab1content.style.display = 'none';
  tab2content.style.display = 'none';
  tab3content.style.display = 'none';
  if(tab === 1) {
    tab1content.style.display = 'block';
    tabClicked = 1;
    window.location.hash = '#tab1';
  } else if (tab === 2) {
    tab2content.style.display = 'block';
    tabClicked = 2;
    window.location.hash = '#tab2';
  } else {
    tab3content.style.display = 'block';
    tabClicked = 3;
    window.location.hash = '#tab3';
  }
}
