const fetchJson = async (apiEndpoint) => {
    try {
        const response = await fetch(apiEndpoint)

        if (!response.ok) {
            console.error('Fetch error Response not OK')
        }
        return await response.json()

    }
    catch (error) {
        console.error("Oops error occurred: ", error)
    }

}

export default fetchJson