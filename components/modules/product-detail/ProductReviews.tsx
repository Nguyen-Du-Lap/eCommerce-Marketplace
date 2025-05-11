"use client"

import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import Material UI Rating component
import Rating from "@mui/material/Rating"

interface ReviewProps {
  id: string
  author: {
    name: string
    avatar?: string
    initials: string
  }
  rating: number
  comment: string
  reviewBy: string
  postedOn: string
}

const reviews: ReviewProps[] = [
  {
    id: "1",
    author: {
      name: "Theodor Cojocaru",
      avatar: "/placeholder.svg?height=50&width=50",
      initials: "TC",
    },
    rating: 5,
    comment: "redsfsfdw cew",
    reviewBy: "Orion",
    postedOn: "Thu Dec 26 2024",
  },
  {
    id: "2",
    author: {
      name: "sylvaincodes sylvain",
      avatar: "/placeholder.svg?height=50&width=50",
      initials: "SS",
    },
    rating: 5,
    comment: "my personnal gaming PC",
    reviewBy: "Orion",
    postedOn: "Fri Nov 08 2024",
  },
]

export default function ProductReviews() {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  const [currentPage, setCurrentPage] = React.useState(1)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    // Assuming we have more pages
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="sm:mx-8 max-w-3xl">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-medium">Average rate</h2>
          <div className="flex items-center gap-4 mt-2">
            <Rating value={averageRating} readOnly precision={0.5} size="large" />
            <span className="font-medium">({averageRating})</span>
            <span className="text-gray-600">({reviews.length} reviews)</span>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border">
                  <AvatarImage src={review.author.avatar || "/placeholder.svg"} alt={review.author.name} />
                  <AvatarFallback>{review.author.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{review.author.name}</h4>
                  <Rating value={review.rating} readOnly size="small" />
                </div>
              </div>

              <p className="text-gray-800">{review.comment}</p>

              <div className="text-gray-500 text-sm">
                <span>Review by </span>
                <span className="font-medium text-black">{review.reviewBy}</span>
                <span> Posted on </span>
                <span className="text-gray-400">{review.postedOn}</span>
              </div>

              {review.id !== reviews[reviews.length - 1].id && <Separator className="mt-6" />}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-start gap-2 mt-6">
          <Button variant="outline" size="icon" onClick={handlePrevPage} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            {currentPage}
          </Button>
          <Button variant="outline" size="icon" onClick={handleNextPage}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
