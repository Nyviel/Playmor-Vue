import type { Game } from "@/interfaces/Game";
import { API } from "@/utilities/constants";

export const fetchHotPicks = async (): Promise<Game> => {
	try {
		const response = await fetch(`${API}/games`);

		if (response.ok) {
			return response.json();
		} else {
			throw new Error(
				"Failed to fetch hot picks" +
					response.status +
					response.statusText
			);
		}
	} catch (error) {
		throw new Error("Unexpected error when fetching" + error);
	}
};
