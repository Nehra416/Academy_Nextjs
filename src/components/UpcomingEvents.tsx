"use client"
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';

const content = [

    {
        "title": "ReactJS Event 2024",
        "description": "Join experts in the React ecosystem to discuss new features, best practices, and community-driven updates for ReactJS in 2024.",
        "slug": "https://react.dev"
    },
    {
        "title": "Next.js Global Conference 2024",
        "description": "A global event for Next.js enthusiasts featuring talks, workshops, and live demonstrations of the latest in server-side rendering, static site generation, and API routes.",
        "slug": "https://nextjs.org"
    },
    {
        "title": "Node.js Developer Event",
        "description": "The Node.js Developer Summit gathers Node.js engineers and developers to explore the latest trends, modules, and features in the Node.js ecosystem.",
        "slug": "https://nodejs.org/en"
    },
    {
        "title": "JavaScript Everywhere 2024",
        "description": "A week-long event covering JavaScript across all platforms, including tutorials, hackathons, and expert sessions on frameworks like React, Vue, and Angular.",
        "slug": "https://react.dev/"
    },
    {
        "title": "Express.js Mastery Workshop",
        "description": "A hands-on workshop focusing on building fast and scalable back-end APIs using Express.js, perfect for both beginners and experienced developers.",
        "slug": "https://nextjs.org/"
    },
    {
        "title": "Full Stack JavaScript Bootcamp 2024",
        "description": "An immersive bootcamp focusing on full-stack development using JavaScript technologies including Node.js, React, and Express.js, ideal for those transitioning to full-stack roles.",
        "slug": "https://nodejs.org/en/",
    }

];

const UpcomingEvents = () => {
    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Upcoming Events</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Tech Journey</p>
                </div>

                <div className="mt-10">
                    <HoverEffect
                        // items={content}
                        // use this way when key name in array's object is diff from title, description and link.
                        items={content.map(event => (
                            {
                                title: event.title,
                                description: event.description,
                                link: event.slug,
                            }
                        ))}
                    />
                </div>

                <div className="mt-10 text-center">
                    <Link href={"/"}
                        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All Events
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvents