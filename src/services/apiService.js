
export default async function apiService (url){
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error ('erro ao buscar API');
        }
        const data = await response.json();
        return data;
    } catch (error){
        throw new Error(error.message);
    }

}