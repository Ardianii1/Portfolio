import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="sticky bottom-5 w-full">
      <Link href="#home">
        <div className="flex items-center justify-center">
          <img
            className="flex items-center justify-center h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="https://smis.ubt-uni.net/MY/Foto.ashx?stID=28b5a4fb-e9c5-459e-95cf-aff8399842df"
          />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
