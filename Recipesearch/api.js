export default function fetchRepositories(searchword) {

    return fetch(`${process.env.EXPO_PUBLIC_API_URL}${searchword}`)
        .then(response => {
            if (!response.ok)
                throw new Error(`Something went wrong: ${response.statusText}`)

            return response.json()
        })
}