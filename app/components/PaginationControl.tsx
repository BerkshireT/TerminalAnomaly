import { useBreakpoint } from "~/hooks/useBreakpoint";
import styles from "./PaginationControl.module.css";

export interface PaginationControlProps {
  currentPage: number;
  pageCount: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export function PaginationControl({ currentPage, pageCount, onNextPage, onPreviousPage }: PaginationControlProps) {
  const breakpoint = useBreakpoint();
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === pageCount;

  const buttonClass = breakpoint.smAndUp ? styles.button : styles.buttonM;
  const disabledClass = breakpoint.smAndUp ? styles.buttonDisabled : styles.buttonDisabledM;

  return (
    <div>
      <button
        className={isPreviousDisabled ? disabledClass : buttonClass}
        onClick={onPreviousPage}
        disabled={isPreviousDisabled}
      >
        &#129152;
      </button>
      <button
        className={isNextDisabled ? disabledClass : buttonClass}
        onClick={onNextPage}
        disabled={isNextDisabled}
      >
        &#129154;
      </button>
    </div>
  );
}
