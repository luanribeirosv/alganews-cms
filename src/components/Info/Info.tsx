import { mdiInformation } from '@mdi/js';
import Icon from '@mdi/react';
import styled from 'styled-components';

export interface InfoProps {
  title: string,
  description: string
}

export default function Infor(props: InfoProps) {
  return <InfoWrapper>
    <InfoInnerContent>
      <InfoIcon>
        <Icon path={mdiInformation} color='#09f' size='48px' />
      </InfoIcon>
      <InfoMessages>
        <InfoTitle>{props.title}</InfoTitle>
        <p>{props.description}</p>
      </InfoMessages>
    </InfoInnerContent>
  </InfoWrapper>
}

const InfoWrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3F8FA;
  width: 373px;
`

const InfoInnerContent = styled.div`
  display: flex;
  gap: 24px;
  color: #274060;
`

const InfoIcon = styled.div``

const InfoMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const InfoTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`