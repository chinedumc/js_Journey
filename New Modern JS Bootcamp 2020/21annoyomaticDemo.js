const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop", "Won't Stop"],
    pickPhrase() {
        const {phrases} = this; // Destructuring for phrases = this.phrases
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx]
    },
    start() {
        setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000)
    }
}