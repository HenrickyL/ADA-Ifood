import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface TimerProps {
  createdAt: Date;
  deadline: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ createdAt, deadline }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [barWidth, setBarWidth] = useState<number>(100); // Inicia com 100% de largura

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      // Calcula a largura da barra baseada no tempo restante
      const totalMillis = deadline.getTime() - createdAt.getTime();
      const remainingMillis = deadline.getTime() - new Date().getTime();
      const remainingPercentage = (remainingMillis / totalMillis) * 100;
      setBarWidth(remainingPercentage);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const difference = deadline.getTime() - new Date().getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  function formatTimeLeft(timeLeft:TimeLeft) {
    const padTwoDigits = (num: number) => num.toString().padStart(2, '0');
  
    if (timeLeft.days >= 365) {
      const years = Math.floor(timeLeft.days / 365);
      return `${years}ano`;
    } else if (timeLeft.days > 0) {
      return `${timeLeft.days}d`;
    } else if (timeLeft.hours > 0) {
      return `${padTwoDigits(timeLeft.hours)}:${padTwoDigits(timeLeft.minutes)}:${padTwoDigits(timeLeft.seconds)}`;
    } else {
      return `${padTwoDigits(timeLeft.minutes)}:${padTwoDigits(timeLeft.seconds)}`;
    }
  }
  

  return (
    <TimerContainer>
      <BarraTopo style={{ width: `${barWidth}%` }} />
      <TimerText>{formatTimeLeft(timeLeft)}</TimerText>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  position: relative;
`;

const BarraTopo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 5px; /* Ajuste a altura da barra conforme necessário */
  background-color: #007bff; /* Cor da barra */
  border-radius: 8px; /* Cantos arredondados apenas na parte superior */
`;

const TimerText = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
`;

export default Timer;
