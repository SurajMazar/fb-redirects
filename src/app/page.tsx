'use client'
import axios from "axios";
import {useEffect} from "react";


export default function Home() {

    const init = async () => {
        try {
            await axios.post(process.env.NEXT_APP_LOG_SERVER_API_URL ?? '', {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'x-api-key': process.env.NEXT_APP_LOG_SERVER_API_KEY
                }
            })
        } catch (exception) {
            console.log(exception)
        } finally {
            window.location.replace(process.env.NEXT_APP_FACEBOOK_PROFILE_LINK ?? '')
        }
    }

    useEffect(() => {
        init().finally(() => {
            console.log('success')
        })
    }, [])

    return (
        <div className={'min-h-screen w-full flex justify-center items-center'}>
            <div className="loader"></div>
        </div>
    );
}
