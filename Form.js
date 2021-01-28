class Form {

    constructor(){
        this.button = createButton('Online');
        this.message = createElement('h1');
        this.enterGame = createButton('Enter Game');
        this.code = createElement('h1');
        this.lol = null;
        this.input = null;
        this.saveCode = createButton('Save Code');
    }

    display(){
        this.message.html("Multiplayer Parkour Game");
        
        this.message.position(displayWidth/2 - 180, displayHeight/2 - 240);
        this.button.position(displayWidth/2 - 50, displayHeight/2 - 100);
        this.enterGame.hide();
        // this.saveCode.position(displayWidth/2 - 1000, displayHeight/2 - 1000)

        this.button.mousePressed(()=>{
            this.button.hide();
            this.message.hide();
            this.code.html("Create a Secret code to share with your friends! ");
            this.code.position(displayWidth/2 - 320, displayHeight/2 - 240);
            this.input = createInput('Enter Secret Code!');
            this.input.position(displayWidth/2 - 100, displayHeight/2 - 100);
            // this.saveCode = createButton('Save Code');
            this.saveCode.position(displayWidth/2 - 60, displayHeight/2 - 40)
        })

        this.saveCode.mousePressed(()=>{
            this.lol = createElement('h3');
            this.lol.html("Your secret code has been saved!");
            this.lol.position(displayWidth/2 - 145, displayHeight/2 - 10);
            var inputValue = this.input.value();
            // code.update()

            database.ref('/').update({
                saveCode: inputValue
            });   
        
        })

        
    }

   
}