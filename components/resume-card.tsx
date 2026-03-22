"use client";

import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  Calendar,
  ExternalLinkIcon,
  MapPinIcon,
  ChevronDownIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  location?: string;
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges = [],
  period,
  description,
  location,
}: ResumeCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Card className="group w-full transition-all duration-200 hover:shadow-md">
      <div
        className={`relative cursor-pointer border-2 rounded-md hover:bg-purple-500/5 ${
          isExpanded ? "border-l-primary" : "border-transparent"
        } transition-all duration-200 hover:border-primary`}
        onClick={handleClick}
      >
        <div className="flex p-6">
          {/* Left column with avatar */}
          <div className="flex flex-col items-center">
            <Avatar className="size-14 border-2 border-primary/10 bg-background shadow-sm">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain p-2"
              />
              <AvatarFallback>
                <BriefcaseIcon className="size-6 text-primary" />
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Main content */}
          <div className="ml-6 flex-1">
            {/* Header section */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {title}
                  </h3>
                  {href && (
                    <Link
                      href={href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLinkIcon className="size-4" />
                    </Link>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="size-4" />
                  <span>{period}</span>
                </div>
              </div>

              {subtitle && (
                <p className="text-sm font-medium text-muted-foreground">
                  {subtitle}
                </p>
              )}

              {location && (
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPinIcon className="size-4" />
                  <span>{location}</span>
                </div>
              )}
            </div>

            {/* Badges */}
            {badges.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Expand indicator */}
          {description && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="rounded-full bg-primary/10 p-1 text-primary transition-colors group-hover:bg-primary/20"
              >
                <ChevronDownIcon className="size-5" />
              </motion.div>
            </div>
          )}
        </div>

        {/* Expandable description */}
        {description && (
          <CardContent className="px-6">
            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pb-4 pt-2">
                <div className="rounded-lg whitespace-pre-wrap bg-muted/50 p-4 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </div>
              </div>
            </motion.div>
          </CardContent>
        )}
      </div>
    </Card>
  );
}
