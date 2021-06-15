import IMovie from "../models/IMovie.model";
import { IMovieResponse, IMovieResponseTrend } from "../models/IMovieTrend.response.model";

export default function toMovie(movieResponse: IMovieResponse): IMovie{
    return {
        ...movieResponse,
        isTrend: false
    }
}