window.addEventListener("load", function(){

    importComponent('js/xhrStaging.js');

    var state = {
        users: [
            {
                userId : "1",
                userImage: 'imgs/user-1.jpg',
                userName: 'Pablo Vazquez',
                userBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                userId : "2",
                userImage: 'imgs/user-2.jpg',
                userName: 'Rick Sanchez',
                userBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                userId : "3",
                userImage: 'imgs/user-3.jpg',
                userName: 'Morty Smith',
                userBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
        ]
    };

    //TOP NAVBAR
    function NavBar (){
        let navBar = new GooeyDiv();
        navBar.root = 'root';
        navBar.nameId = 'nav-bar';
        navBar.nameClass = 'nav-component';
        navBar.height = '75px';
        navBar.text = 'none';
        navBar.Create();

        let navBarContainer = new GooeyDiv();
        navBarContainer.root = navBar.nameId;
        navBarContainer.nameId = 'navbar-container';
        navBarContainer.nameClass = 'container';
        navBarContainer.background = 'none';
        navBarContainer.height = navBar.height;
        navBarContainer.width = '1400px';
        navBarContainer.margin = {top: '0px', right: 'auto', bottom: '0px', left: 'auto'};
        navBarContainer.float = 'none';
        navBarContainer.text = 'none';
        navBarContainer.Create();

        let navBarLogo = new GooeyDiv();
        navBarLogo.root = navBarContainer.nameId;
        navBarLogo.nameId = 'navbar-logo';
        navBarLogo.nameClass = 'navbar-asset';
        navBarLogo.background = 'none';
        navBarLogo.width = '300px';
        navBarLogo.height = navBar.height;
        navBarLogo.float = 'left';
        navBarLogo.text = 'none';
        navBarLogo.Create();

        let logo = new GooeyImage();
        logo.root = navBarLogo.nameId;
        logo.nameId = 'logo-image';
        logo.nameClass = 'logo';
        logo.background = 'none';
        logo.width = navBarLogo.height;
        logo.height = navBarLogo.height;
        logo.src = 'imgs/gooey.png';
        logo.float = 'left';
        logo.Create();

        let logoText = new GooeyHeader();
        logoText.root = navBarLogo.nameId;
        logoText.nameId = 'logo-text';
        logoText.nameClass = 'logo';
        logoText.background = 'none';
        logoText.width = 'auto';
        logoText.height = 'auto';
        logoText.text = {body: 'Gooey.js', alignment: 'left'};
        logoText.margin = {top:'22px', right: '0px', bottom: '0xp', left: '10px'};
        logoText.defaults.font.size = '28px';
        logoText.defaults.font.color = '#f962e2';
        logoText.float = 'left';
        logoText.Create();

        let navBarButtonsContainer = new GooeyList();
        navBarButtonsContainer.root = navBarContainer.nameId;
        navBarButtonsContainer.nameId = 'navbar-buttons-container';
        navBarButtonsContainer.nameClass = 'navbar-buttons';
        navBarButtonsContainer.width = '750px';
        navBarButtonsContainer.height = navBar.height;
        navBarButtonsContainer.float = 'right';
        navBarButtonsContainer.Create();

        let links = ['Docs', 'Tutorials', 'GitHub', 'Examples', 'Contact'];

        for(let i = 0; i < links.length; i++){
            let buttonContainer = new GooeyListItem();
            buttonContainer.root = navBarButtonsContainer.nameId;
            buttonContainer.nameId = 'navbar-button'+i;
            buttonContainer.nameClass = 'navbar-button';
            buttonContainer.width = '100px';
            buttonContainer.height = navBar.height;
            buttonContainer.margin = {top: '0px', right: '25px', bottom: '0px', left: '25px'};
            buttonContainer.float = 'left';
            buttonContainer.text = 'none';
            buttonContainer.style
            buttonContainer.Create();

            let buttonLink = new GooeyAnchor();
            buttonLink.root = buttonContainer.nameId;
            buttonLink.nameId = 'button-link'+i;
            buttonLink.nameClass = 'nav-link';
            buttonLink.width = buttonContainer.width;
            buttonLink.height = 'auto';
            buttonLink.float = 'left';
            buttonLink.text = {body: links[i], alignment: 'center'};
            buttonLink.margin = {top: '26px', right: '0px', bottom: '0px', left: '0px'};
            buttonLink.font = {family: 'Calibri', size: '20px', weight: '400', color: 'white'};
            buttonLink.Create();
            buttonLink.Hover(function(){
                buttonLink.Font(['color', '#f962e2']);
            }, function(){
                buttonLink.Font(['color', 'white']);
            });
        }
    }
    NavBar();

    function SectionOne(){
        //SECTION ONE CONTENT
        let sectionOne = new GooeyDiv();
        sectionOne.root = 'root';
        sectionOne.nameId = 'section-one';
        sectionOne.nameClass = 'content-section';
        sectionOne.background = '#1d1d61';
        sectionOne.height = '750px';
        sectionOne.text = 'none';
        sectionOne.Create();

        let sectionOneContainer = new GooeyDiv();
        sectionOneContainer.root = sectionOne.nameId;
        sectionOneContainer.nameId = 'section-one-container';
        sectionOneContainer.nameClass = 'container';
        sectionOneContainer.background = 'none';
        sectionOneContainer.height = sectionOne.height;
        sectionOneContainer.width = '1400px';
        sectionOneContainer.margin = {top: '0px', right: 'auto', bottom: '0px', left: 'auto'};
        sectionOneContainer.float = 'none';
        sectionOneContainer.text = 'none';
        sectionOneContainer.Create();

        let sectionOneTitle = new GooeyHeader();
        sectionOneTitle.root = sectionOneContainer.nameId;
        sectionOneTitle.nameId = 'section-one-title';
        sectionOneTitle.nameClass = 'title';
        sectionOneTitle.background = 'none';
        sectionOneTitle.float = 'left';
        sectionOneTitle.margin = {top: '255px', right:' 0px', bottom: '0px', left: '0px'};
        sectionOneTitle.font = {family: 'Helvetica', size: '58px', weight: '400', color: '#f962e2'};
        sectionOneTitle.text = {body: 'Gooey.js', alignment: 'center'};
        sectionOneTitle.Create();

        let sectionOneDescription = new GooeyHeader();
        sectionOneDescription.root = sectionOneContainer.nameId;
        sectionOneDescription.nameId = 'section-one-title';
        sectionOneDescription.nameClass = 'title';
        sectionOneDescription.background = 'none';
        sectionOneDescription.float = 'left';
        sectionOneDescription.margin = {top: '20px', right:' 0px', bottom: '0px', left: '0px'};
        sectionOneDescription.font = {family: 'Helvetica', size: '38px', weight: 'normal', color: 'white'};
        sectionOneDescription.text = {body: 'A simple JavaScript GUI library', alignment: 'center'};
        sectionOneDescription.Create();

        let sectionOneButtons = new GooeyDiv();
        sectionOneButtons.root = sectionOneContainer.nameId;
        sectionOneButtons.nameId = 'section-one-buttons';
        sectionOneButtons.nameClass = 'section-buttons';
        sectionOneButtons.background = 'none';
        sectionOneButtons.height = 'auto';
        sectionOneButtons.float = 'left';
        sectionOneButtons.margin = {top: '40px', right: 'auto', bottom: '0px', left: 'auto'};
        sectionOneButtons.text = 'none';
        sectionOneButtons.Create();

        let buttonContainer = new GooeyDiv();
        buttonContainer.root =  sectionOneButtons.nameId;
        buttonContainer.nameId = 'section-one-button-container';
        buttonContainer.nameClass = 'container';
        buttonContainer.background = 'none';
        buttonContainer.width = '334px';
        buttonContainer.height = '47px';
        buttonContainer.float = 'none';
        buttonContainer.margin = {top: '0px', right: 'auto', bottom: '0px', left: 'auto'};
        buttonContainer.text = 'none';
        buttonContainer.Create();

        let tutorialButton = new GooeyAnchor();
        tutorialButton.root = buttonContainer.nameId;
        tutorialButton.nameId = 'action-buttons';
        tutorialButton.nameClass = 'buttons';
        tutorialButton.width = '150px';
        tutorialButton.height = 'auto';
        tutorialButton.float = 'left';
        tutorialButton.margin = {top: '0px', right: '0px', bottom: '0px', left:'0px'};
        tutorialButton.padding = {top: '10px', right: '0px', bottom: '10px', left:'0px'};
        tutorialButton.font = {family: 'Calibri', size: '22px', weight: 'normal', color: 'white'};
        tutorialButton.text = {body: 'Tutorials', alignment: 'center'};
        tutorialButton.defaults.border.radius = '25px';
        tutorialButton.Create();

        let examplesButton = new GooeyAnchor();
        examplesButton.root = buttonContainer.nameId;
        examplesButton.nameId = 'action-buttons';
        examplesButton.nameClass = 'buttons';
        examplesButton.background = 'none';
        examplesButton.width = '150px';
        examplesButton.height = 'auto';
        examplesButton.float = 'left';
        examplesButton.margin = {top: '0px', right: '0px', bottom: '0px', left:'30px'};
        examplesButton.padding = {top: '8px', right: '0px', bottom: '8px', left:'0px'};
        examplesButton.font = {family: 'Calibri', size: '22px', weight: 'normal', color: '#f962e2'};
        examplesButton.text = {body: 'Examples', alignment: 'center'};
        examplesButton.border = {top: '0px', right: '0px', bottom: '0px', left:'0px', color:'#f962e2', radius:'25px', width:'2px', style:'solid'},
        examplesButton.Create();
    }
    SectionOne();

    function SectionTwo(){
        let section = new GooeyDiv();
        section.root = 'root';
        section.nameId = 'section-two';
        section.nameClass = 'content-section';
        section.height = '580px';
        section.text = 'none';
        section.Create();

        let container = new GooeyDiv();
        container.root = section.nameId;
        container.nameId = 'section-two-container';
        container.nameClass = 'container';
        container.background = 'none';
        container.height = section.height;
        container.width = '1400px';
        container.margin = {top: '0px', right: 'auto', bottom: '0px', left: 'auto'};
        container.float = 'none';
        container.text = 'none';
        container.Create();

        let sectionTitle = new GooeyHeader();
        sectionTitle.root = container.nameId;
        sectionTitle.nameId = 'section-title';
        sectionTitle.nameClass = 'title';
        sectionTitle.background = 'none';
        sectionTitle.float = 'left';
        sectionTitle.margin = {top: '100px', right: '0px', bottom: '30px', left: '0px'};
        sectionTitle.font = {family: 'Calibri', size: '38px', weight: '400', color: 'white'};
        sectionTitle.text = {body: 'What Gooey.js is about', alignment: 'center'};
        sectionTitle.Create();

        let description = new GooeyParagraph();
        description.root = container.nameId;
        description.nameId = 'section-description';
        description.nameClass = 'text';
        description.background = 'none';
        description.float = 'left';
        description.margin = {top: '0px', right: '0px', bottom: '20px', left: '0px'};
        description.font = {family: 'Calibri', size: '22px', weight: '400', color: 'white'};
        description.text = {body: `Gooey.js is a simple library that allows the creation of GUI elements with 
        Simple Declarative JavaScript`, alignment: 'center'};
        description.Create();

        let articleText = [
            {
                title: 'Simple & Easy To Use', 
                text: "Gooey.js is simple, easy to use, and easy to learn. If you know basic HTML, CSS, and "+
                "love JavaScript Gooey is for you! This library will make it easy to create all your GUI elements, "+
                "style them, and add business logic all in one place. Gooey tries to simplify code readability and maintainablity "+
                "by keeping it all together."
            },
            {
                title: 'Declarative Syntax',
                text: "Easy to read code is imperative for maintainable code, Gooey's simple declarative "+ 
                "style makes it easy to read and understand what your code is doing. Now you can create "+
                "HTML elements and add CSS styles in the same declarative fashion but using only JavaScript, "+
                "allowing you to keep all your code in one place."
            },
            {
                title: 'JavaScript & JavaScript',
                text: "It's all JavaScript! Gooey.js is built with JavaScript for JavaScript "+
                "developers, no third party libraries needed. Gooey simply allows you to build class based "+
                "HTML elements by abstracting the more verbose methods of the DOM API so you can create simple GUI elements "+
                "with only JavaScript."
            }
        ];

        for(let i = 0; i < 3; i++){
            let article = new GooeyDiv();
            article.root = container.nameId;
            article.nameId = 'section-two-article'+i;
            article.nameClass = 'article';
            article.background = 'none';
            article.width = '436px';
            article.height = 'auto';
            article.float = 'left';
            article.margin = {top: '50px', right: '15px', bottom: '0px', left: '15px'};
            article.text = 'none';
            article.Create();

            let h1 = new GooeyHeader();
            h1.root = article.nameId;
            h1.nameId = 'article-header';
            h1.background = 'none';
            h1.float = 'left';
            h1.margin = {top: '0px', right: '0xp', bottom: '0px', left: '0xp'};
            h1.font = {family: 'Calibri', size: '28px', weight: '400', color: 'white'};
            h1.text = {body: articleText[i].title, alignment: 'left'};
            h1.nameClass = 'header';
            h1.Create();

            let paragraph = new GooeyParagraph();
            paragraph.root = article.nameId;
            paragraph.nameId = 'article-text';
            paragraph.nameClass = 'paragraph';
            paragraph.background = 'none';
            paragraph.float = 'left';
            paragraph.margin = {top: '10px', right: '0xp', bottom: '0px', left: '0xp'};
            paragraph.font = {family: 'Calibri', size: '18px', weight: '400', color: 'white'},
            paragraph.text = {body: articleText[i].text, alignment: 'left'};
            paragraph.Create();
        }
    }
    SectionTwo();

    function SectionThree(){
        let div = new GooeyDiv();
        div.root = 'root';
        div.nameId = 'section-three';
        div.nameClass = 'section';
        div.background = 'red';
        div.height = '1000px';
        div.text = 'none';
        div.Create();

        let container = new GooeyDiv();
        container.root = div.nameId;
        container.nameId = 'section-three-container';
        container.nameClass = 'container';
        container.background = 'green';
        container.height = div.height;
        container.width = '1400px';
        container.float = 'none';
        container.margin = {top: '0px', right: 'auto', bottom: '0px', left: 'auto'};
        container.text = 'none';
        container.Create();

        let h1 = new GooeyHeader();
        h1.root = container.nameId;
        h1.nameId = 'section-title';
        h1.nameClass = 'title';
        h1.background = 'none';
        h1.float = 'left';
        h1.margin = {top: '100px', right: '0px', bottom: '30px', left: '0px'};
        h1.font = {family: 'Calibri', size: '38px', weight: '400', color: 'white'};
        h1.text = {body: 'How to use Gooey.js', alignment: 'center'};
        h1.Create();

        let description = new GooeyParagraph();
        description.root = container.nameId;
        description.nameId = 'section-description';
        description.nameClass = 'text';
        description.background = 'none';
        description.float = 'left';
        description.margin = {top: '0px', right: '0px', bottom: '20px', left: '0px'};
        description.font = {family: 'Calibri', size: '22px', weight: '400', color: 'white'};
        description.text = {body: `Let's get started with some simple examples of how to create GUI 
        elements with Gooey.js`, alignment: 'center'};
        description.Create();

        let codeDiv = new GooeyDiv();
        codeDiv.root = container.nameId;
        codeDiv.nameId = 'code-container';
        codeDiv.nameClass = 'container';
        codeDiv.text = 'none';
        codeDiv.Create();

        let header = new GooeyHeader();
        header.root = codeDiv.nameId;
        header.nameId = 'des-header';
        header.nameClass = 'header';
        header.background = 'red';
        header.margin = {top: '50px', right: '0px', bottom: '20px', left: '0px'};
        header.font = {family: 'Calibri', size: '22px', weight: '400', color: 'white'};
        header.text = text = {body: `Intro to code with Gooey.js`, alignment: 'left'};
        header.Create();


    }
    SectionThree();

    //FOOTER NAVBAR
    let footerNav = new GooeyDiv();
    footerNav.root = 'root';
    footerNav.nameId = 'footer-nav';
    footerNav.nameClass = 'nav-component';
    footerNav.background = 'navy';
    footerNav.height = '300px';
    footerNav.text = 'none';
    footerNav.flex = {
        flexDirection: 'row',   
        flexWrap: 'wrap', 
        justifyContent: 'center',
        alignItems: 'center', 
        alignContent: 'center'
    };
    footerNav.Create();

    let footerNavContainer = new GooeyDiv();
    footerNavContainer.root = footerNav.nameId;
    footerNavContainer.nameId = 'footer-nav-container';
    footerNavContainer.nameClass = 'container';
    footerNavContainer.background = 'purple';
    footerNavContainer.height = footerNav.height;
    footerNavContainer.width = '1400px';
    footerNavContainer.margin = {top: '0px', right: 'auto', bottom: '0px', left: 'auto'};
    footerNavContainer.float = 'none';
    footerNavContainer.text = 'none';
    footerNavContainer.Create();

});