import React from 'react';
// import { motion } from 'framer-motion'; //TODO: Add animations

function Hero() {
    return (
        <section id="Hero" className="min-h-screen flex items-center justify-center p-8 bg-background">
            <div className="max-w-6xl text-center">
                
                {/* Profile Picture */}
                <img
                    src="/saathveek_head.png"
                    alt="Saathveek"
                    className="rounded-full w-48 h-48 mx-auto mb-6 border-4 border-primary"
                />
                
                {/* Text */}
                <h1 className="text-5xl text-text mb-2">
                    Hello, I'm <span className="text-primary">Saathveek</span>.
                </h1>
                <h1 className="text-5xl text-text mb-8">
                    I'm a computer&nbsp;engineer and data&nbsp;scientist.
                </h1>

                {/* CTA Buttons */}
                <div className="flex justify-center space-x-4">
                    <a 
                        href="/Saathveek_Gowrishankar_Resume.pdf"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="bg-background text-primary text-xl px-4 py-2 rounded font-semibold border-2 border-primary
                                    hover:bg-primary hover:text-background hover:rounded hover:border-2 transition-colors"
                    >
                        View Resume
                    </a>
                    <a 
                        href="/#Contact"
                        className="bg-background text-primary text-xl px-4 py-2 rounded font-semibold border-2 border-primary
                                    hover:bg-primary hover:text-accent hover:rounded hover:border-2 transition-colors"         
                    >
                        Contact Me
                    </a>
                </div>

                <div className = "text-text text-xl mt-10">
                    <p>
                        Welcome! My React portfolio is currently still in progress, but I'm always happy to connect!
                    </p>
                </div>

                {/* Button to Content */}
                <a
                    href="#About"
                    className="absolute bottom-10 animate-bounce text-primary hover:text-accent transition"
                    aria-label="Scroll down"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </a>

            </div>
        </section>
    );
}

export default Hero;