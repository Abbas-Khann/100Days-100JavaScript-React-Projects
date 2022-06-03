const getQuestions = (gameOptions) => {
    const { category, difficulty, type } = gameOptions;

    let categoryQueryParam = "";
    let difficultyQueryParam = "";
    let typeQueryParam = ""

    if(category !== "") {
            categoryQueryParam = `&category=${category}`;
    }

    if(difficulty !== "") {
            difficultyQueryParam = `&difficulty=${difficulty}`
    }

    if(typeQueryParam !== "") {
            typeQueryParam = `&type=${type}`
    }

    let apiUrl = `https://opentdb.com/api.php?amount=5${categoryQueryParam}${difficultyQueryParam}${typeQueryParam}`;

    return fetch(apiUrl)
                        .then(res => res.json())
                        .then(data => data.results);

}

export default getQuestions