chrome.omnibox.onInputChanged.addListener((text, suggest) => {

    chrome.omnibox.setDefaultSuggestion({
        description: `Pesquisar "${text}" no Jisho`
    });

    const suggestions = [
        {
            content: `${encodeURIComponent(text)}%20%23kanji`,
            description: `Pesquisar kanjis com "${text}"`
        },
        {
            content: `${encodeURIComponent(text)}%20%23sentences`,
            description: `Pesquisar frases com "${text}"`
        }
    ];

    suggest(suggestions);
});

chrome.omnibox.onInputEntered.addListener((text) => {
    const url = `https://jisho.org/search/${text}`;
    chrome.tabs.create({ url });
});
