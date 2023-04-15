export async function getApi() {
    try {
    
            const category = await fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json());
            return category;            

    } catch (error) {
        console.error(error)
    }
    
}
