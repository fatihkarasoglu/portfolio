"use client";

import { JSX } from "react";
import Image from "next/image";
import justme from "../../public/justme.png";
import {
  FaGithub,
  FaLinkedin,
  FaSpotify,
  FaEnvelope,
  FaXTwitter,
  FaBluesky,
} from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import "./globals.css";

declare interface SocialButtonProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

const SocialButton = ({ href, icon, label }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex font-semibold items-center justify-center gap-2 px-4 py-2 rounded-lg hover:scale-105 transition-transform bg-[#aeaeae] text-[#243238] mb-4"
    >
      {icon}
      <span className="hidden sm:inline text-md">{label}</span>
    </a>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-auto md:h-screen flex flex-col bg-[#243238] shadow-[5px_5px_25px_-2px_rgba(36,50,56,255)] z-10">
        <div className="flex justify-center items-center mt-10">
          <Image
            src={justme}
            alt="Fatih Karaşoğlu"
            width={400}
            height={400}
            className="object-cover pointer-events-none"
            priority
          />
        </div>
        <div className="text-[#aeaeae] text-3xl font-bold text-center mt-6">
          <h1>FATİH KARAŞOĞLU</h1>
        </div>
        <div className="flex justify-center items-center py-6">
          <div className="w-2/4 grid grid-cols-2 gap-3">
            <SocialButton
              href="https://github.com/fatihkarasoglu"
              icon={<FaGithub />}
              label="GitHub"
            />
            <SocialButton
              href="https://www.linkedin.com/in/fatihkarasoglu/"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
            <SocialButton
              href="https://x.com/afkdev"
              icon={<FaXTwitter />}
              label="Twitter"
            />
            <SocialButton
              href="https://bsky.app/profile/afkdev.bsky.social"
              icon={<FaBluesky />}
              label="Bluesky"
            />
            <SocialButton
              href="mailto:f.karasoglu.01@gmail.com"
              icon={<FaEnvelope />}
              label="Contact"
            />
            <SocialButton href="#" icon={<FaSpotify />} label="Podcast" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#aeaeae]">
        <div className="px-6 py-10 text-[#243238] flex flex-col items-center">
          <h2 className="text-3xl text-center font-bold">
            <Typewriter
              words={["Hi, I'm Fatih"]}
              loop={2}
              cursor
              cursorStyle="."
              typeSpeed={45}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <h3 className="mt-2 text-center text-xl">
            I'm a Junior Frontend Software Developer.
          </h3>
          <h4 className="w-40 mt-2 text-center font-semibold rounded-full py-1 px-3 text-[#00a251] hover:text-[#00c366] bg-[#0a2c1e] hover:bg-[#0a3322] text-sm">
            ● Open to work
          </h4>
        </div>
        <div className="px-6 text-[#243238]">
          <h5 className="text-2xl font-bold mb-4">Projects</h5>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            <div className="bg-[#243238] text-[#aeaeae] p-6 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Text Genius</h3>
                <p className="text-sm mb-4">
                  A website where the user can view statistics such as
                  characters, words, sentences, paragraphs, pronouns, and
                  longest words in their text.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-[#2e3b43] px-2 py-1 rounded">React</span>
                  <span className="bg-[#2e3b43] px-2 py-1 rounded">
                    Tailwindcss
                  </span>
                  <span className="bg-[#2e3b43] px-2 py-1 rounded">Mui</span>
                  <span className="bg-[#2e3b43] px-2 py-1 rounded">i18n</span>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://github.com/fatihkarasoglu/text-genius"
                  target="_blank"
                  className="bg-[#aeaeae] text-[#243238] px-4 py-1 rounded-full text-sm hover:bg-white transition-colors hover:scale-105"
                >
                  GitHub
                </a>
                <a
                  href="https://fatihkarasoglu.github.io/text-genius/"
                  target="_blank"
                  className="bg-[#aeaeae] text-[#243238] px-4 py-1 rounded-full text-sm hover:bg-white transition-colors hover:scale-105"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="bg-[#243238] text-[#aeaeae] p-6 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Snake Game</h3>
                <p className="text-sm mb-4">
                  A mobile compatible website where the user can view statistics
                  such as score, highest score, etc. for nostalgic purposes of
                  the Nokia 3310 snake game.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-[#2e3b43] px-2 py-1 rounded">React</span>
                  <span className="bg-[#2e3b43] px-2 py-1 rounded">Css</span>
                  <span className="bg-[#2e3b43] px-2 py-1 rounded">
                    GitHub Pages
                  </span>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://github.com/fatihkarasoglu/snake-game-with-react"
                  target="_blank"
                  className="bg-[#aeaeae] text-[#243238] px-4 py-1 rounded-full text-sm hover:bg-white transition-colors hover:scale-105"
                >
                  GitHub
                </a>
                <a
                  href="https://fatihkarasoglu.github.io/snake-game-with-react/"
                  target="_blank"
                  className="bg-[#aeaeae] text-[#243238] px-4 py-1 rounded-full text-sm hover:bg-white transition-colors hover:scale-105"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto text-center py-2 text-sm text-[#243238]">
          © 2025
        </div>
      </div>
    </main>
  );
}
