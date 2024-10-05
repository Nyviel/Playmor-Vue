export interface Game {
	id: number;
	title: string;
	description: string;
	developer: string[];
	publisher: string[];
	platforms: string[];
	genres: string[];
	modes: string[];
	cover: string;
	artwork: string;
	releaseDates: ReleaseDate[];
}

export interface ReleaseDate {
	platform: string;
	date: string;
}
