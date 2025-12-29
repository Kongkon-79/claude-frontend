"use client"
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import { UserProfileApiResponse } from './player-data-type';

const PlayerInfo = () => {
    const session = useSession();
    const token = (session?.data?.user as {accessToken: string})?.accessToken;

    const {data} = useQuery<UserProfileApiResponse>({
        queryKey: ["profile-info"],
        queryFn: async ()=>{
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
                method: "GET",
                headers: {
                    Authorization : `Bearer ${token}`
                }
            })
            return res.json();
        },
        enabled: !!token
    })

    console.log(data)

    const personalInfo = data?.data;
  return (
    <div className='pt-7'>
        <div className="container grid grid-cols-1 md:gris-cols-2 lg:grid-cols-6 gap-6 bg-white rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014
]">
            <div className="md:col-span-1">
                <Image src={personalInfo?.profileImage || "/assets/images/no-user.jpg"} alt={personalInfo?.firstName || "profile image"} width={1000} height={1000} className="w-auto h-auto object-cover rounded-full"/>
            </div>
            <div className="md:col-span-4 border-2 border-red-500">
           <ul className="grid gris-cols-1 md:gris-cols-2 lg:grid-cols-3 gap-4">
                        <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Full Name</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.firstName || "N/A"}  {personalInfo?.lastName || "N/A"}</span></li>
                         {/* <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Email</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.email || "N/A"}</span></li> */}
                          <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Phone</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.phone || "N/A"}</span></li>
                           <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Nationality</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.citizenship || "N/A"}</span></li>
                            <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Preferred Foot</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.foot || "N/A"}</span></li>
                             <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>Current Club</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.currentClub || "N/A"}</span></li>
                              <li className="flex flex-col gap-2"><span className='text-base font-normal text-[#616161] leading-[150%]'>GPA</span> <span className='text-lg md:text-xl text-[#131313] font-normal leading-[120%] '>{personalInfo?.gpa || "N/A"}</span></li>

                    </ul>
            </div>
            <div className="md:col-span-1">

            </div>
        </div>
    </div>
  )
}

export default PlayerInfo