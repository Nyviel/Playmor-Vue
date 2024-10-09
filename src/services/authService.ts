import { API } from "@/utilities/constants";

export const login = async (
	login: string,
	password: string
): Promise<Response> => {
	const response = await fetch(`${API}/auth/login`, {
		method: "POST",
		body: JSON.stringify({ login, password }),
	});

	if (response.ok) {
		return response;
	} else {
		throw new Error(
			"Failed to login" + response.status + response.statusText
		);
	}
};
