const queryAllWomen = "SELECT * FROM go_girl";
const queryByID = "SELECT * FROM go_girl WHERE id = $1";
const queryByContinent = "SELECT * FROM go_girl WHERE continent = $1";

export default {
    queryAllWomen,
    queryByID,
    queryByContinent
}