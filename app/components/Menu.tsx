'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import { useSession } from "next-auth/react";

export default function Menu() {
  const { data: session } = useSession();

  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Bugs Ticket Spares" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bugs Ticket Spares</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about">
          About
        </Navbar.Link>
        {/*<Navbar.Link href="#">Services</Navbar.Link>*/}
        {/*<Navbar.Link href="#">Pricing</Navbar.Link>*/}
        {/*<Navbar.Link href="/api/auth/signin">Login</Navbar.Link>*/}
        {!session && (
          <>
          <Navbar.Link href="/api/auth/signin">Login</Navbar.Link>
          </>)
        }
        {session && (
          <>
          <Navbar.Link href="/api/auth/signout">Logout</Navbar.Link>
          </>)
        }
      </Navbar.Collapse>
    </Navbar>
  );
}