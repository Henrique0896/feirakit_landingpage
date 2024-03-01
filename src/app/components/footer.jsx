'use client';

import { Icon } from 'semantic-ui-react';
function scrollToTop() {
  window.scrollTo(0, 0);
}

export function Footer() {
  return (
    <footer className="flex flex-row  w-full bg-sky-950 min-h-12 mt-1 p-6">
      <div className="flex self-start h-full border-blue-200 w-1/4 px-4">
        <button
          onClick={scrollToTop}
          className="flex border-2 border-blue-200 w-10 h-10  justify-center rounded-md p-1 "
        >
          <Icon
            name="angle double up"
            size="large"
            fitted
            className="text-blue-200 inline-block  align-middle "
          />
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-3/4 px-3 justify-evenly items-center h-full border-l-2 border-blue-200">
        <div className="flex flex-col items-center w-full py-3">
          <p className="text-xs md:text-xl text-white">
            <span className=" text-orange-400">
              Fundo Social Vale do Jequitinhonha
            </span>
            &copy;2024
          </p>
          <a
            href="https://www.instagram.com/fundo.social.jequi/"
            target="_blank"
            className="flex visited:text-white 
          hover:bg-opacity-50
          transition-all duration-200 "
            rel="noreferrer"
          >
            <Icon
              name="instagram"
              size="large"
              fitted
              className="text-orange-400 inline-block text-xl align-middle "
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
