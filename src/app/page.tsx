'use client'
import axios from "axios";
import {Suspense, useEffect} from "react";
import {useSearchParams} from "next/navigation";

function Home() {

    const searchParams = useSearchParams()
    const type = searchParams.get('type') ?? 'fb'

    const redirectHashMap = {
        'fb': process.env.NEXT_APP_FACEBOOK_PROFILE_LINK,
        'linkedin': process.env.NEXT_APP_LINKED_IN_LINK,
        'github': process.env.NEXT_APP_GITHUB_LINK,
    } as Record<string, string>


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
            window.location.replace(redirectHashMap?.[type ?? 'fb'])
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
