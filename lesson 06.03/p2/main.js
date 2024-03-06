class News{
    constructor(title, text, massive, data){
        this.title = title;
        this.text = text;
        this.massive = massive;
        this.data =data;

    }

    getTitle(){
        return this.title;
    }

    getText(){
        return this.text;
    }

    getMssive(){
        return this.massive;
    }

    getData(){
        return this.data;
    }

    print(){
        document.write(`<p ${this.title} </p>`)
        document.write(`<p ${this.text} </p>`)
        document.write(`<p ${this.massive} </p>`)
        document.write(`<p ${this.data} </p>`)

    }

    getNews() {
        const now = new Date();
        const diff = now - this.date;
        const days = Math.floor(diff / (1000  *  60  *  60  *  24));

        if (days < 1) {
            return "сегодня";
        } else if (days < 7) {
            return days + " дней назад";
        } else {
            return this.date.toLocaleNews();
        }
    }
}



 
