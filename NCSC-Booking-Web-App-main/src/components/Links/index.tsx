import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface LinkProps {
  href: string;
  style?: React.StyleHTMLAttributes<LinkStyle>;
  label: string;
  invert?: boolean;
  activated?: boolean;
}

const setLinkStyle = (inverted: boolean, activated: boolean) => {
  if (!activated) {
    if (inverted) {
      return {
        hover: "black",
        color: "white",
      };
    } else {
      return {
        color: "black",
        hover: "brand",
      };
    }
  } else {
    if (inverted)
      return {
        color: "black",
        hover: "black",
      };
    else {
      return {
        color: "brand",
        hover: "brand",
      };
    }
  }
};

export const Link: React.FC<LinkProps> = ({
  href,
  style,
  label,
  invert = false,
  ...props
}) => {
  const router = useRouter();

  const { hover, color } = setLinkStyle(invert, router.pathname === "href");

  return (
    <NextLink href={href} passHref>
      <a
        className={`font-sans text-${color} transition-colors duration-200 hover:opacity-95 hover:text-${hover}`}
        style={style}
        {...props}
      >
        {label}
      </a>
    </NextLink>
  );
};
