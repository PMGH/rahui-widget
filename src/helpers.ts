export const padWithZeros = (number: number) => {
  return number < 10 ? String(number).padStart(2, "0") : String(number);
};

export const range = ({
  start,
  end,
  step = 1,
}: {
  start: number;
  end: number;
  step?: number;
}) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const timeOptionsString = ({
  openAt,
  closeAt,
}: {
  openAt: number;
  closeAt: number;
}): string[] => {
  const openingHours = range({
    start: openAt,
    end: closeAt,
  });
  return openingHours.flatMap((hour) => {
    return [0, 15, 30, 45].map((min) => {
      const hourStr = padWithZeros(hour);
      const minStr = padWithZeros(min);
      return `<option value="${hourStr}:${minStr}">${hourStr}:${minStr}</option>`;
    });
  });
};

export const timeOptionsAsHtml = ({
  openAt = 0,
  closeAt = 24,
}: {
  openAt?: number;
  closeAt?: number;
}): HTMLOptionElement[] => {
  const openingHours = range({
    start: openAt,
    end: closeAt,
  });
  return openingHours.flatMap((hour) => {
    return [0, 15, 30, 45].map((min) => {
      const hourStr = padWithZeros(hour);
      const minStr = padWithZeros(min);
      const timeStr = `${hourStr}:${minStr}`;
      const option = document.createElement("option");
      option.value = timeStr;
      option.innerHTML = timeStr;
      return option;
    });
  });
};
