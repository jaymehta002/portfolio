'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRightIcon, ExternalLinkIcon, BriefcaseIcon, Calendar, MapPinIcon } from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardContent } from '~/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Badge } from '~/components/ui/badge'

interface ResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  badges?: readonly string[]
  period: string
  description?: string
  location?: string
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
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <Card 
      className="w-full border transition-colors duration-200 hover:border-primary"
      onClick={handleClick}
    >
      <div className="flex p-4">
        <Avatar className="size-12 border border-primary bg-background">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain p-2" />
          <AvatarFallback>
            <BriefcaseIcon className="size-6 text-primary" />
          </AvatarFallback>
        </Avatar>

        <div className="ml-4 flex-1">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold tracking-tight">{title}</h3>
                {href && (
                  <Link href={href} className="text-muted-foreground hover:text-primary">
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
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            )}

            {location && (
              <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                <MapPinIcon className="size-4" />
                <span>{location}</span>
              </div>
            )}
          </CardHeader>

          {badges.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          )}

          {description && (
            <CardContent className="relative p-0">
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-3 text-sm text-muted-foreground">
                  {description}
                </div>
              </motion.div>

              {/* <ChevronRightIcon 
                className={`absolute right-0 top-0 size-4 text-muted-foreground transition-transform duration-200 ${
                  isExpanded ? 'rotate-90' : ''
                }`}
              /> */}
            </CardContent>
          )}
        </div>
      </div>
    </Card>
  )
}