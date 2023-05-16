import Link from 'next/link';
import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

interface NavbarProps {
  selectedTitle: 'Accueil' | 'Projet' | 'Notebook' | 'Contact' | 'Atelier';
}

export const Navbar = ({ selectedTitle }: NavbarProps) => (
  <Background color="bg-gray-200">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li
          style={
            selectedTitle === 'Accueil'
              ? { borderBottom: '4px solid #6246EA' }
              : {}
          }
        >
          <Link href="/">Accueil</Link>
        </li>
        <li
          style={
            selectedTitle === 'Projet'
              ? { borderBottom: '4px solid #6246EA' }
              : {}
          }
        >
          <Link href="/projet">Projet</Link>
        </li>
        <li
          style={
            selectedTitle === 'Notebook'
              ? { borderBottom: '4px solid #6246EA' }
              : {}
          }
        >
          <Link href="/notebook">Notebook</Link>
        </li>
        <li
          style={
            selectedTitle === 'Contact'
              ? { borderBottom: '4px solid #6246EA' }
              : {}
          }
        >
          <Link href="/contact">Contact</Link>
        </li>
        <li
          style={
            selectedTitle === 'Atelier'
              ? { borderBottom: '4px solid #6246EA' }
              : {}
          }
        >
          <Link href="/workshop">Atelier</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);
