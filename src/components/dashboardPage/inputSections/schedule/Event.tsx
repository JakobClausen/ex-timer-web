import { Radio } from "@chakra-ui/core";
import { RadioGroup, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface EventProps {}

interface ClassInterface {
  startTime: string;
  endTime: string;
  category: string;
}

export const Event: React.FC<EventProps> = ({}) => {
  const [isClass, setIsClass] = useState<ClassInterface | null>({
    startTime: "",
    endTime: "",
    category: "1",
  });

  useEffect(() => {}, [isClass]);

  return (
    <>
      <TextField
        id="start"
        label="Start time"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 600, // 5 min
        }}
      />

      <TextField
        id="end"
        label="End time"
        type="time"
        defaultValue="08:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 600, // 5 min
        }}
      />

      <RadioGroup
        onChange={(e) =>
          setIsClass({
            startTime: "16:00",
            endTime: "17:00",
            category: e.target.value,
          })
        }
      >
        <Radio mt="5px" value="1">
          Crossfit
        </Radio>
        <Radio value="2">Gymnastics</Radio>
      </RadioGroup>
    </>
  );
};
