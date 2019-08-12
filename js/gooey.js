class GooeyComponent{
    constructor(
        root,
        nameId,
        nameClass,
        background,
        width,
        height,
        margin,
        padding,
        float,
        border,
        font,
        text,
        src,
        href,
        style,
    ){
        this.root = root;
        this.nameId = nameId;
        this.nameClass = nameClass;
        this.background = background;
        this.width = width;
        this.height = height;
        this.margin = margin;
        this.padding = padding;
        this.float = float;
        this.border = border;
        this.font = font;
        this.text = text;
        this.src = src;
        this.href = href;
        this.style = style;
        this.defaults = {
            type: 'div',
            background: '#4C4CFF',
            width: '100%',
            height: '75px',
            margin: '0px',
            padding: '0px',
            float: 'none',
            border: {top: '0px', right: '0px', bottom: '0px', left:'0px', color:'none', radius:'0px', width:'0px', style:'none'},
            font: {family: 'Helvetica', size: '16px', weight: '600', color: 'white'},
            text: {
                    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
                    alignment: 'center'
                },
            href: {link: '#', decoration: 'none'},
            style: 'none',
        };
        this.toggle = false;
    }

    Create(){
        if(!this.root || !this.nameId || !this.nameClass){
            return console.log('Properties <root>, <nameId>, <nameClass>, <type>, are required to create Gooey components');
        }else{
            let element = document.createElement(this.defaults.type);
            element.setAttribute('id', this.nameId);
            element.setAttribute('class', this.nameClass);

            if(!this.background){
                element.style.background = this.defaults.background;
            }else{
                element.style.background = this.background;
            }

            if(!this.width){
                element.style.width = this.defaults.width;
            }else{
                element.style.width = this.width;
            }

            if(!this.height){
                element.style.height = this.defaults.height;
            }else{
                element.style.height = this.height;
            }

            if(!this.margin){
                element.style.margin = this.defaults.margin;
            }else{
                element.style.marginTop = this.margin.top;
                element.style.marginRight = this.margin.right;
                element.style.marginBottom = this.margin.bottom;
                element.style.marginLeft = this.margin.left;
            }

            if(!this.padding){
                element.style.padding = this.defaults.padding;
            }else{
                element.style.paddingTop = this.padding.top;
                element.style.paddingRight = this.padding.right;
                element.style.paddingBottom = this.padding.bottom;
                element.style.paddingLeft = this.padding.left;
            }

            if(!this.float){    
                element.style.float = this.defaults.float;
            }else{
                element.style.float = this.float;
            }

            if(!this.border){
                element.style.borderTop = this.defaults.border.top;
                element.style.borderLeft = this.defaults.border.left;
                element.style.borderBottom = this.defaults.border.bottom;
                element.style.borderRight = this.defaults.border.right;
                element.style.borderColor = this.defaults.border.color;
                element.style.borderRadius = this.defaults.border.radius;
                element.style.borderWidth = this.defaults.border.width;
                element.style.borderStyle = this.defaults.border.style;
            }else{
                element.style.borderTop = this.border.top;
                element.style.borderLeft = this.border.left;
                element.style.borderBottom = this.border.bottom;
                element.style.borderRight = this.border.right;
                element.style.borderColor = this.border.color;
                element.style.borderRadius = this.border.radius;
                element.style.borderWidth = this.border.width;
                element.style.borderStyle = this.border.style;
            }

            if(!this.font){
                element.style.fontFamily = this.defaults.font.family;
                element.style.fontSize = this.defaults.font.size;
                element.style.fontWeight = this.defaults.font.weight;
                element.style.color = this.defaults.font.color;
            }else{
                element.style.fontFamily = this.font.family;
                element.style.fontSize = this.font.size;
                element.style.fontWeight = this.font.weight;
                element.style.color = this.font.color;
            }

            if(!this.text){
                element.innerText = this.defaults.text.body;
                element.style.textAlign = this.defaults.text.alignment;
            }else if(this.text === 'none'){
                element.innerText = '';
            }else{
                element.innerText = this.text.body;
                element.style.textAlign = this.text.alignment;
            }

            if(!this.href){
                element.setAttribute('href', this.defaults.href.link);
                element.style.textDecoration = this.defaults.href.decoration;
            }else{
                element.setAttribute('href', this.href.link);
                element.style.textDecoration = this.href.decoration;
            }

            if(!this.style){
                element.style.listStyle = this.defaults.style;
            }else{
                element.style.listStyle = this.style;
            }

            element.setAttribute('src', this.src);

            let isClass = document.getElementsByClassName(this.root);
            let isId = document.getElementById(this.root); 

            if(isClass.length > 0){
                for(let i = 0 ; i < isClass.length; i++){
                    var newElement = element.cloneNode(true);
                    isClass[i].appendChild(newElement);
                }
                return;
            }else if(isId){
                isId.appendChild(element);
                return;
            }
        }
        
    }

    Click(callback){
        if(!callback){
            return console.log('Click() method requires callback function');
        }else{
            return document.getElementById(this.nameId).addEventListener('click', ()=>{callback();});
        }
    }

    Toggle(firstCall, lastCall){
        if(!firstCall || !lastCall){
            return console.log('Toggle() method requires two callback functions');
        }else{
            document.getElementById(this.nameId).addEventListener('click', ()=>{
                if(this.toggle === false){
                    this.toggle = true;
                    firstCall();
                    return;
                }else{
                    this.toggle = false;
                    lastCall();
                    return;
                }
            });
        }
    }

    Hover(firstCall, lastCall, cursor){
        if(!firstCall || !lastCall){
            return console.log('Hover() method requires two callback functions');
        }else{
            if(cursor === true){
                document.getElementById(this.nameId).style.cursor = 'pointer';
            }

            document.getElementById(this.nameId).addEventListener('mouseenter', ()=>{
                firstCall();
            });
            document.getElementById(this.nameId).addEventListener('mouseleave', ()=>{
                lastCall();
            });
        }
    }

    Background(value){
        if(!value){
            return console.log('Background() method requires a color value or image url parameter ');
        }else{
            return document.getElementById(this.nameId).style.background = value;
        }
    }

    Width(value){
       if(!value){
            return console.log('Width() method requires a value parameter');
       }else{
           return  document.getElementById(this.nameId).style.width = value;
       }
    }

    Height(value){
        if(!value){
             return console.log('Width() method requires a value parameter');
        }else{
            return  document.getElementById(this.nameId).style.height = value;
        }
    }

    Font(value){
        if(!value){
            return console.log('Font() method requires a value <Object> or <Array> parameter');
       }else{
            if(Object && Object.keys(value).length == 4){
                var element = document.getElementById(this.nameId);
                element.style.fontFamily = value.family;
                element.style.fontSize = value.size;
                element.style.fontWeight = value.weight;
                element.style.color = value.color;
                return;
            }else if(Array.isArray(value) && value.length == 2){
                var element = document.getElementById(this.nameId);
                switch(value[0]){
                    case 'family':
                        element.style.fontFamily = value[1];
                    break;
                    case 'size':
                        element.style.fontSize = value[1];
                    break;
                    case 'weight':
                        element.style.fontWeight = value[1];
                    break;
                    case 'color':
                        element.style.color = value[1];
                    break;
                }
                return;
            }
       }
    }

    InputListen(id){
        let input = document.getElementById(id);

        if(!input){
            return console.log('InputListen() method requires the ID of the input element to listen to');
        }

        let textField = document.getElementById(this.nameId);

        input.addEventListener('input', ()=>{
            textField.innerText = input.value;
        });
    }

}

class GooeyDiv extends GooeyComponent{

    constructor(defaults){
        super(defaults);
        this.defaults = {
            type: 'div',
            background: '#4C4CFF',
            width: '100%',
            height: '500px',
            margin: '0px',
            padding: '0px',
            float: 'left',
            border: 'none',
            font: {family: 'Helvetica', size: '12px', weight: '400', color: 'white'},
            text: {
                    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
                    alignment: 'center'
                },
            href: {link: '#', decoration: 'none'},
            style: 'none',
        };
    }
    
}

class GooeyButton extends GooeyComponent{
    constructor(defaults){
        super(defaults);
        this.defaults = {
            type: 'button',
            background: '#9999ff',
            width: '150px',
            height: '50px',
            margin: '0px',
            padding: '0px',
            float: 'none',
            border: {top: '0px', right: '0px', bottom: '0px', left:'0px', color:'none', radius:'25px', width:'0px', style:'none'},
            font: {family: 'Helvetica', size: '16px', weight: '600', color: 'white'},
            text: {
                    body:'Button', 
                    alignment: 'center'
                },
            href: {link: '#', decoration: 'none'},
            style: 'none',
        };
    }
}

class GooeyHeader extends GooeyComponent{
    constructor(defaults){
        super(defaults);
        this.defaults = {
            type: 'h1',
            background: '#4C4CFF',
            width: '100%',
            height: 'auto',
            margin: '0px',
            padding: '0px',
            float: 'none',
            border: {top: '0px', right: '0px', bottom: '0px', left:'0px', color:'none', radius:'0px', width:'0px', style:'none'},
            font: {family: 'Helvetica', size: '16px', weight: '600', color: 'white'},
            text: {
                    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
                    alignment: 'center'
                },
            href: {link: '#', decoration: 'none'},
            style: 'none',
        };
    }
}

class GooeyParagraph extends GooeyComponent{
    constructor(defaults){
        super(defaults);
        this.defaults = {
            type: 'p',
            background: '#4C4CFF',
            width: '100%',
            height: 'auto',
            margin: '0px',
            padding: '0px',
            float: 'none',
            border: {top: '0px', right: '0px', bottom: '0px', left:'0px', color:'none', radius:'0px', width:'0px', style:'none'},
            font: {family: 'Helvetica', size: '16px', weight: '600', color: 'white'},
            text: {
                    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
                    alignment: 'center'
                },
            href: {link: '#', decoration: 'none'},
            style: 'none',
        };
    }
}

class GooeyImage extends GooeyComponent{
    constructor(defaults){
        super(defaults);
        this.defaults = {
            type: 'img',
            background: '#4C4CFF',
            width: '400px',
            height: '400px',
            margin: '0px',
            padding: '0px',
            float: 'none',
            border: {top: '0px', right: '0px', bottom: '0px', left:'0px', color:'none', radius:'0px', width:'0px', style:'none'},
            font: {family: 'Helvetica', size: '16px', weight: '600', color: 'white'},
            text: {
                    body:'', 
                    alignment: 'left'
                },
            href: {link: '#', decoration: 'none'},
            style: 'none',
        };
    }

}

class GooeyList extends GooeyComponent{
    constructor(defaults){
        super(defaults);
        this.defaults = {
            type: 'ul',
            background: '#4C4CFF',
            width: '400px',
            height: '400px',
            margin: '0px',
            padding: '0px',
            float: 'none',
            border: {top: '0px', right: '0px', bottom: '0px', left:'0px', color:'none', radius:'0px', width:'0px', style:'none'},
            font: {family: 'Helvetica', size: '16px', weight: '600', color: 'white'},
            text: {
                    body:'', 
                    alignment: ''
                },
            href: {link: '#', decoration: 'none'},
            style: 'none',
        };
    }

}

class GooeyListItem extends GooeyComponent{
    constructor(defaults){
        super(defaults);
        this.defaults = {
            type: 'li',
            background: '#4C4CFF',
            width: '400px',
            height: '400px',
            margin: '0px',
            padding: '0px',
            float: 'none',
            border: {top: '0px', right: '0px', bottom: '0px', left:'0px', color:'none', radius:'0px', width:'0px', style:'none'},
            font: {family: 'Helvetica', size: '16px', weight: '600', color: 'white'},
            text: {
                    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
                    alignment: 'center'
                },
            href: {link: '#', decoration: 'none'},
            style: 'none',
        };
    }
}

class GooeyAnchor extends GooeyComponent{
    constructor(defaults){
        super(defaults);
        this.defaults = {
            type: 'a',
            background: '#4C4CFF',
            width: 'auto',
            height: 'auto',
            margin: '0px',
            padding: '0px',
            float: 'none',
            border: {top: '0px', right: '0px', bottom: '0px', left:'0px', color:'none', radius:'0px', width:'0px', style:'none'},
            font: {family: 'Helvetica', size: '16px', weight: '600', color: 'white'},
            text: {
                    body:'Link', 
                    alignment: 'center'
                },
            href: {link: '#', decoration: 'none'},
            style: 'none',
        };
    }
}
