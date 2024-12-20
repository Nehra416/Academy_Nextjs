"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const content = [
    {
      "title": "React: Building the Future",
      "quote": "React allows developers to build complex UIs from small and isolated pieces of code called 'components.'",
      "name": "Mark Zuckerberg (CEO of Meta)"
    },
    {
      "title": "Next.js: The Future of Web Apps",
      "quote": "The ability to pre-render pages, automatic code splitting, and the great developer experience are a game changer for web development.",
      "name": "Guillermo Rauch (CEO of Vercel)"
    },
    {
      "title": "Angular for Enterprises",
      "quote": "Angular allows you to create powerful, scalable web apps while ensuring a consistent and maintainable structure.",
      "name": "Brad Green (Former Director of Engineering at Google)"
    },
    {
      "title": "Node.js: Full-Stack JavaScript",
      "quote": "With Node.js, you can use JavaScript on both the client and server sides, which makes building scalable applications easier.",
      "name": "Ryan Dahl (Creator of Node.js)"
    },
    {
      "title": "Express: Simplifying Web Dev",
      "quote": "Express.js simplifies the development of server-side applications and APIs by providing a flexible and lightweight set of tools.",
      "name": "TJ Holowaychuk (Creator of Express.js)"
    },
    {
      "title": "Vue: Progressive JavaScript",
      "quote": "Whether it's React, Angular, or Vue, these frameworks have significantly transformed how developers build modern, dynamic websites.",
      "name": "Evan You (Creator of Vue.js)"
    }
];

const TestimonialCards = () => {
  // dark:bg-grid-white/[0.2] for this property (for boxes background) we install a package mini-svg-data-uri (Aceternity ui ke doc)
  return (
    <div className="h-[30rem] w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear some Quote about Tech</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={content}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards