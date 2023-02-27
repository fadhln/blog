import Button from '@/components/button';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import TextArea from '@/components/textArea';
import TextInput from '@/components/textInput';
import { api } from '@/utils/api';
import validateEmail from '@/utils/validateEmail';

import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { HiPaperAirplane } from 'react-icons/hi2';

import Head from 'next/head';
import { toast } from 'sonner';

const Contact = () => {
  const postMessage = api.message.postMessage.useMutation({
    retry: false,
  });

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  const handleSubmit = () => {
    if (!name) {
      toast.error('Name is required');
      return;
    }

    if (!email) {
      toast.error('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Email is invalid');
      return;
    }

    if (!message) {
      toast.error('Message is required');
      return;
    }

    toast.promise(
      async () => {
        await postMessage.mutateAsync({
          email,
          name,
          message,
        });
      },
      {
        loading: 'Loading',
        success: 'Success',
        error: 'Error',
      }
    );
  };

  return (
    <>
      <Head>
        <title>Fadhlan - Contact Me</title>
        {/* TODO: change description */}
        <meta name="description" content="Made by Muhammad Fadhlan" />
      </Head>
      <Navbar />
      <main className="max-w-3xl  min-h-screen pt-[7rem] pb-10 relative z-20 container mx-auto px-3">
        <h1 className="font-mono font-bold text-xl">Contact</h1>
        <div className="mt-12 bg-warm-gray-100 dark:bg-warm-gray-800 border border-rose-300 dark:border-amber-800 focus-within:ring ring-rose-400 dark:ring-amber-600 transition-all rounded-lg shadow-lg focus-within:shadow-rose-300 dark:focus-within:shadow-amber-900 p-8 z-30">
          <h2 className="text-3xl font-normal text-center">Let&apos;s Talk</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-3">
              <p className="text-lg mb-3">Leave Me a Message</p>
              <hr className="bg-warm-gray-300 dark:bg-warm-gray-700 h-px border-0" />
              <div className="grid sm:grid-cols-2 gap-3">
                <TextInput
                  placeholder="John Doe"
                  name="name"
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextInput
                  placeholder="john@doe.com"
                  name="email"
                  label="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <TextArea
                placeholder="I have an opportunity for you!"
                name="message"
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex justify-end">
                <div>
                  <Button
                    onClick={handleSubmit}
                    disabled={postMessage.isLoading}
                  >
                    Send <HiPaperAirplane />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 mt-8 bg-warm-gray-50 dark:bg-warm-gray-900 shadow-lg rounded-lg border border-warm-gray-300 dark:border-warm-gray-700 h-fit">
          <p className="text-lg font-semibold">Socials</p>
          <div className="flex flex-wrap mt-2 gap-2">
            <a
              className="group text-xl gap-2 flex items-center justify-center p-2 rounded-full border-warm-gray-200 dark:border-warm-gray-700 border "
              href="https://github.com/fadhln"
              rel="noreferrer"
              target={'_blank'}
            >
              <FaGithub className="opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                /fadhln
              </span>
            </a>
            <a
              className="group text-xl gap-2 flex items-center justify-center p-2 rounded-full border-warm-gray-200 dark:border-warm-gray-700 border "
              href="https://twitter.com/m_fadhln"
              rel="noreferrer"
              target={'_blank'}
            >
              <FaTwitter className="opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                /m_fadhln
              </span>
            </a>
            <a
              className="group text-xl gap-2 flex items-center justify-center p-2 rounded-full border-warm-gray-200 dark:border-warm-gray-700 border "
              href="https://linkedin.com/in/fadhln"
              rel="noreferrer"
              target={'_blank'}
            >
              <FaLinkedinIn className="opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                /in/fadhln
              </span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
