import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { Badge } from '~/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

interface Props {
  title: string;
  href?: string;  
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card className="group relative flex h-full flex-col bg-background/50 backdrop-blur-sm transition-all duration-300 hover:bg-background/80">
      <Link
        target="_blank"
        href={href || '#'}
        className="relative block aspect-[16/9] w-full overflow-hidden rounded-t-lg"
      >
        <div className="absolute inset-0  z-10 bg-gradient-to-b from-transparent via-transparent to-background/90" />
        
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            layout="fill"
          />
        ) : (
          <div className="h-full w-full bg-muted/30" />
        )}
        
        <time className="absolute right-3 top-3 z-20 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          {dates}
        </time>
      </Link>

      <CardHeader className="space-y-3 p-5">
        <CardTitle className="text-2xl font-bold tracking-tight">
          {title}
        </CardTitle>
        <Markdown className="prose prose-sm max-w-none text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </CardHeader>

      <CardContent className="mt-auto space-y-4 p-5 pt-0">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-full px-3 py-1 text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {links && links.length > 0 && (
        <CardFooter className="p-5">
          <div className="flex flex-wrap items-center gap-3">
            {links.map((link, idx) => (
              <Link 
                href={link.href} 
                key={idx} 
                target="_blank"
                className="transition-all hover:-translate-y-0.5 hover:opacity-80"
              >
                <Badge 
                  variant="outline"
                  className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}