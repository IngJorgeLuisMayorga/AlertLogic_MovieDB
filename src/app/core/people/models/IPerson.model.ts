import IMovie from "../../movies/models/IMovie.model";

export  interface IPerson {
        adult: boolean;
        gender: number;
        id:  number;
        known_for: IMovie[];
        known_for_department: string;
        name: string;
        popularity: number;
        profile_path: string;

    
}


export  interface IPersonDetail {
        "birthday": string;
        "known_for_department":  string;
        "deathday":  string;
        "id": number;
        "name":  string;
        "also_known_as":  string[];
        "gender": number;
        "biography":  string;
        "popularity": number;
        "place_of_birth":number;
        "profile_path": string;
        "adult": boolean;
        "imdb_id":number;
        "homepage": any;
}