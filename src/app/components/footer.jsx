'use client';
import { Icon } from 'semantic-ui-react';
function scrollToTop() {
  window.scrollTo(0, 0);
}

export function Footer() {
  return (
    <footer className="w-full bg-sky-950 min-h-12 mt-1 p-6">
      <div>
        <button
          onClick={scrollToTop}
          className="flex border-2 border-blue-200 w-10 h-10 justify-center rounded-md p-1 "
        >
          <Icon
            name="angle double up"
            size="large"
            fitted
            className="text-blue-200 inline-block text-xl align-middle "
          />
        </button>
      </div>
      <div></div>
    </footer>
  );
}
