"use client";
import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeartbeat} from "@fortawesome/free-solid-svg-icons/faHeartbeat";

export default function NavBar() {

    const items = [
        {name: "Home", icon: faHeartbeat,},
        {name: "Home", icon: faHeartbeat,},
        {name: "Home", icon: faHeartbeat,},
        {name: "Home", icon: faHeartbeat,},
        {name: "Home", icon: faHeartbeat,}
    ]

    const [active, setActive] = useState(2);


    return (
        <footer className={"flex bg-white"}>
            <ul className={"flex w-screen"}>
                {items.map((item, index) => (
                    <li  className={"w-1/5 h-16 text-center"} key={index}>
                        <a className={"flex flex-col "} href="#" onClick={() => setActive(index)}>
                             <span className={"text-3xl text-grey-200 hover:text-primary hover:-translate-y-8 z-10"}>
                                 <FontAwesomeIcon icon={item.icon}/>
                             </span>
                            <div className={"overflow-hidden"}>
                                <span className={"text-base translate-y-20 opacity-0"}>{item.name}</span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </footer>

        // <div className="bg-white max-h-16 w-screen absolute bottom-0">
        //     <ul className={"flex justify-around"}>
        //         {items.map((item, index) => (
        //             <li key={index} className={"w-16"}>
        //                 <span
        //                     className={`bg-primary border-grey-100 border-8 h-16 w-16 absolute -top-9 rounded-full duration-300  ${active === index ? 'opacity-100' : 'opacity-0'} `}>
        //                 </span>
        //                 <a href="#" className={"flex  flex-col text-center pt-6"} onClick={() => setActive(index)}>
        //                     <span
        //                         className={`z-0 text-x1  cursor-pointer duration-500 text-2xl ${active === index ? '-mt-10 text-white text-2xl' : 'text-grey-200'} `}>
        //                         <FontAwesomeIcon icon={item.icon}/>
        //                     </span>
        //                     <span
        //                         className={`${active === index ? 'text-primary translate-y-4 duration-700 opacity-100' : 'opacity-0 translate-y-10'}`}>{item.name}</span>
        //                 </a>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
    );
};