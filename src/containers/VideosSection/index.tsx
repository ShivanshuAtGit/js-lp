'use client';
import React, { useEffect, useState } from 'react';
import { playFlairFont } from '@/utils/fonts';
import DrawNumber from '@/components/DrawNumber';
import Image from 'next/image';
import Link from 'next/link';
import './styles.modules.css';

interface Video {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    resourceId: {
      videoId: string;
    };
  };
}

const VideosSection = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const playlistId = 'PLShNUJ3Rxa9AuprTrhYGMbnCMlne8AwtL';
      const apiKey = 'AIzaSyDKA-Pre51ewXV9R4VtA6GsOZQLIk0GTR4';
      const maxResults = 11;

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
      );
      const data = await response.json();
      setVideos(data.items);
    };

    fetchVideos();
  }, []);

  return (
    <section id="videos" className="NAV_SECTION">
      <div className="max-w-128 px-5 md:px-20 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-x-[84px]">
          {/* Video Thumbnails */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 w-full">
            {videos.map((video) =>
              video?.snippet?.thumbnails?.high?.url ? (
                <div key={video.id} className="relative group cursor-pointer w-full aspect-video">
                  <Image
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg"
                    priority={false}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-opacity duration-300" />
                  <Link
                    href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                    rel="canonical"
                    target="_blank"
                    className="absolute inset-0 flex justify-start items-end"
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Play video"
                    >
                      <title>Play video button</title>
                      <path
                        d="M0 0H48V48H0V0Z"
                        fill="black"
                        fillOpacity="0.8"
                      />
                      <path d="M16 14V34L33 24L16 14Z" fill="#FFD98C" />
                    </svg>
                  </Link>
                </div>
              ) : null
            )}
          </div>

          {/* Description */}
          <div className="mt-10 lg:mt-0 lg:ml-10 text-center lg:text-left">
            <h2 className={`${playFlairFont.className} t-ternary`}>Videos</h2>
            <h3
              className={`${playFlairFont.className} t-secondary t-gradient pt-2 sm:pt-4`}
            >
              Jagran Samrat
            </h3>
            <p className="t-para pt-2 sm:pt-4">
              A distinguished artist who uses soulful music to{' '}
              <strong>Sanskritik Virasat</strong> and <strong>Sanskar</strong>{' '}
              into society while bridging Bharat&apos;s rich cultural heritage
              and values.
            </p>
            <DrawNumber number={'03'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
