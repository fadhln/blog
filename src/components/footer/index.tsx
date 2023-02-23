import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mx-auto container mt-24 px-3 relative z-20">
      <hr className="bg-warm-gray-300 dark:bg-warm-gray-700 h-px border-0" />
      <div className="pt-8 pb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs font-light text-warm-gray-500">
          Copyright © [what-year-is-this] Fadhlan. <br /> All rights reserved.
          This website is{' '}
          <a
            className="underline hover:text-warm-gray-600 dark:hover:text-warm-gray-400"
            href="https://github.com/fadhln/blog"
            target={'_blank'}
            rel={'noreferrer'}
          >
            open sourced
          </a>
          .
        </p>
        <div className="flex items-center gap-6">
          <a
            className="text-xl text-warm-gray-500 opacity-50 hover:opacity-100 transition-opacity"
            href="https://github.com/fadhln"
            target={'_blank'}
            rel={'noreferrer'}
          >
            <FaGithub />
          </a>
          <a
            className="text-xl text-warm-gray-500 opacity-50 hover:opacity-100 transition-opacity"
            href="https://linkedin.com/in/fadhln"
            target={'_blank'}
            rel={'noreferrer'}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
