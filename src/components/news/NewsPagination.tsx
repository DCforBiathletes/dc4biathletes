import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

interface NewsPaginationProps {
  articlesCount: number;
}

const NewsPagination: React.FC<NewsPaginationProps> = ({ articlesCount }) => {
  // Only render pagination if there are 2 or more articles
  if (articlesCount < 2) return null;

  return (
    <div className="mt-12">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="text-white" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive className="text-white">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="text-white" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default NewsPagination;