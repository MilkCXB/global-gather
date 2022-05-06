import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import Circle, { CircleProps } from 'react-circle'

const Wrapper = styled.div<{ width: number | undefined }>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ width }) => (width ? `${width}px` : '188px')};
  width: ${({ width }) => (width ? `${width}px` : '188px')};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
`

const CircleContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  padding: 36px;
`

/**
 * https://github.com/zzarcon/react-circle
 * A progress of the ring
 */

export default function Process({
  progress,
  children,
  showPercentage = false,
  progressColor = '#ecedf0',
  bgColor = 'rgb(76, 154, 255)',
  ...rest
}: CircleProps & {
  children?: JSX.Element[] | JSX.Element
}) {
  const [width, setWidth] = useState<number | undefined>(undefined)

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const instance = wrapperRef.current

    if (!instance) return

    const width = instance.clientWidth

    setWidth(width)
  }, [progress])

  return (
    <>
      <Wrapper width={width}>
        <Circle
          progress={progress}
          showPercentage={showPercentage}
          progressColor={progressColor}
          bgColor={bgColor}
          {...rest}
        />

        <CircleContent ref={wrapperRef}>{children}</CircleContent>
      </Wrapper>
    </>
  )
}
