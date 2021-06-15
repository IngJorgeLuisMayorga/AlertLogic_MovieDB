export default interface IMovie {
    isTrend: boolean;

    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title:string;
    overview: string;
    popularity: number;
    poster_path:string;
    release_date: string;
    title:string;
    video: boolean;
    vote_average:number;
    vote_count: number;

    production_companies?: Array<{
        "id": string;
        "logo_path": string;
        "name": string;
        "origin_country": string;
    }>;
    

    spoken_languages?: Array<{
        "iso_639_1": string;
        "name": string;
    }>;
}