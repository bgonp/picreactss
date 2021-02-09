import { FC } from 'react'
import Router from 'router/Router'

import { ModalContextProvider } from 'contexts/ModalContext'
import { PuzzleContextProvider } from 'contexts/PuzzleContext'
import { initColors } from 'utils/styles'

import 'styles/index.css'
import ErrorBoundary from './ErrorBoundary'

initColors()

const Main: FC = () => (
  <ErrorBoundary>
    <ModalContextProvider>
      <PuzzleContextProvider>
        <Router />
      </PuzzleContextProvider>
    </ModalContextProvider>
  </ErrorBoundary>
)

export default Main
