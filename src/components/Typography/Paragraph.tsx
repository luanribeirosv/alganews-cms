import { ReactNode } from "react"
import styled from "styled-components"

export interface ParagraphProps {
  size?: 'default' | 'small',
  children: ReactNode
}

export default function Paragraph(props: ParagraphProps) {
  return <StyledParagraph size={props.size || "default"}>
    {props.children}
  </StyledParagraph>
}

const StyledParagraph = styled.p<{ size: 'small' | 'default' }>`
  font-size: ${props => props.size === 'default' ? 12 : 10}px;
  line-height: ${props => props.size === 'default' ? 25 : 20}px;
  color: #274060;

`