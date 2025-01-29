import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const renderPageNumbers = () => {
    const visiblePageNumbers = pageNumbers.filter((number) => {
      if (totalPages <= 7) return true;
      if (number === 1 || number === totalPages) return true;
      if (number >= currentPage - 1 && number <= currentPage + 1) return true;
      return false;
    });

    return visiblePageNumbers.map((number, index, array) => {
      if (index > 0 && number - array[index - 1] > 1) {
        return (
          <React.Fragment key={`ellipsis-${number}`}>
            <span className="px-2 text-slate-400">...</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onPageChange(number)}
              className={`w-9 ${currentPage === number ? "bg-blue-600 text-white" : "bg-slate-700 text-white hover:bg-slate-600"}`}
            >
              {number}
            </Button>
          </React.Fragment>
        );
      }
      return (
        <Button
          key={number}
          variant="outline"
          size="icon"
          onClick={() => onPageChange(number)}
          className={`w-9 ${currentPage === number ? "bg-blue-600 text-white" : "bg-slate-700 text-white hover:bg-slate-600"}`}
        >
          {number}
        </Button>
      );
    });
  };

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="bg-slate-700 text-white hover:bg-slate-600"
      >
        <ChevronLeft className="size-4" />
      </Button>
      {renderPageNumbers()}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="bg-slate-700 text-white hover:bg-slate-600"
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}
