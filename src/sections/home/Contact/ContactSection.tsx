import Button from '@/components/button';
import SectionHeading from '@/components/sectionHeading';
import TextArea from '@/components/textArea';
import TextInput from '@/components/textInput';

import React from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiPaperAirplane } from 'react-icons/hi2';

import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="mx-auto container mt-56 px-3 relative z-20">
      <SectionHeading name={'contact'} />
      <motion.div
        variants={{
          offscreen: {
            y: 10,
            opacity: 0,
            transition: {
              type: 'keyframes',
              duration: 0.8,
            },
          },
          onscreen: {
            y: 0,
            opacity: 100,
            transition: {
              type: 'keyframes',
              duration: 0.5,
            },
          },
        }}
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        className="mt-12 bg-warm-gray-100 dark:bg-warm-gray-800 border border-rose-300 dark:border-amber-800 focus-within:ring ring-rose-400 dark:ring-amber-600 transition-all rounded-lg shadow-lg focus-within:shadow-rose-300 dark:focus-within:shadow-amber-900 p-8 z-30"
      >
        <h2 className="text-3xl font-normal text-center">Let&apos;s Talk</h2>
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <div className="p-4 bg-warm-gray-50 dark:bg-warm-gray-900 shadow-lg rounded-lg border border-warm-gray-300 dark:border-warm-gray-700 h-fit">
            <p className="text-lg font-semibold">Socials</p>
            <div className="flex mt-2 gap-2">
              <a
                className="group text-xl h-[2.25rem] flex items-center justify-center aspect-square p-1 rounded-full border-warm-gray-200 dark:border-warm-gray-700 border"
                href="#"
                target={'_blank'}
              >
                <FaGithub className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                className="group text-xl h-[2.25rem] flex items-center justify-center aspect-square p-1 rounded-full border-warm-gray-200 dark:border-warm-gray-700 border"
                href="#"
                target={'_blank'}
              >
                <FaTwitter className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                className="group text-xl h-[2.25rem] flex items-center justify-center aspect-square p-1 rounded-full border-warm-gray-200 dark:border-warm-gray-700 border"
                href="#"
                target={'_blank'}
              >
                <FaInstagram className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <p className="text-lg mb-3">Send a Message</p>
            <hr className="bg-warm-gray-300 dark:bg-warm-gray-700 h-px border-0" />
            <div className="grid sm:grid-cols-2 gap-3">
              <TextInput placeholder="John Doe" name="name" label="Full Name" />
              <TextInput
                placeholder="john@doe.com"
                name="email"
                label="E-mail"
              />
            </div>
            <TextArea
              placeholder="I have an opportunity for you!"
              name="message"
              label="Message"
            />
            <div className="flex justify-end">
              <div>
                <Button>
                  Send <HiPaperAirplane />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
