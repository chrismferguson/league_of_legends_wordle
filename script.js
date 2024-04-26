async function logChampions() {
    const response = await fetch("http://ddragon.leagueoflegends.com/cdn/14.8.1/data/en_US/champion.json");
    const championsData = await response.json();
    const champions = Object.values(championsData.data).map(champion => champion.name);
    
    // use map to process each champion name
    // remove all ' from names
    // then store all champs that are 5 letters long only
    const processedChampions = champions.map(name => {
        // Convert the first letter to lowercase and concatenate with the rest of the string
        return name.charAt(0).toLowerCase() + name.slice(1).replace(/'/g, '');
    }).filter(name => name.length === 5);
    
    return processedChampions;
}

// export the function 
export default logChampions;