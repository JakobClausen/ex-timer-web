import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Box, Flex } from "@chakra-ui/core";
import { Radio, RadioGroup } from "@chakra-ui/core";

interface ScheduleInputProps {
  classes: [];
  setClasses: Dispatch<SetStateAction<[]>>;
  id: number;
}

export const ScheduleInput: React.FC<any> = ({
  classes,
  setClasses,
  id,
  day,
}) => {
  const [classValues, setClassValues] = useState({
    start_time: "07:30",
    end_time: "08:30",
    category: 1,
  });

  useEffect(() => {
    // setClasses({ ...classes, [id]: classValues });
    setClasses({ [day]: { ...classes, [id]: classValues } });
  }, [classValues]);

  // console.log(id);

  return (
    <Box>
      <Flex flexDirection="column" w="30%" m="50px">
        <TextField
          id="start"
          label="Start time"
          type="time"
          defaultValue={classValues.start_time}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 600, // 5 min
          }}
          onChange={(e) => {
            const spread = { ...classValues };
            spread.start_time = e.target.value;
            setClassValues(spread);
          }}
        />

        <TextField
          id="end"
          label="End time"
          type="time"
          defaultValue={classValues.end_time}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 600, // 5 min
          }}
          onChange={(e) => {
            const spread = { ...classValues };
            spread.end_time = e.target.value;
            setClassValues(spread);
          }}
        />

        <RadioGroup
          defaultValue="1"
          onChange={(e) => {
            const spread = { ...classValues };
            spread.category = parseInt(e.target.value);
            setClassValues(spread);
          }}
        >
          <Radio value="1">Crossfit</Radio>
          <Radio value="2">Gymnastics</Radio>
        </RadioGroup>
      </Flex>
    </Box>
  );
};
