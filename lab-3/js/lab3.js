// I banged my head against a wall for hours over this one!
// Finally found out how to use the role attribute and utilized classList to add the .active element
// Trying to add and remove attributes mixed with the use of role was very interesting... But it finally works!

//create reference for all elements with the role of 'tab' and 'tabpanel'
const TABS = document.querySelectorAll('[role="tab"]');
const PANELS = document.querySelectorAll('[role="tabpanel"]');

//iterate through all tabs
TABS.forEach((tab) => {
    //lambda funtion if the click event is triggered
    tab.addEventListener('click', (event) => {

        //hide all tabs and panels
        TABS.forEach((t) => t.classList.remove('active'));
        PANELS.forEach((panel) => panel.classList.remove('active'));

        //add the class .active to the selector with the triggered event
        event.currentTarget.classList.add('active');
        
        //get the 'href' attribute from the tab
        const link = tab.querySelector('a');
        const panelID = link.getAttribute('href');

        //create a local variable and add the class .active to the relative panel
        const panel = document.querySelector(panelID);
        panel.classList.add('active');
  });
});

//activate first tab and panel by default
TABS[0].classList.add('active');
PANELS[0].classList.add('active');