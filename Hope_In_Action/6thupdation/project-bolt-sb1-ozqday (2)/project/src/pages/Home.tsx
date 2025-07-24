import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

type HomeProps = {
  onDonate: () => void;
};

export function Home({ onDonate }: HomeProps) {
  return (
    <div>
      <Navbar onDonate={onDonate} />
      <Hero onDonate={onDonate} />
      <About />
      <Contact />
    </div>
  );
}