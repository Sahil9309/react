export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sahil9309')
    return response.json()
}
