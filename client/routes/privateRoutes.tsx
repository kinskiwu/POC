import React from 'react';
import type { RouteObject } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PromptInputPage from '@components/prompt-input/PromptInputPage';
import OutputVisualizationPage from '@features/output-visualization-page/OutputVisualizationPage';
import HelpAndFeedback from '@features/help-and-feedback-page/HelpAndFeedbackPage';
import Settings from '@features/settings-page/Settings';
/**
 * Array of RouteObject for protected routes, accessible only after authentication.
 * It uses a ProtectedRoute component to guard access.
 */
const privateRoutes: RouteObject[] = [
  {
    element: <ProtectedRoute />,
    children: [
      { path: 'generate', element: <PromptInputPage /> },
      { path: 'output', element: <OutputVisualizationPage /> },
      { path: 'help', element: <HelpAndFeedback /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
];

export default privateRoutes;
