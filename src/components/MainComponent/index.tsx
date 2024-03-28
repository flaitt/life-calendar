import Calendar from "react-calendar";
import { Inter } from "next/font/google";
import {
  BirthDayInput,
  BirthDayInputWrapper,
  BirthDayWrapper,
  CalendarComponent,
  CalendarWrapper,
  Container,
  Content,
  Title,
  Week,
} from "./styles";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { LuCalendarDays } from "react-icons/lu";
import { CgCloseO } from "react-icons/cg";

const inter = Inter({ subsets: ["latin"] });

export default function MainComponent() {
  const [numberOfWeeks, setNumberOfWeeks] = useState(Date.now());
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const weeks = Array.from({ length: 90 * 12 * 4 }, (_, index) => index + 1);

  const weeksPassed = (startDate: Date): number => {
    const startMs = startDate.getTime();
    const currentMs = new Date().getTime();

    const differenceMs = currentMs - startMs;
    const passedWeeks = Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 7));

    return passedWeeks;
  };

  const handleChangeDate = (event: any): void => {
    console.log(event);
    setDate(event as Date);
  };

  const handleChangeTypeDate = (event: Date): void => {
    try {
      event.toISOString().split("T")[0];
      setShowCalendar(false);
      setDate(event);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("ahoy");
    setNumberOfWeeks(weeksPassed(date));
  }, [date]);

  return (
    <Container>
      <Title>The Life Calendar</Title>
      <BirthDayWrapper>
        <div>Selecione sua data de nascimento:</div>
        <BirthDayInputWrapper>
          <BirthDayInput
            type="date"
            value={date.toISOString().split("T")[0]}
            onChange={(event) =>
              handleChangeTypeDate(new Date(event.target.value))
            }
          />
          {/* <LuCalendarDays
            onClick={() => setShowCalendar(!showCalendar)}
            size={23}
          /> */}
          {/* <CalendarComponent>
            {showCalendar && (
              <CalendarWrapper>
                <CgCloseO
                  onClick={() => setShowCalendar(!showCalendar)}
                  size={23}
                  style={{ float: "right", marginTop: "5px", marginRight: "5px"}}
                />
                <Calendar
                  onChange={(event) => handleChangeDate(event)}
                  value={date}
                />
              </CalendarWrapper>
            )}
          </CalendarComponent> */}
        </BirthDayInputWrapper>
      </BirthDayWrapper>
      <Content>
        {weeks.map((week) => (
          <Week key={week} painted={week < numberOfWeeks} />
        ))}
      </Content>
      ;
    </Container>
  );
}
