"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

type Props = {
  endDate: string;
  className?: string;
};

export default function CountDown({ endDate, className }: Props) {
  const [time, setTime] = useState("");
  const countDownDate = new Date(endDate).getTime();

  // set interval to update the countdown every 1 second
  const x = setInterval(() => {
    const now = new Date().getTime();

    // find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    setTime(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setTime("TIME EXPIRED");
    }
  }, 1000);
  return <div className={cn(className)}>{time}</div>;
}
