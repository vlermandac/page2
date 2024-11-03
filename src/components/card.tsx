import React from "npm:react";
import { FaBluesky, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Card({
  bannerUrl = "../assets/swing.jpeg",
  avatarUrl = "../assets/lain.jpeg",
  name = "LLL",
  description = "I do stuff on the internet",
  socialLinks = { twitter: "https://x.com/ViceLll", bluesky: "https://bsky.app/profile/l3.cl", youtube: "https://www.youtube.com/@lll%E3%81%A7%E3%81%99" }
}) {
  return (
    <div className="card">
      <div className="border"></div>
      <svg className="absolute -z-10 inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
          </filter>
          <clipPath id="rounded-clip">
            <rect width="100%" height="100%" rx="5" ry="5" />
          </clipPath>
        </defs>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.14" clipPath="url(#rounded-clip)" />
      </svg>

      <div>
        <div className="w-full overflow-hidden min-h-36 max-h-44 z-10">
          <img src={bannerUrl} alt="banner" transform-images="avif 300@4 " className="w-full object-cover" />
        </div>
        <div className="size-32 overflow-hidden absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#2F2B48]">
          <img src={avatarUrl} alt={name} transform-images="avif 300@2" className="size-full object-cover" />
        </div>
      </div>
      <div className="content relative z-10 px-6 pb-6 pt-20 text-center overflow-auto">
        <h2 className="name mb-1 text-3xl font-bold">{name}</h2>
        <p className="description mb-6 text-gray-300">{description}</p>
        <div className="social-links flex justify-center space-x-4">
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <FaXTwitter size={24} />
            </a>
          )}
          {socialLinks.bluesky && (
            <a href={socialLinks.bluesky} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Bluesky">
              <FaBluesky size={24} />
            </a>
          )}
          {socialLinks.youtube && (
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Youtube">
              <FaYoutube size={24} />
            </a>
          )}
        </div>
      </div>

      <div className="shadow"></div>
      <div className="backdrop"></div>
    </div>
  )
}
