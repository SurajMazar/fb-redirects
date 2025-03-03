import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    env: {
        NEXT_APP_LOG_SERVER_API_URL: process.env.NEXT_APP_LOG_SERVER_API_URL,
        NEXT_APP_LOG_SERVER_API_KEY: process.env.NEXT_APP_LOG_SERVER_API_KEY,
        NEXT_APP_FACEBOOK_PROFILE_LINK: process.env.NEXT_APP_FACEBOOK_PROFILE_LINK,
        NEXT_APP_LINKED_IN_LINK: process.env.NEXT_APP_LINKED_IN_LINK,
        NEXT_APP_GITHUB_LINK: process.env.NEXT_APP_GITHUB_LINK,
    }
};

export default nextConfig;
