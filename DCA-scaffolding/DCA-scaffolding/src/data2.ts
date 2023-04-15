export async function getData() {
    try {
    
            const category = await fetch('https://api.chucknorris.io/jokes/random?category={category}').then(res => res.json());
            return category;            

    } catch (error) {
        console.error(error)
    }
    
}
