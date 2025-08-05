import React, { Suspense } from 'react';

// Lazy loaded components for code splitting
export const LazyAbout = React.lazy(() => import('@/pages/About'));
export const LazyAppPage = React.lazy(() => import('@/pages/AppPage'));
export const LazyContact = React.lazy(() => import('@/pages/Contact'));
export const LazyNews = React.lazy(() => import('@/pages/News'));
export const LazyNewsDetail = React.lazy(() => import('@/pages/NewsDetail'));
export const LazyPartners = React.lazy(() => import('@/pages/Partners'));
export const LazyResearch = React.lazy(() => import('@/pages/Research'));
export const LazyWorkshops = React.lazy(() => import('@/pages/Workshops'));
export const LazyPrivacyPolicy = React.lazy(() => import('@/pages/PrivacyPolicy'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Wrapper component for lazy loaded pages
interface LazyPageWrapperProps {
  children: React.ReactNode;
}

export const LazyPageWrapper: React.FC<LazyPageWrapperProps> = ({ children }) => (
  <Suspense fallback={<PageLoader />}>
    {children}
  </Suspense>
);