import React from "react"
import { ErrorBoundary } from "./ErrorBoundary"

export const ErrorSuspenseBoundary = ({ fallback, children }: any) => {
  return (
    <ErrorBoundary fallback={fallback}>
      <React.Suspense fallback={<p>...loading</p>}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  )
}