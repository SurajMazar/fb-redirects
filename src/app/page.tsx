'use client'
import axios from "axios";
import {Suspense, useEffect} from "react";
import {useSearchParams} from "next/navigation";

function Home() {

    const searchParams = useSearchParams()
    const type = searchParams.get('type') ?? 'fb'


    const init = async () => {
        try {
            const url = `${process.env.NEXT_APP_LOG_SERVER_API_URL ?? ''}?type=${type}`
            await axios.post(url, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'x-api-key': process.env.NEXT_APP_LOG_SERVER_API_KEY
                    }
                }
            )
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


const Page = () => {
    return (
        <Suspense fallback={<></>}>
            <Home/>
        </Suspense>
    );
};

export default Page
