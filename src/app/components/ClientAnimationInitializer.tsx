"use client";

import { useEffect } from 'react';
import AOS from 'aos';

export default function ClientAnimationInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return null;
}
