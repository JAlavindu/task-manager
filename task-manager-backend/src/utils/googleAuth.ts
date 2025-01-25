import axios from "axios";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export interface GoogleTokenResponse {
  access_token: string;

  // other properties if any
}

export const getGoogleToken = async (
  code: string
): Promise<GoogleTokenResponse> => {
  const { data } = await axios.post<GoogleTokenResponse>(
    "https://oauth2.googleapis.com/token",
    {
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: "http://localhost:3000/auth",
      grant_type: "authorization_code",
    }
  );
  return data;
};

export const getGoogleUser = async (accessToken: string) => {
  const { data } = await axios.get(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return data;
};
